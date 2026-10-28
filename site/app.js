(() => {
  'use strict';
  const D = window.VPN_DATA;
  const $ = (s, root = document) => root.querySelector(s);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const state = { selected: null, query: '' };
  const root = { name: 'Коллекция', children: [] };
  const FOLDER = '<svg class="folder-icon" viewBox="0 0 48 40" aria-hidden="true"><path d="M3 8a4 4 0 0 1 4-4h12l5 5h17a4 4 0 0 1 4 4v3H3z" fill="#8a929d"/><path d="M3 13a4 4 0 0 1 4-4h34a4 4 0 0 1 4 4v19a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" fill="#68727f"/><path d="M3 18h42v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" fill="#535d69"/><path d="M5 17h38" stroke="#9ea6b0" stroke-width="1.5" opacity=".55"/></svg>';
  let graphRoot=null,expanded=new Set(['root']),searchExpanded=new Set(),matchedNodes=new Set(),visibleNodes=[],worldSize={w:1000,h:800};
  let panX=50,panY=35,zoom=.75,dragState=null,firstFit=true;
  const ICONS = { file:'TXT',csv:'CSV',zip:'ZIP',md:'MD',url:'WEB',image:'PNG' };

  const href = path => '../' + path;
  const profileText = path => D.profiles[path] || '';
  function itemFolder(name, children, subtitle = '') { return {type:'folder',name,children,subtitle,count:children.length}; }
  function itemFile(name, detail, subtitle = '', ext = 'TXT', basePath = '') { return {type:'file',name,detail,subtitle,ext,basePath}; }
  function itemCSV(name, rows, subtitle, download) { return {type:'csv',name,rows,subtitle,download,ext:'CSV'}; }
  function itemURL(name, url, subtitle = '') { return {type:'url',name,url,subtitle,ext:'WEB'}; }
  function itemLinkList(name, links) { return {type:'links',name,links,subtitle:'Нажмите на ссылку, чтобы открыть источник'}; }
  function itemImage(name, path, service) { return {type:'image',name,path:'../'+service+'/'+path,subtitle:'Изображение · PNG',ext:'PNG'}; }
  function asFields(obj, labels = {}) {
    return Object.entries(obj).filter(([,v]) => v !== '' && v !== null && v !== undefined).map(([k,v]) => ({label:labels[k] || k,value:String(v)}));
  }
  function sourcesFor(row) {
    const h = row.hosting || {};
    const urls = [row['Overview URL'],row['Looking Glass URL'],row['GeoLite URL'],row['RDAP URL'],...(h['Source URLs'] || '').split(';')].filter(Boolean);
    return [...new Set(urls.map(x=>x.trim()).filter(Boolean))];
  }
  function makeLocation(service, row, index) {
    const h=row.hosting||{};
    const rowFields=asFields(row, {'BGP prefix':'BGP-префикс','Origin ASN':'Origin ASN','Origin holder':'Держатель ASN','All origin ASNs':'Все origin ASN','GeoLite country':'GeoLite · страна','Declared country code':'Заявленная страна','Country match':'Совпадение стран','RDAP name':'RDAP · имя сети','RDAP range':'RDAP · диапазон','RDAP country':'RDAP · страна','RDAP entities':'RDAP · организации','Top upstream ASNs':'Ближайшие upstream ASN','RIPE RIS peers':'RIPE RIS peers','RIPE RRCs':'RRCs','Latest BGP':'Последнее обновление','Example AS_PATH':'Пример AS_PATH','Status':'Статус'}).filter(f=>f.value&&!['Service','Location','IP','Overview URL','Looking Glass URL','GeoLite URL','RDAP URL'].includes(f.label));
    const hostFields=asFields(h, {'Provider / brand':'Провайдер / бренд','Products':'Услуги','Public specs':'Публичные характеристики','Public price indication':'Публичная цена','Review summary':'Отзывы'});
    const bgp = itemFile('BGP-маршрут и наблюдения', [{label:'VPN-сервис',value:service.name},{label:'Локация',value:row.Location},{label:'IP-адрес',value:row.IP||'Не указан'},...rowFields,...hostFields], 'IP · ASN · маршрут · хостинг · публичные сведения');
    const sources=sourcesFor(row).map((url,i)=>({name:`Источник ${String(i+1).padStart(2,'0')} · ${new URL(url).hostname}`,url}));
    const paths=row.images||[];
    const overview=paths.find(p=>/-overview\.png$/i.test(p));
    const scheme=paths.find(p=>/-asn-scheme\.png$/i.test(p));
    const contents=[bgp];
    if(overview)contents.push(itemImage('Overview',overview,service.name));
    if(scheme)contents.push(itemImage('ASN-схема',scheme,service.name));
    contents.push(itemLinkList(`Источники · ${sources.length}`,sources));
    return itemFolder(`${String(index+1).padStart(2,'0')} · ${row.Location || 'Локация без названия'}`,contents,`${row.IP || 'IP не указан'}${row['Origin ASN'] ? ' · '+row['Origin ASN'] : ''}`);
  }
  function providerItems(service, rows) {
    const map = new Map();
    rows.forEach(r=>{const h=r.hosting||{},path=h['Provider profile']||'',key=path||h['Provider / brand']||r['Origin holder']||'Не установлен';if(!map.has(key))map.set(key,{name:h['Provider / brand']||r['Origin holder']||'Провайдер не установлен',path,rows:[]});map.get(key).rows.push(r)});
    return [...map.values()].sort((a,b)=>a.name.localeCompare(b.name,'ru')).map(p=>{
      const locations=p.rows.map(r=>`${r.Location}${r.IP?' · '+r.IP:''} · ${r['Origin ASN']||'ASN не указан'}`);
      const profile=p.path?profileText(p.path):'';
      const children=[itemFile('Профиль и публичные сведения',profile || [{label:'Статус',value:'Точный retail-провайдер не подтверждён; указан держатель ASN.'}],`Локаций в наборе: ${p.rows.length}`,'MD',p.path)];
      if(p.rows.length) children.push(itemFile('Связанные VPN-локации',locations.join('\n')));
      if(profile){const src=[...profile.matchAll(/https?:\/\/[^\s)]+/g)].map(x=>x[0].replace(/[.,;]+$/,'')).map((url,i)=>({name:`Источник ${String(i+1).padStart(2,'0')} · ${new URL(url).hostname}`,url}));if(src.length)children.push(itemLinkList(`Источники · ${src.length}`,src));}
      return itemFolder(p.name,children,`${p.rows.length} ${p.rows.length===1?'локация':'локации'} · ${p.rows.map(r=>r.Location).join(', ')}`);
    });
  }
  function makeServiceFolder(service) {
    const locations=service.locations.map((r,i)=>makeLocation(service,r,i));
    const archive=itemURL('Архив всего сервиса',service.files.zip,'ZIP · все отчёты и материалы');
    const fullReport=itemFile('Полный ASN-отчёт',service.report,'BGP · GeoLite · RDAP · наблюдаемые пути','MD',`${service.name}/${service.name}-report.md`);
    const children=[
      itemFolder(`Локации · ${locations.length}`,locations,'Страны и IP-адреса сервиса'),
      itemFolder(`Провайдеры · ${providerItems(service,service.locations).length}`,providerItems(service,service.locations),'Уникальные провайдеры и ASN-holder этого сервиса'),
      fullReport,
      archive
    ];
    const serviceFolder=itemFolder(service.name,children,`${service.locations.length} локаций · ${service.locations.filter(r=>r.IP).length} IP`);
    serviceFolder.kind='service-root';
    serviceFolder.count=service.locations.length;
    return serviceFolder;
  }
  function makeHostingReviewFolder(){const r=D.hostingReview;if(!r)return null;const entries=[itemFile('Лучшие хостинги · рекомендации',r.report,'Сравнение, выводы и источники','MD','hosting-review/Итоговый разбор и рекомендации.md'),itemFile('Полный каталог · 55 профилей',r.catalog,'Все хостинги, ASN-holder и связанные локации','MD','hosting-review/Полный каталог хостингов.md')];return itemFolder('Сравнение хостингов',entries,'Рейтинг и каталог всех провайдеров');}
  function buildTree(){
    root.children=[...D.services.map(makeServiceFolder),...(D.hostingReview?[makeHostingReviewFolder()]:[])];
    const top=itemFolder('VPN-сервисы и хостинги',root.children,`${D.services.length} VPN-сервисов · ${D.hostingReview?.rows?.length||0} профилей хостинга`);top.count=D.services.length;
    const wrap=(item,parent,id,depth)=>({item,parent,id,depth,children:(item.children||[]).map((child,i)=>wrap(child,null,`${id}.${i}`,depth+1))});
    graphRoot=wrap(top,null,'root',0);
    const repairParents=node=>node.children.forEach(child=>{child.parent=node;repairParents(child)});repairParents(graphRoot);
  }
  function ownText(node){const i=node.item;const detail=Array.isArray(i.detail)?i.detail.map(x=>`${x.label||''} ${x.value||''}`).join(' '):(typeof i.detail==='string'?i.detail:'');return `${i.name||''} ${i.subtitle||''} ${i.url||''} ${detail}`.toLocaleLowerCase('ru');}
  function prepareSearch(){searchExpanded=new Set();matchedNodes=new Set();if(!state.query)return;const q=state.query.toLocaleLowerCase('ru');function visit(node){const own=ownText(node).includes(q);if(own)matchedNodes.add(node.id);let childHit=false;for(const c of node.children)if(visit(c))childHit=true;if(childHit&&node.item.type==='folder')searchExpanded.add(node.id);return own||childHit;}visit(graphRoot);searchExpanded.add('root');}
  function isExpanded(node){return expanded.has(node.id)||searchExpanded.has(node.id);}
  const NODE_W=240,NODE_H=48,COL_GAP=105,ROW_GAP=58,LEFT=62,TOP=32;
  function measure(node){node.span=isExpanded(node)&&node.children.length?node.children.reduce((sum,c)=>sum+measure(c),0):1;return node.span;}
  function layout(){visibleNodes=[];measure(graphRoot);function place(node,depth,start){node.x=LEFT+depth*(NODE_W+COL_GAP);node.y=TOP+(start+node.span/2)*ROW_GAP;visibleNodes.push(node);if(isExpanded(node)&&node.children.length){let cursor=start;for(const child of node.children){place(child,depth+1,cursor);cursor+=child.span;}}}place(graphRoot,0,0);const maxX=Math.max(...visibleNodes.map(n=>n.x+NODE_W))+80,maxY=Math.max(...visibleNodes.map(n=>n.y+NODE_H/2))+TOP;worldSize={w:maxX,h:maxY};}
  function nodeMarkup(node){const i=node.item,folder=i.type==='folder',open=isExpanded(node),count=folder?(i.kind==='service-root'?`${i.count} локаций`:i.count??node.children.length):'',fsize=10*zoom;let icon=folder?FOLDER:`<span class="document-icon" style="width:${28*zoom}px;height:${32*zoom}px;font-size:${7*zoom}px">${esc(ICONS[i.ext?.toLowerCase()]||i.ext||'TXT')}</span>`;if(folder)icon=icon.replace('class="folder-icon"',`class="folder-icon" style="width:${32*zoom}px;height:${28*zoom}px"`);return `<button class="canvas-node ${folder?'is-folder':'is-file'} ${open?'is-open':''} ${state.selected===node.id?'selected':''} ${matchedNodes.has(node.id)?'matched':''}" data-node="${esc(node.id)}" style="left:${node.x*zoom}px;top:${(node.y-NODE_H/2)*zoom}px;width:${NODE_W*zoom}px;height:${NODE_H*zoom}px;padding:0 ${8*zoom}px;gap:${9*zoom}px" title="${folder?(open?'Двойной щелчок — свернуть':'Двойной щелчок — раскрыть папку'):'Двойной щелчок — открыть файл'}"><span class="node-icon-wrap" style="width:${33*zoom}px;height:${30*zoom}px">${icon}</span><span class="node-copy"><span class="node-name" style="font-size:${fsize}px;line-height:${13*zoom}px;max-height:${32*zoom}px">${esc(i.name)}</span></span>${folder?`<span class="node-count" style="font-size:${9*zoom}px">${esc(count)}</span>`:''}</button>`;}
  function applyTransform(){const svg=$('#connections'),nodes=$('#canvasNodes');nodes.style.transform=`translate(${panX}px,${panY}px)`;svg.style.left=`${panX}px`;svg.style.top=`${panY}px`;svg.style.width=`${worldSize.w*zoom}px`;svg.style.height=`${worldSize.h*zoom}px`;svg.setAttribute('width',worldSize.w*zoom);svg.setAttribute('height',worldSize.h*zoom);svg.setAttribute('viewBox',`0 0 ${worldSize.w} ${worldSize.h}`);}
  function computeFit(){const v=$('#canvasViewport'),pad=70;zoom=Math.min(1.05,(v.clientWidth-pad*2)/worldSize.w,(v.clientHeight-pad*2)/worldSize.h);zoom=Math.max(.2,zoom);panX=(v.clientWidth-worldSize.w*zoom)/2;panY=(v.clientHeight-worldSize.h*zoom)/2;}
  function fitCanvas(){firstFit=false;prepareSearch();layout();computeFit();renderGraph();}
  function focusNode(node){if(!node)return;const v=$('#canvasViewport');panX=v.clientWidth/2-(node.x+NODE_W/2)*zoom;panY=v.clientHeight/2-node.y*zoom;applyTransform();}
  function renderGraph(){prepareSearch();layout();if(firstFit){firstFit=false;computeFit();}const svg=$('#connections');const paths=[];for(const node of visibleNodes){if(!isExpanded(node))continue;for(const child of node.children){const sx=node.x+NODE_W-5,sy=node.y,ex=child.x+5,ey=child.y,mid=(sx+ex)/2;paths.push(`<path class="edge ${matchedNodes.has(child.id)?'edge-match':''}" d="M${sx},${sy} C${mid},${sy} ${mid},${ey} ${ex},${ey}" marker-end="url(#edgeArrow)"/>`);}}svg.innerHTML=`<defs><marker id="edgeArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#697481"/></marker></defs>${paths.join('')}`;$('#canvasNodes').innerHTML=visibleNodes.map(nodeMarkup).join('');visibleNodes.filter(n=>n.item.type==='image').forEach(n=>{const el=$(`#canvasNodes [data-node="${n.id}"]`),wrap=el?.querySelector('.node-icon-wrap');if(wrap){wrap.classList.add('image-wrap');wrap.style.width=`${58*zoom}px`;wrap.style.height=`${40*zoom}px`;wrap.innerHTML=`<img class="node-thumbnail" src="${esc(n.item.path)}" alt="${esc(n.item.name)}">`;}});visibleNodes.filter(n=>n.item.type==='links').forEach(n=>{const el=$(`#canvasNodes [data-node="${n.id}"]`),wrap=el?.querySelector('.node-icon-wrap');if(wrap)wrap.innerHTML='<span class="link-node-mark">↗</span>';});const byId=new Map(visibleNodes.map(n=>[n.id,n]));$('#canvasNodes').querySelectorAll('[data-node]').forEach(el=>{const node=byId.get(el.dataset.node);el.onclick=()=>{state.selected=node.id;$('#canvasNodes').querySelectorAll('.selected').forEach(x=>x.classList.remove('selected'));el.classList.add('selected');};el.ondblclick=()=>openNode(node);el.onkeydown=e=>{if(e.key==='Enter')openNode(node);};});$('#canvasWorld').style.width=`${worldSize.w*zoom}px`;$('#canvasWorld').style.height=`${worldSize.h*zoom}px`;applyTransform();}
  function render(){renderGraph();}
  function openNode(node){if(!node)return;const item=node.item;if(item.type==='folder'&&node.children.length){if(node.id==='root')return;if(expanded.has(node.id))expanded.delete(node.id);else expanded.add(node.id);state.selected=node.id;renderGraph();return;}if(item.type==='url'){window.open(item.url,'_blank','noopener,noreferrer');return;}if(item.type==='image'){showImage(item);return;}if(item.type==='links'){showLinks(item);return;}showFile(item);}
  function showFile(item){let body='';if(item.type==='csv')body=csvMarkup(item.rows||[]);else if(typeof item.detail==='string')body=`<div class="markdown-body">${markdownContent(item.detail,item.basePath)}</div>`;else if(Array.isArray(item.detail))body=fieldsMarkup(item.detail);else body=`<div class="callout">Материал из набора исследования.</div>`;const download=item.download?`<div class="source-links"><a class="source-link" href="${esc(item.download)}" download>Скачать исходный CSV ↓</a></div>`:'';openModal(`<h2 class="modal-title">${esc(item.name)}</h2>${item.subtitle?`<div class="detail-box"><h4>${esc(item.subtitle)}</h4></div>`:''}${download}${body}`);}
  function showLinks(item){openModal(`<h2 class="modal-title">${esc(item.name)}</h2><div class="links-list">${(item.links||[]).map((x,i)=>`<a class="source-row" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer"><span>${esc(x.name||`Источник ${i+1}`)}</span><small>${esc(x.url)}</small><b>↗</b></a>`).join('')}</div>`);}
  function resolveLocalPath(basePath,hrefValue){let raw=hrefValue.split(/[?#]/)[0].replace(/\\/g,'/');try{raw=decodeURIComponent(raw);}catch{}const parts=raw.startsWith('/')?[]:String(basePath||'').split('/').slice(0,-1);for(const part of raw.split('/')){if(!part||part==='.')continue;if(part==='..')parts.pop();else parts.push(part);}return parts.join('/');}
  function markdownContent(text,basePath){return markdown(text).replace(/<a href="([^"]+)" target="_blank" rel="noreferrer">([\s\S]*?)<\/a>/g,(full,url,label)=>{if(/^(?:https?:|mailto:)/i.test(url))return full;const local=resolveLocalPath(basePath,url);return `<a href="#" data-local-doc="${esc(local)}">${label}</a>`;});}
  function showLocalDocument(path){if(!path)return;const normalized=path.replace(/^\.\//,'');if(/\.png$/i.test(normalized)){showImage({name:normalized.split('/').pop(),path:'../'+normalized});return;}if(D.hostingReview&&normalized==='hosting-review/Итоговый разбор и рекомендации.md'){showFile(itemFile('Лучшие хостинги · рекомендации',D.hostingReview.report,'Markdown','MD',normalized));return;}if(D.hostingReview&&normalized==='hosting-review/Полный каталог хостингов.md'){showFile(itemFile('Полный каталог хостингов',D.hostingReview.catalog,'Markdown','MD',normalized));return;}const profile=D.profiles[normalized];if(profile){showFile(itemFile(normalized.split('/').pop(),profile,'Профиль провайдера · Markdown','MD',normalized));return;}for(const s of D.services){if(normalized===`${s.name}/Список хостингов.md`){showFile(itemFile('Список хостингов',s.hostingList,'Markdown','MD',normalized));return;}if(normalized===`${s.name}/${s.name}-report.md`){showFile(itemFile('Полный ASN-отчёт',s.report,'Markdown','MD',normalized));return;}if(normalized===`${s.name}/hosting-research.md`){showFile(itemFile('Исследование хостинга по локациям',s.hostingReport,'Markdown','MD',normalized));return;}if(normalized===`${s.name}/${s.name}-summary.csv`){showFile(itemCSV('ASN и IP · CSV',s.summaryRows,'',s.files.summary));return;}if(normalized===`${s.name}/hosting-research.csv`){showFile(itemCSV('Хостинги и локации · CSV',s.hostingRows,'',s.files.hostingCsv));return;}}showFile(itemFile(normalized.split('/').pop()||'Материал',`Файл «${normalized}» не найден в наборе сайта.`));}
  function csvCell(value){const raw=String(value??'');const parts=raw.split(/(https?:\/\/[^\s;]+|(?:hosting-research\/providers\/|[A-Za-z]+VPN\/)[^\s;]+\.(?:md|png))/gi);return parts.map(part=>{if(/^https?:\/\//i.test(part))return `<a href="${esc(part)}" target="_blank" rel="noopener noreferrer">${esc(part)}</a>`;if(/\.md$/i.test(part)||/\.png$/i.test(part))return `<a href="#" data-local-doc="${esc(part)}">${esc(part)}</a>`;return esc(part);}).join('');}
  function csvMarkup(rows){if(!rows.length)return '<div class="callout">В этом CSV нет строк.</div>';const columns=[...new Set(rows.flatMap(r=>Object.keys(r)))];const values=v=>v===null||v===undefined?'':String(v);return `<div class="csv-meta">${rows.length} строк · ${columns.length} столбцов</div><div class="csv-table-wrap"><table class="csv-table"><thead><tr>${columns.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${columns.map(c=>`<td>${csvCell(values(r[c]))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;}
  function fieldsMarkup(fields){return `<div class="detail-box"><div class="field-grid">${fields.map(f=>`<div class="detail-field ${String(f.value).length>72?'wide':''}"><label>${esc(f.label)}</label><div>${esc(f.value)}</div></div>`).join('')}</div></div>`;}
  function showImage(item){openModal(`<h2 class="modal-title">${esc(item.name)}</h2><img class="large-image" src="${esc(item.path)}" alt="${esc(item.name)}"><div class="source-links"><a class="source-link" href="${esc(item.path)}" target="_blank">Открыть PNG в отдельной вкладке ↗</a></div>`);}
  function openModal(html){const content=$('#modalContent');content.innerHTML=html;content.onclick=e=>{const a=e.target.closest('[data-local-doc]');if(!a)return;e.preventDefault();showLocalDocument(a.dataset.localDoc);};$('#modal').classList.add('open');$('#modal').setAttribute('aria-hidden','false');}
  function closeModal(){$('#modal').classList.remove('open');$('#modal').setAttribute('aria-hidden','true');}
  function markdown(text){const lines=esc(text).split(String.fromCharCode(10));let out='',list=false,table=false;const inline=s=>s.replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g,(m,t,u)=>`<a href="${u}" target="_blank" rel="noreferrer">${t}</a>`);for(const l of lines){if(/^\|/.test(l)){if(list){out+='</ul>';list=false}const c=l.split('|').slice(1,-1);if(/^[\s|:-]+$/.test(l))continue;if(!table){out+='<table><tbody>';table=true}const header=out.endsWith('<tbody>');out+='<tr>'+c.map(v=>`<${header?'th':'td'}>${inline(v.trim())}</${header?'th':'td'}>`).join('')+'</tr>';continue;}if(table){out+='</tbody></table>';table=false;}if(/^### /.test(l))out+=`<h3>${inline(l.slice(4))}</h3>`;else if(/^## /.test(l))out+=`<h2>${inline(l.slice(3))}</h2>`;else if(/^# /.test(l))out+=`<h1>${inline(l.slice(2))}</h1>`;else if(/^\s*[-*] /.test(l)){if(!list){out+='<ul>';list=true}out+=`<li>${inline(l.replace(/^\s*[-*] /,''))}</li>`;}else if(!l.trim()){if(list){out+='</ul>';list=false}}else out+=`<p>${inline(l)}</p>`;}if(list)out+='</ul>';if(table)out+='</tbody></table>';return out;}
  function toast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800);}
  function goBack(){if($('#modal').classList.contains('open')){closeModal();return;}let node=visibleNodes.find(n=>n.id===state.selected);if(node&&expanded.has(node.id)&&node.id!=='root')expanded.delete(node.id);else{while(expanded.size>1){const id=[...expanded].filter(x=>x!=='root').pop();if(!id)break;expanded.delete(id);}}state.selected=null;renderGraph();}

  buildTree();
  $('#search').addEventListener('input',e=>{state.query=e.target.value.trim();$('#clearSearch').style.display=state.query?'block':'none';state.selected=null;renderGraph();});
  $('#clearSearch').onclick=()=>{$('#search').value='';state.query='';$('#clearSearch').style.display='none';state.selected=null;renderGraph();$('#search').focus();};
  $('#modalClose').onclick=closeModal;$('#modalBackdrop').onclick=closeModal;
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#search').focus();}if(e.key==='Escape')goBack();if(e.key==='Backspace'&&document.activeElement!==$('#search')){e.preventDefault();goBack();}if(e.key==='0'&&document.activeElement!==$('#search'))fitCanvas();if(e.key==='+'||e.key==='=')zoomAt(innerWidth/2,innerHeight/2,1.12);if(e.key==='-')zoomAt(innerWidth/2,innerHeight/2,1/1.12);});
  function zoomAt(clientX,clientY,factor){const rect=$('#canvasViewport').getBoundingClientRect(),next=Math.max(.18,Math.min(1.8,zoom*factor)),wx=(clientX-rect.left-panX)/zoom,wy=(clientY-rect.top-panY)/zoom;panX=clientX-rect.left-wx*next;panY=clientY-rect.top-wy*next;zoom=next;renderGraph();}
  const viewport=$('#canvasViewport');
  viewport.addEventListener('pointerdown',e=>{if(e.button!==0||e.target.closest('.canvas-node'))return;dragState={x:e.clientX,y:e.clientY,panX,panY};viewport.classList.add('dragging');viewport.setPointerCapture(e.pointerId);});
  viewport.addEventListener('pointermove',e=>{if(!dragState)return;panX=dragState.panX+e.clientX-dragState.x;panY=dragState.panY+e.clientY-dragState.y;applyTransform();});
  viewport.addEventListener('pointerup',()=>{dragState=null;viewport.classList.remove('dragging');});viewport.addEventListener('pointercancel',()=>{dragState=null;viewport.classList.remove('dragging');});
  viewport.addEventListener('wheel',e=>{e.preventDefault();if(e.ctrlKey||e.metaKey)zoomAt(e.clientX,e.clientY,e.deltaY<0?1.08:1/1.08);else{panX-=e.deltaX;panY-=e.deltaY;applyTransform();}},{passive:false});
  window.addEventListener('resize',()=>{if(firstFit)fitCanvas();});
  renderGraph();

  // Fixed full-screen particle network; animation is independent of pointer input.
  const canvas=$('#particles'),ctx=canvas.getContext('2d',{alpha:true});let w=0,h=0,dpr=1,points=[],raf=0,t0=performance.now(),last=0,visible=true;
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function seedParticles(){dpr=Math.min(window.devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=Math.max(1,Math.round(w*dpr));canvas.height=Math.max(1,Math.round(h*dpr));canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);points=Array.from({length:700},()=>({x:Math.random()*w,y:Math.random()*h,z:.08+Math.random()*.92,vx:(Math.random()-.5)*.13,vy:(Math.random()-.5)*.13,phase:Math.random()*Math.PI*2,rate:1.5+Math.random()*3.5,size:.45+Math.random()*1.65,alpha:.18+Math.random()*.42}));draw(performance.now());wake();}
  function draw(now){if(!ctx)return;const dt=last?Math.min(.04,(now-last)/1000):1/60;last=now;const time=(now-t0)/1000;const reveal=reduceMotion?1:Math.min(1,time/1.8);ctx.clearRect(0,0,w,h);
    const cell=110,grid=new Map();for(let i=0;i<points.length;i++){const p=points[i];if(!reduceMotion){p.x+=p.vx;p.y+=p.vy;if(p.x< -8)p.x=w+8;if(p.x>w+8)p.x=-8;if(p.y< -8)p.y=h+8;if(p.y>h+8)p.y=-8;}const key=`${Math.floor(p.x/cell)}:${Math.floor(p.y/cell)}`;if(!grid.has(key))grid.set(key,[]);grid.get(key).push(i);}
    const lines=[[],[],[],[]];let lineCount=0;for(let i=0;i<points.length&&lineCount<9000;i++){const p=points[i],cx=Math.floor(p.x/cell),cy=Math.floor(p.y/cell);for(let gx=cx-1;gx<=cx+1&&lineCount<9000;gx++)for(let gy=cy-1;gy<=cy+1&&lineCount<9000;gy++){const near=grid.get(`${gx}:${gy}`)||[];for(const j of near){if(j<=i)continue;const q=points[j],dx=p.x-q.x,dy=p.y-q.y,d2=dx*dx+dy*dy;if(d2>=cell*cell)continue;const d=Math.sqrt(d2),strength=(1-d/cell)*Math.min(p.alpha,q.alpha),bin=Math.min(3,Math.floor(strength*9));lines[bin].push(p.x,p.y,q.x,q.y);lineCount++;}}}
    ctx.lineWidth=.65;for(let b=0;b<lines.length;b++){const a=lines[b];if(!a.length)continue;ctx.beginPath();for(let i=0;i<a.length;i+=4){ctx.moveTo(a[i],a[i+1]);ctx.lineTo(a[i+2],a[i+3]);}ctx.strokeStyle=`rgba(208,235,246,${.035+b*.027})`;ctx.stroke();}
    for(const p of points){const twinkle=1-.2*(.5+.5*Math.sin(time*p.rate+p.phase)),depth=.55+p.z*.85,r=p.size*depth,alpha=p.alpha*twinkle*reveal;ctx.globalAlpha=alpha;ctx.shadowColor='rgba(225,246,255,.85)';ctx.shadowBlur=5+4*p.z;ctx.fillStyle='#effaff';ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill();if(r>1.45){ctx.globalAlpha=alpha*.42;ctx.shadowBlur=0;ctx.strokeStyle='#d9f5ff';ctx.lineWidth=.55;ctx.beginPath();ctx.moveTo(p.x-r*2.1,p.y);ctx.lineTo(p.x+r*2.1,p.y);ctx.moveTo(p.x,p.y-r*2.1);ctx.lineTo(p.x,p.y+r*2.1);ctx.stroke();}}
    ctx.globalAlpha=1;ctx.shadowBlur=0;if(!reduceMotion&&visible)raf=requestAnimationFrame(draw);else raf=0;
  }
  function wake(){if(!reduceMotion&&visible&&!document.hidden&&!raf)raf=requestAnimationFrame(draw);}
  window.addEventListener('resize',seedParticles);document.addEventListener('visibilitychange',()=>{visible=!document.hidden;if(visible){last=0;if(reduceMotion)draw(performance.now());else wake();}else{cancelAnimationFrame(raf);raf=0;}});seedParticles();
})();

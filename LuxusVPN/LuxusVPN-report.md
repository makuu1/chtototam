# LuxusVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 5  **IP:** 5

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|

Повторяющиеся origin ASN: AS209693 (OC-NETWORK OC NETWORKS LIMITED; 2 IP: Нидерланды, Польша)

| Германия | 217.60.183.50 | AE | 217.60.183.0/24 | AS197574 EXPRESSHOST ExpressHost Ltd | EXPRESSHOST / DE | AS44486 SYNLINQ Oliver Horscht trading as "SYNLINQ" (264 distinct paths) | [ASN](screenshots/01-Германия-overview.png) · [BGP](screenshots/01-Германия-bgp-paths.png) · [GeoLite](screenshots/01-Германия-geolocation.png) · [RDAP](screenshots/01-Германия-rdap.png) |

### Германия — `217.60.183.50`

- **BGP:** `217.60.183.0/24`; origin **AS197574** — EXPRESSHOST ExpressHost Ltd; origins seen: AS197574.
- **GeoLite:** `AE`; заявленная локация в TXT `Германия` (DE). Страна не совпадает; проверить внимательно.
- **RDAP:** `EXPRESSHOST`; диапазон `217.60.183.0–217.60.183.255`; страна `DE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 325 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** ExpressHost NOC Team; EXPRESSHOST-NOC-MNT; GOLD-MNT; lir-ae-goldip-1-MNT; ExpressHost Ltd; Abuse contact role object.
- **Ближайшие ASN:** AS44486 SYNLINQ Oliver Horscht trading as "SYNLINQ" (264 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 44486 197574`.
- **Схема ASN:** [PNG](asn-schemes/01-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/217.60.183.50) · [Looking Glass](https://stat.ripe.net/lg/217.60.183.50) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=217.60.183.50&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/217.60.183.50)
- **Скриншоты:** [ASN](screenshots/01-Германия-overview.png) · [BGP](screenshots/01-Германия-bgp-paths.png) · [GeoLite](screenshots/01-Германия-geolocation.png) · [RDAP](screenshots/01-Германия-rdap.png)

| Нидерланды | 95.85.226.222 | NL | 95.85.226.0/24 | AS209693 OC-NETWORK OC NETWORKS LIMITED | NL-CENTHOST / NL | AS49581 TUBE-HOSTING Ferdinand Zink trading as Tube-Hosting (264 distinct paths) | [ASN](screenshots/02-Нидерланды-overview.png) · [BGP](screenshots/02-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/02-Нидерланды-geolocation.png) · [RDAP](screenshots/02-Нидерланды-rdap.png) |

### Нидерланды — `95.85.226.222`

- **BGP:** `95.85.226.0/24`; origin **AS209693** — OC-NETWORK OC NETWORKS LIMITED; origins seen: AS209693.
- **GeoLite:** `NL`; заявленная локация в TXT `Нидерланды` (NL). Страна совпала.
- **RDAP:** `NL-CENTHOST`; диапазон `95.85.226.0–95.85.226.255`; страна `NL`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 355 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** CENTHOST-MNT; OC NETWOKS LIMITED; 1Cent Host; Abuse contact role object.
- **Ближайшие ASN:** AS49581 TUBE-HOSTING Ferdinand Zink trading as Tube-Hosting (264 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 6204 44592 49581 209693`.
- **Схема ASN:** [PNG](asn-schemes/02-Нидерланды-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/95.85.226.222) · [Looking Glass](https://stat.ripe.net/lg/95.85.226.222) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=95.85.226.222&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/95.85.226.222)
- **Скриншоты:** [ASN](screenshots/02-Нидерланды-overview.png) · [BGP](screenshots/02-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/02-Нидерланды-geolocation.png) · [RDAP](screenshots/02-Нидерланды-rdap.png)

| Польша | 213.21.232.97 | PL | 213.21.232.0/24 | AS209693 OC-NETWORK OC NETWORKS LIMITED | CENTHOST-PL / PL | AS207208 Mevspace-projects MEVSPACE sp. z o.o. (275 distinct paths) | [ASN](screenshots/05-Польша-overview.png) · [BGP](screenshots/05-Польша-bgp-paths.png) · [GeoLite](screenshots/05-Польша-geolocation.png) · [RDAP](screenshots/05-Польша-rdap.png) |

### Польша — `213.21.232.97`

- **BGP:** `213.21.232.0/24`; origin **AS209693** — OC-NETWORK OC NETWORKS LIMITED; origins seen: AS209693.
- **GeoLite:** `PL`; заявленная локация в TXT `Польша` (PL). Страна совпала.
- **RDAP:** `CENTHOST-PL`; диапазон `213.21.232.0–213.21.232.255`; страна `PL`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 374 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** CENTHOST-MNT; LV-VERNET-HM-MNT; OC NETWOKS LIMITED; 1Cent Host; Abuse contact role object.
- **Ближайшие ASN:** AS207208 Mevspace-projects MEVSPACE sp. z o.o. (275 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 201814 207208 209693`.
- **Схема ASN:** [PNG](asn-schemes/05-Польша-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/213.21.232.97) · [Looking Glass](https://stat.ripe.net/lg/213.21.232.97) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=213.21.232.97&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/213.21.232.97)
- **Скриншоты:** [ASN](screenshots/05-Польша-overview.png) · [BGP](screenshots/05-Польша-bgp-paths.png) · [GeoLite](screenshots/05-Польша-geolocation.png) · [RDAP](screenshots/05-Польша-rdap.png)

| Эстония | 79.98.37.22 | EE | 79.98.37.0/24 | AS218914 DATAGIONET-AS Datagio Systems Ltd. | net-Datagio-Systems-Ltd / EE | AS214790 BRAINOZA Brainoza OU (250 distinct paths) | [ASN](screenshots/06-Эстония-overview.png) · [BGP](screenshots/06-Эстония-bgp-paths.png) · [GeoLite](screenshots/06-Эстония-geolocation.png) · [RDAP](screenshots/06-Эстония-rdap.png) |

### Эстония — `79.98.37.22`

- **BGP:** `79.98.37.0/24`; origin **AS218914** — DATAGIONET-AS Datagio Systems Ltd.; origins seen: AS218914.
- **GeoLite:** `EE`; заявленная локация в TXT `Эстония` (EE). Страна совпала.
- **RDAP:** `net-Datagio-Systems-Ltd`; диапазон `79.98.37.0–79.98.37.255`; страна `EE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 324 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** IPBNB Abuse Contact; ipbnb-mnt; Datagio Systems Ltd..
- **Ближайшие ASN:** AS214790 BRAINOZA Brainoza OU (250 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 214790 218914`.
- **Схема ASN:** [PNG](asn-schemes/06-Эстония-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/79.98.37.22) · [Looking Glass](https://stat.ripe.net/lg/79.98.37.22) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=79.98.37.22&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/79.98.37.22)
- **Скриншоты:** [ASN](screenshots/06-Эстония-overview.png) · [BGP](screenshots/06-Эстония-bgp-paths.png) · [GeoLite](screenshots/06-Эстония-geolocation.png) · [RDAP](screenshots/06-Эстония-rdap.png)

| США | 5.181.3.71 | US | 5.181.3.0/24 | AS215540 GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP | US_SER-NET / US | AS63023 AS-GLOBALTELEHOST - GTHost (254 distinct paths) | [ASN](screenshots/07-США-overview.png) · [BGP](screenshots/07-США-bgp-paths.png) · [GeoLite](screenshots/07-США-geolocation.png) · [RDAP](screenshots/07-США-rdap.png) |

### США — `5.181.3.71`

- **BGP:** `5.181.3.0/24`; origin **AS215540** — GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP; origins seen: AS215540.
- **GeoLite:** `US`; заявленная локация в TXT `США` (US). Страна совпала.
- **RDAP:** `US_SER-NET`; диапазон `5.181.3.0–5.181.3.255`; страна `US`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** Global Connectivity Solutions; IPSMAIN; GLOBAL CONNECTIVITY SOLUTIONS LLP; Abuse contact role object.
- **Ближайшие ASN:** AS63023 AS-GLOBALTELEHOST - GTHost (254 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 63023 215540`.
- **Схема ASN:** [PNG](asn-schemes/07-США-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/5.181.3.71) · [Looking Glass](https://stat.ripe.net/lg/5.181.3.71) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=5.181.3.71&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/5.181.3.71)
- **Скриншоты:** [ASN](screenshots/07-США-overview.png) · [BGP](screenshots/07-США-bgp-paths.png) · [GeoLite](screenshots/07-США-geolocation.png) · [RDAP](screenshots/07-США-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для LuxusVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

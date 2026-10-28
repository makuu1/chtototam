# CatsVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 9  **IP:** 9

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|

Повторяющиеся origin ASN: AS198180 (Gabriele-Sabatino Gabriele Sabatino; 8 IP: Латвия, Швеция, Нидерланды, Германия, Польша, Англия, Франция, США)

| Латвия | 9.247.6.63 | LV | 9.247.6.0/24 | AS198180 Gabriele-Sabatino Gabriele Sabatino | Gabriele_Sabatino / US | AS42532 VEESP-LV-AS SIA VEESP (260 distinct paths) | [ASN](screenshots/01-Латвия-overview.png) · [BGP](screenshots/01-Латвия-bgp-paths.png) · [GeoLite](screenshots/01-Латвия-geolocation.png) · [RDAP](screenshots/01-Латвия-rdap.png) |

### Латвия — `9.247.6.63`

- **BGP:** `9.247.6.0/24`; origin **AS198180** — Gabriele-Sabatino Gabriele Sabatino; origins seen: AS198180.
- **GeoLite:** `LV`; заявленная локация в TXT `Латвия` (LV). Страна совпала.
- **RDAP:** `Gabriele_Sabatino`; диапазон `9.247.6.0–9.247.6.255`; страна `US`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 329 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** interlir-mnt; Maintainer; Abuse contact role object.
- **Ближайшие ASN:** AS42532 VEESP-LV-AS SIA VEESP (260 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 9002 42532 198180`.
- **Схема ASN:** [PNG](asn-schemes/01-Латвия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/9.247.6.63) · [Looking Glass](https://stat.ripe.net/lg/9.247.6.63) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=9.247.6.63&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/9.247.6.63)
- **Скриншоты:** [ASN](screenshots/01-Латвия-overview.png) · [BGP](screenshots/01-Латвия-bgp-paths.png) · [GeoLite](screenshots/01-Латвия-geolocation.png) · [RDAP](screenshots/01-Латвия-rdap.png)

| Швеция | 194.58.222.3 | SE | 194.58.222.0/24 | AS198180 Gabriele-Sabatino Gabriele Sabatino | Gabriele-Sabatino / SE | AS214159 CHERRYSERVERS5-AS UAB "Cherry Servers" (255 distinct paths) | [ASN](screenshots/02-Швеция-overview.png) · [BGP](screenshots/02-Швеция-bgp-paths.png) · [GeoLite](screenshots/02-Швеция-geolocation.png) · [RDAP](screenshots/02-Швеция-rdap.png) |

### Швеция — `194.58.222.3`

- **BGP:** `194.58.222.0/24`; origin **AS198180** — Gabriele-Sabatino Gabriele Sabatino; origins seen: AS198180.
- **GeoLite:** `SE`; заявленная локация в TXT `Швеция` (SE). Страна совпала.
- **RDAP:** `Gabriele-Sabatino`; диапазон `194.58.222.0–194.58.222.255`; страна `SE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** interlir-mnt; Maintainer; Gabriele Sabatino; Abuse contact role object.
- **Ближайшие ASN:** AS214159 CHERRYSERVERS5-AS UAB "Cherry Servers" (255 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 214159 198180`.
- **Схема ASN:** [PNG](asn-schemes/02-Швеция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/194.58.222.3) · [Looking Glass](https://stat.ripe.net/lg/194.58.222.3) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=194.58.222.3&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/194.58.222.3)
- **Скриншоты:** [ASN](screenshots/02-Швеция-overview.png) · [BGP](screenshots/02-Швеция-bgp-paths.png) · [GeoLite](screenshots/02-Швеция-geolocation.png) · [RDAP](screenshots/02-Швеция-rdap.png)

| Нидерланды | 80.86.222.12 | NL | 80.86.222.0/24 | AS198180 Gabriele-Sabatino Gabriele Sabatino | Gabriele-Sabatino / NL | AS49981 WorldStream WorldStream B.V. (264 distinct paths) | [ASN](screenshots/03-Нидерланды-overview.png) · [BGP](screenshots/03-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/03-Нидерланды-geolocation.png) · [RDAP](screenshots/03-Нидерланды-rdap.png) |

### Нидерланды — `80.86.222.12`

- **BGP:** `80.86.222.0/24`; origin **AS198180** — Gabriele-Sabatino Gabriele Sabatino; origins seen: AS198180.
- **GeoLite:** `NL`; заявленная локация в TXT `Нидерланды` (NL). Страна совпала.
- **RDAP:** `Gabriele-Sabatino`; диапазон `80.86.222.0–80.86.222.255`; страна `NL`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 334 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** interlir-mnt; Maintainer; Gabriele Sabatino; Abuse contact role object.
- **Ближайшие ASN:** AS49981 WorldStream WorldStream B.V. (264 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 49981 198180`.
- **Схема ASN:** [PNG](asn-schemes/03-Нидерланды-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/80.86.222.12) · [Looking Glass](https://stat.ripe.net/lg/80.86.222.12) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=80.86.222.12&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/80.86.222.12)
- **Скриншоты:** [ASN](screenshots/03-Нидерланды-overview.png) · [BGP](screenshots/03-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/03-Нидерланды-geolocation.png) · [RDAP](screenshots/03-Нидерланды-rdap.png)

| Германия | 89.125.112.118 | DE | 89.125.112.0/24 | AS198180 Gabriele-Sabatino Gabriele Sabatino | Gabriele-Sabatino / DE | AS16276 OVH OVH SAS (266 distinct paths) | [ASN](screenshots/04-Германия-overview.png) · [BGP](screenshots/04-Германия-bgp-paths.png) · [GeoLite](screenshots/04-Германия-geolocation.png) · [RDAP](screenshots/04-Германия-rdap.png) |

### Германия — `89.125.112.118`

- **BGP:** `89.125.112.0/24`; origin **AS198180** — Gabriele-Sabatino Gabriele Sabatino; origins seen: AS198180.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `Gabriele-Sabatino`; диапазон `89.125.112.0–89.125.112.255`; страна `DE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 351 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** interlir-mnt; Maintainer; Gabriele Sabatino; Abuse contact role object.
- **Ближайшие ASN:** AS16276 OVH OVH SAS (266 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276 198180`.
- **Схема ASN:** [PNG](asn-schemes/04-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/89.125.112.118) · [Looking Glass](https://stat.ripe.net/lg/89.125.112.118) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=89.125.112.118&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/89.125.112.118)
- **Скриншоты:** [ASN](screenshots/04-Германия-overview.png) · [BGP](screenshots/04-Германия-bgp-paths.png) · [GeoLite](screenshots/04-Германия-geolocation.png) · [RDAP](screenshots/04-Германия-rdap.png)

| Польша | 194.87.60.0 | PL | 194.87.60.0/24 | AS198180 Gabriele-Sabatino Gabriele Sabatino | Gabriele-Sabatino / PL | AS16276 OVH OVH SAS (266 distinct paths) | [ASN](screenshots/05-Польша-overview.png) · [BGP](screenshots/05-Польша-bgp-paths.png) · [GeoLite](screenshots/05-Польша-geolocation.png) · [RDAP](screenshots/05-Польша-rdap.png) |

### Польша — `194.87.60.0`

- **BGP:** `194.87.60.0/24`; origin **AS198180** — Gabriele-Sabatino Gabriele Sabatino; origins seen: AS198180.
- **GeoLite:** `PL`; заявленная локация в TXT `Польша` (PL). Страна совпала.
- **RDAP:** `Gabriele-Sabatino`; диапазон `194.87.60.0–194.87.60.255`; страна `PL`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 351 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** interlir-mnt; Maintainer; Gabriele Sabatino; Abuse contact role object.
- **Ближайшие ASN:** AS16276 OVH OVH SAS (266 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276 198180`.
- **Схема ASN:** [PNG](asn-schemes/05-Польша-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/194.87.60.0) · [Looking Glass](https://stat.ripe.net/lg/194.87.60.0) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=194.87.60.0&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/194.87.60.0)
- **Скриншоты:** [ASN](screenshots/05-Польша-overview.png) · [BGP](screenshots/05-Польша-bgp-paths.png) · [GeoLite](screenshots/05-Польша-geolocation.png) · [RDAP](screenshots/05-Польша-rdap.png)

| Англия | 193.23.112.0 | GB | 193.23.112.0/24 | AS198180 Gabriele-Sabatino Gabriele Sabatino | Gabriele-Sabatino / GB | AS16276 OVH OVH SAS (266 distinct paths) | [ASN](screenshots/06-Англия-overview.png) · [BGP](screenshots/06-Англия-bgp-paths.png) · [GeoLite](screenshots/06-Англия-geolocation.png) · [RDAP](screenshots/06-Англия-rdap.png) |

### Англия — `193.23.112.0`

- **BGP:** `193.23.112.0/24`; origin **AS198180** — Gabriele-Sabatino Gabriele Sabatino; origins seen: AS198180.
- **GeoLite:** `GB`; заявленная локация в TXT `Англия` (GB). Страна совпала.
- **RDAP:** `Gabriele-Sabatino`; диапазон `193.23.112.0–193.23.112.127`; страна `GB`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 351 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** Maintainer; NETLIR-MNT; Gabriele Sabatino; Abuse contact role object.
- **Ближайшие ASN:** AS16276 OVH OVH SAS (266 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276 198180`.
- **Схема ASN:** [PNG](asn-schemes/06-Англия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/193.23.112.0) · [Looking Glass](https://stat.ripe.net/lg/193.23.112.0) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=193.23.112.0&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/193.23.112.0)
- **Скриншоты:** [ASN](screenshots/06-Англия-overview.png) · [BGP](screenshots/06-Англия-bgp-paths.png) · [GeoLite](screenshots/06-Англия-geolocation.png) · [RDAP](screenshots/06-Англия-rdap.png)

| Франция | 93.89.217.1 | FR | 93.89.217.0/24 | AS198180 Gabriele-Sabatino Gabriele Sabatino | Gabriele-Sabatino / FR | AS16276 OVH OVH SAS (266 distinct paths) | [ASN](screenshots/07-Франция-overview.png) · [BGP](screenshots/07-Франция-bgp-paths.png) · [GeoLite](screenshots/07-Франция-geolocation.png) · [RDAP](screenshots/07-Франция-rdap.png) |

### Франция — `93.89.217.1`

- **BGP:** `93.89.217.0/24`; origin **AS198180** — Gabriele-Sabatino Gabriele Sabatino; origins seen: AS198180.
- **GeoLite:** `FR`; заявленная локация в TXT `Франция` (FR). Страна совпала.
- **RDAP:** `Gabriele-Sabatino`; диапазон `93.89.217.0–93.89.217.255`; страна `FR`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 351 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** interlir-mnt; Maintainer; Gabriele Sabatino; Abuse contact role object.
- **Ближайшие ASN:** AS16276 OVH OVH SAS (266 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276 198180`.
- **Схема ASN:** [PNG](asn-schemes/07-Франция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/93.89.217.1) · [Looking Glass](https://stat.ripe.net/lg/93.89.217.1) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=93.89.217.1&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/93.89.217.1)
- **Скриншоты:** [ASN](screenshots/07-Франция-overview.png) · [BGP](screenshots/07-Франция-bgp-paths.png) · [GeoLite](screenshots/07-Франция-geolocation.png) · [RDAP](screenshots/07-Франция-rdap.png)

| США | 143.246.40.11 | US | 143.246.40.0/24 | AS198180 Gabriele-Sabatino Gabriele Sabatino | Gabriele-Sabatino / US | AS16276 OVH OVH SAS (265 distinct paths) | [ASN](screenshots/08-США-overview.png) · [BGP](screenshots/08-США-bgp-paths.png) · [GeoLite](screenshots/08-США-geolocation.png) · [RDAP](screenshots/08-США-rdap.png) |

### США — `143.246.40.11`

- **BGP:** `143.246.40.0/24`; origin **AS198180** — Gabriele-Sabatino Gabriele Sabatino; origins seen: AS198180.
- **GeoLite:** `US`; заявленная локация в TXT `США` (US). Страна совпала.
- **RDAP:** `Gabriele-Sabatino`; диапазон `143.246.40.0–143.246.40.255`; страна `US`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 351 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:49:54`.
- **RDAP entities:** interlir-mnt; Maintainer; Gabriele Sabatino; Abuse contact role object.
- **Ближайшие ASN:** AS16276 OVH OVH SAS (265 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276 198180`.
- **Схема ASN:** [PNG](asn-schemes/08-США-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/143.246.40.11) · [Looking Glass](https://stat.ripe.net/lg/143.246.40.11) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=143.246.40.11&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/143.246.40.11)
- **Скриншоты:** [ASN](screenshots/08-США-overview.png) · [BGP](screenshots/08-США-bgp-paths.png) · [GeoLite](screenshots/08-США-geolocation.png) · [RDAP](screenshots/08-США-rdap.png)

| Гонконг | 151.243.38.42 | HK | 151.243.38.0/24 | AS211759 Miku_Network Miku Network Technology Limited | NET-151-243-38-0-24 / HK | AS17433 HNSL-AS-AP - Hytron Network Services Limited (272 distinct paths) | [ASN](screenshots/09-Гонконг-overview.png) · [BGP](screenshots/09-Гонконг-bgp-paths.png) · [GeoLite](screenshots/09-Гонконг-geolocation.png) · [RDAP](screenshots/09-Гонконг-rdap.png) |

### Гонконг — `151.243.38.42`

- **BGP:** `151.243.38.0/24`; origin **AS211759** — Miku_Network Miku Network Technology Limited; origins seen: AS211759.
- **GeoLite:** `HK`; заявленная локация в TXT `Гонконг` (HK). Страна совпала.
- **RDAP:** `NET-151-243-38-0-24`; диапазон `151.243.38.0–151.243.38.255`; страна `HK`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 352 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** netutils-mnt; Company 65ef37832paWZjVt; Private Customer.
- **Ближайшие ASN:** AS17433 HNSL-AS-AP - Hytron Network Services Limited (272 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 17433 211759`.
- **Схема ASN:** [PNG](asn-schemes/09-Гонконг-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/151.243.38.42) · [Looking Glass](https://stat.ripe.net/lg/151.243.38.42) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=151.243.38.42&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/151.243.38.42)
- **Скриншоты:** [ASN](screenshots/09-Гонконг-overview.png) · [BGP](screenshots/09-Гонконг-bgp-paths.png) · [GeoLite](screenshots/09-Гонконг-geolocation.png) · [RDAP](screenshots/09-Гонконг-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для CatsVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

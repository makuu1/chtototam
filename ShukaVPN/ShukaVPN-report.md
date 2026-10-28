# ShukaVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 6  **IP:** 6

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|

Повторяющиеся origin ASN: AS212238 (CDNEXT Datacamp Limited; 5 IP: Франция, Италия, Германия, Венгрия, Финляндия)

| Франция | 213.139.9.226 | FR | 213.139.9.0/24 | AS212238 CDNEXT Datacamp Limited | CDNEXT-PAR / FR | AS60068 CDN77 Datacamp Limited (264 distinct paths) | [ASN](screenshots/01-Франция-overview.png) · [BGP](screenshots/01-Франция-bgp-paths.png) · [GeoLite](screenshots/01-Франция-geolocation.png) · [RDAP](screenshots/01-Франция-rdap.png) |

### Франция — `213.139.9.226`

- **BGP:** `213.139.9.0/24`; origin **AS212238** — CDNEXT Datacamp Limited; origins seen: AS212238.
- **GeoLite:** `FR`; заявленная локация в TXT `Франция` (FR). Страна совпала.
- **RDAP:** `CDNEXT-PAR`; диапазон `213.139.9.0–213.139.9.255`; страна `FR`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 330 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:13`.
- **RDAP entities:** DATACAMP-MNT; Datacamp Ltd. technical staff.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (264 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60068 212238`.
- **Схема ASN:** [PNG](asn-schemes/01-Франция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/213.139.9.226) · [Looking Glass](https://stat.ripe.net/lg/213.139.9.226) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=213.139.9.226&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/213.139.9.226)
- **Скриншоты:** [ASN](screenshots/01-Франция-overview.png) · [BGP](screenshots/01-Франция-bgp-paths.png) · [GeoLite](screenshots/01-Франция-geolocation.png) · [RDAP](screenshots/01-Франция-rdap.png)

| Италия | 149.50.215.178 | IT | 149.50.215.0/24 | AS212238 CDNEXT Datacamp Limited | CDNEXT-MIL-CG / — | AS60068 CDN77 Datacamp Limited (262 distinct paths) | [ASN](screenshots/02-Италия-overview.png) · [BGP](screenshots/02-Италия-bgp-paths.png) · [GeoLite](screenshots/02-Италия-geolocation.png) · [RDAP](screenshots/02-Италия-rdap.png) |

### Италия — `149.50.215.178`

- **BGP:** `149.50.215.0/24`; origin **AS212238** — CDNEXT Datacamp Limited; origins seen: AS212238.
- **GeoLite:** `IT`; заявленная локация в TXT `Италия` (IT). Страна совпала.
- **RDAP:** `CDNEXT-MIL-CG`; диапазон `149.50.215.0–149.50.215.255`; страна `—`; тип `ASSIGNMENT.
- **Наблюдаемость RIPE RIS:** 331 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:13`.
- **RDAP entities:** Datacamp Limited.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (262 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 60068 212238`.
- **Схема ASN:** [PNG](asn-schemes/02-Италия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/149.50.215.178) · [Looking Glass](https://stat.ripe.net/lg/149.50.215.178) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=149.50.215.178&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/149.50.215.178)
- **Скриншоты:** [ASN](screenshots/02-Италия-overview.png) · [BGP](screenshots/02-Италия-bgp-paths.png) · [GeoLite](screenshots/02-Италия-geolocation.png) · [RDAP](screenshots/02-Италия-rdap.png)

| Германия | 213.139.11.116 | DE | 213.139.11.0/24 | AS212238 CDNEXT Datacamp Limited | CDNEXT-FRA / DE | AS60068 CDN77 Datacamp Limited (259 distinct paths) | [ASN](screenshots/03-Германия-overview.png) · [BGP](screenshots/03-Германия-bgp-paths.png) · [GeoLite](screenshots/03-Германия-geolocation.png) · [RDAP](screenshots/03-Германия-rdap.png) |

### Германия — `213.139.11.116`

- **BGP:** `213.139.11.0/24`; origin **AS212238** — CDNEXT Datacamp Limited; origins seen: AS212238.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `CDNEXT-FRA`; диапазон `213.139.11.0–213.139.11.255`; страна `DE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 330 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** DATACAMP-MNT; Datacamp Ltd. technical staff.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (259 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60068 212238`.
- **Схема ASN:** [PNG](asn-schemes/03-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/213.139.11.116) · [Looking Glass](https://stat.ripe.net/lg/213.139.11.116) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=213.139.11.116&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/213.139.11.116)
- **Скриншоты:** [ASN](screenshots/03-Германия-overview.png) · [BGP](screenshots/03-Германия-bgp-paths.png) · [GeoLite](screenshots/03-Германия-geolocation.png) · [RDAP](screenshots/03-Германия-rdap.png)

| Венгрия | 212.11.29.114 | HU | 212.11.29.0/24 | AS212238 CDNEXT Datacamp Limited | CDNEXT-BUD / HU | AS60068 CDN77 Datacamp Limited (263 distinct paths) | [ASN](screenshots/04-Венгрия-overview.png) · [BGP](screenshots/04-Венгрия-bgp-paths.png) · [GeoLite](screenshots/04-Венгрия-geolocation.png) · [RDAP](screenshots/04-Венгрия-rdap.png) |

### Венгрия — `212.11.29.114`

- **BGP:** `212.11.29.0/24`; origin **AS212238** — CDNEXT Datacamp Limited; origins seen: AS212238.
- **GeoLite:** `HU`; заявленная локация в TXT `Венгрия` (HU). Страна совпала.
- **RDAP:** `CDNEXT-BUD`; диапазон `212.11.29.0–212.11.29.255`; страна `HU`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 333 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** AS3257-IPAM-MNT; DATACAMP-MNT; Datacamp NOC; Datacamp Ltd. technical staff.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (263 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60068 212238`.
- **Схема ASN:** [PNG](asn-schemes/04-Венгрия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/212.11.29.114) · [Looking Glass](https://stat.ripe.net/lg/212.11.29.114) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=212.11.29.114&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/212.11.29.114)
- **Скриншоты:** [ASN](screenshots/04-Венгрия-overview.png) · [BGP](screenshots/04-Венгрия-bgp-paths.png) · [GeoLite](screenshots/04-Венгрия-geolocation.png) · [RDAP](screenshots/04-Венгрия-rdap.png)

| США | 152.232.55.114 | US | 152.232.55.0/24 | AS55286 SERVER-MANIA - B2 Net Solutions Inc. | BNS-34 / — | AS3257 GTT-BACKBONE GTT Communications Inc. (239 distinct paths); AS174 COGENT-174 - Cogent Communications, LLC (10 distinct paths); AS286 KPN GTT Communications Inc. (1 distinct paths) | [ASN](screenshots/05-США-overview.png) · [BGP](screenshots/05-США-bgp-paths.png) · [GeoLite](screenshots/05-США-geolocation.png) · [RDAP](screenshots/05-США-rdap.png) |

### США — `152.232.55.114`

- **BGP:** `152.232.55.0/24`; origin **AS55286** — SERVER-MANIA - B2 Net Solutions Inc.; origins seen: AS55286.
- **GeoLite:** `US`; заявленная локация в TXT `США` (US). Страна совпала.
- **RDAP:** `BNS-34`; диапазон `152.232.0.0–152.232.255.255`; страна `—`; тип `DIRECT ALLOCATION.
- **Наблюдаемость RIPE RIS:** 321 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** B2 Net Solutions Inc..
- **Ближайшие ASN:** AS3257 GTT-BACKBONE GTT Communications Inc. (239 уник. AS_PATH); AS174 COGENT-174 - Cogent Communications, LLC (10 уник. AS_PATH); AS286 KPN GTT Communications Inc. (1 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 3257 55286`.
- **Схема ASN:** [PNG](asn-schemes/05-США-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/152.232.55.114) · [Looking Glass](https://stat.ripe.net/lg/152.232.55.114) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=152.232.55.114&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/152.232.55.114)
- **Скриншоты:** [ASN](screenshots/05-США-overview.png) · [BGP](screenshots/05-США-bgp-paths.png) · [GeoLite](screenshots/05-США-geolocation.png) · [RDAP](screenshots/05-США-rdap.png)

| Финляндия | 152.233.71.12 | FI | 152.233.71.0/24 | AS212238 CDNEXT Datacamp Limited | CDNEXT-HEL / FI | AS60068 CDN77 Datacamp Limited (244 distinct paths) | [ASN](screenshots/06-Финляндия-overview.png) · [BGP](screenshots/06-Финляндия-bgp-paths.png) · [GeoLite](screenshots/06-Финляндия-geolocation.png) · [RDAP](screenshots/06-Финляндия-rdap.png) |

### Финляндия — `152.233.71.12`

- **BGP:** `152.233.71.0/24`; origin **AS212238** — CDNEXT Datacamp Limited; origins seen: AS212238.
- **GeoLite:** `FI`; заявленная локация в TXT `Финляндия` (FI). Страна совпала.
- **RDAP:** `CDNEXT-HEL`; диапазон `152.233.71.0–152.233.71.255`; страна `FI`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 319 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:15`.
- **RDAP entities:** DATACAMP-MNT; Datacamp Ltd. technical staff; Abuse Contact.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (244 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60068 212238`.
- **Схема ASN:** [PNG](asn-schemes/06-Финляндия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/152.233.71.12) · [Looking Glass](https://stat.ripe.net/lg/152.233.71.12) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=152.233.71.12&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/152.233.71.12)
- **Скриншоты:** [ASN](screenshots/06-Финляндия-overview.png) · [BGP](screenshots/06-Финляндия-bgp-paths.png) · [GeoLite](screenshots/06-Финляндия-geolocation.png) · [RDAP](screenshots/06-Финляндия-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для ShukaVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

# LagomVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 4  **IP:** 4

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|

Повторяющиеся origin ASN: AS199180 (LAGOM-NET Lagom Products LLC; 3 IP: Швеция, Финляндия, Нидерланды)

| Германия | 84.233.216.154 | DE | 84.233.216.0/24 | AS212238 CDNEXT Datacamp Limited | CDNEXT-FRA / DE | AS60068 CDN77 Datacamp Limited (259 distinct paths) | [ASN](screenshots/01-Германия-overview.png) · [BGP](screenshots/01-Германия-bgp-paths.png) · [GeoLite](screenshots/01-Германия-geolocation.png) · [RDAP](screenshots/01-Германия-rdap.png) |

### Германия — `84.233.216.154`

- **BGP:** `84.233.216.0/24`; origin **AS212238** — CDNEXT Datacamp Limited; origins seen: AS212238.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `CDNEXT-FRA`; диапазон `84.233.216.0–84.233.216.255`; страна `DE`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 330 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** AS3257-IPAM-MNT; DATACAMP-MNT; Datacamp NOC; Datacamp Ltd. technical staff.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (259 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60068 212238`.
- **Схема ASN:** [PNG](asn-schemes/01-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/84.233.216.154) · [Looking Glass](https://stat.ripe.net/lg/84.233.216.154) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=84.233.216.154&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/84.233.216.154)
- **Скриншоты:** [ASN](screenshots/01-Германия-overview.png) · [BGP](screenshots/01-Германия-bgp-paths.png) · [GeoLite](screenshots/01-Германия-geolocation.png) · [RDAP](screenshots/01-Германия-rdap.png)

| Швеция | 2.26.13.4 | SE | 2.26.13.0/24 | AS199180 LAGOM-NET Lagom Products LLC | LAGOM-IPv4-SE / SE | AS60068 CDN77 Datacamp Limited (255 distinct paths) | [ASN](screenshots/02-Швеция-overview.png) · [BGP](screenshots/02-Швеция-bgp-paths.png) · [GeoLite](screenshots/02-Швеция-geolocation.png) · [RDAP](screenshots/02-Швеция-rdap.png) |

### Швеция — `2.26.13.4`

- **BGP:** `2.26.13.0/24`; origin **AS199180** — LAGOM-NET Lagom Products LLC; origins seen: AS199180.
- **GeoLite:** `SE`; заявленная локация в TXT `Швеция` (SE). Страна совпала.
- **RDAP:** `LAGOM-IPv4-SE`; диапазон `2.26.13.0–2.26.13.255`; страна `SE`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:13`.
- **RDAP entities:** lir-am-lagom-1-MNT; lir-us-acedatacenter-1-MNT; Lagom Products NOC; Lagom Products LLC.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (255 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60068 199180`.
- **Схема ASN:** [PNG](asn-schemes/02-Швеция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/2.26.13.4) · [Looking Glass](https://stat.ripe.net/lg/2.26.13.4) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=2.26.13.4&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/2.26.13.4)
- **Скриншоты:** [ASN](screenshots/02-Швеция-overview.png) · [BGP](screenshots/02-Швеция-bgp-paths.png) · [GeoLite](screenshots/02-Швеция-geolocation.png) · [RDAP](screenshots/02-Швеция-rdap.png)

| Финляндия | 2.26.13.1 | SE | 2.26.13.0/24 | AS199180 LAGOM-NET Lagom Products LLC | LAGOM-IPv4-SE / SE | AS60068 CDN77 Datacamp Limited (255 distinct paths) | [ASN](screenshots/03-Финляндия-overview.png) · [BGP](screenshots/03-Финляндия-bgp-paths.png) · [GeoLite](screenshots/03-Финляндия-geolocation.png) · [RDAP](screenshots/03-Финляндия-rdap.png) |

### Финляндия — `2.26.13.1`

- **BGP:** `2.26.13.0/24`; origin **AS199180** — LAGOM-NET Lagom Products LLC; origins seen: AS199180.
- **GeoLite:** `SE`; заявленная локация в TXT `Финляндия` (FI). Страна не совпадает; проверить внимательно.
- **RDAP:** `LAGOM-IPv4-SE`; диапазон `2.26.13.0–2.26.13.255`; страна `SE`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:15`.
- **RDAP entities:** lir-am-lagom-1-MNT; lir-us-acedatacenter-1-MNT; Lagom Products NOC; Lagom Products LLC.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (255 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60068 199180`.
- **Схема ASN:** [PNG](asn-schemes/03-Финляндия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/2.26.13.1) · [Looking Glass](https://stat.ripe.net/lg/2.26.13.1) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=2.26.13.1&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/2.26.13.1)
- **Скриншоты:** [ASN](screenshots/03-Финляндия-overview.png) · [BGP](screenshots/03-Финляндия-bgp-paths.png) · [GeoLite](screenshots/03-Финляндия-geolocation.png) · [RDAP](screenshots/03-Финляндия-rdap.png)

| Нидерланды | 2.26.13.2 | SE | 2.26.13.0/24 | AS199180 LAGOM-NET Lagom Products LLC | LAGOM-IPv4-SE / SE | AS60068 CDN77 Datacamp Limited (255 distinct paths) | [ASN](screenshots/04-Нидерланды-overview.png) · [BGP](screenshots/04-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/04-Нидерланды-geolocation.png) · [RDAP](screenshots/04-Нидерланды-rdap.png) |

### Нидерланды — `2.26.13.2`

- **BGP:** `2.26.13.0/24`; origin **AS199180** — LAGOM-NET Lagom Products LLC; origins seen: AS199180.
- **GeoLite:** `SE`; заявленная локация в TXT `Нидерланды` (NL). Страна не совпадает; проверить внимательно.
- **RDAP:** `LAGOM-IPv4-SE`; диапазон `2.26.13.0–2.26.13.255`; страна `SE`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** lir-am-lagom-1-MNT; lir-us-acedatacenter-1-MNT; Lagom Products NOC; Lagom Products LLC.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (255 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60068 199180`.
- **Схема ASN:** [PNG](asn-schemes/04-Нидерланды-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/2.26.13.2) · [Looking Glass](https://stat.ripe.net/lg/2.26.13.2) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=2.26.13.2&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/2.26.13.2)
- **Скриншоты:** [ASN](screenshots/04-Нидерланды-overview.png) · [BGP](screenshots/04-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/04-Нидерланды-geolocation.png) · [RDAP](screenshots/04-Нидерланды-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для LagomVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

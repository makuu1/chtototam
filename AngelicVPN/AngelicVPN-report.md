# AngelicVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 6  **IP:** 6

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|
| Германия | 31.76.119.104 | DE | 31.76.119.0/24 | AS219064 Akenai-Products-AS Akenai Products LTD | AKENAI-IPv4-DE / DE | AS213520 SENKO-AS Senko Digital LLC (247 distinct paths) | [ASN](screenshots/01-Германия-overview.png) · [BGP](screenshots/01-Германия-bgp-paths.png) · [GeoLite](screenshots/01-Германия-geolocation.png) · [RDAP](screenshots/01-Германия-rdap.png) |

### Германия — `31.76.119.104`

- **BGP:** `31.76.119.0/24`; origin **AS219064** — Akenai-Products-AS Akenai Products LTD; origins seen: AS219064.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `AKENAI-IPv4-DE`; диапазон `31.76.119.0–31.76.119.255`; страна `DE`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 319 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** AKENAI-MNT; Akenai Products LTD NOC; lir-us-acedatacenter-1-MNT; Akenai Products LTD.
- **Ближайшие ASN:** AS213520 SENKO-AS Senko Digital LLC (247 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 58212 213520 219064`.
- **Схема ASN:** [PNG](asn-schemes/01-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.76.119.104) · [Looking Glass](https://stat.ripe.net/lg/31.76.119.104) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.76.119.104&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.76.119.104)
- **Скриншоты:** [ASN](screenshots/01-Германия-overview.png) · [BGP](screenshots/01-Германия-bgp-paths.png) · [GeoLite](screenshots/01-Германия-geolocation.png) · [RDAP](screenshots/01-Германия-rdap.png)

| Эстония | 89.125.13.12 | EE | 89.125.13.0/24 | AS218731 Andris-Jakovlevs Andris Jakovlevs | Andris-Jakovlevs / EE | AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (253 distinct paths) | [ASN](screenshots/02-Эстония-overview.png) · [BGP](screenshots/02-Эстония-bgp-paths.png) · [GeoLite](screenshots/02-Эстония-geolocation.png) · [RDAP](screenshots/02-Эстония-rdap.png) |

### Эстония — `89.125.13.12`

- **BGP:** `89.125.13.0/24`; origin **AS218731** — Andris-Jakovlevs Andris Jakovlevs; origins seen: AS218731.
- **GeoLite:** `EE`; заявленная локация в TXT `Эстония` (EE). Страна совпала.
- **RDAP:** `Andris-Jakovlevs`; диапазон `89.125.13.0–89.125.13.255`; страна `EE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 322 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** Andris Jakovlevs; interlir-mnt; Abuse contact role object.
- **Ближайшие ASN:** AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (253 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 30823 215730 218731`.
- **Схема ASN:** [PNG](asn-schemes/02-Эстония-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/89.125.13.12) · [Looking Glass](https://stat.ripe.net/lg/89.125.13.12) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=89.125.13.12&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/89.125.13.12)
- **Скриншоты:** [ASN](screenshots/02-Эстония-overview.png) · [BGP](screenshots/02-Эстония-bgp-paths.png) · [GeoLite](screenshots/02-Эстония-geolocation.png) · [RDAP](screenshots/02-Эстония-rdap.png)

| Польша | 201.10.91.14 | PL | 201.10.91.0/24 | AS219095 ASTRAVPS-AS Paul Sagov | ASTRA-NETWORKS-LTD / PL | AS207208 Mevspace-projects MEVSPACE sp. z o.o. (282 distinct paths) | [ASN](screenshots/03-Польша-overview.png) · [BGP](screenshots/03-Польша-bgp-paths.png) · [GeoLite](screenshots/03-Польша-geolocation.png) · [RDAP](screenshots/03-Польша-rdap.png) |

### Польша — `201.10.91.14`

- **BGP:** `201.10.91.0/24`; origin **AS219095** — ASTRAVPS-AS Paul Sagov; origins seen: AS219095.
- **GeoLite:** `PL`; заявленная локация в TXT `Польша` (PL). Страна совпала.
- **RDAP:** `ASTRA-NETWORKS-LTD`; диапазон `201.10.91.0–201.10.91.255`; страна `PL`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 376 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** ASTRAVPS-NOC; interlir-mnt; Paul Sagov; Abuse contact role object.
- **Ближайшие ASN:** AS207208 Mevspace-projects MEVSPACE sp. z o.o. (282 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 201814 207208 219095`.
- **Схема ASN:** [PNG](asn-schemes/03-Польша-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/201.10.91.14) · [Looking Glass](https://stat.ripe.net/lg/201.10.91.14) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=201.10.91.14&source=geo) · [RDAP](https://rdap.lacnic.net/rdap/ip/201.10.91.14)
- **Скриншоты:** [ASN](screenshots/03-Польша-overview.png) · [BGP](screenshots/03-Польша-bgp-paths.png) · [GeoLite](screenshots/03-Польша-geolocation.png) · [RDAP](screenshots/03-Польша-rdap.png)

| Сербия | 87.121.38.183 | RS | 87.121.38.0/24 | AS205007 ESERVER-RS Maxim Azarov trading as eServer | Digital-City-FZE / RS | AS6700 BEOTEL-AS TELEKOM SRBIJA a.d. (175 distinct paths); AS174 COGENT-174 - Cogent Communications, LLC (91 distinct paths) | [ASN](screenshots/04-Сербия-overview.png) · [BGP](screenshots/04-Сербия-bgp-paths.png) · [GeoLite](screenshots/04-Сербия-geolocation.png) · [RDAP](screenshots/04-Сербия-rdap.png) |

### Сербия — `87.121.38.183`

- **BGP:** `87.121.38.0/24`; origin **AS205007** — ESERVER-RS Maxim Azarov trading as eServer; origins seen: AS205007.
- **GeoLite:** `RS`; заявленная локация в TXT `Сербия` (RS). Страна совпала.
- **RDAP:** `Digital-City-FZE`; диапазон `87.121.38.128–87.121.38.255`; страна `RS`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 347 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** Digital City Admin; interlir-mnt; Digital City FZE; Abuse contact role object.
- **Ближайшие ASN:** AS6700 BEOTEL-AS TELEKOM SRBIJA a.d. (175 уник. AS_PATH); AS174 COGENT-174 - Cogent Communications, LLC (91 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 205007`.
- **Схема ASN:** [PNG](asn-schemes/04-Сербия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/87.121.38.183) · [Looking Glass](https://stat.ripe.net/lg/87.121.38.183) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=87.121.38.183&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/87.121.38.183)
- **Скриншоты:** [ASN](screenshots/04-Сербия-overview.png) · [BGP](screenshots/04-Сербия-bgp-paths.png) · [GeoLite](screenshots/04-Сербия-geolocation.png) · [RDAP](screenshots/04-Сербия-rdap.png)

| США | 162.217.248.16 | US | 162.217.248.0/24 | AS213535 YOTTASRC YottaSrc | YottaSrc-16662-NET-217-248-0 / US | AS26548 PUREVOLTAGE-INC - PureVoltage Hosting Inc. (274 distinct paths) | [ASN](screenshots/05-США-overview.png) · [BGP](screenshots/05-США-bgp-paths.png) · [GeoLite](screenshots/05-США-geolocation.png) · [RDAP](screenshots/05-США-rdap.png) |

### США — `162.217.248.16`

- **BGP:** `162.217.248.0/24`; origin **AS213535** — YOTTASRC YottaSrc; origins seen: AS213535.
- **GeoLite:** `US`; заявленная локация в TXT `США` (US). Страна совпала.
- **RDAP:** `YottaSrc-16662-NET-217-248-0`; диапазон `162.217.248.0–162.217.248.255`; страна `US`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 373 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** Hosting Operators; MNT-SYN; YottaSrc; Technical Support; Abuse contact.
- **Ближайшие ASN:** AS26548 PUREVOLTAGE-INC - PureVoltage Hosting Inc. (274 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 971 26548 213535`.
- **Схема ASN:** [PNG](asn-schemes/05-США-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/162.217.248.16) · [Looking Glass](https://stat.ripe.net/lg/162.217.248.16) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=162.217.248.16&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/162.217.248.16)
- **Скриншоты:** [ASN](screenshots/05-США-overview.png) · [BGP](screenshots/05-США-bgp-paths.png) · [GeoLite](screenshots/05-США-geolocation.png) · [RDAP](screenshots/05-США-rdap.png)

| Финляндия | 144.31.53.113 | FI | 144.31.53.0/24 | AS201988 VPSPay-ASN VPSPay Networks LTD | VPSPay-NET / FI | AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (254 distinct paths) | [ASN](screenshots/06-Финляндия-overview.png) · [BGP](screenshots/06-Финляндия-bgp-paths.png) · [GeoLite](screenshots/06-Финляндия-geolocation.png) · [RDAP](screenshots/06-Финляндия-rdap.png) |

### Финляндия — `144.31.53.113`

- **BGP:** `144.31.53.0/24`; origin **AS201988** — VPSPay-ASN VPSPay Networks LTD; origins seen: AS201988.
- **GeoLite:** `FI`; заявленная локация в TXT `Финляндия` (FI). Страна совпала.
- **RDAP:** `VPSPay-NET`; диапазон `144.31.53.0–144.31.53.255`; страна `FI`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** lir-us-acedatacenter-1-MNT; VPSPay Networks LTD; VPSPay Administrative Department; VPSPay Tech Department Contact Object; VPSPay Abuse Department Contact Object.
- **Ближайшие ASN:** AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (254 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 30823 215730 201988`.
- **Схема ASN:** [PNG](asn-schemes/06-Финляндия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/144.31.53.113) · [Looking Glass](https://stat.ripe.net/lg/144.31.53.113) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=144.31.53.113&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/144.31.53.113)
- **Скриншоты:** [ASN](screenshots/06-Финляндия-overview.png) · [BGP](screenshots/06-Финляндия-bgp-paths.png) · [GeoLite](screenshots/06-Финляндия-geolocation.png) · [RDAP](screenshots/06-Финляндия-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для AngelicVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

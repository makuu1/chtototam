# PantherVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 14  **IP:** 11

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|

Повторяющиеся origin ASN: AS136258 (ONEPROVIDER-AS - BrainStorm Network, Inc; 5 IP: США, Литва, Канада, Швеция, Нидерланды)

| США | 107.175.82.95 | US | 107.175.82.0/24 | AS136258 ONEPROVIDER-AS - BrainStorm Network, Inc | ONEPROVIDER-US-SEA / — | AS36352 AS-COLOCROSSING - HostPapa (247 distinct paths) | [ASN](screenshots/01-США-overview.png) · [BGP](screenshots/01-США-bgp-paths.png) · [GeoLite](screenshots/01-США-geolocation.png) · [RDAP](screenshots/01-США-rdap.png) |

### США — `107.175.82.95`

- **BGP:** `107.175.82.0/24`; origin **AS136258** — ONEPROVIDER-AS - BrainStorm Network, Inc; origins seen: AS136258.
- **GeoLite:** `US`; заявленная локация в TXT `США` (US). Страна совпала.
- **RDAP:** `ONEPROVIDER-US-SEA`; диапазон `107.175.82.0–107.175.82.255`; страна `—`; тип `ALLOCATION.
- **Наблюдаемость RIPE RIS:** 320 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:49:53`.
- **RDAP entities:** BrainStorm Network Inc..
- **Ближайшие ASN:** AS36352 AS-COLOCROSSING - HostPapa (247 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 36352 136258`.
- **Схема ASN:** [PNG](asn-schemes/01-США-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/107.175.82.95) · [Looking Glass](https://stat.ripe.net/lg/107.175.82.95) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=107.175.82.95&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/107.175.82.95)
- **Скриншоты:** [ASN](screenshots/01-США-overview.png) · [BGP](screenshots/01-США-bgp-paths.png) · [GeoLite](screenshots/01-США-geolocation.png) · [RDAP](screenshots/01-США-rdap.png)

| Литва | 185.237.185.100 | LT | 185.237.185.0/24 | AS136258 ONEPROVIDER-AS - BrainStorm Network, Inc | ONEPROVIDER-LT / LT | AS61272 IST-AS UAB Bacloud (262 distinct paths) | [ASN](screenshots/02-Литва-overview.png) · [BGP](screenshots/02-Литва-bgp-paths.png) · [GeoLite](screenshots/02-Литва-geolocation.png) · [RDAP](screenshots/02-Литва-rdap.png) |

### Литва — `185.237.185.100`

- **BGP:** `185.237.185.0/24`; origin **AS136258** — ONEPROVIDER-AS - BrainStorm Network, Inc; origins seen: AS136258.
- **GeoLite:** `LT`; заявленная локация в TXT `Литва` (LT). Страна совпала.
- **RDAP:** `ONEPROVIDER-LT`; диапазон `185.237.185.0–185.237.185.127`; страна `LT`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 336 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** Abuse contact role object; lir-uk-tinhat-1-MNT; ONEPROVIDER; Abuse-C Role.
- **Ближайшие ASN:** AS61272 IST-AS UAB Bacloud (262 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 13194 61272 136258`.
- **Схема ASN:** [PNG](asn-schemes/02-Литва-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/185.237.185.100) · [Looking Glass](https://stat.ripe.net/lg/185.237.185.100) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=185.237.185.100&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/185.237.185.100)
- **Скриншоты:** [ASN](screenshots/02-Литва-overview.png) · [BGP](screenshots/02-Литва-bgp-paths.png) · [GeoLite](screenshots/02-Литва-geolocation.png) · [RDAP](screenshots/02-Литва-rdap.png)

| Дубай | 45.59.120.166 | AE | 45.59.120.0/24 | AS14956 ROUTERHOSTING - RouterHosting LLC | ROUTERHOSTING / — | AS6939 HURRICANE - Hurricane Electric LLC (258 distinct paths) | [ASN](screenshots/03-Дубай-overview.png) · [BGP](screenshots/03-Дубай-bgp-paths.png) · [GeoLite](screenshots/03-Дубай-geolocation.png) · [RDAP](screenshots/03-Дубай-rdap.png) |

### Дубай — `45.59.120.166`

- **BGP:** `45.59.120.0/24`; origin **AS14956** — ROUTERHOSTING - RouterHosting LLC; origins seen: AS14956.
- **GeoLite:** `AE`; заявленная локация в TXT `Дубай` (AE). Страна совпала.
- **RDAP:** `ROUTERHOSTING`; диапазон `45.59.120.0–45.59.120.255`; страна `—`; тип `ALLOCATION.
- **Наблюдаемость RIPE RIS:** 372 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** RouterHosting LLC.
- **Ближайшие ASN:** AS6939 HURRICANE - Hurricane Electric LLC (258 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 6939 14956`.
- **Схема ASN:** [PNG](asn-schemes/03-Дубай-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/45.59.120.166) · [Looking Glass](https://stat.ripe.net/lg/45.59.120.166) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=45.59.120.166&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/45.59.120.166)
- **Скриншоты:** [ASN](screenshots/03-Дубай-overview.png) · [BGP](screenshots/03-Дубай-bgp-paths.png) · [GeoLite](screenshots/03-Дубай-geolocation.png) · [RDAP](screenshots/03-Дубай-rdap.png)

| Италия | 205.237.110.207 | RO | 205.237.110.0/24 | AS25198 ZetServers INTERKVM HOST SRL | ZetServers-IT / IT | AS6204 ZET-NET INTERKVM HOST SRL (270 distinct paths) | [ASN](screenshots/04-Италия-overview.png) · [BGP](screenshots/04-Италия-bgp-paths.png) · [GeoLite](screenshots/04-Италия-geolocation.png) · [RDAP](screenshots/04-Италия-rdap.png) |

### Италия — `205.237.110.207`

- **BGP:** `205.237.110.0/24`; origin **AS25198** — ZetServers INTERKVM HOST SRL; origins seen: AS25198.
- **GeoLite:** `RO`; заявленная локация в TXT `Италия` (IT). Страна не совпадает; проверить внимательно.
- **RDAP:** `ZetServers-IT`; диапазон `205.237.110.0–205.237.110.255`; страна `IT`; тип `LIR-PARTITIONED PA.
- **Наблюдаемость RIPE RIS:** 347 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** NETACTION-MNT; TAA83-RIPE; Abuse-C Role.
- **Ближайшие ASN:** AS6204 ZET-NET INTERKVM HOST SRL (270 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 6204 25198`.
- **Схема ASN:** [PNG](asn-schemes/04-Италия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/205.237.110.207) · [Looking Glass](https://stat.ripe.net/lg/205.237.110.207) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=205.237.110.207&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/205.237.110.207)
- **Скриншоты:** [ASN](screenshots/04-Италия-overview.png) · [BGP](screenshots/04-Италия-bgp-paths.png) · [GeoLite](screenshots/04-Италия-geolocation.png) · [RDAP](screenshots/04-Италия-rdap.png)

| Россия | — | — | — | — | — | — | [карточка](screenshots/05-Россия-unavailable.png); IP не указан в исходном TXT |
| Канада | 23.95.76.6 | CA | 23.95.76.0/24 | AS136258 ONEPROVIDER-AS - BrainStorm Network, Inc | ONEPROVIDER-CA-MTL2 / — | AS62563 AS-GLOBALTELEHOST - GLOBALTELEHOST Corp. (253 distinct paths) | [ASN](screenshots/06-Канада-overview.png) · [BGP](screenshots/06-Канада-bgp-paths.png) · [GeoLite](screenshots/06-Канада-geolocation.png) · [RDAP](screenshots/06-Канада-rdap.png) |

### Канада — `23.95.76.6`

- **BGP:** `23.95.76.0/24`; origin **AS136258** — ONEPROVIDER-AS - BrainStorm Network, Inc; origins seen: AS136258.
- **GeoLite:** `CA`; заявленная локация в TXT `Канада` (CA). Страна совпала.
- **RDAP:** `ONEPROVIDER-CA-MTL2`; диапазон `23.95.76.0–23.95.76.255`; страна `—`; тип `ALLOCATION.
- **Наблюдаемость RIPE RIS:** 325 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** BrainStorm Network Inc..
- **Ближайшие ASN:** AS62563 AS-GLOBALTELEHOST - GLOBALTELEHOST Corp. (253 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 62563 136258`.
- **Схема ASN:** [PNG](asn-schemes/06-Канада-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/23.95.76.6) · [Looking Glass](https://stat.ripe.net/lg/23.95.76.6) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=23.95.76.6&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/23.95.76.6)
- **Скриншоты:** [ASN](screenshots/06-Канада-overview.png) · [BGP](screenshots/06-Канада-bgp-paths.png) · [GeoLite](screenshots/06-Канада-geolocation.png) · [RDAP](screenshots/06-Канада-rdap.png)

| Япония | 31.76.91.118 | JP | 31.76.91.0/24 | AS219064 Akenai-Products-AS Akenai Products LTD | AKENAI-IPv4-JP / JP | AS137409 GSLNETWORKS-AS-AP - GSL Networks Pty LTD (267 distinct paths) | [ASN](screenshots/07-Япония-overview.png) · [BGP](screenshots/07-Япония-bgp-paths.png) · [GeoLite](screenshots/07-Япония-geolocation.png) · [RDAP](screenshots/07-Япония-rdap.png) |

### Япония — `31.76.91.118`

- **BGP:** `31.76.91.0/24`; origin **AS219064** — Akenai-Products-AS Akenai Products LTD; origins seen: AS219064.
- **GeoLite:** `JP`; заявленная локация в TXT `Япония` (JP). Страна совпала.
- **RDAP:** `AKENAI-IPv4-JP`; диапазон `31.76.91.0–31.76.91.255`; страна `JP`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 353 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** AKENAI-MNT; Akenai Products LTD NOC; lir-us-acedatacenter-1-MNT; Akenai Products LTD.
- **Ближайшие ASN:** AS137409 GSLNETWORKS-AS-AP - GSL Networks Pty LTD (267 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 137409 219064`.
- **Схема ASN:** [PNG](asn-schemes/07-Япония-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.76.91.118) · [Looking Glass](https://stat.ripe.net/lg/31.76.91.118) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.76.91.118&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.76.91.118)
- **Скриншоты:** [ASN](screenshots/07-Япония-overview.png) · [BGP](screenshots/07-Япония-bgp-paths.png) · [GeoLite](screenshots/07-Япония-geolocation.png) · [RDAP](screenshots/07-Япония-rdap.png)

| Гонконг | 27.0.232.64 | HK | 27.0.232.0/24 | AS133752 LEASEWEB-APAC-HKG-10 - LEASEWEB HONG KONG LIMITED | ONEPROVIDER / HK | AS16265 LEASEWEB-NETWORK LeaseWeb Network B.V. (89 distinct paths); AS4637 ASN-TELSTRA-GLOBAL - Telstra Global (54 distinct paths); AS174 COGENT-174 - Cogent Communications, LLC (52 distinct paths) | [ASN](screenshots/08-Гонконг-overview.png) · [BGP](screenshots/08-Гонконг-bgp-paths.png) · [GeoLite](screenshots/08-Гонконг-geolocation.png) · [RDAP](screenshots/08-Гонконг-rdap.png) |

### Гонконг — `27.0.232.64`

- **BGP:** `27.0.232.0/24`; origin **AS133752** — LEASEWEB-APAC-HKG-10 - LEASEWEB HONG KONG LIMITED; origins seen: AS133752.
- **GeoLite:** `HK`; заявленная локация в TXT `Гонконг` (HK). Страна совпала.
- **RDAP:** `ONEPROVIDER`; диапазон `27.0.232.0–27.0.232.255`; страна `HK`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 330 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** Abuse contact role object; ZAPPIE-MNT.
- **Ближайшие ASN:** AS16265 LEASEWEB-NETWORK LeaseWeb Network B.V. (89 уник. AS_PATH); AS4637 ASN-TELSTRA-GLOBAL - Telstra Global (54 уник. AS_PATH); AS174 COGENT-174 - Cogent Communications, LLC (52 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 133752`.
- **Схема ASN:** [PNG](asn-schemes/08-Гонконг-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/27.0.232.64) · [Looking Glass](https://stat.ripe.net/lg/27.0.232.64) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=27.0.232.64&source=geo) · [RDAP](https://rdap.apnic.net/ip/27.0.232.64)
- **Скриншоты:** [ASN](screenshots/08-Гонконг-overview.png) · [BGP](screenshots/08-Гонконг-bgp-paths.png) · [GeoLite](screenshots/08-Гонконг-geolocation.png) · [RDAP](screenshots/08-Гонконг-rdap.png)

| Польша | 144.31.1.7 | PL | 144.31.1.0/24 | AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO | H2NEXUS / PL | AS6939 HURRICANE - Hurricane Electric LLC (236 distinct paths); AS28917 Fiord-AS Fiord Networks, UAB (31 distinct paths) | [ASN](screenshots/09-Польша-overview.png) · [BGP](screenshots/09-Польша-bgp-paths.png) · [GeoLite](screenshots/09-Польша-geolocation.png) · [RDAP](screenshots/09-Польша-rdap.png) |

### Польша — `144.31.1.7`

- **BGP:** `144.31.1.0/24`; origin **AS215730** — H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO; origins seen: AS215730.
- **GeoLite:** `PL`; заявленная локация в TXT `Польша` (PL). Страна совпала.
- **RDAP:** `H2NEXUS`; диапазон `144.31.1.0–144.31.1.255`; страна `PL`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 372 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** H2NEXUS CLOUD SERVICES FZCO; lir-us-acedatacenter-1-MNT.
- **Ближайшие ASN:** AS6939 HURRICANE - Hurricane Electric LLC (236 уник. AS_PATH); AS28917 Fiord-AS Fiord Networks, UAB (31 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 3257 28917 215730`.
- **Схема ASN:** [PNG](asn-schemes/09-Польша-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/144.31.1.7) · [Looking Glass](https://stat.ripe.net/lg/144.31.1.7) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=144.31.1.7&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/144.31.1.7)
- **Скриншоты:** [ASN](screenshots/09-Польша-overview.png) · [BGP](screenshots/09-Польша-bgp-paths.png) · [GeoLite](screenshots/09-Польша-geolocation.png) · [RDAP](screenshots/09-Польша-rdap.png)

| Швеция | 185.186.78.100 | SE | 185.186.78.0/24 | AS136258 ONEPROVIDER-AS - BrainStorm Network, Inc | ONEPROVIDER-SE / SE | AS6206 NETROUTING-AS Netrouting B.V. (268 distinct paths) | [ASN](screenshots/10-Швеция-overview.png) · [BGP](screenshots/10-Швеция-bgp-paths.png) · [GeoLite](screenshots/10-Швеция-geolocation.png) · [RDAP](screenshots/10-Швеция-rdap.png) |

### Швеция — `185.186.78.100`

- **BGP:** `185.186.78.0/24`; origin **AS136258** — ONEPROVIDER-AS - BrainStorm Network, Inc; origins seen: AS136258.
- **GeoLite:** `SE`; заявленная локация в TXT `Швеция` (SE). Страна совпала.
- **RDAP:** `ONEPROVIDER-SE`; диапазон `185.186.78.0–185.186.78.255`; страна `SE`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 342 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** Abuse contact role object; ONEPROVIDER; Abuse-C Role.
- **Ближайшие ASN:** AS6206 NETROUTING-AS Netrouting B.V. (268 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 6206 136258`.
- **Схема ASN:** [PNG](asn-schemes/10-Швеция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/185.186.78.100) · [Looking Glass](https://stat.ripe.net/lg/185.186.78.100) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=185.186.78.100&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/185.186.78.100)
- **Скриншоты:** [ASN](screenshots/10-Швеция-overview.png) · [BGP](screenshots/10-Швеция-bgp-paths.png) · [GeoLite](screenshots/10-Швеция-geolocation.png) · [RDAP](screenshots/10-Швеция-rdap.png)

| Эстония | — | — | — | — | — | — | [карточка](screenshots/11-Эстония-unavailable.png); IP не указан в исходном TXT |
| Германия | 213.202.219.146 | DE | 213.202.192.0/18 | AS24961 MYLOC-AS WIIT AG | DE-MYLOC-DUS-20021021 / DE | AS3356 LEVEL3 - Level 3 Parent, LLC (25 distinct paths); AS1299 TWELVE99 Arelion Sweden AB (21 distinct paths); AS174 COGENT-174 - Cogent Communications, LLC (18 distinct paths) | [ASN](screenshots/12-Германия-overview.png) · [BGP](screenshots/12-Германия-bgp-paths.png) · [GeoLite](screenshots/12-Германия-geolocation.png) · [RDAP](screenshots/12-Германия-rdap.png) |

### Германия — `213.202.219.146`

- **BGP:** `213.202.192.0/18`; origin **AS24961** — MYLOC-AS WIIT AG; origins seen: AS24961.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `DE-MYLOC-DUS-20021021`; диапазон `213.202.192.0–213.202.255.255`; страна `DE`; тип `ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 340 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** WIIT AG NOC; MYLOC-MNT; WIIT AG; RIPE-NCC-HM-MNT.
- **Ближайшие ASN:** AS3356 LEVEL3 - Level 3 Parent, LLC (25 уник. AS_PATH); AS1299 TWELVE99 Arelion Sweden AB (21 уник. AS_PATH); AS174 COGENT-174 - Cogent Communications, LLC (18 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 24961`.
- **Схема ASN:** [PNG](asn-schemes/12-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/213.202.219.146) · [Looking Glass](https://stat.ripe.net/lg/213.202.219.146) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=213.202.219.146&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/213.202.219.146)
- **Скриншоты:** [ASN](screenshots/12-Германия-overview.png) · [BGP](screenshots/12-Германия-bgp-paths.png) · [GeoLite](screenshots/12-Германия-geolocation.png) · [RDAP](screenshots/12-Германия-rdap.png)

| Финляндия | — | — | — | — | — | — | [карточка](screenshots/13-Финляндия-unavailable.png); IP не указан в исходном TXT |
| Нидерланды | 109.104.154.75 | NL | 109.104.154.0/24 | AS136258 ONEPROVIDER-AS - BrainStorm Network, Inc | ONEPROVIDER-NL2 / NL | AS35133 ERANIUM Eranium B.V. (264 distinct paths) | [ASN](screenshots/14-Нидерланды-overview.png) · [BGP](screenshots/14-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/14-Нидерланды-geolocation.png) · [RDAP](screenshots/14-Нидерланды-rdap.png) |

### Нидерланды — `109.104.154.75`

- **BGP:** `109.104.154.0/24`; origin **AS136258** — ONEPROVIDER-AS - BrainStorm Network, Inc; origins seen: AS136258.
- **GeoLite:** `NL`; заявленная локация в TXT `Нидерланды` (NL). Страна совпала.
- **RDAP:** `ONEPROVIDER-NL2`; диапазон `109.104.154.0–109.104.154.255`; страна `NL`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 325 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:49:54`.
- **RDAP entities:** Abuse contact role object; ONEPROVIDER; Abuse-C Role.
- **Ближайшие ASN:** AS35133 ERANIUM Eranium B.V. (264 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 35133 136258`.
- **Схема ASN:** [PNG](asn-schemes/14-Нидерланды-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/109.104.154.75) · [Looking Glass](https://stat.ripe.net/lg/109.104.154.75) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=109.104.154.75&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/109.104.154.75)
- **Скриншоты:** [ASN](screenshots/14-Нидерланды-overview.png) · [BGP](screenshots/14-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/14-Нидерланды-geolocation.png) · [RDAP](screenshots/14-Нидерланды-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для PantherVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

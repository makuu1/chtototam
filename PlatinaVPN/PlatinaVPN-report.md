# PlatinaVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 13  **IP:** 13

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|

Повторяющиеся origin ASN: AS207957 (ServHost-AS SERV.HOST GROUP LTD; 5 IP: Эстония, Финляндия, Польша, Норвегия, Австрия); AS207043 (DEDIK-IO DEDIK SERVICES LIMITED; 2 IP: США, Нидерланды)

| США | 2.27.160.18 | US | 2.27.160.0/24 | AS207043 DEDIK-IO DEDIK SERVICES LIMITED | DEDIK-IO-USA-NETWORK-2-27-160-0-24 / US | AS18450 WEBNX - WebNX, Inc. (286 distinct paths) | [ASN](screenshots/01-США-overview.png) · [BGP](screenshots/01-США-bgp-paths.png) · [GeoLite](screenshots/01-США-geolocation.png) · [RDAP](screenshots/01-США-rdap.png) |

### США — `2.27.160.18`

- **BGP:** `2.27.160.0/24`; origin **AS207043** — DEDIK-IO DEDIK SERVICES LIMITED; origins seen: AS207043.
- **GeoLite:** `US`; заявленная локация в TXT `США` (US). Страна совпала.
- **RDAP:** `DEDIK-IO-USA-NETWORK-2-27-160-0-24`; диапазон `2.27.160.0–2.27.160.255`; страна `US`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 384 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:58`.
- **RDAP entities:** HRAMCOVS EDUARDS; netutils-mnt; DEDIK SERVICES LIMITED.
- **Ближайшие ASN:** AS18450 WEBNX - WebNX, Inc. (286 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 18450 207043`.
- **Схема ASN:** [PNG](asn-schemes/01-США-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/2.27.160.18) · [Looking Glass](https://stat.ripe.net/lg/2.27.160.18) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=2.27.160.18&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/2.27.160.18)
- **Скриншоты:** [ASN](screenshots/01-США-overview.png) · [BGP](screenshots/01-США-bgp-paths.png) · [GeoLite](screenshots/01-США-geolocation.png) · [RDAP](screenshots/01-США-rdap.png)

| Нидерланды | 93.152.213.7 | NL | 93.152.213.0/24 | AS207043 DEDIK-IO DEDIK SERVICES LIMITED | DEDIK-IO-NETHERLANDS-NETWORK-93-152-213-0-24 / NL | AS58291 ColoCenter ColoCenter b.v. (280 distinct paths) | [ASN](screenshots/02-Нидерланды-overview.png) · [BGP](screenshots/02-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/02-Нидерланды-geolocation.png) · [RDAP](screenshots/02-Нидерланды-rdap.png) |

### Нидерланды — `93.152.213.7`

- **BGP:** `93.152.213.0/24`; origin **AS207043** — DEDIK-IO DEDIK SERVICES LIMITED; origins seen: AS207043.
- **GeoLite:** `NL`; заявленная локация в TXT `Нидерланды` (NL). Страна совпала.
- **RDAP:** `DEDIK-IO-NETHERLANDS-NETWORK-93-152-213-0-24`; диапазон `93.152.213.0–93.152.213.255`; страна `NL`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 349 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** HRAMCOVS EDUARDS; LIRs-BG-corp; mlnl-mnt; mnt-bg-eurocrypt-1; DEDIK SERVICES LIMITED; Abuse-C Role.
- **Ближайшие ASN:** AS58291 ColoCenter ColoCenter b.v. (280 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 6204 58291 207043`.
- **Схема ASN:** [PNG](asn-schemes/02-Нидерланды-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/93.152.213.7) · [Looking Glass](https://stat.ripe.net/lg/93.152.213.7) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=93.152.213.7&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/93.152.213.7)
- **Скриншоты:** [ASN](screenshots/02-Нидерланды-overview.png) · [BGP](screenshots/02-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/02-Нидерланды-geolocation.png) · [RDAP](screenshots/02-Нидерланды-rdap.png)

| Германия | 194.48.217.2 | DE | 194.48.217.0/24 | AS58212 DATAFOREST dataforest GmbH | DE-DATAFOREST-20210217 / DE | AS3257 GTT-BACKBONE GTT Communications Inc. (99 distinct paths); AS2914 NTT-DATA-2914 - NTT America, Inc. (83 distinct paths); AS6453 AS6453 - TATA COMMUNICATIONS (AMERICA) INC (52 distinct paths) | [ASN](screenshots/03-Германия-overview.png) · [BGP](screenshots/03-Германия-bgp-paths.png) · [GeoLite](screenshots/03-Германия-geolocation.png) · [RDAP](screenshots/03-Германия-rdap.png) |

### Германия — `194.48.217.2`

- **BGP:** `194.48.217.0/24`; origin **AS58212** — DATAFOREST dataforest GmbH; origins seen: AS58212.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `DE-DATAFOREST-20210217`; диапазон `194.48.217.0–194.48.217.255`; страна `DE`; тип `ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** lir-de-dataforest-1-MNT; dataforest GmbH; RIPE-NCC-HM-MNT; Tim Lauderbach; DF Abuse.
- **Ближайшие ASN:** AS3257 GTT-BACKBONE GTT Communications Inc. (99 уник. AS_PATH); AS2914 NTT-DATA-2914 - NTT America, Inc. (83 уник. AS_PATH); AS6453 AS6453 - TATA COMMUNICATIONS (AMERICA) INC (52 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 58212`.
- **Схема ASN:** [PNG](asn-schemes/03-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/194.48.217.2) · [Looking Glass](https://stat.ripe.net/lg/194.48.217.2) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=194.48.217.2&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/194.48.217.2)
- **Скриншоты:** [ASN](screenshots/03-Германия-overview.png) · [BGP](screenshots/03-Германия-bgp-paths.png) · [GeoLite](screenshots/03-Германия-geolocation.png) · [RDAP](screenshots/03-Германия-rdap.png)

| Швеция | 64.188.81.233 | SE | 64.188.81.0/24 | AS209693 OC-NETWORK OC NETWORKS LIMITED | CENTHOST / SE | AS62255 BEMYLINK BiMajLink d.o.o. (243 distinct paths) | [ASN](screenshots/04-Швеция-overview.png) · [BGP](screenshots/04-Швеция-bgp-paths.png) · [GeoLite](screenshots/04-Швеция-geolocation.png) · [RDAP](screenshots/04-Швеция-rdap.png) |

### Швеция — `64.188.81.233`

- **BGP:** `64.188.81.0/24`; origin **AS209693** — OC-NETWORK OC NETWORKS LIMITED; origins seen: AS209693.
- **GeoLite:** `SE`; заявленная локация в TXT `Швеция` (SE). Страна совпала.
- **RDAP:** `CENTHOST`; диапазон `64.188.81.0–64.188.81.255`; страна `SE`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 320 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** lir-us-acedatacenter-1-MNT; OC NETWOKS LIMITED; 1Cent Host; Abuse contact role object.
- **Ближайшие ASN:** AS62255 BEMYLINK BiMajLink d.o.o. (243 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 62255 209693`.
- **Схема ASN:** [PNG](asn-schemes/04-Швеция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/64.188.81.233) · [Looking Glass](https://stat.ripe.net/lg/64.188.81.233) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=64.188.81.233&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/64.188.81.233)
- **Скриншоты:** [ASN](screenshots/04-Швеция-overview.png) · [BGP](screenshots/04-Швеция-bgp-paths.png) · [GeoLite](screenshots/04-Швеция-geolocation.png) · [RDAP](screenshots/04-Швеция-rdap.png)

| Эстония | 31.76.70.231 | US | 31.76.70.0/24 | AS207957 ServHost-AS SERV.HOST GROUP LTD | AS210546-iPv4 / EE | AS49418 AS-NETSHIELD NETSHIELD LTD (256 distinct paths) | [ASN](screenshots/05-Эстония-overview.png) · [BGP](screenshots/05-Эстония-bgp-paths.png) · [GeoLite](screenshots/05-Эстония-geolocation.png) · [RDAP](screenshots/05-Эстония-rdap.png) |

### Эстония — `31.76.70.231`

- **BGP:** `31.76.70.0/24`; origin **AS207957** — ServHost-AS SERV.HOST GROUP LTD; origins seen: AS207957.
- **GeoLite:** `US`; заявленная локация в TXT `Эстония` (EE). Страна не совпадает; проверить внимательно.
- **RDAP:** `AS210546-iPv4`; диапазон `31.76.70.0–31.76.70.255`; страна `EE`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** ABUSE NOC; lir-us-acedatacenter-1-MNT; SERV.HOST GROUP LTD; SERVHOST-MNT.
- **Ближайшие ASN:** AS49418 AS-NETSHIELD NETSHIELD LTD (256 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 49418 207957`.
- **Схема ASN:** [PNG](asn-schemes/05-Эстония-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.76.70.231) · [Looking Glass](https://stat.ripe.net/lg/31.76.70.231) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.76.70.231&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.76.70.231)
- **Скриншоты:** [ASN](screenshots/05-Эстония-overview.png) · [BGP](screenshots/05-Эстония-bgp-paths.png) · [GeoLite](screenshots/05-Эстония-geolocation.png) · [RDAP](screenshots/05-Эстония-rdap.png)

| Финляндия | 31.76.66.104 | US | 31.76.66.0/24 | AS207957 ServHost-AS SERV.HOST GROUP LTD | AS210546-iPv4 / FI | AS49418 AS-NETSHIELD NETSHIELD LTD (256 distinct paths) | [ASN](screenshots/06-Финляндия-overview.png) · [BGP](screenshots/06-Финляндия-bgp-paths.png) · [GeoLite](screenshots/06-Финляндия-geolocation.png) · [RDAP](screenshots/06-Финляндия-rdap.png) |

### Финляндия — `31.76.66.104`

- **BGP:** `31.76.66.0/24`; origin **AS207957** — ServHost-AS SERV.HOST GROUP LTD; origins seen: AS207957.
- **GeoLite:** `US`; заявленная локация в TXT `Финляндия` (FI). Страна не совпадает; проверить внимательно.
- **RDAP:** `AS210546-iPv4`; диапазон `31.76.66.0–31.76.66.255`; страна `FI`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** ABUSE NOC; lir-us-acedatacenter-1-MNT; SERV.HOST GROUP LTD; SERVHOST-MNT.
- **Ближайшие ASN:** AS49418 AS-NETSHIELD NETSHIELD LTD (256 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 49418 207957`.
- **Схема ASN:** [PNG](asn-schemes/06-Финляндия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.76.66.104) · [Looking Glass](https://stat.ripe.net/lg/31.76.66.104) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.76.66.104&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.76.66.104)
- **Скриншоты:** [ASN](screenshots/06-Финляндия-overview.png) · [BGP](screenshots/06-Финляндия-bgp-paths.png) · [GeoLite](screenshots/06-Финляндия-geolocation.png) · [RDAP](screenshots/06-Финляндия-rdap.png)

| Польша | 144.31.241.248 | US | 144.31.241.0/24 | AS207957 ServHost-AS SERV.HOST GROUP LTD | AS210546-iPv4 / PL | AS49418 AS-NETSHIELD NETSHIELD LTD (243 distinct paths) | [ASN](screenshots/07-Польша-overview.png) · [BGP](screenshots/07-Польша-bgp-paths.png) · [GeoLite](screenshots/07-Польша-geolocation.png) · [RDAP](screenshots/07-Польша-rdap.png) |

### Польша — `144.31.241.248`

- **BGP:** `144.31.241.0/24`; origin **AS207957** — ServHost-AS SERV.HOST GROUP LTD; origins seen: AS207957.
- **GeoLite:** `US`; заявленная локация в TXT `Польша` (PL). Страна не совпадает; проверить внимательно.
- **RDAP:** `AS210546-iPv4`; диапазон `144.31.241.0–144.31.241.255`; страна `PL`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 320 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** ABUSE NOC; lir-us-acedatacenter-1-MNT; SERV.HOST GROUP LTD.
- **Ближайшие ASN:** AS49418 AS-NETSHIELD NETSHIELD LTD (243 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 49418 207957`.
- **Схема ASN:** [PNG](asn-schemes/07-Польша-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/144.31.241.248) · [Looking Glass](https://stat.ripe.net/lg/144.31.241.248) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=144.31.241.248&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/144.31.241.248)
- **Скриншоты:** [ASN](screenshots/07-Польша-overview.png) · [BGP](screenshots/07-Польша-bgp-paths.png) · [GeoLite](screenshots/07-Польша-geolocation.png) · [RDAP](screenshots/07-Польша-rdap.png)

| Норвегия | 31.76.5.130 | US | 31.76.5.0/24 | AS207957 ServHost-AS SERV.HOST GROUP LTD | AS210546-iPv4 / NO | AS49418 AS-NETSHIELD NETSHIELD LTD (256 distinct paths) | [ASN](screenshots/08-Норвегия-overview.png) · [BGP](screenshots/08-Норвегия-bgp-paths.png) · [GeoLite](screenshots/08-Норвегия-geolocation.png) · [RDAP](screenshots/08-Норвегия-rdap.png) |

### Норвегия — `31.76.5.130`

- **BGP:** `31.76.5.0/24`; origin **AS207957** — ServHost-AS SERV.HOST GROUP LTD; origins seen: AS207957.
- **GeoLite:** `US`; заявленная локация в TXT `Норвегия` (NO). Страна не совпадает; проверить внимательно.
- **RDAP:** `AS210546-iPv4`; диапазон `31.76.5.0–31.76.5.255`; страна `NO`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** ABUSE NOC; lir-us-acedatacenter-1-MNT; SERV.HOST GROUP LTD.
- **Ближайшие ASN:** AS49418 AS-NETSHIELD NETSHIELD LTD (256 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 49418 207957`.
- **Схема ASN:** [PNG](asn-schemes/08-Норвегия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.76.5.130) · [Looking Glass](https://stat.ripe.net/lg/31.76.5.130) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.76.5.130&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.76.5.130)
- **Скриншоты:** [ASN](screenshots/08-Норвегия-overview.png) · [BGP](screenshots/08-Норвегия-bgp-paths.png) · [GeoLite](screenshots/08-Норвегия-geolocation.png) · [RDAP](screenshots/08-Норвегия-rdap.png)

| Австрия | 150.241.72.108 | US | 150.241.72.0/24 | AS207957 ServHost-AS SERV.HOST GROUP LTD | AS210546-iPv4 / AT | AS49418 AS-NETSHIELD NETSHIELD LTD (243 distinct paths) | [ASN](screenshots/09-Австрия-overview.png) · [BGP](screenshots/09-Австрия-bgp-paths.png) · [GeoLite](screenshots/09-Австрия-geolocation.png) · [RDAP](screenshots/09-Австрия-rdap.png) |

### Австрия — `150.241.72.108`

- **BGP:** `150.241.72.0/24`; origin **AS207957** — ServHost-AS SERV.HOST GROUP LTD; origins seen: AS207957.
- **GeoLite:** `US`; заявленная локация в TXT `Австрия` (AT). Страна не совпадает; проверить внимательно.
- **RDAP:** `AS210546-iPv4`; диапазон `150.241.72.0–150.241.72.255`; страна `AT`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 320 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** ABUSE NOC; lir-us-acedatacenter-1-MNT; SERV.HOST GROUP LTD.
- **Ближайшие ASN:** AS49418 AS-NETSHIELD NETSHIELD LTD (243 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 49418 207957`.
- **Схема ASN:** [PNG](asn-schemes/09-Австрия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/150.241.72.108) · [Looking Glass](https://stat.ripe.net/lg/150.241.72.108) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=150.241.72.108&source=geo) · [RDAP](https://rdap.apnic.net/ip/150.241.72.108)
- **Скриншоты:** [ASN](screenshots/09-Австрия-overview.png) · [BGP](screenshots/09-Австрия-bgp-paths.png) · [GeoLite](screenshots/09-Австрия-geolocation.png) · [RDAP](screenshots/09-Австрия-rdap.png)

| Франция | 194.55.137.139 | CY | 194.55.137.0/24 | AS34534 BULLIONET FBW NETWORKS SAS | NET / FR | AS49434 FBWNETWORKS FBW NETWORKS SAS (266 distinct paths) | [ASN](screenshots/10-Франция-overview.png) · [BGP](screenshots/10-Франция-bgp-paths.png) · [GeoLite](screenshots/10-Франция-geolocation.png) · [RDAP](screenshots/10-Франция-rdap.png) |

### Франция — `194.55.137.139`

- **BGP:** `194.55.137.0/24`; origin **AS34534** — BULLIONET FBW NETWORKS SAS; origins seen: AS34534.
- **GeoLite:** `CY`; заявленная локация в TXT `Франция` (FR). Страна не совпадает; проверить внимательно.
- **RDAP:** `NET`; диапазон `194.55.137.0–194.55.137.255`; страна `FR`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 339 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** lir-hk-beafort-1-MNT; Monitoring Department; BEAFORT LIMITED; Abuse-C Role.
- **Ближайшие ASN:** AS49434 FBWNETWORKS FBW NETWORKS SAS (266 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 6453 49434 34534`.
- **Схема ASN:** [PNG](asn-schemes/10-Франция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/194.55.137.139) · [Looking Glass](https://stat.ripe.net/lg/194.55.137.139) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=194.55.137.139&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/194.55.137.139)
- **Скриншоты:** [ASN](screenshots/10-Франция-overview.png) · [BGP](screenshots/10-Франция-bgp-paths.png) · [GeoLite](screenshots/10-Франция-geolocation.png) · [RDAP](screenshots/10-Франция-rdap.png)

| Гонконг | 139.28.169.201 | RU | 139.28.169.0/24 | AS135330 ADCDATACOM-AS-AP - ADCDATA.COM | BEAFORT_NET / HK | AS6939 HURRICANE - Hurricane Electric LLC (257 distinct paths) | [ASN](screenshots/11-Гонконг-overview.png) · [BGP](screenshots/11-Гонконг-bgp-paths.png) · [GeoLite](screenshots/11-Гонконг-geolocation.png) · [RDAP](screenshots/11-Гонконг-rdap.png) |

### Гонконг — `139.28.169.201`

- **BGP:** `139.28.169.0/24`; origin **AS135330** — ADCDATACOM-AS-AP - ADCDATA.COM; origins seen: AS135330.
- **GeoLite:** `RU`; заявленная локация в TXT `Гонконг` (HK). Страна не совпадает; проверить внимательно.
- **RDAP:** `BEAFORT_NET`; диапазон `139.28.169.0–139.28.169.255`; страна `HK`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 371 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** IPSMAIN; Monitoring Department; BEAFORT LIMITED; Abuse-C Role.
- **Ближайшие ASN:** AS6939 HURRICANE - Hurricane Electric LLC (257 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 6939 135330 135330 135330 135330 135330`.
- **Схема ASN:** [PNG](asn-schemes/11-Гонконг-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/139.28.169.201) · [Looking Glass](https://stat.ripe.net/lg/139.28.169.201) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=139.28.169.201&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/139.28.169.201)
- **Скриншоты:** [ASN](screenshots/11-Гонконг-overview.png) · [BGP](screenshots/11-Гонконг-bgp-paths.png) · [GeoLite](screenshots/11-Гонконг-geolocation.png) · [RDAP](screenshots/11-Гонконг-rdap.png)

| Казахстан | 5.180.21.131 | KZ | 5.180.21.0/24 | AS200590 asnls NLS Kazakhstan LLC | NET / KZ | AS9198 KAZTELECOM-AS JSC Kazakhtelecom (155 distinct paths); AS35168 TNS-Plus-Core TNS-Plus LLP (130 distinct paths) | [ASN](screenshots/12-Казахстан-overview.png) · [BGP](screenshots/12-Казахстан-bgp-paths.png) · [GeoLite](screenshots/12-Казахстан-geolocation.png) · [RDAP](screenshots/12-Казахстан-rdap.png) |

### Казахстан — `5.180.21.131`

- **BGP:** `5.180.21.0/24`; origin **AS200590** — asnls NLS Kazakhstan LLC; origins seen: AS200590.
- **GeoLite:** `KZ`; заявленная локация в TXT `Казахстан` (KZ). Страна совпала.
- **RDAP:** `NET`; диапазон `5.180.21.0–5.180.21.255`; страна `KZ`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 361 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:58`.
- **RDAP entities:** lir-hk-beafort-1-MNT; Monitoring Department; BEAFORT LIMITED; Abuse-C Role.
- **Ближайшие ASN:** AS9198 KAZTELECOM-AS JSC Kazakhtelecom (155 уник. AS_PATH); AS35168 TNS-Plus-Core TNS-Plus LLP (130 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 205103 35168 200590`.
- **Схема ASN:** [PNG](asn-schemes/12-Казахстан-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/5.180.21.131) · [Looking Glass](https://stat.ripe.net/lg/5.180.21.131) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=5.180.21.131&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/5.180.21.131)
- **Скриншоты:** [ASN](screenshots/12-Казахстан-overview.png) · [BGP](screenshots/12-Казахстан-bgp-paths.png) · [GeoLite](screenshots/12-Казахстан-geolocation.png) · [RDAP](screenshots/12-Казахстан-rdap.png)

| Индия | 5.253.28.245 | CY | 5.253.28.0/24 | AS153914 IRINN-NETRANEX-AS-IN - NETRANEX TECHNOLOGIES (INDIA) PRIVATE LIMITED | NET / IN | AS52000 MIRhosting MIRhosting B.V. (269 distinct paths) | [ASN](screenshots/13-Индия-overview.png) · [BGP](screenshots/13-Индия-bgp-paths.png) · [GeoLite](screenshots/13-Индия-geolocation.png) · [RDAP](screenshots/13-Индия-rdap.png) |

### Индия — `5.253.28.245`

- **BGP:** `5.253.28.0/24`; origin **AS153914** — IRINN-NETRANEX-AS-IN - NETRANEX TECHNOLOGIES (INDIA) PRIVATE LIMITED; origins seen: AS153914.
- **GeoLite:** `CY`; заявленная локация в TXT `Индия` (IN). Страна не совпадает; проверить внимательно.
- **RDAP:** `NET`; диапазон `5.253.28.0–5.253.28.255`; страна `IN`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 349 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** lir-hk-beafort-1-MNT; Monitoring Department; BEAFORT LIMITED; Abuse-C Role.
- **Ближайшие ASN:** AS52000 MIRhosting MIRhosting B.V. (269 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 9498 140641 52000 153914`.
- **Схема ASN:** [PNG](asn-schemes/13-Индия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/5.253.28.245) · [Looking Glass](https://stat.ripe.net/lg/5.253.28.245) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=5.253.28.245&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/5.253.28.245)
- **Скриншоты:** [ASN](screenshots/13-Индия-overview.png) · [BGP](screenshots/13-Индия-bgp-paths.png) · [GeoLite](screenshots/13-Индия-geolocation.png) · [RDAP](screenshots/13-Индия-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для PlatinaVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

# CapybaraVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 16  **IP:** 16

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|

Повторяющиеся origin ASN: AS16276 (OVH OVH SAS; 3 IP: Польша, Франция, Франция 2); AS213896 (CHERRYSERVERS6-AS UAB "Cherry Servers"; 2 IP: Германия, Германия 2); AS59642 (CHERRYSERVERS2-AS UAB "Cherry Servers"; 2 IP: Нидерланды, Нидерланды 2)

| США | 84.32.48.20 | US | 84.32.48.0/24 | AS204770 CHERRYSERVERS3-AS UAB "Cherry Servers" | NET-84-32-48-0-24 / LT | AS1299 TWELVE99 Arelion Sweden AB (159 distinct paths); AS60068 CDN77 Datacamp Limited (66 distinct paths); AS2914 NTT-DATA-2914 - NTT America, Inc. (15 distinct paths) | [ASN](screenshots/01-США-overview.png) · [BGP](screenshots/01-США-bgp-paths.png) · [GeoLite](screenshots/01-США-geolocation.png) · [RDAP](screenshots/01-США-rdap.png) |

### США — `84.32.48.20`

- **BGP:** `84.32.48.0/24`; origin **AS204770** — CHERRYSERVERS3-AS UAB "Cherry Servers"; origins seen: AS204770.
- **GeoLite:** `US`; заявленная локация в TXT `США` (US). Страна совпала.
- **RDAP:** `NET-84-32-48-0-24`; диапазон `84.32.48.0–84.32.48.255`; страна `LT`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 320 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** netutils-mnt; Company 64d34573Gz9YjyWz; Private Customer.
- **Ближайшие ASN:** AS1299 TWELVE99 Arelion Sweden AB (159 уник. AS_PATH); AS60068 CDN77 Datacamp Limited (66 уник. AS_PATH); AS2914 NTT-DATA-2914 - NTT America, Inc. (15 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 6461 1299 204770`.
- **Схема ASN:** [PNG](asn-schemes/01-США-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/84.32.48.20) · [Looking Glass](https://stat.ripe.net/lg/84.32.48.20) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=84.32.48.20&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/84.32.48.20)
- **Скриншоты:** [ASN](screenshots/01-США-overview.png) · [BGP](screenshots/01-США-bgp-paths.png) · [GeoLite](screenshots/01-США-geolocation.png) · [RDAP](screenshots/01-США-rdap.png)

| Сингапур | 5.199.167.170 | SG | 5.199.164.0/22 | AS216444 CHERRYSERVERS4-AS UAB "Cherry Servers" | net-212760-290602-253647 / SG | AS3356 LEVEL3 - Level 3 Parent, LLC (134 distinct paths); AS6453 AS6453 - TATA COMMUNICATIONS (AMERICA) INC (85 distinct paths); AS9002 RETN-AS RETN Limited (39 distinct paths) | [ASN](screenshots/02-Сингапур-overview.png) · [BGP](screenshots/02-Сингапур-bgp-paths.png) · [GeoLite](screenshots/02-Сингапур-geolocation.png) · [RDAP](screenshots/02-Сингапур-rdap.png) |

### Сингапур — `5.199.167.170`

- **BGP:** `5.199.164.0/22`; origin **AS216444** — CHERRYSERVERS4-AS UAB "Cherry Servers"; origins seen: AS216444.
- **GeoLite:** `SG`; заявленная локация в TXT `Сингапур` (SG). Страна совпала.
- **RDAP:** `net-212760-290602-253647`; диапазон `5.199.167.168–5.199.167.175`; страна `SG`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 324 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:51:16`.
- **RDAP entities:** Cherry Servers NOC; DUOMENUCENTRAS-MNT; Cherry Servers abuse handling.
- **Ближайшие ASN:** AS3356 LEVEL3 - Level 3 Parent, LLC (134 уник. AS_PATH); AS6453 AS6453 - TATA COMMUNICATIONS (AMERICA) INC (85 уник. AS_PATH); AS9002 RETN-AS RETN Limited (39 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 3356 216444`.
- **Схема ASN:** [PNG](asn-schemes/02-Сингапур-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/5.199.167.170) · [Looking Glass](https://stat.ripe.net/lg/5.199.167.170) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=5.199.167.170&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/5.199.167.170)
- **Скриншоты:** [ASN](screenshots/02-Сингапур-overview.png) · [BGP](screenshots/02-Сингапур-bgp-paths.png) · [GeoLite](screenshots/02-Сингапур-geolocation.png) · [RDAP](screenshots/02-Сингапур-rdap.png)

| Литва | 46.166.169.97 | LT | 46.166.168.0/21 | AS16125 CHERRYSERVERS1-AS UAB "Cherry Servers" | BALTICSERVERS-LT-DEDICATED / LT | AS13194 BITE UAB "Bite Lietuva" (103 distinct paths); AS8764 Telia-Lietuva Telia Lietuva, AB (96 distinct paths); AS1299 TWELVE99 Arelion Sweden AB (68 distinct paths) | [ASN](screenshots/03-Литва-overview.png) · [BGP](screenshots/03-Литва-bgp-paths.png) · [GeoLite](screenshots/03-Литва-geolocation.png) · [RDAP](screenshots/03-Литва-rdap.png) |

### Литва — `46.166.169.97`

- **BGP:** `46.166.168.0/21`; origin **AS16125** — CHERRYSERVERS1-AS UAB "Cherry Servers"; origins seen: AS16125.
- **GeoLite:** `LT`; заявленная локация в TXT `Литва` (LT). Страна совпала.
- **RDAP:** `BALTICSERVERS-LT-DEDICATED`; диапазон `46.166.169.0–46.166.169.255`; страна `LT`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 334 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** DUOMENUCENTRAS-MNT; Martynas Simkevicius; Cherry Servers abuse handling.
- **Ближайшие ASN:** AS13194 BITE UAB "Bite Lietuva" (103 уник. AS_PATH); AS8764 Telia-Lietuva Telia Lietuva, AB (96 уник. AS_PATH); AS1299 TWELVE99 Arelion Sweden AB (68 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 8764 16125`.
- **Схема ASN:** [PNG](asn-schemes/03-Литва-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/46.166.169.97) · [Looking Glass](https://stat.ripe.net/lg/46.166.169.97) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=46.166.169.97&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/46.166.169.97)
- **Скриншоты:** [ASN](screenshots/03-Литва-overview.png) · [BGP](screenshots/03-Литва-bgp-paths.png) · [GeoLite](screenshots/03-Литва-geolocation.png) · [RDAP](screenshots/03-Литва-rdap.png)

| Германия | 88.216.36.44 | DE | 88.216.36.0/24 | AS213896 CHERRYSERVERS6-AS UAB "Cherry Servers" | IPXO / EU | AS1299 TWELVE99 Arelion Sweden AB (136 distinct paths); AS2914 NTT-DATA-2914 - NTT America, Inc. (51 distinct paths); AS9002 RETN-AS RETN Limited (47 distinct paths) | [ASN](screenshots/04-Германия-overview.png) · [BGP](screenshots/04-Германия-bgp-paths.png) · [GeoLite](screenshots/04-Германия-geolocation.png) · [RDAP](screenshots/04-Германия-rdap.png) |

### Германия — `88.216.36.44`

- **BGP:** `88.216.36.0/24`; origin **AS213896** — CHERRYSERVERS6-AS UAB "Cherry Servers"; origins seen: AS213896.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `IPXO`; диапазон `88.216.36.0–88.216.36.255`; страна `EU`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:51:14`.
- **RDAP entities:** netutils-mnt; Company 64d34573Gz9YjyWz; Private Customer.
- **Ближайшие ASN:** AS1299 TWELVE99 Arelion Sweden AB (136 уник. AS_PATH); AS2914 NTT-DATA-2914 - NTT America, Inc. (51 уник. AS_PATH); AS9002 RETN-AS RETN Limited (47 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 213896`.
- **Схема ASN:** [PNG](asn-schemes/04-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/88.216.36.44) · [Looking Glass](https://stat.ripe.net/lg/88.216.36.44) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=88.216.36.44&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/88.216.36.44)
- **Скриншоты:** [ASN](screenshots/04-Германия-overview.png) · [BGP](screenshots/04-Германия-bgp-paths.png) · [GeoLite](screenshots/04-Германия-geolocation.png) · [RDAP](screenshots/04-Германия-rdap.png)

| Финляндия | 83.94.67.33 | FI | 83.94.67.0/24 | AS212238 CDNEXT Datacamp Limited | CDNEXT-HEL / FI | AS60068 CDN77 Datacamp Limited (244 distinct paths) | [ASN](screenshots/05-Финляндия-overview.png) · [BGP](screenshots/05-Финляндия-bgp-paths.png) · [GeoLite](screenshots/05-Финляндия-geolocation.png) · [RDAP](screenshots/05-Финляндия-rdap.png) |

### Финляндия — `83.94.67.33`

- **BGP:** `83.94.67.0/24`; origin **AS212238** — CDNEXT Datacamp Limited; origins seen: AS212238.
- **GeoLite:** `FI`; заявленная локация в TXT `Финляндия` (FI). Страна совпала.
- **RDAP:** `CDNEXT-HEL`; диапазон `83.94.67.0–83.94.67.255`; страна `FI`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 319 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** DATACAMP-MNT; Datacamp Ltd. technical staff; Abuse Contact.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (244 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60068 212238`.
- **Схема ASN:** [PNG](asn-schemes/05-Финляндия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/83.94.67.33) · [Looking Glass](https://stat.ripe.net/lg/83.94.67.33) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=83.94.67.33&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/83.94.67.33)
- **Скриншоты:** [ASN](screenshots/05-Финляндия-overview.png) · [BGP](screenshots/05-Финляндия-bgp-paths.png) · [GeoLite](screenshots/05-Финляндия-geolocation.png) · [RDAP](screenshots/05-Финляндия-rdap.png)

| Нидерланды | 84.32.176.94 | NL | 84.32.176.0/24 | AS59642 CHERRYSERVERS2-AS UAB "Cherry Servers" | NET-84-32-176-0-24 / LT | AS60068 CDN77 Datacamp Limited (175 distinct paths); AS9002 RETN-AS RETN Limited (87 distinct paths); AS1299 TWELVE99 Arelion Sweden AB (3 distinct paths) | [ASN](screenshots/06-Нидерланды-overview.png) · [BGP](screenshots/06-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/06-Нидерланды-geolocation.png) · [RDAP](screenshots/06-Нидерланды-rdap.png) |

### Нидерланды — `84.32.176.94`

- **BGP:** `84.32.176.0/24`; origin **AS59642** — CHERRYSERVERS2-AS UAB "Cherry Servers"; origins seen: AS59642.
- **GeoLite:** `NL`; заявленная локация в TXT `Нидерланды` (NL). Страна совпала.
- **RDAP:** `NET-84-32-176-0-24`; диапазон `84.32.176.0–84.32.176.255`; страна `LT`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 334 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:51:39`.
- **RDAP entities:** netutils-mnt; Company 64d34573Gz9YjyWz; Private Customer.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (175 уник. AS_PATH); AS9002 RETN-AS RETN Limited (87 уник. AS_PATH); AS1299 TWELVE99 Arelion Sweden AB (3 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 60068 59642`.
- **Схема ASN:** [PNG](asn-schemes/06-Нидерланды-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/84.32.176.94) · [Looking Glass](https://stat.ripe.net/lg/84.32.176.94) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=84.32.176.94&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/84.32.176.94)
- **Скриншоты:** [ASN](screenshots/06-Нидерланды-overview.png) · [BGP](screenshots/06-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/06-Нидерланды-geolocation.png) · [RDAP](screenshots/06-Нидерланды-rdap.png)

| Польша | 57.128.233.12 | PL | 57.128.192.0/18 | AS16276 OVH OVH SAS | SD-onenetwork / PL | AS174 COGENT-174 - Cogent Communications, LLC (12 distinct paths); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (9 distinct paths) | [ASN](screenshots/07-Польша-overview.png) · [BGP](screenshots/07-Польша-bgp-paths.png) · [GeoLite](screenshots/07-Польша-geolocation.png) · [RDAP](screenshots/07-Польша-rdap.png) |

### Польша — `57.128.233.12`

- **BGP:** `57.128.192.0/18`; origin **AS16276** — OVH OVH SAS; origins seen: AS16276.
- **GeoLite:** `PL`; заявленная локация в TXT `Польша` (PL). Страна совпала.
- **RDAP:** `SD-onenetwork`; диапазон `57.128.233.0–57.128.233.255`; страна `PL`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 352 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** OVH Sp. z o. o.; OVH PL Technical Contact; OVH-MNT; Abuse-C Role.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (12 уник. AS_PATH); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (9 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276`.
- **Схема ASN:** [PNG](asn-schemes/07-Польша-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/57.128.233.12) · [Looking Glass](https://stat.ripe.net/lg/57.128.233.12) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=57.128.233.12&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/57.128.233.12)
- **Скриншоты:** [ASN](screenshots/07-Польша-overview.png) · [BGP](screenshots/07-Польша-bgp-paths.png) · [GeoLite](screenshots/07-Польша-geolocation.png) · [RDAP](screenshots/07-Польша-rdap.png)

| Эстония | 103.219.152.30 | NL | 103.219.152.0/24 | AS207083 HostSlim-Global-Network HOSTSLIM OU | Hostander / NL | AS3920 PUSHPKT PUSHPKT OU (256 distinct paths) | [ASN](screenshots/08-Эстония-overview.png) · [BGP](screenshots/08-Эстония-bgp-paths.png) · [GeoLite](screenshots/08-Эстония-geolocation.png) · [RDAP](screenshots/08-Эстония-rdap.png) |

### Эстония — `103.219.152.30`

- **BGP:** `103.219.152.0/24`; origin **AS207083** — HostSlim-Global-Network HOSTSLIM OU; origins seen: AS207083.
- **GeoLite:** `NL`; заявленная локация в TXT `Эстония` (EE). Страна не совпадает; проверить внимательно.
- **RDAP:** `Hostander`; диапазон `103.219.152.0–103.219.152.255`; страна `NL`; тип `ALLOCATED NON-PORTABLE.
- **Наблюдаемость RIPE RIS:** 325 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:49:56`.
- **RDAP entities:** IRT-RAKAR-AP; RAKAR INVESTMENTS HOLDING BV administrator.
- **Ближайшие ASN:** AS3920 PUSHPKT PUSHPKT OU (256 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 9002 3920 207083`.
- **Схема ASN:** [PNG](asn-schemes/08-Эстония-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/103.219.152.30) · [Looking Glass](https://stat.ripe.net/lg/103.219.152.30) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=103.219.152.30&source=geo) · [RDAP](https://rdap.apnic.net/ip/103.219.152.30)
- **Скриншоты:** [ASN](screenshots/08-Эстония-overview.png) · [BGP](screenshots/08-Эстония-bgp-paths.png) · [GeoLite](screenshots/08-Эстония-geolocation.png) · [RDAP](screenshots/08-Эстония-rdap.png)

| Германия 2 | 185.191.118.24 | DE | 185.191.118.0/24 | AS213896 CHERRYSERVERS6-AS UAB "Cherry Servers" | LT-CHERRYSERVERS-20170222 / LT | AS1299 TWELVE99 Arelion Sweden AB (137 distinct paths); AS2914 NTT-DATA-2914 - NTT America, Inc. (51 distinct paths); AS9002 RETN-AS RETN Limited (46 distinct paths) | [ASN](screenshots/09-Германия-2-overview.png) · [BGP](screenshots/09-Германия-2-bgp-paths.png) · [GeoLite](screenshots/09-Германия-2-geolocation.png) · [RDAP](screenshots/09-Германия-2-rdap.png) |

### Германия 2 — `185.191.118.24`

- **BGP:** `185.191.118.0/24`; origin **AS213896** — CHERRYSERVERS6-AS UAB "Cherry Servers"; origins seen: AS213896.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия 2` (DE). Страна совпала.
- **RDAP:** `LT-CHERRYSERVERS-20170222`; диапазон `185.191.116.0–185.191.119.255`; страна `LT`; тип `ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** Cherry Servers NOC; DUOMENUCENTRAS-MNT; UAB "Cherry Servers"; RIPE-NCC-HM-MNT; Cherry Servers abuse handling.
- **Ближайшие ASN:** AS1299 TWELVE99 Arelion Sweden AB (137 уник. AS_PATH); AS2914 NTT-DATA-2914 - NTT America, Inc. (51 уник. AS_PATH); AS9002 RETN-AS RETN Limited (46 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 213896`.
- **Схема ASN:** [PNG](asn-schemes/09-Германия-2-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/185.191.118.24) · [Looking Glass](https://stat.ripe.net/lg/185.191.118.24) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=185.191.118.24&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/185.191.118.24)
- **Скриншоты:** [ASN](screenshots/09-Германия-2-overview.png) · [BGP](screenshots/09-Германия-2-bgp-paths.png) · [GeoLite](screenshots/09-Германия-2-geolocation.png) · [RDAP](screenshots/09-Германия-2-rdap.png)

| Нидерланды 2 | 84.32.103.232 | NL | 84.32.103.0/24 | AS59642 CHERRYSERVERS2-AS UAB "Cherry Servers" | IPXO / LT | AS60068 CDN77 Datacamp Limited (85 distinct paths); AS9002 RETN-AS RETN Limited (53 distinct paths); AS1299 TWELVE99 Arelion Sweden AB (39 distinct paths) | [ASN](screenshots/10-Нидерланды-2-overview.png) · [BGP](screenshots/10-Нидерланды-2-bgp-paths.png) · [GeoLite](screenshots/10-Нидерланды-2-geolocation.png) · [RDAP](screenshots/10-Нидерланды-2-rdap.png) |

### Нидерланды 2 — `84.32.103.232`

- **BGP:** `84.32.103.0/24`; origin **AS59642** — CHERRYSERVERS2-AS UAB "Cherry Servers"; origins seen: AS59642.
- **GeoLite:** `NL`; заявленная локация в TXT `Нидерланды 2` (NL). Страна совпала.
- **RDAP:** `IPXO`; диапазон `84.32.103.0–84.32.103.255`; страна `LT`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 332 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** MNT-NTT-LIR; netutils-mnt; Company 64d34573Gz9YjyWz; Private Customer.
- **Ближайшие ASN:** AS60068 CDN77 Datacamp Limited (85 уник. AS_PATH); AS9002 RETN-AS RETN Limited (53 уник. AS_PATH); AS1299 TWELVE99 Arelion Sweden AB (39 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 59642`.
- **Схема ASN:** [PNG](asn-schemes/10-Нидерланды-2-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/84.32.103.232) · [Looking Glass](https://stat.ripe.net/lg/84.32.103.232) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=84.32.103.232&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/84.32.103.232)
- **Скриншоты:** [ASN](screenshots/10-Нидерланды-2-overview.png) · [BGP](screenshots/10-Нидерланды-2-bgp-paths.png) · [GeoLite](screenshots/10-Нидерланды-2-geolocation.png) · [RDAP](screenshots/10-Нидерланды-2-rdap.png)

| Швеция | 84.32.49.207 | SE | 84.32.49.0/24 | AS214159 CHERRYSERVERS5-AS UAB "Cherry Servers" | NET-84-32-49-0-24 / LT | AS2914 NTT-DATA-2914 - NTT America, Inc. (116 distinct paths); AS1299 TWELVE99 Arelion Sweden AB (51 distinct paths); AS9002 RETN-AS RETN Limited (38 distinct paths) | [ASN](screenshots/11-Швеция-overview.png) · [BGP](screenshots/11-Швеция-bgp-paths.png) · [GeoLite](screenshots/11-Швеция-geolocation.png) · [RDAP](screenshots/11-Швеция-rdap.png) |

### Швеция — `84.32.49.207`

- **BGP:** `84.32.49.0/24`; origin **AS214159** — CHERRYSERVERS5-AS UAB "Cherry Servers"; origins seen: AS214159.
- **GeoLite:** `SE`; заявленная локация в TXT `Швеция` (SE). Страна совпала.
- **RDAP:** `NET-84-32-49-0-24`; диапазон `84.32.49.0–84.32.49.255`; страна `LT`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 320 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** netutils-mnt; Company 64d34573Gz9YjyWz; Private Customer.
- **Ближайшие ASN:** AS2914 NTT-DATA-2914 - NTT America, Inc. (116 уник. AS_PATH); AS1299 TWELVE99 Arelion Sweden AB (51 уник. AS_PATH); AS9002 RETN-AS RETN Limited (38 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 214159`.
- **Схема ASN:** [PNG](asn-schemes/11-Швеция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/84.32.49.207) · [Looking Glass](https://stat.ripe.net/lg/84.32.49.207) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=84.32.49.207&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/84.32.49.207)
- **Скриншоты:** [ASN](screenshots/11-Швеция-overview.png) · [BGP](screenshots/11-Швеция-bgp-paths.png) · [GeoLite](screenshots/11-Швеция-geolocation.png) · [RDAP](screenshots/11-Швеция-rdap.png)

| Франция | 162.19.112.239 | FR | 162.19.0.0/17 | AS16276 OVH OVH SAS | SD-onenetwork / FR | AS174 COGENT-174 - Cogent Communications, LLC (14 distinct paths); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (8 distinct paths) | [ASN](screenshots/12-Франция-overview.png) · [BGP](screenshots/12-Франция-bgp-paths.png) · [GeoLite](screenshots/12-Франция-geolocation.png) · [RDAP](screenshots/12-Франция-rdap.png) |

### Франция — `162.19.112.239`

- **BGP:** `162.19.0.0/17`; origin **AS16276** — OVH OVH SAS; origins seen: AS16276.
- **GeoLite:** `FR`; заявленная локация в TXT `Франция` (FR). Страна совпала.
- **RDAP:** `SD-onenetwork`; диапазон `162.19.112.0–162.19.112.255`; страна `FR`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 352 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** OVH SAS; OVH Technical Contact; OVH-MNT; Abuse-C Role.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (14 уник. AS_PATH); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (8 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276`.
- **Схема ASN:** [PNG](asn-schemes/12-Франция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/162.19.112.239) · [Looking Glass](https://stat.ripe.net/lg/162.19.112.239) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=162.19.112.239&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/162.19.112.239)
- **Скриншоты:** [ASN](screenshots/12-Франция-overview.png) · [BGP](screenshots/12-Франция-bgp-paths.png) · [GeoLite](screenshots/12-Франция-geolocation.png) · [RDAP](screenshots/12-Франция-rdap.png)

| Франция 2 | 37.59.187.2 | FR | 37.59.0.0/16 | AS16276 OVH OVH SAS | SD-onenetwork / FR | AS174 COGENT-174 - Cogent Communications, LLC (13 distinct paths); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (8 distinct paths) | [ASN](screenshots/13-Франция-2-overview.png) · [BGP](screenshots/13-Франция-2-bgp-paths.png) · [GeoLite](screenshots/13-Франция-2-geolocation.png) · [RDAP](screenshots/13-Франция-2-rdap.png) |

### Франция 2 — `37.59.187.2`

- **BGP:** `37.59.0.0/16`; origin **AS16276** — OVH OVH SAS; origins seen: AS16276.
- **GeoLite:** `FR`; заявленная локация в TXT `Франция 2` (FR). Страна совпала.
- **RDAP:** `SD-onenetwork`; диапазон `37.59.187.0–37.59.187.255`; страна `FR`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 352 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:58`.
- **RDAP entities:** OVH SAS; OVH Technical Contact; OVH-MNT; Abuse-C Role.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (13 уник. AS_PATH); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (8 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276`.
- **Схема ASN:** [PNG](asn-schemes/13-Франция-2-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/37.59.187.2) · [Looking Glass](https://stat.ripe.net/lg/37.59.187.2) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=37.59.187.2&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/37.59.187.2)
- **Скриншоты:** [ASN](screenshots/13-Франция-2-overview.png) · [BGP](screenshots/13-Франция-2-bgp-paths.png) · [GeoLite](screenshots/13-Франция-2-geolocation.png) · [RDAP](screenshots/13-Франция-2-rdap.png)

| Япония | 109.109.165.223 | JP | 109.109.164.0/22 | AS210162 CHERRYSERVERS7-AS UAB "Cherry Servers" | TY15-infra-2 / JP | AS3356 LEVEL3 - Level 3 Parent, LLC (93 distinct paths); AS9002 RETN-AS RETN Limited (81 distinct paths); AS3491 PCCWG-APAC-HK - PCCW Global (HK) Ltd. (41 distinct paths) | [ASN](screenshots/14-Япония-overview.png) · [BGP](screenshots/14-Япония-bgp-paths.png) · [GeoLite](screenshots/14-Япония-geolocation.png) · [RDAP](screenshots/14-Япония-rdap.png) |

### Япония — `109.109.165.223`

- **BGP:** `109.109.164.0/22`; origin **AS210162** — CHERRYSERVERS7-AS UAB "Cherry Servers"; origins seen: AS210162.
- **GeoLite:** `JP`; заявленная локация в TXT `Япония` (JP). Страна совпала.
- **RDAP:** `TY15-infra-2`; диапазон `109.109.165.0–109.109.165.255`; страна `JP`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 325 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** ALEJA4ASGN-MNT; Cherry Servers NOC; DUOMENUCENTRAS-MNT; Cherry Servers abuse handling.
- **Ближайшие ASN:** AS3356 LEVEL3 - Level 3 Parent, LLC (93 уник. AS_PATH); AS9002 RETN-AS RETN Limited (81 уник. AS_PATH); AS3491 PCCWG-APAC-HK - PCCW Global (HK) Ltd. (41 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 3491 210162`.
- **Схема ASN:** [PNG](asn-schemes/14-Япония-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/109.109.165.223) · [Looking Glass](https://stat.ripe.net/lg/109.109.165.223) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=109.109.165.223&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/109.109.165.223)
- **Скриншоты:** [ASN](screenshots/14-Япония-overview.png) · [BGP](screenshots/14-Япония-bgp-paths.png) · [GeoLite](screenshots/14-Япония-geolocation.png) · [RDAP](screenshots/14-Япония-rdap.png)

| Беларусь | 78.140.253.16 | BY | 78.140.253.0/24 | AS209283 AS-ITGLOBALCOM-BY ITGLOBALCOM BEL LLC | BY-ITGLOBAL / BY | AS60330 BCTBY-AS Belarusian Cloud Technologies LLC (279 distinct paths) | [ASN](screenshots/15-Беларусь-overview.png) · [BGP](screenshots/15-Беларусь-bgp-paths.png) · [GeoLite](screenshots/15-Беларусь-geolocation.png) · [RDAP](screenshots/15-Беларусь-rdap.png) |

### Беларусь — `78.140.253.16`

- **BGP:** `78.140.253.0/24`; origin **AS209283** — AS-ITGLOBALCOM-BY ITGLOBALCOM BEL LLC; origins seen: AS209283.
- **GeoLite:** `BY`; заявленная локация в TXT `Беларусь` (BY). Страна совпала.
- **RDAP:** `BY-ITGLOBAL`; диапазон `78.140.253.0–78.140.253.255`; страна `BY`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 378 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** ITGLOBAL BY LIR Administrators; MNT-ITGLOBAL-BY; Abuse-C Role BY.
- **Ближайшие ASN:** AS60330 BCTBY-AS Belarusian Cloud Technologies LLC (279 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60280 60330 209283`.
- **Схема ASN:** [PNG](asn-schemes/15-Беларусь-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/78.140.253.16) · [Looking Glass](https://stat.ripe.net/lg/78.140.253.16) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=78.140.253.16&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/78.140.253.16)
- **Скриншоты:** [ASN](screenshots/15-Беларусь-overview.png) · [BGP](screenshots/15-Беларусь-bgp-paths.png) · [GeoLite](screenshots/15-Беларусь-geolocation.png) · [RDAP](screenshots/15-Беларусь-rdap.png)

| Казахстан | 176.123.181.59 | KZ | 176.123.180.0/22 | AS57008 ITGLOBAL-AS ITGLOBAL.COM KZ LLP | KZ-ITGLOBAL / KZ | AS35168 TNS-Plus-Core TNS-Plus LLP (155 distinct paths); AS198803 ALLONS-AS Alonstelefonstroy LLP (120 distinct paths) | [ASN](screenshots/16-Казахстан-overview.png) · [BGP](screenshots/16-Казахстан-bgp-paths.png) · [GeoLite](screenshots/16-Казахстан-geolocation.png) · [RDAP](screenshots/16-Казахстан-rdap.png) |

### Казахстан — `176.123.181.59`

- **BGP:** `176.123.180.0/22`; origin **AS57008** — ITGLOBAL-AS ITGLOBAL.COM KZ LLP; origins seen: AS57008.
- **GeoLite:** `KZ`; заявленная локация в TXT `Казахстан` (KZ). Страна совпала.
- **RDAP:** `KZ-ITGLOBAL`; диапазон `176.123.180.0–176.123.183.255`; страна `KZ`; тип `ASSIGNED PI.
- **Наблюдаемость RIPE RIS:** 359 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** Denis Shepin; lir-kz-itglobal-1-MNT; ITGLOBAL.COM KZ LLP; RIPE-NCC-END-MNT; Abuse-C Role.
- **Ближайшие ASN:** AS35168 TNS-Plus-Core TNS-Plus LLP (155 уник. AS_PATH); AS198803 ALLONS-AS Alonstelefonstroy LLP (120 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 20485 35168 57008`.
- **Схема ASN:** [PNG](asn-schemes/16-Казахстан-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/176.123.181.59) · [Looking Glass](https://stat.ripe.net/lg/176.123.181.59) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=176.123.181.59&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/176.123.181.59)
- **Скриншоты:** [ASN](screenshots/16-Казахстан-overview.png) · [BGP](screenshots/16-Казахстан-bgp-paths.png) · [GeoLite](screenshots/16-Казахстан-geolocation.png) · [RDAP](screenshots/16-Казахстан-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для CapybaraVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

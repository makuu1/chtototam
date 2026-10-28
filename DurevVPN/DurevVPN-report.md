# DurevVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 22  **IP:** 22

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|

Повторяющиеся origin ASN: AS215540 (GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP; 4 IP: Нидерланды, Латвия, Турция, Польша); AS9009 (M247 M247 Europe SRL; 3 IP: Гонконг, Австралия, Бразилия); AS204957 (GREENFLOID-AS ROUTE 95 LLC; 3 IP: США, Сингапур, Украина); AS16276 (OVH OVH SAS; 3 IP: Великобритания, Германия, Франция); AS58061 (SCALAXY-AS Scalaxy B.V.; 2 IP: Казахстан, Аргентина)

| Гонконг | 38.180.188.114 | HK | 38.180.188.0/24 | AS9009 M247 M247 Europe SRL | CLOUD-NETWORK-HK / — | AS174 COGENT-174 - Cogent Communications, LLC (88 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (79 distinct paths); AS2914 NTT-DATA-2914 - NTT America, Inc. (53 distinct paths) | [ASN](screenshots/01-Гонконг-overview.png) · [BGP](screenshots/01-Гонконг-bgp-paths.png) · [GeoLite](screenshots/01-Гонконг-geolocation.png) · [RDAP](screenshots/01-Гонконг-rdap.png) |

### Гонконг — `38.180.188.114`

- **BGP:** `38.180.188.0/24`; origin **AS9009** — M247 M247 Europe SRL; origins seen: AS9009.
- **GeoLite:** `HK`; заявленная локация в TXT `Гонконг` (HK). Страна совпала.
- **RDAP:** `CLOUD-NETWORK-HK`; диапазон `38.180.188.0–38.180.188.255`; страна `—`; тип `ASSIGNMENT.
- **Наблюдаемость RIPE RIS:** 321 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:51:14`.
- **RDAP entities:** 3NT SOLUTIONS LLP.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (88 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (79 уник. AS_PATH); AS2914 NTT-DATA-2914 - NTT America, Inc. (53 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 9009`.
- **Схема ASN:** [PNG](asn-schemes/01-Гонконг-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/38.180.188.114) · [Looking Glass](https://stat.ripe.net/lg/38.180.188.114) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=38.180.188.114&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/38.180.188.114)
- **Скриншоты:** [ASN](screenshots/01-Гонконг-overview.png) · [BGP](screenshots/01-Гонконг-bgp-paths.png) · [GeoLite](screenshots/01-Гонконг-geolocation.png) · [RDAP](screenshots/01-Гонконг-rdap.png)

| США | 195.123.233.222 | US | 195.123.232.0/22 | AS204957 GREENFLOID-AS ROUTE 95 LLC | GF-EWR-NET / US | AS26548 PUREVOLTAGE-INC - PureVoltage Hosting Inc. (275 distinct paths) | [ASN](screenshots/02-США-overview.png) · [BGP](screenshots/02-США-bgp-paths.png) · [GeoLite](screenshots/02-США-geolocation.png) · [RDAP](screenshots/02-США-rdap.png) |

### США — `195.123.233.222`

- **BGP:** `195.123.232.0/22`; origin **AS204957** — GREENFLOID-AS ROUTE 95 LLC; origins seen: AS204957.
- **GeoLite:** `US`; заявленная локация в TXT `США` (US). Страна совпала.
- **RDAP:** `GF-EWR-NET`; диапазон `195.123.232.0–195.123.235.255`; страна `US`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 373 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** GREEN FLOID EU Support Team; GRFL-MNT; Green Floid LLC; GreenFloid Abuse handler.
- **Ближайшие ASN:** AS26548 PUREVOLTAGE-INC - PureVoltage Hosting Inc. (275 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 971 26548 204957`.
- **Схема ASN:** [PNG](asn-schemes/02-США-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/195.123.233.222) · [Looking Glass](https://stat.ripe.net/lg/195.123.233.222) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=195.123.233.222&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/195.123.233.222)
- **Скриншоты:** [ASN](screenshots/02-США-overview.png) · [BGP](screenshots/02-США-bgp-paths.png) · [GeoLite](screenshots/02-США-geolocation.png) · [RDAP](screenshots/02-США-rdap.png)

| Нидерланды | 45.82.13.141 | AL | 45.82.13.0/24 | AS215540 GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP | GCS_SER-NET / NL | AS48014 AlbHost Albanian Hosting SH.P.K. (263 distinct paths) | [ASN](screenshots/03-Нидерланды-overview.png) · [BGP](screenshots/03-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/03-Нидерланды-geolocation.png) · [RDAP](screenshots/03-Нидерланды-rdap.png) |

### Нидерланды — `45.82.13.141`

- **BGP:** `45.82.13.0/24`; origin **AS215540** — GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP; origins seen: AS215540.
- **GeoLite:** `AL`; заявленная локация в TXT `Нидерланды` (NL). Страна не совпадает; проверить внимательно.
- **RDAP:** `GCS_SER-NET`; диапазон `45.82.13.0–45.82.13.255`; страна `NL`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 351 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** Global Connectivity Solutions; INETTECH-MNT; GLOBAL CONNECTIVITY SOLUTIONS LLP; ru-quasar-1-mnt; Abuse contact role object.
- **Ближайшие ASN:** AS48014 AlbHost Albanian Hosting SH.P.K. (263 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 6204 44592 49581 48014 48014 215540`.
- **Схема ASN:** [PNG](asn-schemes/03-Нидерланды-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/45.82.13.141) · [Looking Glass](https://stat.ripe.net/lg/45.82.13.141) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=45.82.13.141&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/45.82.13.141)
- **Скриншоты:** [ASN](screenshots/03-Нидерланды-overview.png) · [BGP](screenshots/03-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/03-Нидерланды-geolocation.png) · [RDAP](screenshots/03-Нидерланды-rdap.png)

| Канада | 79.141.166.36 | CA | 79.141.166.0/23 | AS201525 HZ-CA-AS HZ Hosting Ltd | HZ-NA27 / CA | AS3356 LEVEL3 - Level 3 Parent, LLC (127 distinct paths); AS174 COGENT-174 - Cogent Communications, LLC (126 distinct paths) | [ASN](screenshots/04-Канада-overview.png) · [BGP](screenshots/04-Канада-bgp-paths.png) · [GeoLite](screenshots/04-Канада-geolocation.png) · [RDAP](screenshots/04-Канада-rdap.png) |

### Канада — `79.141.166.36`

- **BGP:** `79.141.166.0/23`; origin **AS201525** — HZ-CA-AS HZ Hosting Ltd; origins seen: AS201525.
- **GeoLite:** `CA`; заявленная локация в TXT `Канада` (CA). Страна совпала.
- **RDAP:** `HZ-NA27`; диапазон `79.141.166.0–79.141.167.255`; страна `CA`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 322 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** HZ-HOSTING-LTD; Vilko Damianov; ABUSE DEPARTMENT.
- **Ближайшие ASN:** AS3356 LEVEL3 - Level 3 Parent, LLC (127 уник. AS_PATH); AS174 COGENT-174 - Cogent Communications, LLC (126 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 201525`.
- **Схема ASN:** [PNG](asn-schemes/04-Канада-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/79.141.166.36) · [Looking Glass](https://stat.ripe.net/lg/79.141.166.36) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=79.141.166.36&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/79.141.166.36)
- **Скриншоты:** [ASN](screenshots/04-Канада-overview.png) · [BGP](screenshots/04-Канада-bgp-paths.png) · [GeoLite](screenshots/04-Канада-geolocation.png) · [RDAP](screenshots/04-Канада-rdap.png)

| Великобритания | 57.129.130.87 | GB | 57.129.128.0/17 | AS16276 OVH OVH SAS | SD-onenetwork / GB | AS174 COGENT-174 - Cogent Communications, LLC (14 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (11 distinct paths); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 distinct paths) | [ASN](screenshots/05-Великобритания-overview.png) · [BGP](screenshots/05-Великобритания-bgp-paths.png) · [GeoLite](screenshots/05-Великобритания-geolocation.png) · [RDAP](screenshots/05-Великобритания-rdap.png) |

### Великобритания — `57.129.130.87`

- **BGP:** `57.129.128.0/17`; origin **AS16276** — OVH OVH SAS; origins seen: AS16276.
- **GeoLite:** `GB`; заявленная локация в TXT `Великобритания` (GB). Страна совпала.
- **RDAP:** `SD-onenetwork`; диапазон `57.129.130.0–57.129.130.255`; страна `GB`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 352 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** OVH Ltd; OVH UK Technical Contact; OVH-MNT; Abuse-C Role.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (14 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (11 уник. AS_PATH); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276`.
- **Схема ASN:** [PNG](asn-schemes/05-Великобритания-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/57.129.130.87) · [Looking Glass](https://stat.ripe.net/lg/57.129.130.87) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=57.129.130.87&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/57.129.130.87)
- **Скриншоты:** [ASN](screenshots/05-Великобритания-overview.png) · [BGP](screenshots/05-Великобритания-bgp-paths.png) · [GeoLite](screenshots/05-Великобритания-geolocation.png) · [RDAP](screenshots/05-Великобритания-rdap.png)

| Молдова | 159.253.120.226 | MD | 159.253.120.0/24 | AS200019 AlexHost ALEXHOST S.R.L. | AlexHost / MD | AS6939 HURRICANE - Hurricane Electric LLC (136 distinct paths); AS9002 RETN-AS RETN Limited (49 distinct paths); AS174 COGENT-174 - Cogent Communications, LLC (39 distinct paths) | [ASN](screenshots/06-Молдова-overview.png) · [BGP](screenshots/06-Молдова-bgp-paths.png) · [GeoLite](screenshots/06-Молдова-geolocation.png) · [RDAP](screenshots/06-Молдова-rdap.png) |

### Молдова — `159.253.120.226`

- **BGP:** `159.253.120.0/24`; origin **AS200019** — AlexHost ALEXHOST S.R.L.; origins seen: AS200019.
- **GeoLite:** `MD`; заявленная локация в TXT `Молдова` (MD). Страна совпала.
- **RDAP:** `AlexHost`; диапазон `159.253.120.128–159.253.120.255`; страна `MD`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 377 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** IPSMAIN; ALEXHOST SRL; AlexHost SRL; Abuse-C Role.
- **Ближайшие ASN:** AS6939 HURRICANE - Hurricane Electric LLC (136 уник. AS_PATH); AS9002 RETN-AS RETN Limited (49 уник. AS_PATH); AS174 COGENT-174 - Cogent Communications, LLC (39 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 200019 200019 200019`.
- **Схема ASN:** [PNG](asn-schemes/06-Молдова-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/159.253.120.226) · [Looking Glass](https://stat.ripe.net/lg/159.253.120.226) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=159.253.120.226&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/159.253.120.226)
- **Скриншоты:** [ASN](screenshots/06-Молдова-overview.png) · [BGP](screenshots/06-Молдова-bgp-paths.png) · [GeoLite](screenshots/06-Молдова-geolocation.png) · [RDAP](screenshots/06-Молдова-rdap.png)

| Латвия | 62.60.234.201 | LV | 62.60.234.0/24 | AS215540 GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP | LV_SER-NET / LV | AS39900 GOODTEC SIA GOOD (256 distinct paths) | [ASN](screenshots/07-Латвия-overview.png) · [BGP](screenshots/07-Латвия-bgp-paths.png) · [GeoLite](screenshots/07-Латвия-geolocation.png) · [RDAP](screenshots/07-Латвия-rdap.png) |

### Латвия — `62.60.234.201`

- **BGP:** `62.60.234.0/24`; origin **AS215540** — GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP; origins seen: AS215540.
- **GeoLite:** `LV`; заявленная локация в TXT `Латвия` (LV). Страна совпала.
- **RDAP:** `LV_SER-NET`; диапазон `62.60.234.0–62.60.234.255`; страна `LV`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 324 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:58`.
- **RDAP entities:** Global Connectivity Solutions; lir-ae-royal-1-MNT; GLOBAL CONNECTIVITY SOLUTIONS LLP; Abuse contact role object.
- **Ближайшие ASN:** AS39900 GOODTEC SIA GOOD (256 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 9002 39900 215540`.
- **Схема ASN:** [PNG](asn-schemes/07-Латвия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/62.60.234.201) · [Looking Glass](https://stat.ripe.net/lg/62.60.234.201) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=62.60.234.201&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/62.60.234.201)
- **Скриншоты:** [ASN](screenshots/07-Латвия-overview.png) · [BGP](screenshots/07-Латвия-bgp-paths.png) · [GeoLite](screenshots/07-Латвия-geolocation.png) · [RDAP](screenshots/07-Латвия-rdap.png)

| Турция | 81.177.215.53 | RU | 81.177.215.0/24 | AS215540 GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP | GCS_SER-NET / TR | AS48014 AlbHost Albanian Hosting SH.P.K. (253 distinct paths) | [ASN](screenshots/08-Турция-overview.png) · [BGP](screenshots/08-Турция-bgp-paths.png) · [GeoLite](screenshots/08-Турция-geolocation.png) · [RDAP](screenshots/08-Турция-rdap.png) |

### Турция — `81.177.215.53`

- **BGP:** `81.177.215.0/24`; origin **AS215540** — GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP; origins seen: AS215540.
- **GeoLite:** `RU`; заявленная локация в TXT `Турция` (TR). Страна не совпадает; проверить внимательно.
- **RDAP:** `GCS_SER-NET`; диапазон `81.177.215.0–81.177.215.255`; страна `TR`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 321 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** Global Connectivity Solutions; IPSMAIN; GLOBAL CONNECTIVITY SOLUTIONS LLP; Abuse contact role object.
- **Ближайшие ASN:** AS48014 AlbHost Albanian Hosting SH.P.K. (253 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 9121 6205 60068 48014 215540`.
- **Схема ASN:** [PNG](asn-schemes/08-Турция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/81.177.215.53) · [Looking Glass](https://stat.ripe.net/lg/81.177.215.53) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=81.177.215.53&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/81.177.215.53)
- **Скриншоты:** [ASN](screenshots/08-Турция-overview.png) · [BGP](screenshots/08-Турция-bgp-paths.png) · [GeoLite](screenshots/08-Турция-geolocation.png) · [RDAP](screenshots/08-Турция-rdap.png)

| Германия | 57.129.83.159 | DE | 57.129.0.0/17 | AS16276 OVH OVH SAS | SD-onenetwork / DE | AS174 COGENT-174 - Cogent Communications, LLC (14 distinct paths); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (8 distinct paths) | [ASN](screenshots/09-Германия-overview.png) · [BGP](screenshots/09-Германия-bgp-paths.png) · [GeoLite](screenshots/09-Германия-geolocation.png) · [RDAP](screenshots/09-Германия-rdap.png) |

### Германия — `57.129.83.159`

- **BGP:** `57.129.0.0/17`; origin **AS16276** — OVH OVH SAS; origins seen: AS16276.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `SD-onenetwork`; диапазон `57.129.83.0–57.129.83.255`; страна `DE`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 352 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** OVH GmbH; OVH DE Technical Contact; OVH-MNT; Abuse contact role object.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (14 уник. AS_PATH); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (8 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276`.
- **Схема ASN:** [PNG](asn-schemes/09-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/57.129.83.159) · [Looking Glass](https://stat.ripe.net/lg/57.129.83.159) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=57.129.83.159&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/57.129.83.159)
- **Скриншоты:** [ASN](screenshots/09-Германия-overview.png) · [BGP](screenshots/09-Германия-bgp-paths.png) · [GeoLite](screenshots/09-Германия-geolocation.png) · [RDAP](screenshots/09-Германия-rdap.png)

| Финляндия | 138.124.8.147 | CH | 138.124.8.0/24 | AS213887 WAICORE-LTD WAIcore Ltd | FI_138_124_8 / FI | AS30823 AUROLOGIC aurologic GmbH (253 distinct paths) | [ASN](screenshots/10-Финляндия-overview.png) · [BGP](screenshots/10-Финляндия-bgp-paths.png) · [GeoLite](screenshots/10-Финляндия-geolocation.png) · [RDAP](screenshots/10-Финляндия-rdap.png) |

### Финляндия — `138.124.8.147`

- **BGP:** `138.124.8.0/24`; origin **AS213887** — WAICORE-LTD WAIcore Ltd; origins seen: AS213887.
- **GeoLite:** `CH`; заявленная локация в TXT `Финляндия` (FI). Страна не совпадает; проверить внимательно.
- **RDAP:** `FI_138_124_8`; диапазон `138.124.8.0–138.124.8.255`; страна `FI`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 322 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** NOC; WAIcore Ltd; WAICORE-MNT; Abuse contact role object.
- **Ближайшие ASN:** AS30823 AUROLOGIC aurologic GmbH (253 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 30823 213887`.
- **Схема ASN:** [PNG](asn-schemes/10-Финляндия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/138.124.8.147) · [Looking Glass](https://stat.ripe.net/lg/138.124.8.147) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=138.124.8.147&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/138.124.8.147)
- **Скриншоты:** [ASN](screenshots/10-Финляндия-overview.png) · [BGP](screenshots/10-Финляндия-bgp-paths.png) · [GeoLite](screenshots/10-Финляндия-geolocation.png) · [RDAP](screenshots/10-Финляндия-rdap.png)

| Австралия | 38.180.128.5 | AU | 38.180.128.0/23 | AS9009 M247 M247 Europe SRL | CLOUD-NETWORK-AU / — | AS4637 ASN-TELSTRA-GLOBAL - Telstra Global (150 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (65 distinct paths); AS6939 HURRICANE - Hurricane Electric LLC (23 distinct paths) | [ASN](screenshots/11-Австралия-overview.png) · [BGP](screenshots/11-Австралия-bgp-paths.png) · [GeoLite](screenshots/11-Австралия-geolocation.png) · [RDAP](screenshots/11-Австралия-rdap.png) |

### Австралия — `38.180.128.5`

- **BGP:** `38.180.128.0/23`; origin **AS9009** — M247 M247 Europe SRL; origins seen: AS9009.
- **GeoLite:** `AU`; заявленная локация в TXT `Австралия` (AU). Страна совпала.
- **RDAP:** `CLOUD-NETWORK-AU`; диапазон `38.180.128.0–38.180.129.255`; страна `—`; тип `ASSIGNMENT.
- **Наблюдаемость RIPE RIS:** 322 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** 3NT SOLUTIONS LLP.
- **Ближайшие ASN:** AS4637 ASN-TELSTRA-GLOBAL - Telstra Global (150 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (65 уник. AS_PATH); AS6939 HURRICANE - Hurricane Electric LLC (23 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 3356 9009 9009`.
- **Схема ASN:** [PNG](asn-schemes/11-Австралия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/38.180.128.5) · [Looking Glass](https://stat.ripe.net/lg/38.180.128.5) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=38.180.128.5&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/38.180.128.5)
- **Скриншоты:** [ASN](screenshots/11-Австралия-overview.png) · [BGP](screenshots/11-Австралия-bgp-paths.png) · [GeoLite](screenshots/11-Австралия-geolocation.png) · [RDAP](screenshots/11-Австралия-rdap.png)

| Франция | 162.19.90.249 | FR | 162.19.0.0/17 | AS16276 OVH OVH SAS | SD-onenetwork / FR | AS174 COGENT-174 - Cogent Communications, LLC (14 distinct paths); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (8 distinct paths) | [ASN](screenshots/12-Франция-overview.png) · [BGP](screenshots/12-Франция-bgp-paths.png) · [GeoLite](screenshots/12-Франция-geolocation.png) · [RDAP](screenshots/12-Франция-rdap.png) |

### Франция — `162.19.90.249`

- **BGP:** `162.19.0.0/17`; origin **AS16276** — OVH OVH SAS; origins seen: AS16276.
- **GeoLite:** `FR`; заявленная локация в TXT `Франция` (FR). Страна совпала.
- **RDAP:** `SD-onenetwork`; диапазон `162.19.90.0–162.19.90.255`; страна `FR`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 352 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** OVH SAS; OVH Technical Contact; OVH-MNT; Abuse-C Role.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (14 уник. AS_PATH); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (8 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276`.
- **Схема ASN:** [PNG](asn-schemes/12-Франция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/162.19.90.249) · [Looking Glass](https://stat.ripe.net/lg/162.19.90.249) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=162.19.90.249&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/162.19.90.249)
- **Скриншоты:** [ASN](screenshots/12-Франция-overview.png) · [BGP](screenshots/12-Франция-bgp-paths.png) · [GeoLite](screenshots/12-Франция-geolocation.png) · [RDAP](screenshots/12-Франция-rdap.png)

| ОАЭ | 89.44.80.195 | AE | 89.44.80.0/24 | AS59711 HZ-EU-AS HZ Hosting Ltd | BG-HZHOSTING-20051129 / AE | AS174 COGENT-174 - Cogent Communications, LLC (87 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (79 distinct paths); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (37 distinct paths) | [ASN](screenshots/13-ОАЭ-overview.png) · [BGP](screenshots/13-ОАЭ-bgp-paths.png) · [GeoLite](screenshots/13-ОАЭ-geolocation.png) · [RDAP](screenshots/13-ОАЭ-rdap.png) |

### ОАЭ — `89.44.80.195`

- **BGP:** `89.44.80.0/24`; origin **AS59711** — HZ-EU-AS HZ Hosting Ltd; origins seen: AS59711.
- **GeoLite:** `AE`; заявленная локация в TXT `ОАЭ` (AE). Страна совпала.
- **RDAP:** `BG-HZHOSTING-20051129`; диапазон `89.44.80.0–89.44.80.255`; страна `AE`; тип `ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 324 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** HZ-HOSTING-LTD; HZ Hosting Ltd; RIPE-NCC-HM-MNT; Vilko Damianov; ABUSE DEPARTMENT.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (87 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (79 уник. AS_PATH); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (37 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 59711`.
- **Схема ASN:** [PNG](asn-schemes/13-ОАЭ-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/89.44.80.195) · [Looking Glass](https://stat.ripe.net/lg/89.44.80.195) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=89.44.80.195&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/89.44.80.195)
- **Скриншоты:** [ASN](screenshots/13-ОАЭ-overview.png) · [BGP](screenshots/13-ОАЭ-bgp-paths.png) · [GeoLite](screenshots/13-ОАЭ-geolocation.png) · [RDAP](screenshots/13-ОАЭ-rdap.png)

| Польша | 77.83.246.150 | PL | 77.83.246.0/24 | AS215540 GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP | GIR_SER-NET01 / PL | AS48014 AlbHost Albanian Hosting SH.P.K. (280 distinct paths) | [ASN](screenshots/14-Польша-overview.png) · [BGP](screenshots/14-Польша-bgp-paths.png) · [GeoLite](screenshots/14-Польша-geolocation.png) · [RDAP](screenshots/14-Польша-rdap.png) |

### Польша — `77.83.246.150`

- **BGP:** `77.83.246.0/24`; origin **AS215540** — GCS-AS GLOBAL CONNECTIVITY SOLUTIONS LLP; origins seen: AS215540.
- **GeoLite:** `PL`; заявленная локация в TXT `Польша` (PL). Страна совпала.
- **RDAP:** `GIR_SER-NET01`; диапазон `77.83.246.0–77.83.246.255`; страна `PL`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 376 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** Evgenii M.; GLOBAL CONNECTIVITY SOLUTIONS LLP; proxy-six-mnt; Abuse contact role object.
- **Ближайшие ASN:** AS48014 AlbHost Albanian Hosting SH.P.K. (280 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 201814 201814 48014 215540`.
- **Схема ASN:** [PNG](asn-schemes/14-Польша-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/77.83.246.150) · [Looking Glass](https://stat.ripe.net/lg/77.83.246.150) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=77.83.246.150&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/77.83.246.150)
- **Скриншоты:** [ASN](screenshots/14-Польша-overview.png) · [BGP](screenshots/14-Польша-bgp-paths.png) · [GeoLite](screenshots/14-Польша-geolocation.png) · [RDAP](screenshots/14-Польша-rdap.png)

| Индия | 86.107.100.232 | IN | 86.107.100.0/24 | AS26383 ASNET - Baxet Group Inc. | BAXET-GROUP-INC / US | AS8849 MELBICOM-EU-AS Melbikomas UAB (252 distinct paths) | [ASN](screenshots/15-Индия-overview.png) · [BGP](screenshots/15-Индия-bgp-paths.png) · [GeoLite](screenshots/15-Индия-geolocation.png) · [RDAP](screenshots/15-Индия-rdap.png) |

### Индия — `86.107.100.232`

- **BGP:** `86.107.100.0/24`; origin **AS26383** — ASNET - Baxet Group Inc.; origins seen: AS26383.
- **GeoLite:** `IN`; заявленная локация в TXT `Индия` (IN). Страна совпала.
- **RDAP:** `BAXET-GROUP-INC`; диапазон `86.107.100.0–86.107.100.255`; страна `US`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 321 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** Baxet Group Inc.; interlir-mnt; Abuse contact role object.
- **Ближайшие ASN:** AS8849 MELBICOM-EU-AS Melbikomas UAB (252 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 6453 4755 8849 26383`.
- **Схема ASN:** [PNG](asn-schemes/15-Индия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/86.107.100.232) · [Looking Glass](https://stat.ripe.net/lg/86.107.100.232) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=86.107.100.232&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/86.107.100.232)
- **Скриншоты:** [ASN](screenshots/15-Индия-overview.png) · [BGP](screenshots/15-Индия-bgp-paths.png) · [GeoLite](screenshots/15-Индия-geolocation.png) · [RDAP](screenshots/15-Индия-rdap.png)

| Нигерия | 102.68.84.100 | NG | 102.68.84.0/24 | AS327813 Host Africa (Pty) Ltd - Host Africa (Pty) Ltd | ORG-CTML1-AFRINIC / — | AS60171 AFRIX-AS AFR-IX TELECOM S.A. (280 distinct paths); AS36236 NETACTUATE - NetActuate, Inc (1 distinct paths); AS37282 Main one Cable Company Nigeria Limited - Main one Cable Company Nigeria Limited (1 distinct paths) | [ASN](screenshots/16-Нигерия-overview.png) · [BGP](screenshots/16-Нигерия-bgp-paths.png) · [GeoLite](screenshots/16-Нигерия-geolocation.png) · [RDAP](screenshots/16-Нигерия-rdap.png) |

### Нигерия — `102.68.84.100`

- **BGP:** `102.68.84.0/24`; origin **AS327813** — Host Africa (Pty) Ltd - Host Africa (Pty) Ltd; origins seen: AS327813.
- **GeoLite:** `NG`; заявленная локация в TXT `Нигерия` (NG). Страна совпала.
- **RDAP:** `ORG-CTML1-AFRINIC`; диапазон `102.68.84.0–102.68.84.255`; страна `—`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 377 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:49:54`.
- **RDAP entities:** Host Africa (Pty) Ltd; Michael Osterloh; Ethan McPherson.
- **Ближайшие ASN:** AS60171 AFRIX-AS AFR-IX TELECOM S.A. (280 уник. AS_PATH); AS36236 NETACTUATE - NetActuate, Inc (1 уник. AS_PATH); AS37282 Main one Cable Company Nigeria Limited - Main one Cable Company Nigeria Limited (1 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 60171 327813`.
- **Схема ASN:** [PNG](asn-schemes/16-Нигерия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/102.68.84.100) · [Looking Glass](https://stat.ripe.net/lg/102.68.84.100) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=102.68.84.100&source=geo) · [RDAP](https://rdap.afrinic.net/rdap/ip/102.68.84.100)
- **Скриншоты:** [ASN](screenshots/16-Нигерия-overview.png) · [BGP](screenshots/16-Нигерия-bgp-paths.png) · [GeoLite](screenshots/16-Нигерия-geolocation.png) · [RDAP](screenshots/16-Нигерия-rdap.png)

| Сингапур | 5.34.176.219 | SG | 5.34.176.0/23 | AS204957 GREENFLOID-AS ROUTE 95 LLC | GF-SIN-NET / SG | AS64010 BASICBRIX-AS-AP - BasicBrix LLP (259 distinct paths) | [ASN](screenshots/17-Сингапур-overview.png) · [BGP](screenshots/17-Сингапур-bgp-paths.png) · [GeoLite](screenshots/17-Сингапур-geolocation.png) · [RDAP](screenshots/17-Сингапур-rdap.png) |

### Сингапур — `5.34.176.219`

- **BGP:** `5.34.176.0/23`; origin **AS204957** — GREENFLOID-AS ROUTE 95 LLC; origins seen: AS204957.
- **GeoLite:** `SG`; заявленная локация в TXT `Сингапур` (SG). Страна совпала.
- **RDAP:** `GF-SIN-NET`; диапазон `5.34.176.0–5.34.177.255`; страна `SG`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 322 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:51:16`.
- **RDAP entities:** GREEN FLOID EU Support Team; GRFL-MNT; Green Floid LLC; GreenFloid Abuse handler.
- **Ближайшие ASN:** AS64010 BASICBRIX-AS-AP - BasicBrix LLP (259 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 64010 204957`.
- **Схема ASN:** [PNG](asn-schemes/17-Сингапур-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/5.34.176.219) · [Looking Glass](https://stat.ripe.net/lg/5.34.176.219) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=5.34.176.219&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/5.34.176.219)
- **Скриншоты:** [ASN](screenshots/17-Сингапур-overview.png) · [BGP](screenshots/17-Сингапур-bgp-paths.png) · [GeoLite](screenshots/17-Сингапур-geolocation.png) · [RDAP](screenshots/17-Сингапур-rdap.png)

| Украина | 193.238.153.69 | UA | 193.238.153.0/24 | AS204957 GREENFLOID-AS ROUTE 95 LLC | GF-UA-NET / UA | AS9002 RETN-AS RETN Limited (181 distinct paths); AS200088 ARTNET2 Artnet Sp. z o.o. (81 distinct paths) | [ASN](screenshots/18-Украина-overview.png) · [BGP](screenshots/18-Украина-bgp-paths.png) · [GeoLite](screenshots/18-Украина-geolocation.png) · [RDAP](screenshots/18-Украина-rdap.png) |

### Украина — `193.238.153.69`

- **BGP:** `193.238.153.0/24`; origin **AS204957** — GREENFLOID-AS ROUTE 95 LLC; origins seen: AS204957.
- **GeoLite:** `UA`; заявленная локация в TXT `Украина` (UA). Страна совпала.
- **RDAP:** `GF-UA-NET`; диапазон `193.238.152.0–193.238.153.255`; страна `UA`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 333 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** GREEN FLOID EU Support Team; GRFL-MNT; GREEN FLOID LLC; Abuse-C Role.
- **Ближайшие ASN:** AS9002 RETN-AS RETN Limited (181 уник. AS_PATH); AS200088 ARTNET2 Artnet Sp. z o.o. (81 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 9002 204957`.
- **Схема ASN:** [PNG](asn-schemes/18-Украина-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/193.238.153.69) · [Looking Glass](https://stat.ripe.net/lg/193.238.153.69) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=193.238.153.69&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/193.238.153.69)
- **Скриншоты:** [ASN](screenshots/18-Украина-overview.png) · [BGP](screenshots/18-Украина-bgp-paths.png) · [GeoLite](screenshots/18-Украина-geolocation.png) · [RDAP](screenshots/18-Украина-rdap.png)

| Бразилия | 38.180.16.132 | BR | 38.180.16.0/24 | AS9009 M247 M247 Europe SRL | CLOUD-NETWORK-BR / — | AS174 COGENT-174 - Cogent Communications, LLC (114 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (103 distinct paths); AS6939 HURRICANE - Hurricane Electric LLC (15 distinct paths) | [ASN](screenshots/19-Бразилия-overview.png) · [BGP](screenshots/19-Бразилия-bgp-paths.png) · [GeoLite](screenshots/19-Бразилия-geolocation.png) · [RDAP](screenshots/19-Бразилия-rdap.png) |

### Бразилия — `38.180.16.132`

- **BGP:** `38.180.16.0/24`; origin **AS9009** — M247 M247 Europe SRL; origins seen: AS9009.
- **GeoLite:** `BR`; заявленная локация в TXT `Бразилия` (BR). Страна совпала.
- **RDAP:** `CLOUD-NETWORK-BR`; диапазон `38.180.16.0–38.180.16.255`; страна `—`; тип `ASSIGNMENT.
- **Наблюдаемость RIPE RIS:** 327 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** 3NT SOLUTIONS LLP.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (114 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (103 уник. AS_PATH); AS6939 HURRICANE - Hurricane Electric LLC (15 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 9009`.
- **Схема ASN:** [PNG](asn-schemes/19-Бразилия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/38.180.16.132) · [Looking Glass](https://stat.ripe.net/lg/38.180.16.132) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=38.180.16.132&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/38.180.16.132)
- **Скриншоты:** [ASN](screenshots/19-Бразилия-overview.png) · [BGP](screenshots/19-Бразилия-bgp-paths.png) · [GeoLite](screenshots/19-Бразилия-geolocation.png) · [RDAP](screenshots/19-Бразилия-rdap.png)

| Япония | 46.250.251.237 | GB | 46.250.248.0/21 | AS141995 CAPL-AS-AP - Contabo Asia Private Limited | YorkshireTech / GB | AS6939 HURRICANE - Hurricane Electric LLC (220 distinct paths); AS1299 TWELVE99 Arelion Sweden AB (32 distinct paths); AS2914 NTT-DATA-2914 - NTT America, Inc. (16 distinct paths) | [ASN](screenshots/20-Япония-overview.png) · [BGP](screenshots/20-Япония-bgp-paths.png) · [GeoLite](screenshots/20-Япония-geolocation.png) · [RDAP](screenshots/20-Япония-rdap.png) |

### Япония — `46.250.251.237`

- **BGP:** `46.250.248.0/21`; origin **AS141995** — CAPL-AS-AP - Contabo Asia Private Limited; origins seen: AS141995.
- **GeoLite:** `GB`; заявленная локация в TXT `Япония` (JP). Страна не совпадает; проверить внимательно.
- **RDAP:** `YorkshireTech`; диапазон `46.250.240.0–46.250.255.255`; страна `GB`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 374 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** Private Customer; netutils-mnt; Company 64d3454aVL202A2x.
- **Ближайшие ASN:** AS6939 HURRICANE - Hurricane Electric LLC (220 уник. AS_PATH); AS1299 TWELVE99 Arelion Sweden AB (32 уник. AS_PATH); AS2914 NTT-DATA-2914 - NTT America, Inc. (16 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 141995`.
- **Схема ASN:** [PNG](asn-schemes/20-Япония-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/46.250.251.237) · [Looking Glass](https://stat.ripe.net/lg/46.250.251.237) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=46.250.251.237&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/46.250.251.237)
- **Скриншоты:** [ASN](screenshots/20-Япония-overview.png) · [BGP](screenshots/20-Япония-bgp-paths.png) · [GeoLite](screenshots/20-Япония-geolocation.png) · [RDAP](screenshots/20-Япония-rdap.png)

| Казахстан | 38.180.37.248 | KZ | 38.180.36.0/22 | AS58061 SCALAXY-AS Scalaxy B.V. | CLOUD-NETWORK-KZ / — | AS200590 asnls NLS Kazakhstan LLC (285 distinct paths) | [ASN](screenshots/21-Казахстан-overview.png) · [BGP](screenshots/21-Казахстан-bgp-paths.png) · [GeoLite](screenshots/21-Казахстан-geolocation.png) · [RDAP](screenshots/21-Казахстан-rdap.png) |

### Казахстан — `38.180.37.248`

- **BGP:** `38.180.36.0/22`; origin **AS58061** — SCALAXY-AS Scalaxy B.V.; origins seen: AS58061.
- **GeoLite:** `KZ`; заявленная локация в TXT `Казахстан` (KZ). Страна совпала.
- **RDAP:** `CLOUD-NETWORK-KZ`; диапазон `38.180.36.0–38.180.39.255`; страна `—`; тип `ASSIGNMENT.
- **Наблюдаемость RIPE RIS:** 365 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** 3NT SOLUTIONS LLP.
- **Ближайшие ASN:** AS200590 asnls NLS Kazakhstan LLC (285 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 205103 35168 200590 58061`.
- **Схема ASN:** [PNG](asn-schemes/21-Казахстан-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/38.180.37.248) · [Looking Glass](https://stat.ripe.net/lg/38.180.37.248) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=38.180.37.248&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/38.180.37.248)
- **Скриншоты:** [ASN](screenshots/21-Казахстан-overview.png) · [BGP](screenshots/21-Казахстан-bgp-paths.png) · [GeoLite](screenshots/21-Казахстан-geolocation.png) · [RDAP](screenshots/21-Казахстан-rdap.png)

| Аргентина | 149.33.19.248 | AR | 149.33.19.0/24 | AS58061 SCALAXY-AS Scalaxy B.V. | CLOUD-NETWORK-AR / — | AS7195 AS7195 - EDGEUNO S.A.S (265 distinct paths) | [ASN](screenshots/22-Аргентина-overview.png) · [BGP](screenshots/22-Аргентина-bgp-paths.png) · [GeoLite](screenshots/22-Аргентина-geolocation.png) · [RDAP](screenshots/22-Аргентина-rdap.png) |

### Аргентина — `149.33.19.248`

- **BGP:** `149.33.19.0/24`; origin **AS58061** — SCALAXY-AS Scalaxy B.V.; origins seen: AS58061.
- **GeoLite:** `AR`; заявленная локация в TXT `Аргентина` (AR). Страна совпала.
- **RDAP:** `CLOUD-NETWORK-AR`; диапазон `149.33.19.0–149.33.19.255`; страна `—`; тип `ASSIGNMENT.
- **Наблюдаемость RIPE RIS:** 341 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** 3NT SOLUTIONS LLP.
- **Ближайшие ASN:** AS7195 AS7195 - EDGEUNO S.A.S (265 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 7195 58061`.
- **Схема ASN:** [PNG](asn-schemes/22-Аргентина-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/149.33.19.248) · [Looking Glass](https://stat.ripe.net/lg/149.33.19.248) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=149.33.19.248&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/149.33.19.248)
- **Скриншоты:** [ASN](screenshots/22-Аргентина-overview.png) · [BGP](screenshots/22-Аргентина-bgp-paths.png) · [GeoLite](screenshots/22-Аргентина-geolocation.png) · [RDAP](screenshots/22-Аргентина-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для DurevVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

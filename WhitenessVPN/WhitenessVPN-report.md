# WhitenessVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 12  **IP:** 12

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|

Повторяющиеся origin ASN: AS219095 (ASTRAVPS-AS Paul Sagov; 4 IP: Польша, Германия, Нидерланды, Эстония); AS218688 (WL661-AS WULDI LLC; 2 IP: Чехия, Швейцария); AS24940 (HETZNER-AS Hetzner Online GmbH; 2 IP: Финляндия, Германия)

| Польша | 31.77.59.233 | PL | 31.77.59.0/24 | AS219095 ASTRAVPS-AS Paul Sagov | ASTRA-NETWORKS-LTD / PL | AS207208 Mevspace-projects MEVSPACE sp. z o.o. (282 distinct paths) | [ASN](screenshots/01-Польша-overview.png) · [BGP](screenshots/01-Польша-bgp-paths.png) · [GeoLite](screenshots/01-Польша-geolocation.png) · [RDAP](screenshots/01-Польша-rdap.png) |

### Польша — `31.77.59.233`

- **BGP:** `31.77.59.0/24`; origin **AS219095** — ASTRAVPS-AS Paul Sagov; origins seen: AS219095.
- **GeoLite:** `PL`; заявленная локация в TXT `Польша` (PL). Страна совпала.
- **RDAP:** `ASTRA-NETWORKS-LTD`; диапазон `31.77.59.0–31.77.59.255`; страна `PL`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 375 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** ASTRAVPS-NOC; interlir-mnt; Paul Sagov; Abuse contact role object.
- **Ближайшие ASN:** AS207208 Mevspace-projects MEVSPACE sp. z o.o. (282 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 201814 207208 219095`.
- **Схема ASN:** [PNG](asn-schemes/01-Польша-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.77.59.233) · [Looking Glass](https://stat.ripe.net/lg/31.77.59.233) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.77.59.233&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.77.59.233)
- **Скриншоты:** [ASN](screenshots/01-Польша-overview.png) · [BGP](screenshots/01-Польша-bgp-paths.png) · [GeoLite](screenshots/01-Польша-geolocation.png) · [RDAP](screenshots/01-Польша-rdap.png)

| Германия | 179.254.115.137 | DE | 179.254.115.0/24 | AS219095 ASTRAVPS-AS Paul Sagov | ASTRA-NETWORKS-LTD / DE | AS58212 DATAFOREST dataforest GmbH (261 distinct paths) | [ASN](screenshots/02-Германия-overview.png) · [BGP](screenshots/02-Германия-bgp-paths.png) · [GeoLite](screenshots/02-Германия-geolocation.png) · [RDAP](screenshots/02-Германия-rdap.png) |

### Германия — `179.254.115.137`

- **BGP:** `179.254.115.0/24`; origin **AS219095** — ASTRAVPS-AS Paul Sagov; origins seen: AS219095.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `ASTRA-NETWORKS-LTD`; диапазон `179.254.115.0–179.254.115.255`; страна `DE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** ASTRAVPS-NOC; interlir-mnt; Paul Sagov; Abuse contact role object.
- **Ближайшие ASN:** AS58212 DATAFOREST dataforest GmbH (261 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 58212 219095`.
- **Схема ASN:** [PNG](asn-schemes/02-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/179.254.115.137) · [Looking Glass](https://stat.ripe.net/lg/179.254.115.137) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=179.254.115.137&source=geo) · [RDAP](https://rdap.lacnic.net/rdap/ip/179.254.115.137)
- **Скриншоты:** [ASN](screenshots/02-Германия-overview.png) · [BGP](screenshots/02-Германия-bgp-paths.png) · [GeoLite](screenshots/02-Германия-geolocation.png) · [RDAP](screenshots/02-Германия-rdap.png)

| Нидерланды | 150.251.141.8 | NL | 150.251.141.0/24 | AS219095 ASTRAVPS-AS Paul Sagov | ASTRA-NETWORKS-LTD / NL | AS49581 TUBE-HOSTING Ferdinand Zink trading as Tube-Hosting (263 distinct paths) | [ASN](screenshots/03-Нидерланды-overview.png) · [BGP](screenshots/03-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/03-Нидерланды-geolocation.png) · [RDAP](screenshots/03-Нидерланды-rdap.png) |

### Нидерланды — `150.251.141.8`

- **BGP:** `150.251.141.0/24`; origin **AS219095** — ASTRAVPS-AS Paul Sagov; origins seen: AS219095.
- **GeoLite:** `NL`; заявленная локация в TXT `Нидерланды` (NL). Страна совпала.
- **RDAP:** `ASTRA-NETWORKS-LTD`; диапазон `150.251.141.0–150.251.141.255`; страна `NL`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 353 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** ASTRAVPS-NOC; interlir-mnt; Paul Sagov; Abuse contact role object.
- **Ближайшие ASN:** AS49581 TUBE-HOSTING Ferdinand Zink trading as Tube-Hosting (263 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 6204 44592 49581 219095`.
- **Схема ASN:** [PNG](asn-schemes/03-Нидерланды-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/150.251.141.8) · [Looking Glass](https://stat.ripe.net/lg/150.251.141.8) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=150.251.141.8&source=geo) · [RDAP](https://rdap.apnic.net/ip/150.251.141.8)
- **Скриншоты:** [ASN](screenshots/03-Нидерланды-overview.png) · [BGP](screenshots/03-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/03-Нидерланды-geolocation.png) · [RDAP](screenshots/03-Нидерланды-rdap.png)

| Чехия | 95.85.238.86 | CZ | 95.85.238.0/24 | AS218688 WL661-AS WULDI LLC | WULDI-LLC / CZ | AS213887 WAICORE-LTD WAIcore Ltd (253 distinct paths) | [ASN](screenshots/04-Чехия-overview.png) · [BGP](screenshots/04-Чехия-bgp-paths.png) · [GeoLite](screenshots/04-Чехия-geolocation.png) · [RDAP](screenshots/04-Чехия-rdap.png) |

### Чехия — `95.85.238.86`

- **BGP:** `95.85.238.0/24`; origin **AS218688** — WL661-AS WULDI LLC; origins seen: AS218688.
- **GeoLite:** `CZ`; заявленная локация в TXT `Чехия` (CZ). Страна совпала.
- **RDAP:** `WULDI-LLC`; диапазон `95.85.238.0–95.85.238.255`; страна `CZ`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 318 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** Abuse contact role object; DGTLS-MNT; WULDI LLC.
- **Ближайшие ASN:** AS213887 WAICORE-LTD WAIcore Ltd (253 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 30823 213887 218688`.
- **Схема ASN:** [PNG](asn-schemes/04-Чехия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/95.85.238.86) · [Looking Glass](https://stat.ripe.net/lg/95.85.238.86) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=95.85.238.86&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/95.85.238.86)
- **Скриншоты:** [ASN](screenshots/04-Чехия-overview.png) · [BGP](screenshots/04-Чехия-bgp-paths.png) · [GeoLite](screenshots/04-Чехия-geolocation.png) · [RDAP](screenshots/04-Чехия-rdap.png)

| Швейцария | 45.13.186.162 | SC | 45.13.186.0/24 | AS218688 WL661-AS WULDI LLC | WULDI-LLC / DE | AS213887 WAICORE-LTD WAIcore Ltd (255 distinct paths) | [ASN](screenshots/05-Швейцария-overview.png) · [BGP](screenshots/05-Швейцария-bgp-paths.png) · [GeoLite](screenshots/05-Швейцария-geolocation.png) · [RDAP](screenshots/05-Швейцария-rdap.png) |

### Швейцария — `45.13.186.162`

- **BGP:** `45.13.186.0/24`; origin **AS218688** — WL661-AS WULDI LLC; origins seen: AS218688.
- **GeoLite:** `SC`; заявленная локация в TXT `Швейцария` (CH). Страна не совпадает; проверить внимательно.
- **RDAP:** `WULDI-LLC`; диапазон `45.13.186.0–45.13.186.255`; страна `DE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** Abuse contact role object; LocalNCC-mnt; WULDI LLC.
- **Ближайшие ASN:** AS213887 WAICORE-LTD WAIcore Ltd (255 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 30823 213887 218688`.
- **Схема ASN:** [PNG](asn-schemes/05-Швейцария-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/45.13.186.162) · [Looking Glass](https://stat.ripe.net/lg/45.13.186.162) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=45.13.186.162&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/45.13.186.162)
- **Скриншоты:** [ASN](screenshots/05-Швейцария-overview.png) · [BGP](screenshots/05-Швейцария-bgp-paths.png) · [GeoLite](screenshots/05-Швейцария-geolocation.png) · [RDAP](screenshots/05-Швейцария-rdap.png)

| Эстония | 143.246.41.193 | EE | 143.246.41.0/24 | AS219095 ASTRAVPS-AS Paul Sagov | ASTRA-NETWORKS-LTD / EE | AS202759 FairyHosting RJ Network OU (257 distinct paths) | [ASN](screenshots/06-Эстония-overview.png) · [BGP](screenshots/06-Эстония-bgp-paths.png) · [GeoLite](screenshots/06-Эстония-geolocation.png) · [RDAP](screenshots/06-Эстония-rdap.png) |

### Эстония — `143.246.41.193`

- **BGP:** `143.246.41.0/24`; origin **AS219095** — ASTRAVPS-AS Paul Sagov; origins seen: AS219095.
- **GeoLite:** `EE`; заявленная локация в TXT `Эстония` (EE). Страна совпала.
- **RDAP:** `ASTRA-NETWORKS-LTD`; диапазон `143.246.41.0–143.246.41.255`; страна `EE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 325 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:51`.
- **RDAP entities:** ASTRAVPS-NOC; interlir-mnt; Paul Sagov; Abuse contact role object.
- **Ближайшие ASN:** AS202759 FairyHosting RJ Network OU (257 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 9002 202759 219095`.
- **Схема ASN:** [PNG](asn-schemes/06-Эстония-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/143.246.41.193) · [Looking Glass](https://stat.ripe.net/lg/143.246.41.193) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=143.246.41.193&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/143.246.41.193)
- **Скриншоты:** [ASN](screenshots/06-Эстония-overview.png) · [BGP](screenshots/06-Эстония-bgp-paths.png) · [GeoLite](screenshots/06-Эстония-geolocation.png) · [RDAP](screenshots/06-Эстония-rdap.png)

| Финляндия | 65.109.178.173 | FI | 65.109.0.0/16 | AS24940 HETZNER-AS Hetzner Online GmbH | CLOUD-HEL1 / FI | AS1299 TWELVE99 Arelion Sweden AB (24 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (20 distinct paths); AS6939 HURRICANE - Hurricane Electric LLC (17 distinct paths) | [ASN](screenshots/07-Финляндия-overview.png) · [BGP](screenshots/07-Финляндия-bgp-paths.png) · [GeoLite](screenshots/07-Финляндия-geolocation.png) · [RDAP](screenshots/07-Финляндия-rdap.png) |

### Финляндия — `65.109.178.173`

- **BGP:** `65.109.0.0/16`; origin **AS24940** — HETZNER-AS Hetzner Online GmbH; origins seen: AS24940.
- **GeoLite:** `FI`; заявленная локация в TXT `Финляндия` (FI). Страна совпала.
- **RDAP:** `CLOUD-HEL1`; диапазон `65.109.176.0–65.109.191.255`; страна `FI`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 350 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** Hetzner Online GmbH - Contact Role; HOS-GUN; Hetzner Online GmbH.
- **Ближайшие ASN:** AS1299 TWELVE99 Arelion Sweden AB (24 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (20 уник. AS_PATH); AS6939 HURRICANE - Hurricane Electric LLC (17 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 24940`.
- **Схема ASN:** [PNG](asn-schemes/07-Финляндия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/65.109.178.173) · [Looking Glass](https://stat.ripe.net/lg/65.109.178.173) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=65.109.178.173&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/65.109.178.173)
- **Скриншоты:** [ASN](screenshots/07-Финляндия-overview.png) · [BGP](screenshots/07-Финляндия-bgp-paths.png) · [GeoLite](screenshots/07-Финляндия-geolocation.png) · [RDAP](screenshots/07-Финляндия-rdap.png)

| Германия | 91.107.170.173 | DE | 91.107.128.0/17 | AS24940 HETZNER-AS Hetzner Online GmbH | CLOUD-FSN1 / DE | AS3356 LEVEL3 - Level 3 Parent, LLC (25 distinct paths); AS33891 CORE-BACKBONE Core-Backbone GmbH (10 distinct paths); AS6939 HURRICANE - Hurricane Electric LLC (9 distinct paths) | [ASN](screenshots/08-Германия-overview.png) · [BGP](screenshots/08-Германия-bgp-paths.png) · [GeoLite](screenshots/08-Германия-geolocation.png) · [RDAP](screenshots/08-Германия-rdap.png) |

### Германия — `91.107.170.173`

- **BGP:** `91.107.128.0/17`; origin **AS24940** — HETZNER-AS Hetzner Online GmbH; origins seen: AS24940.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `CLOUD-FSN1`; диапазон `91.107.160.0–91.107.175.255`; страна `DE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 352 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** Hetzner Online GmbH - Contact Role; HOS-GUN; Hetzner Online GmbH.
- **Ближайшие ASN:** AS3356 LEVEL3 - Level 3 Parent, LLC (25 уник. AS_PATH); AS33891 CORE-BACKBONE Core-Backbone GmbH (10 уник. AS_PATH); AS6939 HURRICANE - Hurricane Electric LLC (9 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 24940 24940 24940 24940`.
- **Схема ASN:** [PNG](asn-schemes/08-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/91.107.170.173) · [Looking Glass](https://stat.ripe.net/lg/91.107.170.173) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=91.107.170.173&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/91.107.170.173)
- **Скриншоты:** [ASN](screenshots/08-Германия-overview.png) · [BGP](screenshots/08-Германия-bgp-paths.png) · [GeoLite](screenshots/08-Германия-geolocation.png) · [RDAP](screenshots/08-Германия-rdap.png)

| Испания | 5.180.173.254 | ES | 5.180.173.0/24 | AS57043 HOSTKEY-AS HOSTKEY B.V. | NL-HOSTKEY-20190329 / FR | AS174 COGENT-174 - Cogent Communications, LLC (82 distinct paths); AS9002 RETN-AS RETN Limited (66 distinct paths); AS3257 GTT-BACKBONE GTT Communications Inc. (36 distinct paths) | [ASN](screenshots/09-Испания-overview.png) · [BGP](screenshots/09-Испания-bgp-paths.png) · [GeoLite](screenshots/09-Испания-geolocation.png) · [RDAP](screenshots/09-Испания-rdap.png) |

### Испания — `5.180.173.254`

- **BGP:** `5.180.173.0/24`; origin **AS57043** — HOSTKEY-AS HOSTKEY B.V.; origins seen: AS57043.
- **GeoLite:** `ES`; заявленная локация в TXT `Испания` (ES). Страна совпала.
- **RDAP:** `NL-HOSTKEY-20190329`; диапазон `5.180.173.0–5.180.173.255`; страна `FR`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 328 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** RIPE Team; HOSTKEY-MNT; Hostkey_NL abuse.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (82 уник. AS_PATH); AS9002 RETN-AS RETN Limited (66 уник. AS_PATH); AS3257 GTT-BACKBONE GTT Communications Inc. (36 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 57043`.
- **Схема ASN:** [PNG](asn-schemes/09-Испания-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/5.180.173.254) · [Looking Glass](https://stat.ripe.net/lg/5.180.173.254) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=5.180.173.254&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/5.180.173.254)
- **Скриншоты:** [ASN](screenshots/09-Испания-overview.png) · [BGP](screenshots/09-Испания-bgp-paths.png) · [GeoLite](screenshots/09-Испания-geolocation.png) · [RDAP](screenshots/09-Испания-rdap.png)

| США | 82.38.60.79 | US | 82.38.60.0/24 | AS395839 HOSTKEY-USA - HOSTKEY | NET-82-38-60-0-24 / US | AS6939 HURRICANE - Hurricane Electric LLC (148 distinct paths); AS174 COGENT-174 - Cogent Communications, LLC (71 distinct paths); AS3257 GTT-BACKBONE GTT Communications Inc. (51 distinct paths) | [ASN](screenshots/10-США-overview.png) · [BGP](screenshots/10-США-bgp-paths.png) · [GeoLite](screenshots/10-США-geolocation.png) · [RDAP](screenshots/10-США-rdap.png) |

### США — `82.38.60.79`

- **BGP:** `82.38.60.0/24`; origin **AS395839** — HOSTKEY-USA - HOSTKEY; origins seen: AS395839.
- **GeoLite:** `US`; заявленная локация в TXT `США` (US). Страна совпала.
- **RDAP:** `NET-82-38-60-0-24`; диапазон `82.38.60.0–82.38.60.255`; страна `US`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 372 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:51:14`.
- **RDAP entities:** HOSTKEY B.V.; netutils-mnt.
- **Ближайшие ASN:** AS6939 HURRICANE - Hurricane Electric LLC (148 уник. AS_PATH); AS174 COGENT-174 - Cogent Communications, LLC (71 уник. AS_PATH); AS3257 GTT-BACKBONE GTT Communications Inc. (51 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 395839`.
- **Схема ASN:** [PNG](asn-schemes/10-США-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/82.38.60.79) · [Looking Glass](https://stat.ripe.net/lg/82.38.60.79) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=82.38.60.79&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/82.38.60.79)
- **Скриншоты:** [ASN](screenshots/10-США-overview.png) · [BGP](screenshots/10-США-bgp-paths.png) · [GeoLite](screenshots/10-США-geolocation.png) · [RDAP](screenshots/10-США-rdap.png)

| Франция | 5.135.240.107 | FR | 5.135.0.0/16 | AS16276 OVH OVH SAS | OVH-DEDI-5-135-240 / FR | AS174 COGENT-174 - Cogent Communications, LLC (13 distinct paths); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 distinct paths); AS3356 LEVEL3 - Level 3 Parent, LLC (8 distinct paths) | [ASN](screenshots/11-Франция-overview.png) · [BGP](screenshots/11-Франция-bgp-paths.png) · [GeoLite](screenshots/11-Франция-geolocation.png) · [RDAP](screenshots/11-Франция-rdap.png) |

### Франция — `5.135.240.107`

- **BGP:** `5.135.0.0/16`; origin **AS16276** — OVH OVH SAS; origins seen: AS16276.
- **GeoLite:** `FR`; заявленная локация в TXT `Франция` (FR). Страна совпала.
- **RDAP:** `OVH-DEDI-5-135-240`; диапазон `5.135.240.96–5.135.240.127`; страна `FR`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 352 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** OVH Technical Contact; OVH-MNT; Abuse-C Role.
- **Ближайшие ASN:** AS174 COGENT-174 - Cogent Communications, LLC (13 уник. AS_PATH); AS6762 SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (10 уник. AS_PATH); AS3356 LEVEL3 - Level 3 Parent, LLC (8 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 16276`.
- **Схема ASN:** [PNG](asn-schemes/11-Франция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/5.135.240.107) · [Looking Glass](https://stat.ripe.net/lg/5.135.240.107) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=5.135.240.107&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/5.135.240.107)
- **Скриншоты:** [ASN](screenshots/11-Франция-overview.png) · [BGP](screenshots/11-Франция-bgp-paths.png) · [GeoLite](screenshots/11-Франция-geolocation.png) · [RDAP](screenshots/11-Франция-rdap.png)

| Швеция | 2.27.14.238 | SE | 2.27.14.0/24 | AS198550 nodehost-as NODE HOST LIMITED | nodehost / SE | AS213887 WAICORE-LTD WAIcore Ltd (254 distinct paths) | [ASN](screenshots/12-Швеция-overview.png) · [BGP](screenshots/12-Швеция-bgp-paths.png) · [GeoLite](screenshots/12-Швеция-geolocation.png) · [RDAP](screenshots/12-Швеция-rdap.png) |

### Швеция — `2.27.14.238`

- **BGP:** `2.27.14.0/24`; origin **AS198550** — nodehost-as NODE HOST LIMITED; origins seen: AS198550.
- **GeoLite:** `SE`; заявленная локация в TXT `Швеция` (SE). Страна совпала.
- **RDAP:** `nodehost`; диапазон `2.27.14.0–2.27.14.255`; страна `SE`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** Intezio Administrative Department; intezio-mnt; NODE HOST LIMITED; Intezio Tech Department Contact Object; Intezio Abuse Department Contact Object.
- **Ближайшие ASN:** AS213887 WAICORE-LTD WAIcore Ltd (254 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 30823 213887 198550`.
- **Схема ASN:** [PNG](asn-schemes/12-Швеция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/2.27.14.238) · [Looking Glass](https://stat.ripe.net/lg/2.27.14.238) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=2.27.14.238&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/2.27.14.238)
- **Скриншоты:** [ASN](screenshots/12-Швеция-overview.png) · [BGP](screenshots/12-Швеция-bgp-paths.png) · [GeoLite](screenshots/12-Швеция-geolocation.png) · [RDAP](screenshots/12-Швеция-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для WhitenessVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

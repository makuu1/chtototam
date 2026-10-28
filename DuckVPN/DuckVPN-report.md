# DuckVPN — ASN и хостинг IP-локаций

**Проверка:** 28 октября 2026 г.  **Записей в TXT:** 11  **IP:** 11

Отчёт разделяет три разных сведения: локацию сервиса из TXT, оценку страны GeoLite и административную запись RDAP. Origin ASN показывает сеть, объявляющую префикс; это не всегда владелец VPN-сервиса или физической площадки.

## Сводка

| Локация | IP | GeoLite | BGP prefix | Origin ASN / holder | RDAP name / country | Ближайшие ASN | Источники |
|---|---|---|---|---|---|---|---|

Повторяющиеся origin ASN: AS402931 (ADAPTGROUP - AdaptGroup; 6 IP: Германия, Нидерланды, Польша, Северная Македония, США, Болгария); AS218731 (Andris-Jakovlevs Andris Jakovlevs; 2 IP: Швеция, Швеция 2); AS201988 (VPSPay-ASN VPSPay Networks LTD; 2 IP: Финляндия, Финляндия 2)

| Германия | 31.58.178.219 | DE | 31.58.178.0/24 | AS402931 ADAPTGROUP - AdaptGroup | AdaptGroup / DE | AS48314 IP-PROJECTS Michael Sebastian Schinzel trading as IP-Projects GmbH & Co. KG (259 distinct paths) | [ASN](screenshots/01-Германия-overview.png) · [BGP](screenshots/01-Германия-bgp-paths.png) · [GeoLite](screenshots/01-Германия-geolocation.png) · [RDAP](screenshots/01-Германия-rdap.png) |

### Германия — `31.58.178.219`

- **BGP:** `31.58.178.0/24`; origin **AS402931** — ADAPTGROUP - AdaptGroup; origins seen: AS402931.
- **GeoLite:** `DE`; заявленная локация в TXT `Германия` (DE). Страна совпала.
- **RDAP:** `AdaptGroup`; диапазон `31.58.178.0–31.58.178.255`; страна `DE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 334 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:58`.
- **RDAP entities:** Abuse contact role object; GOLD-MNT; lir-ae-goldip-1-MNT.
- **Ближайшие ASN:** AS48314 IP-PROJECTS Michael Sebastian Schinzel trading as IP-Projects GmbH & Co. KG (259 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 9002 48314 402931`.
- **Схема ASN:** [PNG](asn-schemes/01-Германия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.58.178.219) · [Looking Glass](https://stat.ripe.net/lg/31.58.178.219) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.58.178.219&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.58.178.219)
- **Скриншоты:** [ASN](screenshots/01-Германия-overview.png) · [BGP](screenshots/01-Германия-bgp-paths.png) · [GeoLite](screenshots/01-Германия-geolocation.png) · [RDAP](screenshots/01-Германия-rdap.png)

| Нидерланды | 217.60.144.93 | AE | 217.60.144.0/24 | AS402931 ADAPTGROUP - AdaptGroup | AdaptGroup / NL | AS55285 SERVERSIDE - Serverside.com (264 distinct paths) | [ASN](screenshots/02-Нидерланды-overview.png) · [BGP](screenshots/02-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/02-Нидерланды-geolocation.png) · [RDAP](screenshots/02-Нидерланды-rdap.png) |

### Нидерланды — `217.60.144.93`

- **BGP:** `217.60.144.0/24`; origin **AS402931** — ADAPTGROUP - AdaptGroup; origins seen: AS402931.
- **GeoLite:** `AE`; заявленная локация в TXT `Нидерланды` (NL). Страна не совпадает; проверить внимательно.
- **RDAP:** `AdaptGroup`; диапазон `217.60.144.0–217.60.144.255`; страна `NL`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 340 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:13`.
- **RDAP entities:** Abuse contact role object; GOLD-MNT; lir-ae-goldip-1-MNT.
- **Ближайшие ASN:** AS55285 SERVERSIDE - Serverside.com (264 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 55285 402931`.
- **Схема ASN:** [PNG](asn-schemes/02-Нидерланды-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/217.60.144.93) · [Looking Glass](https://stat.ripe.net/lg/217.60.144.93) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=217.60.144.93&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/217.60.144.93)
- **Скриншоты:** [ASN](screenshots/02-Нидерланды-overview.png) · [BGP](screenshots/02-Нидерланды-bgp-paths.png) · [GeoLite](screenshots/02-Нидерланды-geolocation.png) · [RDAP](screenshots/02-Нидерланды-rdap.png)

| Польша | 31.59.204.75 | PL | 31.59.204.0/24 | AS402931 ADAPTGROUP - AdaptGroup | AdaptGroup / PL | AS200088 ARTNET2 Artnet Sp. z o.o. (251 distinct paths) | [ASN](screenshots/03-Польша-overview.png) · [BGP](screenshots/03-Польша-bgp-paths.png) · [GeoLite](screenshots/03-Польша-geolocation.png) · [RDAP](screenshots/03-Польша-rdap.png) |

### Польша — `31.59.204.75`

- **BGP:** `31.59.204.0/24`; origin **AS402931** — ADAPTGROUP - AdaptGroup; origins seen: AS402931.
- **GeoLite:** `PL`; заявленная локация в TXT `Польша` (PL). Страна совпала.
- **RDAP:** `AdaptGroup`; диапазон `31.59.204.0–31.59.207.255`; страна `PL`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 323 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** Abuse contact role object; Farhad Soltani; GOLD-MNT; lir-ae-goldip-1-MNT.
- **Ближайшие ASN:** AS200088 ARTNET2 Artnet Sp. z o.o. (251 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 24724 197155 200088 402931`.
- **Схема ASN:** [PNG](asn-schemes/03-Польша-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.59.204.75) · [Looking Glass](https://stat.ripe.net/lg/31.59.204.75) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.59.204.75&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.59.204.75)
- **Скриншоты:** [ASN](screenshots/03-Польша-overview.png) · [BGP](screenshots/03-Польша-bgp-paths.png) · [GeoLite](screenshots/03-Польша-geolocation.png) · [RDAP](screenshots/03-Польша-rdap.png)

| Северная Македония | 217.60.55.116 | MK | 217.60.55.0/24 | AS402931 ADAPTGROUP - AdaptGroup | AdaptGroup / MK | AS213900 rs RS Computers L.L.C (257 distinct paths) | [ASN](screenshots/04-Северная-Македония-overview.png) · [BGP](screenshots/04-Северная-Македония-bgp-paths.png) · [GeoLite](screenshots/04-Северная-Македония-geolocation.png) · [RDAP](screenshots/04-Северная-Македония-rdap.png) |

### Северная Македония — `217.60.55.116`

- **BGP:** `217.60.55.0/24`; origin **AS402931** — ADAPTGROUP - AdaptGroup; origins seen: AS402931.
- **GeoLite:** `MK`; заявленная локация в TXT `Северная Македония` (MK). Страна совпала.
- **RDAP:** `AdaptGroup`; диапазон `217.60.55.0–217.60.55.255`; страна `MK`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 368 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:37`.
- **RDAP entities:** Abuse contact role object; GOLD-MNT; lir-ae-goldip-1-MNT.
- **Ближайшие ASN:** AS213900 rs RS Computers L.L.C (257 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 6939 213900 213900 213900 402931`.
- **Схема ASN:** [PNG](asn-schemes/04-Северная-Македония-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/217.60.55.116) · [Looking Glass](https://stat.ripe.net/lg/217.60.55.116) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=217.60.55.116&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/217.60.55.116)
- **Скриншоты:** [ASN](screenshots/04-Северная-Македония-overview.png) · [BGP](screenshots/04-Северная-Македония-bgp-paths.png) · [GeoLite](screenshots/04-Северная-Македония-geolocation.png) · [RDAP](screenshots/04-Северная-Македония-rdap.png)

| США | 31.59.65.95 | US | 31.59.65.0/24 | AS402931 ADAPTGROUP - AdaptGroup | AdaptGroup / US | AS46841 FORKNETWORKING - Fork Networking, LLC (261 distinct paths) | [ASN](screenshots/05-США-overview.png) · [BGP](screenshots/05-США-bgp-paths.png) · [GeoLite](screenshots/05-США-geolocation.png) · [RDAP](screenshots/05-США-rdap.png) |

### США — `31.59.65.95`

- **BGP:** `31.59.65.0/24`; origin **AS402931** — ADAPTGROUP - AdaptGroup; origins seen: AS402931.
- **GeoLite:** `US`; заявленная локация в TXT `США` (US). Страна совпала.
- **RDAP:** `AdaptGroup`; диапазон `31.59.64.0–31.59.67.255`; страна `US`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 371 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:58`.
- **RDAP entities:** Abuse contact role object; Farhad Soltani; GOLD-MNT; lir-ae-goldip-1-MNT.
- **Ближайшие ASN:** AS46841 FORKNETWORKING - Fork Networking, LLC (261 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 6939 46841 402931`.
- **Схема ASN:** [PNG](asn-schemes/05-США-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.59.65.95) · [Looking Glass](https://stat.ripe.net/lg/31.59.65.95) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.59.65.95&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.59.65.95)
- **Скриншоты:** [ASN](screenshots/05-США-overview.png) · [BGP](screenshots/05-США-bgp-paths.png) · [GeoLite](screenshots/05-США-geolocation.png) · [RDAP](screenshots/05-США-rdap.png)

| Болгария | 217.60.52.39 | BG | 217.60.52.0/24 | AS402931 ADAPTGROUP - AdaptGroup | AdaptGroup / BG | AS4849 S3Company S3 Company Ltd (266 distinct paths) | [ASN](screenshots/06-Болгария-overview.png) · [BGP](screenshots/06-Болгария-bgp-paths.png) · [GeoLite](screenshots/06-Болгария-geolocation.png) · [RDAP](screenshots/06-Болгария-rdap.png) |

### Болгария — `217.60.52.39`

- **BGP:** `217.60.52.0/24`; origin **AS402931** — ADAPTGROUP - AdaptGroup; origins seen: AS402931.
- **GeoLite:** `BG`; заявленная локация в TXT `Болгария` (BG). Страна совпала.
- **RDAP:** `AdaptGroup`; диапазон `217.60.52.0–217.60.52.255`; страна `BG`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 331 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:55`.
- **RDAP entities:** Abuse contact role object; GOLD-MNT; lir-ae-goldip-1-MNT.
- **Ближайшие ASN:** AS4849 S3Company S3 Company Ltd (266 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 2914 4849 402931`.
- **Схема ASN:** [PNG](asn-schemes/06-Болгария-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/217.60.52.39) · [Looking Glass](https://stat.ripe.net/lg/217.60.52.39) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=217.60.52.39&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/217.60.52.39)
- **Скриншоты:** [ASN](screenshots/06-Болгария-overview.png) · [BGP](screenshots/06-Болгария-bgp-paths.png) · [GeoLite](screenshots/06-Болгария-geolocation.png) · [RDAP](screenshots/06-Болгария-rdap.png)

| Швеция | 132.243.231.186 | SE | 132.243.231.0/24 | AS218731 Andris-Jakovlevs Andris Jakovlevs | Andris-Jakovlevs / SE | AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (253 distinct paths) | [ASN](screenshots/07-Швеция-overview.png) · [BGP](screenshots/07-Швеция-bgp-paths.png) · [GeoLite](screenshots/07-Швеция-geolocation.png) · [RDAP](screenshots/07-Швеция-rdap.png) |

### Швеция — `132.243.231.186`

- **BGP:** `132.243.231.0/24`; origin **AS218731** — Andris-Jakovlevs Andris Jakovlevs; origins seen: AS218731.
- **GeoLite:** `SE`; заявленная локация в TXT `Швеция` (SE). Страна совпала.
- **RDAP:** `Andris-Jakovlevs`; диапазон `132.243.231.0–132.243.231.255`; страна `SE`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 322 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:49:54`.
- **RDAP entities:** Andris Jakovlevs; interlir-mnt; Abuse contact role object.
- **Ближайшие ASN:** AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (253 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 30823 215730 218731`.
- **Схема ASN:** [PNG](asn-schemes/07-Швеция-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/132.243.231.186) · [Looking Glass](https://stat.ripe.net/lg/132.243.231.186) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=132.243.231.186&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/132.243.231.186)
- **Скриншоты:** [ASN](screenshots/07-Швеция-overview.png) · [BGP](screenshots/07-Швеция-bgp-paths.png) · [GeoLite](screenshots/07-Швеция-geolocation.png) · [RDAP](screenshots/07-Швеция-rdap.png)

| Швеция 2 | 132.243.231.232 | SE | 132.243.231.0/24 | AS218731 Andris-Jakovlevs Andris Jakovlevs | Andris-Jakovlevs / SE | AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (253 distinct paths) | [ASN](screenshots/08-Швеция-2-overview.png) · [BGP](screenshots/08-Швеция-2-bgp-paths.png) · [GeoLite](screenshots/08-Швеция-2-geolocation.png) · [RDAP](screenshots/08-Швеция-2-rdap.png) |

### Швеция 2 — `132.243.231.232`

- **BGP:** `132.243.231.0/24`; origin **AS218731** — Andris-Jakovlevs Andris Jakovlevs; origins seen: AS218731.
- **GeoLite:** `SE`; заявленная локация в TXT `Швеция 2` (SE). Страна совпала.
- **RDAP:** `Andris-Jakovlevs`; диапазон `132.243.231.0–132.243.231.255`; страна `SE`; тип `LEGACY.
- **Наблюдаемость RIPE RIS:** 322 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:49:56`.
- **RDAP entities:** Andris Jakovlevs; interlir-mnt; Abuse contact role object.
- **Ближайшие ASN:** AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (253 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 30823 215730 218731`.
- **Схема ASN:** [PNG](asn-schemes/08-Швеция-2-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/132.243.231.232) · [Looking Glass](https://stat.ripe.net/lg/132.243.231.232) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=132.243.231.232&source=geo) · [RDAP](https://rdap.arin.net/registry/ip/132.243.231.232)
- **Скриншоты:** [ASN](screenshots/08-Швеция-2-overview.png) · [BGP](screenshots/08-Швеция-2-bgp-paths.png) · [GeoLite](screenshots/08-Швеция-2-geolocation.png) · [RDAP](screenshots/08-Швеция-2-rdap.png)

| Финляндия | 31.76.30.249 | FI | 31.76.30.0/24 | AS201988 VPSPay-ASN VPSPay Networks LTD | VPSPay-NET / FI | AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (263 distinct paths) | [ASN](screenshots/09-Финляндия-overview.png) · [BGP](screenshots/09-Финляндия-bgp-paths.png) · [GeoLite](screenshots/09-Финляндия-geolocation.png) · [RDAP](screenshots/09-Финляндия-rdap.png) |

### Финляндия — `31.76.30.249`

- **BGP:** `31.76.30.0/24`; origin **AS201988** — VPSPay-ASN VPSPay Networks LTD; origins seen: AS201988.
- **GeoLite:** `FI`; заявленная локация в TXT `Финляндия` (FI). Страна совпала.
- **RDAP:** `VPSPay-NET`; диапазон `31.76.30.0–31.76.30.255`; страна `FI`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 331 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** VPSPay Networks LTD; VPSPay Administrative Department; VPSPay-MNT; VPSPay Tech Department Contact Object; VPSPay Abuse Department Contact Object.
- **Ближайшие ASN:** AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (263 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 30823 215730 201988`.
- **Схема ASN:** [PNG](asn-schemes/09-Финляндия-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.76.30.249) · [Looking Glass](https://stat.ripe.net/lg/31.76.30.249) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.76.30.249&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.76.30.249)
- **Скриншоты:** [ASN](screenshots/09-Финляндия-overview.png) · [BGP](screenshots/09-Финляндия-bgp-paths.png) · [GeoLite](screenshots/09-Финляндия-geolocation.png) · [RDAP](screenshots/09-Финляндия-rdap.png)

| Финляндия 2 | 31.76.30.251 | FI | 31.76.30.0/24 | AS201988 VPSPay-ASN VPSPay Networks LTD | VPSPay-NET / FI | AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (263 distinct paths) | [ASN](screenshots/10-Финляндия-2-overview.png) · [BGP](screenshots/10-Финляндия-2-bgp-paths.png) · [GeoLite](screenshots/10-Финляндия-2-geolocation.png) · [RDAP](screenshots/10-Финляндия-2-rdap.png) |

### Финляндия 2 — `31.76.30.251`

- **BGP:** `31.76.30.0/24`; origin **AS201988** — VPSPay-ASN VPSPay Networks LTD; origins seen: AS201988.
- **GeoLite:** `FI`; заявленная локация в TXT `Финляндия 2` (FI). Страна совпала.
- **RDAP:** `VPSPay-NET`; диапазон `31.76.30.0–31.76.30.255`; страна `FI`; тип `SUB-ALLOCATED PA.
- **Наблюдаемость RIPE RIS:** 331 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:53`.
- **RDAP entities:** VPSPay Networks LTD; VPSPay Administrative Department; VPSPay-MNT; VPSPay Tech Department Contact Object; VPSPay Abuse Department Contact Object.
- **Ближайшие ASN:** AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO (263 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `8218 30823 215730 201988`.
- **Схема ASN:** [PNG](asn-schemes/10-Финляндия-2-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/31.76.30.251) · [Looking Glass](https://stat.ripe.net/lg/31.76.30.251) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.76.30.251&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/31.76.30.251)
- **Скриншоты:** [ASN](screenshots/10-Финляндия-2-overview.png) · [BGP](screenshots/10-Финляндия-2-bgp-paths.png) · [GeoLite](screenshots/10-Финляндия-2-geolocation.png) · [RDAP](screenshots/10-Финляндия-2-rdap.png)

| Гонконг | 178.83.121.39 | GB | 178.83.121.0/24 | AS207847 CloudBlast CloudBlast LLC | NET-178-83-121-0-24 / AE | AS138997 EDCL-AS-AP - Eons Data Communications Limited (259 distinct paths) | [ASN](screenshots/11-Гонконг-overview.png) · [BGP](screenshots/11-Гонконг-bgp-paths.png) · [GeoLite](screenshots/11-Гонконг-geolocation.png) · [RDAP](screenshots/11-Гонконг-rdap.png) |

### Гонконг — `178.83.121.39`

- **BGP:** `178.83.121.0/24`; origin **AS207847** — CloudBlast CloudBlast LLC; origins seen: AS207847.
- **GeoLite:** `GB`; заявленная локация в TXT `Гонконг` (HK). Страна не совпадает; проверить внимательно.
- **RDAP:** `NET-178-83-121-0-24`; диапазон `178.83.121.0–178.83.121.255`; страна `AE`; тип `ASSIGNED PA.
- **Наблюдаемость RIPE RIS:** 325 peers / 23 RRCs; последняя метка BGP `2026-10-28T00:50:54`.
- **RDAP entities:** netutils-mnt; Company 66391fa4D5vkaXeZ; Private Customer.
- **Ближайшие ASN:** AS138997 EDCL-AS-AP - Eons Data Communications Limited (259 уник. AS_PATH).
- **Пример AS_PATH (peer → origin):** `15692 174 138997 138997 207847`.
- **Схема ASN:** [PNG](asn-schemes/11-Гонконг-asn-scheme.png)
- **Источники:** [RIPEstat overview](https://stat.ripe.net/resource/178.83.121.39) · [Looking Glass](https://stat.ripe.net/lg/178.83.121.39) · [GeoLite](https://stat.ripe.net/widget/maxmind-geo-lite#resource=178.83.121.39&source=geo) · [RDAP](https://rdap.db.ripe.net/ip/178.83.121.39)
- **Скриншоты:** [ASN](screenshots/11-Гонконг-overview.png) · [BGP](screenshots/11-Гонконг-bgp-paths.png) · [GeoLite](screenshots/11-Гонконг-geolocation.png) · [RDAP](screenshots/11-Гонконг-rdap.png)

## Ограничения интерпретации

RIPEstat Looking Glass показывает AS_PATH, видимый коллекторам RIPE RIS. Путь не является физическим traceroute и не подтверждает договорные отношения между сетями. Числа у соседних ASN — число уникальных вариантов AS_PATH, не число соединений или объём трафика. GeoLite указывает оценочную страну; RDAP — административные сведения о регистрации диапазона. RIPEstat мог показывать уведомление о задержке данных.

Источники методики: [RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) · [RIPEstat data sources / MaxMind GeoLite](https://stat.ripe.net/docs/getting-started/ripestat-data-sources).


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для DuckVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

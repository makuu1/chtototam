# LegendaryVPN — ASN и хостинг IP-локаций

**Дата проверки:** 28 октября 2026 г.  **Сервис:** LegendaryVPN  **Записей:** 16

## Краткие выводы

- Все 16 адресов имеют публично видимый BGP-префикс и origin ASN. Страна в поле GeoLite совпала со страной локации из TXT во всех 16 случаях; точный город RIPEstat GeoLite не указал.
- Шесть IP объявляются ASN, зарегистрированными на UAB “Cherry Servers”: Литва, Швеция, Германия, Сингапур, Япония и США. Это свидетельствует о сети, через которую объявляются адреса, но само по себе не определяет оператора VPN или физическую площадку сервера.
- Для остальных адресов origin ASN указывает на OC Networks, Onlyservers / Packet Star, Tyna Host, Niobe Bilisim, Kuroit, WeDeploy, Private Layer, Mevspace, H2Nexus Cloud Services и Leaseweb Canada.
- RDAP нередко отражает страну/организацию регистрации блока, а не геолокацию адреса. Например: адрес Швеции зарегистрирован в LT; адрес Бразилии — на IPXO с кодом CL; адрес Индии — в BD; адреса Сингапура, Японии и США — на Cherry Servers в LT.
- Схемы показывают ближайшие ASN и наиболее частый следующий ASN в наборах уникальных путей RIPE RIS. Количество рядом с узлом — число уникальных строк AS_PATH с этим переходом, не число соединений и не объём трафика.

## Сводная таблица

| Локация из TXT | IP | GeoLite | BGP prefix | Origin ASN / сеть | RDAP name (страна) | Наблюдаемые ближайшие ASN | Скриншоты |
|---|---|---|---|---|---|---|---|
| Литва | 46.166.168.18 | LT | 46.166.168.0/21 | AS16125 CHERRYSERVERS1-AS UAB "Cherry Servers" | net-194372-269047-242431 (LT) | AS13194 BITE UAB "Bite Lietuva"; AS8764 Telia-Lietuva Telia Lietuva, AB; AS1299 TWELVE99 Arelion Sweden AB | [ASN/реестр](screenshots/01-Lithuania-overview.png) · [BGP](screenshots/01-Lithuania-bgp-paths.png) · [GeoLite](screenshots/01-Lithuania-geolocation.png) · [RDAP](screenshots/01-Lithuania-rdap.png) |
| Швеция | 84.32.50.51 | SE | 84.32.50.0/24 | AS214159 CHERRYSERVERS5-AS UAB "Cherry Servers" | NET-84-32-50-0-24 (LT) | AS1299 TWELVE99 Arelion Sweden AB; AS9002 RETN-AS RETN Limited; AS2914 NTT-DATA-2914 - NTT America, Inc. | [ASN/реестр](screenshots/02-Sweden-overview.png) · [BGP](screenshots/02-Sweden-bgp-paths.png) · [GeoLite](screenshots/02-Sweden-geolocation.png) · [RDAP](screenshots/02-Sweden-rdap.png) |
| Эстония | 185.252.177.175 | EE | 185.252.177.0/24 | AS209693 OC-NETWORK OC NETWORKS LIMITED | EE-CENTHOST (EE) | AS9002 RETN-AS RETN Limited | [ASN/реестр](screenshots/03-Estonia-overview.png) · [BGP](screenshots/03-Estonia-bgp-paths.png) · [GeoLite](screenshots/03-Estonia-geolocation.png) · [RDAP](screenshots/03-Estonia-rdap.png) |
| Германия | 88.216.36.31 | DE | 88.216.36.0/24 | AS213896 CHERRYSERVERS6-AS UAB "Cherry Servers" | IPXO (EU) | AS1299 TWELVE99 Arelion Sweden AB; AS2914 NTT-DATA-2914 - NTT America, Inc.; AS9002 RETN-AS RETN Limited | [ASN/реестр](screenshots/04-Germany-overview.png) · [BGP](screenshots/04-Germany-bgp-paths.png) · [GeoLite](screenshots/04-Germany-geolocation.png) · [RDAP](screenshots/04-Germany-rdap.png) |
| Великобритания | 217.179.220.244 | GB | 217.179.220.0/23 | AS204044 Onlyservers Packet Star Networks Limited | ONLYSERVERS-HOSTED (GB) | AS249 PACKETSTAR - IDDQD-AS | [ASN/реестр](screenshots/05-United-Kingdom-overview.png) · [BGP](screenshots/05-United-Kingdom-bgp-paths.png) · [GeoLite](screenshots/05-United-Kingdom-geolocation.png) · [RDAP](screenshots/05-United-Kingdom-rdap.png) |
| Бразилия | 191.96.79.47 | BR | 191.96.79.0/24 | AS270353 AS270353 - Tyna Host - Datacenter no Brasil | IPXO (CL) | AS263009 AS263009 - FORTE TELECOM LTDA.; AS6939 HURRICANE - Hurricane Electric LLC; AS137409 GSLNETWORKS-AS-AP - GSL Networks Pty LTD | [ASN/реестр](screenshots/06-Brazil-overview.png) · [BGP](screenshots/06-Brazil-bgp-paths.png) · [GeoLite](screenshots/06-Brazil-geolocation.png) · [RDAP](screenshots/06-Brazil-rdap.png) |
| Турция | 185.87.253.61 | TR | 185.87.253.0/24 | AS42868 NiobeBilisimHizmetleri Niobe Bilisim Ltd. Sti. | WEBHOSTING-AS-2025 (TR) | AS6205 HizliNet-Teknoloji - HizliNet Teknoloji A.S.; AS12735 ASTurkNet TurkNet Iletisim Hizmetleri A.S. | [ASN/реестр](screenshots/07-Turkey-overview.png) · [BGP](screenshots/07-Turkey-bgp-paths.png) · [GeoLite](screenshots/07-Turkey-geolocation.png) · [RDAP](screenshots/07-Turkey-rdap.png) |
| Индия | 163.52.57.12 | IN | 163.52.57.0/24 | AS152586 KUROIT-AS-AP - Kuroit | HOSTFC-BD (BD) | AS9498 BBIL-AP - BHARTI Airtel Ltd. | [ASN/реестр](screenshots/08-India-overview.png) · [BGP](screenshots/08-India-bgp-paths.png) · [GeoLite](screenshots/08-India-geolocation.png) · [RDAP](screenshots/08-India-rdap.png) |
| Франция | 31.185.105.123 | FR | 31.185.105.0/24 | AS210699 WEDEPLOY-SAS WEDEPLOY SAS | IPXO_31_185_105 (FR) | AS198831 HOLYCLOUD GENIUSWEER SAS | [ASN/реестр](screenshots/09-France-overview.png) · [BGP](screenshots/09-France-bgp-paths.png) · [GeoLite](screenshots/09-France-geolocation.png) · [RDAP](screenshots/09-France-rdap.png) |
| Швейцария | 81.17.23.139 | CH | 81.17.16.0/20 | AS51852 PLI-AS Private Layer INC | CLIENTID1971 (CH) | AS43440 digitalesuisse Digitale Suisse AG | [ASN/реестр](screenshots/10-Switzerland-overview.png) · [BGP](screenshots/10-Switzerland-bgp-paths.png) · [GeoLite](screenshots/10-Switzerland-geolocation.png) · [RDAP](screenshots/10-Switzerland-rdap.png) |
| Польша | 80.47.18.86 | PL | 80.47.16.0/20 | AS201814 Mevspace MEVSPACE sp. z o.o. | PL-MEV-20011123 (PL) | AS50263 IXP-1-IX-EU A-Systems Sp. z o.o.; AS3303 SWISSCOM Swisscom (Schweiz) AG; AS8218 NEO-ASN Zayo Infrastructure France SA | [ASN/реестр](screenshots/11-Poland-overview.png) · [BGP](screenshots/11-Poland-bgp-paths.png) · [GeoLite](screenshots/11-Poland-geolocation.png) · [RDAP](screenshots/11-Poland-rdap.png) |
| Финляндия | 144.31.90.232 | FI | 144.31.90.0/24 | AS215730 H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO | H2NEXUS (FI) | AS30823 AUROLOGIC aurologic GmbH | [ASN/реестр](screenshots/12-Finland-overview.png) · [BGP](screenshots/12-Finland-bgp-paths.png) · [GeoLite](screenshots/12-Finland-geolocation.png) · [RDAP](screenshots/12-Finland-rdap.png) |
| Сингапур | 88.216.191.143 | SG | 88.216.191.0/24 | AS216444 CHERRYSERVERS4-AS UAB "Cherry Servers" | NET-88-216-191-0-24 (LT) | AS3356 LEVEL3 - Level 3 Parent, LLC; AS6453 AS6453 - TATA COMMUNICATIONS (AMERICA) INC; AS9002 RETN-AS RETN Limited | [ASN/реестр](screenshots/13-Singapore-overview.png) · [BGP](screenshots/13-Singapore-bgp-paths.png) · [GeoLite](screenshots/13-Singapore-geolocation.png) · [RDAP](screenshots/13-Singapore-rdap.png) |
| Япония | 88.216.188.26 | JP | 88.216.188.0/24 | AS210162 CHERRYSERVERS7-AS UAB "Cherry Servers" | NET-88-216-188-0-24 (LT) | AS3356 LEVEL3 - Level 3 Parent, LLC; AS9002 RETN-AS RETN Limited; AS6453 AS6453 - TATA COMMUNICATIONS (AMERICA) INC | [ASN/реестр](screenshots/14-Japan-overview.png) · [BGP](screenshots/14-Japan-bgp-paths.png) · [GeoLite](screenshots/14-Japan-geolocation.png) · [RDAP](screenshots/14-Japan-rdap.png) |
| Канада | 184.107.78.5 | CA | 184.107.0.0/16 | AS32613 IWEB-AS - Leaseweb Canada Inc. | IWEB-BLK-07 (—) | AS174 COGENT-174 - Cogent Communications, LLC; AS6453 AS6453 - TATA COMMUNICATIONS (AMERICA) INC; AS3257 GTT-BACKBONE GTT Communications Inc. | [ASN/реестр](screenshots/15-Canada-overview.png) · [BGP](screenshots/15-Canada-bgp-paths.png) · [GeoLite](screenshots/15-Canada-geolocation.png) · [RDAP](screenshots/15-Canada-rdap.png) |
| США | 88.216.222.94 | US | 88.216.222.0/24 | AS204770 CHERRYSERVERS3-AS UAB "Cherry Servers" | IPXO (LT) | AS1299 TWELVE99 Arelion Sweden AB; AS3356 LEVEL3 - Level 3 Parent, LLC; AS60068 CDN77 Datacamp Limited | [ASN/реестр](screenshots/16-USA-overview.png) · [BGP](screenshots/16-USA-bgp-paths.png) · [GeoLite](screenshots/16-USA-geolocation.png) · [RDAP](screenshots/16-USA-rdap.png) |

## Детали по локациям

### Литва — `46.166.168.18`

- **BGP prefix:** `46.166.168.0/21`; **origin:** AS16125 — CHERRYSERVERS1-AS UAB "Cherry Servers"
- **GeoLite:** `LT`; **RDAP network name:** `net-194372-269047-242431`; **RDAP range:** `46.166.168.16–46.166.168.23`; **RDAP country:** `LT`.
- **RDAP entities:** Cherry Servers NOC; DUOMENUCENTRAS-MNT; Cherry Servers abuse handling.
- **Ближайшие ASN в путях RIPE RIS:** AS13194 — BITE UAB "Bite Lietuva" (102 уник. AS_PATH); далее чаще AS9002 — RETN-AS RETN Limited (23); AS8764 — Telia-Lietuva Telia Lietuva, AB (97 уник. AS_PATH); далее чаще AS174 — COGENT-174 - Cogent Communications, LLC (13); AS1299 — TWELVE99 Arelion Sweden AB (68 уник. AS_PATH); далее чаще AS2914 — NTT-DATA-2914 - NTT America, Inc. (5).
- **Пример наблюдаемого пути (от peer к origin):** `8218 8764 16125`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/46.166.168.18) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/46.166.168.18) · [RDAP](https://rdap.org/ip/46.166.168.18) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=46.166.168.18&source=geo)
- **Схема ASN:** [PNG](asn-schemes/01-Lithuania-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/01-Lithuania-overview.png) · [BGP-пути](screenshots/01-Lithuania-bgp-paths.png) · [GeoLite](screenshots/01-Lithuania-geolocation.png) · [RDAP](screenshots/01-Lithuania-rdap.png)

### Швеция — `84.32.50.51`

- **BGP prefix:** `84.32.50.0/24`; **origin:** AS214159 — CHERRYSERVERS5-AS UAB "Cherry Servers"
- **GeoLite:** `SE`; **RDAP network name:** `NET-84-32-50-0-24`; **RDAP range:** `84.32.50.0–84.32.50.255`; **RDAP country:** `LT`.
- **RDAP entities:** netutils-mnt; Company 64d34573Gz9YjyWz; Private Customer; Private Customer.
- **Ближайшие ASN в путях RIPE RIS:** AS1299 — TWELVE99 Arelion Sweden AB (92 уник. AS_PATH); далее чаще AS174 — COGENT-174 - Cogent Communications, LLC (14); AS9002 — RETN-AS RETN Limited (91 уник. AS_PATH); далее чаще AS3356 — LEVEL3 - Level 3 Parent, LLC (15); AS2914 — NTT-DATA-2914 - NTT America, Inc. (46 уник. AS_PATH); далее чаще AS3491 — PCCWG-APAC-HK - PCCW Global (HK) Ltd. (4).
- **Пример наблюдаемого пути (от peer к origin):** `15692 2914 214159`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/84.32.50.51) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/84.32.50.51) · [RDAP](https://rdap.org/ip/84.32.50.51) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=84.32.50.51&source=geo)
- **Схема ASN:** [PNG](asn-schemes/02-Sweden-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/02-Sweden-overview.png) · [BGP-пути](screenshots/02-Sweden-bgp-paths.png) · [GeoLite](screenshots/02-Sweden-geolocation.png) · [RDAP](screenshots/02-Sweden-rdap.png)

### Эстония — `185.252.177.175`

- **BGP prefix:** `185.252.177.0/24`; **origin:** AS209693 — OC-NETWORK OC NETWORKS LIMITED
- **GeoLite:** `EE`; **RDAP network name:** `EE-CENTHOST`; **RDAP range:** `185.252.177.0–185.252.177.255`; **RDAP country:** `EE`.
- **RDAP entities:** Placeholder Person Object; MNT-NETERRA; 1Cent Host; Abuse contact role object.
- **Ближайшие ASN в путях RIPE RIS:** AS9002 — RETN-AS RETN Limited (257 уник. AS_PATH); далее чаще AS3356 — LEVEL3 - Level 3 Parent, LLC (40).
- **Пример наблюдаемого пути (от peer к origin):** `15692 2914 9002 209693`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/185.252.177.175) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/185.252.177.175) · [RDAP](https://rdap.org/ip/185.252.177.175) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=185.252.177.175&source=geo)
- **Схема ASN:** [PNG](asn-schemes/03-Estonia-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/03-Estonia-overview.png) · [BGP-пути](screenshots/03-Estonia-bgp-paths.png) · [GeoLite](screenshots/03-Estonia-geolocation.png) · [RDAP](screenshots/03-Estonia-rdap.png)

### Германия — `88.216.36.31`

- **BGP prefix:** `88.216.36.0/24`; **origin:** AS213896 — CHERRYSERVERS6-AS UAB "Cherry Servers"
- **GeoLite:** `DE`; **RDAP network name:** `IPXO`; **RDAP range:** `88.216.36.0–88.216.36.255`; **RDAP country:** `EU`.
- **RDAP entities:** netutils-mnt; Company 64d34573Gz9YjyWz; Private Customer; Private Customer.
- **Ближайшие ASN в путях RIPE RIS:** AS1299 — TWELVE99 Arelion Sweden AB (136 уник. AS_PATH); далее чаще AS174 — COGENT-174 - Cogent Communications, LLC (25); AS2914 — NTT-DATA-2914 - NTT America, Inc. (51 уник. AS_PATH); далее чаще AS3491 — PCCWG-APAC-HK - PCCW Global (HK) Ltd. (4); AS9002 — RETN-AS RETN Limited (47 уник. AS_PATH); далее чаще AS3356 — LEVEL3 - Level 3 Parent, LLC (7).
- **Пример наблюдаемого пути (от peer к origin):** `15692 2914 213896`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/88.216.36.31) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/88.216.36.31) · [RDAP](https://rdap.org/ip/88.216.36.31) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=88.216.36.31&source=geo)
- **Схема ASN:** [PNG](asn-schemes/04-Germany-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/04-Germany-overview.png) · [BGP-пути](screenshots/04-Germany-bgp-paths.png) · [GeoLite](screenshots/04-Germany-geolocation.png) · [RDAP](screenshots/04-Germany-rdap.png)

### Великобритания — `217.179.220.244`

- **BGP prefix:** `217.179.220.0/23`; **origin:** AS204044 — Onlyservers Packet Star Networks Limited
- **GeoLite:** `GB`; **RDAP network name:** `ONLYSERVERS-HOSTED`; **RDAP range:** `217.179.220.0–217.179.220.255`; **RDAP country:** `GB`.
- **RDAP entities:** Packet Star Networks Administrator; STAR-MNT; Abuse Admin.
- **Ближайшие ASN в путях RIPE RIS:** AS249 — PACKETSTAR - IDDQD-AS (258 уник. AS_PATH); далее чаще AS1299 — TWELVE99 Arelion Sweden AB (80).
- **Пример наблюдаемого пути (от peer к origin):** `8218 9002 249 204044`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/217.179.220.244) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/217.179.220.244) · [RDAP](https://rdap.org/ip/217.179.220.244) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=217.179.220.244&source=geo)
- **Схема ASN:** [PNG](asn-schemes/05-United-Kingdom-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/05-United-Kingdom-overview.png) · [BGP-пути](screenshots/05-United-Kingdom-bgp-paths.png) · [GeoLite](screenshots/05-United-Kingdom-geolocation.png) · [RDAP](screenshots/05-United-Kingdom-rdap.png)

### Бразилия — `191.96.79.47`

- **BGP prefix:** `191.96.79.0/24`; **origin:** AS270353 — AS270353 - Tyna Host - Datacenter no Brasil
- **GeoLite:** `BR`; **RDAP network name:** `IPXO`; **RDAP range:** `191.96.79.0–191.96.79.255`; **RDAP country:** `CL`.
- **RDAP entities:** netutils-mnt; Internet Utilities Admin/Tech Contact; Tyna Host Datacenter no Brasil; Tyna Host.
- **Ближайшие ASN в путях RIPE RIS:** AS263009 — AS263009 - FORTE TELECOM LTDA. (194 уник. AS_PATH); далее чаще AS3356 — LEVEL3 - Level 3 Parent, LLC (158); AS6939 — HURRICANE - Hurricane Electric LLC (31 уник. AS_PATH); далее чаще AS3303 — SWISSCOM Swisscom (Schweiz) AG (8); AS137409 — GSLNETWORKS-AS-AP - GSL Networks Pty LTD (3 уник. AS_PATH); далее чаще AS8529 — OMANTEL-AS Zain Omantel International FZ-LLC (1).
- **Пример наблюдаемого пути (от peer к origin):** `15692 174 263009 263009 270353`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/191.96.79.47) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/191.96.79.47) · [RDAP](https://rdap.org/ip/191.96.79.47) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=191.96.79.47&source=geo)
- **Схема ASN:** [PNG](asn-schemes/06-Brazil-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/06-Brazil-overview.png) · [BGP-пути](screenshots/06-Brazil-bgp-paths.png) · [GeoLite](screenshots/06-Brazil-geolocation.png) · [RDAP](screenshots/06-Brazil-rdap.png)

### Турция — `185.87.253.61`

- **BGP prefix:** `185.87.253.0/24`; **origin:** AS42868 — NiobeBilisimHizmetleri Niobe Bilisim Ltd. Sti.
- **GeoLite:** `TR`; **RDAP network name:** `WEBHOSTING-AS-2025`; **RDAP range:** `185.87.253.0–185.87.253.255`; **RDAP country:** `TR`.
- **RDAP entities:** NIOBE-MNT; Webhosting Bilisim Teknolojileri A.S; Webhosting Bilisim Teknolojileri A.S; Webhosting Bilisim Teknolojileri A.S.
- **Ближайшие ASN в путях RIPE RIS:** AS6205 — HizliNet-Teknoloji - HizliNet Teknoloji A.S. (171 уник. AS_PATH); далее чаще AS174 — COGENT-174 - Cogent Communications, LLC (68); AS12735 — ASTurkNet TurkNet Iletisim Hizmetleri A.S. (101 уник. AS_PATH); далее чаще AS57463 — NetIX NetIX Communications JSC (43).
- **Пример наблюдаемого пути (от peer к origin):** `15692 174 6205 42868`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/185.87.253.61) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/185.87.253.61) · [RDAP](https://rdap.org/ip/185.87.253.61) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=185.87.253.61&source=geo)
- **Схема ASN:** [PNG](asn-schemes/07-Turkey-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/07-Turkey-overview.png) · [BGP-пути](screenshots/07-Turkey-bgp-paths.png) · [GeoLite](screenshots/07-Turkey-geolocation.png) · [RDAP](screenshots/07-Turkey-rdap.png)

### Индия — `163.52.57.12`

- **BGP prefix:** `163.52.57.0/24`; **origin:** AS152586 — KUROIT-AS-AP - Kuroit
- **GeoLite:** `IN`; **RDAP network name:** `HOSTFC-BD`; **RDAP range:** `163.52.56.0–163.52.57.255`; **RDAP country:** `BD`.
- **RDAP entities:** IRT-HOSTFC-BD1; HostFC administrator; HostFC.
- **Ближайшие ASN в путях RIPE RIS:** AS9498 — BBIL-AP - BHARTI Airtel Ltd. (263 уник. AS_PATH); далее чаще AS57463 — NetIX NetIX Communications JSC (25).
- **Пример наблюдаемого пути (от peer к origin):** `15692 2914 9498 152586`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/163.52.57.12) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/163.52.57.12) · [RDAP](https://rdap.org/ip/163.52.57.12) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=163.52.57.12&source=geo)
- **Схема ASN:** [PNG](asn-schemes/08-India-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/08-India-overview.png) · [BGP-пути](screenshots/08-India-bgp-paths.png) · [GeoLite](screenshots/08-India-geolocation.png) · [RDAP](screenshots/08-India-rdap.png)

### Франция — `31.185.105.123`

- **BGP prefix:** `31.185.105.0/24`; **origin:** AS210699 — WEDEPLOY-SAS WEDEPLOY SAS
- **GeoLite:** `FR`; **RDAP network name:** `IPXO_31_185_105`; **RDAP range:** `31.185.105.0–31.185.105.255`; **RDAP country:** `FR`.
- **RDAP entities:** INFRAWIRE NETWORKS SAS; NbIServ-MNT; netutils-mnt; INFRAWIRE NETWORKS SAS; INFRAWIRE NETWORKS SAS.
- **Ближайшие ASN в путях RIPE RIS:** AS198831 — HOLYCLOUD GENIUSWEER SAS (254 уник. AS_PATH); далее чаще AS399486 — VIRTUO - 12651980 CANADA INC. (254).
- **Пример наблюдаемого пути (от peer к origin):** `15692 174 3257 399486 198831 210699`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/31.185.105.123) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/31.185.105.123) · [RDAP](https://rdap.org/ip/31.185.105.123) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=31.185.105.123&source=geo)
- **Схема ASN:** [PNG](asn-schemes/09-France-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/09-France-overview.png) · [BGP-пути](screenshots/09-France-bgp-paths.png) · [GeoLite](screenshots/09-France-geolocation.png) · [RDAP](screenshots/09-France-rdap.png)

### Швейцария — `81.17.23.139`

- **BGP prefix:** `81.17.16.0/20`; **origin:** AS51852 — PLI-AS Private Layer INC
- **GeoLite:** `CH`; **RDAP network name:** `CLIENTID1971`; **RDAP range:** `81.17.23.136–81.17.23.143`; **RDAP country:** `CH`.
- **RDAP entities:** Milciades Garcia; KP73900-MNT; Abuse-C Role.
- **Ближайшие ASN в путях RIPE RIS:** AS43440 — digitalesuisse Digitale Suisse AG (282 уник. AS_PATH); далее чаще AS6939 — HURRICANE - Hurricane Electric LLC (127).
- **Пример наблюдаемого пути (от peer к origin):** `15692 174 43440 51852`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/81.17.23.139) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/81.17.23.139) · [RDAP](https://rdap.org/ip/81.17.23.139) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=81.17.23.139&source=geo)
- **Схема ASN:** [PNG](asn-schemes/10-Switzerland-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/10-Switzerland-overview.png) · [BGP-пути](screenshots/10-Switzerland-bgp-paths.png) · [GeoLite](screenshots/10-Switzerland-geolocation.png) · [RDAP](screenshots/10-Switzerland-rdap.png)

### Польша — `80.47.18.86`

- **BGP prefix:** `80.47.16.0/20`; **origin:** AS201814 — Mevspace MEVSPACE sp. z o.o.
- **GeoLite:** `PL`; **RDAP network name:** `PL-MEV-20011123`; **RDAP range:** `80.47.0.0–80.47.31.255`; **RDAP country:** `PL`.
- **RDAP entities:** Mevspace Admins; MEVSPACE sp. z o.o.; RIPE-NCC-HM-MNT; SKYTECH-MNT; Abuse-C Role.
- **Ближайшие ASN в путях RIPE RIS:** AS50263 — IXP-1-IX-EU A-Systems Sp. z o.o. (56 уник. AS_PATH); далее чаще AS6939 — HURRICANE - Hurricane Electric LLC (19); AS3303 — SWISSCOM Swisscom (Schweiz) AG (8 уник. AS_PATH); далее чаще AS8758 — IWAY Iway AG (3); AS8218 — NEO-ASN Zayo Infrastructure France SA (6 уник. AS_PATH); далее чаще AS34019 — HIVANE Hivane Association (4).
- **Пример наблюдаемого пути (от peer к origin):** `8218 201814`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/80.47.18.86) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/80.47.18.86) · [RDAP](https://rdap.org/ip/80.47.18.86) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=80.47.18.86&source=geo)
- **Схема ASN:** [PNG](asn-schemes/11-Poland-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/11-Poland-overview.png) · [BGP-пути](screenshots/11-Poland-bgp-paths.png) · [GeoLite](screenshots/11-Poland-geolocation.png) · [RDAP](screenshots/11-Poland-rdap.png)

### Финляндия — `144.31.90.232`

- **BGP prefix:** `144.31.90.0/24`; **origin:** AS215730 — H2NEXUS-AS H2NEXUS CLOUD SERVICES - FZCO
- **GeoLite:** `FI`; **RDAP network name:** `H2NEXUS`; **RDAP range:** `144.31.90.0–144.31.90.255`; **RDAP country:** `FI`.
- **RDAP entities:** H2NEXUS CLOUD SERVICES FZCO; lir-us-acedatacenter-1-MNT; H2NEXUS CLOUD SERVICES FZCO; H2NEXUS CLOUD SERVICES FZCO.
- **Ближайшие ASN в путях RIPE RIS:** AS30823 — AUROLOGIC aurologic GmbH (252 уник. AS_PATH); далее чаще AS1299 — TWELVE99 Arelion Sweden AB (148).
- **Пример наблюдаемого пути (от peer к origin):** `8218 30823 215730`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/144.31.90.232) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/144.31.90.232) · [RDAP](https://rdap.org/ip/144.31.90.232) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=144.31.90.232&source=geo)
- **Схема ASN:** [PNG](asn-schemes/12-Finland-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/12-Finland-overview.png) · [BGP-пути](screenshots/12-Finland-bgp-paths.png) · [GeoLite](screenshots/12-Finland-geolocation.png) · [RDAP](screenshots/12-Finland-rdap.png)

### Сингапур — `88.216.191.143`

- **BGP prefix:** `88.216.191.0/24`; **origin:** AS216444 — CHERRYSERVERS4-AS UAB "Cherry Servers"
- **GeoLite:** `SG`; **RDAP network name:** `NET-88-216-191-0-24`; **RDAP range:** `88.216.191.0–88.216.191.255`; **RDAP country:** `LT`.
- **RDAP entities:** netutils-mnt; Company 64d34573Gz9YjyWz; Private Customer; Private Customer.
- **Ближайшие ASN в путях RIPE RIS:** AS3356 — LEVEL3 - Level 3 Parent, LLC (134 уник. AS_PATH); далее чаще AS174 — COGENT-174 - Cogent Communications, LLC (14); AS6453 — AS6453 - TATA COMMUNICATIONS (AMERICA) INC (85 уник. AS_PATH); далее чаще AS1299 — TWELVE99 Arelion Sweden AB (23); AS9002 — RETN-AS RETN Limited (38 уник. AS_PATH); далее чаще AS6762 — SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (5).
- **Пример наблюдаемого пути (от peer к origin):** `15692 174 3356 216444`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/88.216.191.143) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/88.216.191.143) · [RDAP](https://rdap.org/ip/88.216.191.143) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=88.216.191.143&source=geo)
- **Схема ASN:** [PNG](asn-schemes/13-Singapore-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/13-Singapore-overview.png) · [BGP-пути](screenshots/13-Singapore-bgp-paths.png) · [GeoLite](screenshots/13-Singapore-geolocation.png) · [RDAP](screenshots/13-Singapore-rdap.png)

### Япония — `88.216.188.26`

- **BGP prefix:** `88.216.188.0/24`; **origin:** AS210162 — CHERRYSERVERS7-AS UAB "Cherry Servers"
- **GeoLite:** `JP`; **RDAP network name:** `NET-88-216-188-0-24`; **RDAP range:** `88.216.188.0–88.216.188.255`; **RDAP country:** `LT`.
- **RDAP entities:** netutils-mnt; Company 64d34573Gz9YjyWz; Private Customer; Private Customer.
- **Ближайшие ASN в путях RIPE RIS:** AS3356 — LEVEL3 - Level 3 Parent, LLC (91 уник. AS_PATH); далее чаще AS1299 — TWELVE99 Arelion Sweden AB (9); AS9002 — RETN-AS RETN Limited (81 уник. AS_PATH); далее чаще AS6762 — SEABONE-NET TELECOM ITALIA SPARKLE S.p.A. (9); AS6453 — AS6453 - TATA COMMUNICATIONS (AMERICA) INC (43 уник. AS_PATH); далее чаще AS1299 — TWELVE99 Arelion Sweden AB (9).
- **Пример наблюдаемого пути (от peer к origin):** `15692 174 3491 210162`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/88.216.188.26) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/88.216.188.26) · [RDAP](https://rdap.org/ip/88.216.188.26) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=88.216.188.26&source=geo)
- **Схема ASN:** [PNG](asn-schemes/14-Japan-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/14-Japan-overview.png) · [BGP-пути](screenshots/14-Japan-bgp-paths.png) · [GeoLite](screenshots/14-Japan-geolocation.png) · [RDAP](screenshots/14-Japan-rdap.png)

### Канада — `184.107.78.5`

- **BGP prefix:** `184.107.0.0/16`; **origin:** AS32613 — IWEB-AS - Leaseweb Canada Inc.
- **GeoLite:** `CA`; **RDAP network name:** `IWEB-BLK-07`; **RDAP range:** `184.107.0.0–184.107.255.255`; **RDAP country:** `не указана`.
- **RDAP entities:** Leaseweb Canada Inc..
- **Ближайшие ASN в путях RIPE RIS:** AS174 — COGENT-174 - Cogent Communications, LLC (136 уник. AS_PATH); далее чаще AS1299 — TWELVE99 Arelion Sweden AB (25); AS6453 — AS6453 - TATA COMMUNICATIONS (AMERICA) INC (63 уник. AS_PATH); далее чаще AS2914 — NTT-DATA-2914 - NTT America, Inc. (12); AS3257 — GTT-BACKBONE GTT Communications Inc. (58 уник. AS_PATH); далее чаще AS3356 — LEVEL3 - Level 3 Parent, LLC (6).
- **Пример наблюдаемого пути (от peer к origin):** `15692 174 32613`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/184.107.78.5) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/184.107.78.5) · [RDAP](https://rdap.org/ip/184.107.78.5) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=184.107.78.5&source=geo)
- **Схема ASN:** [PNG](asn-schemes/15-Canada-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/15-Canada-overview.png) · [BGP-пути](screenshots/15-Canada-bgp-paths.png) · [GeoLite](screenshots/15-Canada-geolocation.png) · [RDAP](screenshots/15-Canada-rdap.png)

### США — `88.216.222.94`

- **BGP prefix:** `88.216.222.0/24`; **origin:** AS204770 — CHERRYSERVERS3-AS UAB "Cherry Servers"
- **GeoLite:** `US`; **RDAP network name:** `IPXO`; **RDAP range:** `88.216.216.0–88.216.223.255`; **RDAP country:** `LT`.
- **RDAP entities:** MNT-NTT-LIR; netutils-mnt; Internet Utilities Admin/Tech Contact; UAB Nacionalinis Telekomunikaciju Tinklas; Internet Utilities Abuse Contact.
- **Ближайшие ASN в путях RIPE RIS:** AS1299 — TWELVE99 Arelion Sweden AB (114 уник. AS_PATH); далее чаще AS34549 — MEER-AS meerfarbig GmbH & Co. KG (5); AS3356 — LEVEL3 - Level 3 Parent, LLC (81 уник. AS_PATH); далее чаще AS6939 — HURRICANE - Hurricane Electric LLC (7); AS60068 — CDN77 Datacamp Limited (44 уник. AS_PATH); далее чаще AS174 — COGENT-174 - Cogent Communications, LLC (21).
- **Пример наблюдаемого пути (от peer к origin):** `8218 6461 3356 204770`.
- **Источники:** [RIPEstat Overview](https://stat.ripe.net/resource/88.216.222.94) · [RIPEstat Looking Glass](https://stat.ripe.net/lg/88.216.222.94) · [RDAP](https://rdap.org/ip/88.216.222.94) · [GeoLite widget](https://stat.ripe.net/widget/maxmind-geo-lite#resource=88.216.222.94&source=geo)
- **Схема ASN:** [PNG](asn-schemes/16-USA-asn-scheme.png)
- **Скриншоты источников:** [ASN и prefix](screenshots/16-USA-overview.png) · [BGP-пути](screenshots/16-USA-bgp-paths.png) · [GeoLite](screenshots/16-USA-geolocation.png) · [RDAP](screenshots/16-USA-rdap.png)

## Как читать результат

Origin ASN — автономная система, которая сейчас объявляет префикс через BGP. Поле RDAP описывает реестровую запись адресного блока; имя IPXO, например, указывает на реестровую/посредническую запись и не доказывает, кто физически предоставляет сервер. GeoLite — оценка страны для IP, не проверка физического адреса оборудования.

AS_PATH отображает последовательность ASN, видимую сборщикам RIPE RIS. Он не показывает физический путь пакетов от пользователя и не подтверждает коммерческие отношения между сетями. Снимки RIPEstat на странице отмечали задержку данных; результаты следует считать доступным снимком маршрутизации, а не гарантией постоянной конфигурации.

## Источники методики

- [Документация RIPEstat Looking Glass](https://stat.ripe.net/docs/data-api/api-endpoints/looking-glass) — наблюдаемые AS_PATH из RIPE RIS.
- [RIPEstat GeoLite / источники данных](https://stat.ripe.net/docs/getting-started/ripestat-data-sources) — геолокационная база MaxMind GeoLite.
- [RIPEstat Data API](https://stat.ripe.net/docs/data-api/ripestat-data-api) — сведения о префиксах, ASN и holders.
- RDAP-ссылки в карточках — региональные реестровые записи, открываемые через `rdap.org`.


## Хостинг и провайдеры по локациям

[Открыть исследование хостеров для LegendaryVPN](hosting-research.md) — профиль провайдера, цены, отзывы, ссылки и PNG-карточки для каждой локации.

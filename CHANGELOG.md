# Venux Platform - version 0.1.0 (build 71)
---
**Legend:**
          
	[!] Breaking change         
	[+] Added feature            
	[*] Improved/changed feature 
	[-] Bug fixed

## [Build 71](https://github.com/VenuxSoftware?tab=repositories)
May 01, 2018_
_Alpha version_

- [`!`] Completely refactored [utility](https://github.com/VenuxSoftware/utils) package into new [root](https://github.com/VenuxSoftware/root) architecture at locations [/apps/utilities/](https://github.com/VenuxSoftware/root/apps/utilities) and [/system/services/](https://github.com/VenuxSoftware/root/system/services)
- [`!`] ChangeLog (`this file`) have been moved from [VSC](https://github.com/VenuxSoftware/vsc) into [root](https://github.com/VenuxSoftware/root/apps/utilities/vsc.app) repository
- [`!`] Project structure for [VSC](https://github.com/VenuxSoftware/root/apps/utilities/vsc.app) has been changed to define packages and different types of applications within `Venux Platform` 
- [`-`] Bug fixes and performance improvements in [AGG](https://github.com/VenuxSoftware/agg) engine
- [`-`] Bug fixes in [W3C](https://github.com/VenuxSoftware/w3c) engine as well as little improvements in rendering capabilities
- [`-`] Bug fixes in [AVPN](https://github.com/VenuxSoftware/avpn) engine as well as improvements in `disconnect` logic when `peers` go offline for any reasons
- [`*`] Performance improvements in [IANA](https://github.com/VenuxSoftware/iana) engine
- [`*`] [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md) has been extended with `standard tags` such as `function`, `category`, `purpose`, '...' allowing for packages and standards to self organize as well as to form `access-security-policies` 
- [`*`] Defined 4 types of applications for `Venux Platform`;
  * `app` - Window User Application (`multi-instance allowed`)
  * `utility` - Window and/or Terminal application (`multi-instance allowed`)
  * `service` - Window or silent application that can start automatically (`single-instance only`)
  * `shell` - Window and/or Terminal and/or Silent application that started by [IANA](https://github.com/VenuxSoftware/iana) engine right after its initialization and execution (`single-instance only`)
- [`*`] [Shell](https://github.com/VenuxSoftware/ieee/tree/master/src/shell) now have `mount` consumer and producer allowing connection with other services and protocols 
- [`*`] [Shell](https://github.com/VenuxSoftware/ieee/tree/master/src/shell) and [Update](https://github.com/VenuxSoftware/update) has been improved to support new [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md) architecture forming `file-structure` (outlined in [root](https://github.com/VenuxSoftware/root))
- [`*`] [Update](https://github.com/VenuxSoftware/update) is now able to enforce `system/local wide` policies and make changes on behalf of other processes according to defined `access-security-policies`
- [`*`] Initial `multi-user` support has been added and integrated into [Shell](https://github.com/VenuxSoftware/ieee/tree/master/src/shell), [AVPN](https://github.com/VenuxSoftware/avpn) and [Update](https://github.com/VenuxSoftware/update) applications
- [`*`] Improvements in [NPI](https://github.com/VenuxSoftware/npi) (`Node Program Interface`) with full support for `require()` function
- [`+`] [European Telecommunications Standards Institute](https://github.com/VenuxSoftware/etsi) (`ETSI`) package has been established and integrated with [VSC](https://github.com/VenuxSoftware/apps/utilities/vsc.app) and [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md)
- [`+`] [The Document Foundation](https://github.com/VenuxSoftware/tdf) (`TDF`) package has been established and integrated with [VSC](https://github.com/VenuxSoftware/apps/utilities/vsc.app) and [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md)
- [`+`] [Khronos Group](https://github.com/VenuxSoftware/khronos) (`Khronos`) package has been established and integrated with [VSC](https://github.com/VenuxSoftware/apps/utilities/vsc.app) and [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md)    
- [`+`] Initial implementation of [Venux Runtime](https://github.com/VenuxSoftware/vrt) (`VRT`) engine with plug-able multi-language support. The languages will be parsed/generated using [ANTLR](https://github.com/VenuxSoftware/antlr) package eventually but while in development, hand-written parsers will be used for validity
- [`+`] Initial support for [EcmaScript](https://github.com/VenuxSoftware/ecma) `v2018` has been established as hand-written parser/generator for [VRT](https://github.com/VenuxSoftware/vrt) engine  

## [Build 70](https://github.com/VenuxSoftware/venux/)
_January 03, 2018_
_Alpha version_

- [`-`] Bug fixes and performance improvements in [IANA](https://github.com/VenuxSoftware/iana) engine
- [`*`] [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md) now supports `join-standard` registrations and utilizes memory/resource usage optimally
- [`*`] [AVPN](https://github.com/VenuxSoftware/avpn) now has `Router/Hub/Peer` architecture designed to `anonymously-auto-synchronize` most of activities network wide using `PIN` algorithms
- [`*`] [AVPN](https://github.com/VenuxSoftware/avpn) is now able to find its routers through `Distributed Hash Table` and connect to itself forming `peer-to-peer` network
- [`*`] Implemented 8-Digit `PIN` identifiers withing [AVPN](https://github.com/VenuxSoftware/avpn), [Shell](https://github.com/VenuxSoftware/ieee/tree/master/src/shell) for `multi-user` support and security identification within `AVPN`
- [`*`] Performance improvements in [AGG](https://github.com/VenuxSoftware/agg) engine, `frame buffer` functionality has been extended to support mapping to multiple canvases
- [`*`] Initial implementation of [Typo](https://github.com/VenuxSoftware/typo) engine, the development of `Typography Framework` will go on in this package, eventually will be integrated with [AGG](https://github.com/VenuxSoftware/agg) engine
- [`*`] [Pixel](https://github.com/VenuxSoftware/pixel) has now `unified` engine for various types of images, its `Bitmap` now can be mapped to any `frame buffer`. The development of `Raster Graphics Library` will go on in this package, eventually will be integrated with [AGG](https://github.com/VenuxSoftware/agg) engine
- [`*`] [W3C](https://github.com/VenuxSoftware/w3c) now supports basic `CSS Object Model` and renders simple documents
- [`*`] [W3C](https://github.com/VenuxSoftware/w3c) now supports `BOM` and renders `window`s depending on the environment application is executing in
- [`*`] [Specifications](https://github.com/VenuxSoftware/vsc/tree/master/specs) from [VSC](https://github.com/VenuxSoftware/vsc) were relocated to [projects](https://github.com/VenuxSoftware/vsc/blob/master/projects/), now each `project` can have its own set of `specifications` 
- [`+`] Initial [API](https://nodejs.org/dist/latest-v9.x/docs/api/) layout of [Node Program Interface](https://github.com/VenuxSoftware/npi)  as of `version 9.2.1`
- [`+`] Implemented basic [Shell](https://github.com/VenuxSoftware/ieee/tree/master/src/shell) for `synchronous` access to `I/O` and enforcing security policies
- [`+`] Implemented initial [Update](https://github.com/VenuxSoftware/update) engine
- [`+`] Established system [root](https://github.com/VenuxSoftware/root) as initial file structure for `Venux Platform`  
- [`+`] Initial implementation of `GUI` framework for [AGG](https://github.com/VenuxSoftware/agg) has been established and integrated with [Typo](https://github.com/VenuxSoftware/typo) and [Pixel](https://github.com/VenuxSoftware/pixel)
- [`+`] [Venux Developer Network](https://github.com/VenuxSoftware/vdn) (`VDN`) has been established and integrated with [VSC](https://github.com/VenuxSoftware/vsc)
- [`+`] [International Organization for Standardization](https://github.com/VenuxSoftware/iso) (`ISO`) has been established and integrated with [VSC](https://github.com/VenuxSoftware/vsc) and [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md)
- [`+`] [International Electrotechnical Commission](https://github.com/VenuxSoftware/iec) (`IEC`) has been established and integrated with [VSC](https://github.com/VenuxSoftware/vsc) and [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md)
- [`+`] [Distributed Management Task Force](https://github.com/VenuxSoftware/dmtf) (`DMTF`) has been established and integrated with [VSC](https://github.com/VenuxSoftware/vsc) and [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md)

## [Build 69](https://github.com/VenuxSoftware/venux/)
_November 28, 2017_
_Alpha version_

- [`!`] [utility](https://github.com/VenuxSoftware/utils) `reg` has been replaced with [SCI](https://github.com/VenuxSoftware/utils/tree/master/src/sci.js) which outlines all the processes of [Standards Compliant Interconnect](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md) model in real-time
- [`*`] Improved [Standards Compliant Interconnect](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md) model with more flexible registration routines and better run-time control
- [`+`] Completed porting of [AGG](https://github.com/VenuxSoftware/agg) package, all demos work as in original version
- [`+`] Implemented [Document Object Model](https://www.w3.org/TR/DOM-Level-1/introduction.html) support in [W3C](https://github.com/VenuxSoftware/w3c)
- [`+`] Implemented [Extensible Markup Language (XML)](https://www.w3.org/XML/) support in [W3C](https://github.com/VenuxSoftware/w3c)
 
## [Build 68](https://github.com/VenuxSoftware/venux/)
_November 03, 2017_
_Alpha version_

- [`-`] [IANA](https://github.com/VenuxSoftware/iana) engine compliance bug fixes
- [`*`] [VSC](https://github.com/VenuxSoftware/vsc) now has an [IANA](https://github.com/VenuxSoftware/iana) based consumer/producer registration mechanism
- [`+`] Initial implementation of [Anonymous Virtual Private Network](https://github.com/VenuxSoftware/avpn) `AVPN` architecture
- [`+`] Initial implementation of [Pixel](https://github.com/VenuxSoftware/pixel) architecture
- [`+`] Initial porting of [AGG](https://github.com/VenuxSoftware/agg) from C++ to ECMAScript
- [`+`] [W3C](https://github.com/VenuxSoftware/w3c) engine now supports [HTML5 Parser](http://w3c.github.io/html/) for all HTML processing
- [`+`] Implemented [CSS3](https://www.w3.org/standards/techs/css#w3c_all) parser and `computer` support in [W3C](https://github.com/VenuxSoftware/w3c)
- [`+`] Integrated [AGG](https://github.com/VenuxSoftware/agg) with [W3C](https://github.com/VenuxSoftware/w3c) for visual and non-visual Web content rendering
- [`+`] Implemented basic [iframe](https://www.w3.org/wiki/HTML/Elements/iframe) support in [W3C](https://github.com/VenuxSoftware/w3c)

## [Build 67](https://github.com/VenuxSoftware/venux/)
_September 18, 2017_
_Alpha version_

- [`*`] [IANA](https://github.com/VenuxSoftware/iana) engine is now [ACID](https://en.wikipedia.org/wiki/ACID) compliant
- [`+`] Initial design of `root` directory structure for the Venux platform
- [`+`] Forked and integrated [ANTLR](https://github.com/VenuxSoftware/antlr) package for multilingual-programming support
- [`+`] Initial implementation of Internationalization (i18n) support
- [`+`] Implemented initial tools for managing of multilingual (spelling dictionaries/translations) features
- [`+`] [VSC](https://github.com/VenuxSoftware/vsc)'s [RDF](https://github.com/VenuxSoftware/vsc/tree/master/language/en-US/rdf) is now language specific (only en-US is planned)
- [`+`] Introduced new [utility](https://github.com/VenuxSoftware/utils) Music (Multilanguage design of heterogeneous systems) 

## [Build 66](https://github.com/VenuxSoftware/venux/)
_July 22, 2017_
_Alpha version_

- [`+`] Introduced new [utility](https://github.com/VenuxSoftware/utils) SAML (Security Assertion Markup Language)
- [`+`] [Venux Semantic Compiler](https://github.com/VenuxSoftware/vsc/) now has integrated framework to extract/generate structured information from various formats in order to process data in table like fashion
- [`+`] MS Excel spreadsheet consumer and producer
- [`+`] Text delimited file consumer and producer
- [`+`] Text fixed width file consumer and producer
- [`+`] XML file consumer and producer
- [`+`] HTML file consumer and producer
- [`+`] MS Access database consumer and producer
- [`+`] MS Word document consumer and producer
- [`+`] Lotus 1-2-3 spreadsheet consumer and producer
- [`+`] QuattroPro spreadsheet consumer and producer
- [`+`] Paradox table consumer and producer
- [`+`] DBase/FoxPro table consumer and producer
- [`+`] Advantage database consumer and producer
- [`+`] DBISAM table consumer and producer
- [`+`] Clarion tables consumer and producer
- [`+`] Windows Address Book (WAB) consumer and producer
- [`+`] VCalendar/ICalendar consumer and producer
- [`+`] Open Office spreadsheets consumer and producer
- [`+`] MS Outlook consumer and producer
- [`+`] Integrated table/database format consumers/produces with [IANA](https://github.com/VenuxSoftware/iana) registry

## [Build 65](https://github.com/VenuxSoftware/venux/)
_May 29, 2017_
_Alpha version_

- [`+`] Implemented security model within [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md) model
- [`+`] Initial setup of [World Wide Web Consortium](https://github.com/VenuxSoftware/w3c) (`W3C`) package for Web/UI rendering
- [`+`] Implemented initial [Institute for Electrical and Electronics Engineers](https://github.com/VenuxSoftware/ieee/)  (`IEEE`) package defined by [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md) model
- [`+`] Implemented [Internet Assigned Numbers Authority](https://github.com/VenuxSoftware/iana) (`IANA`) registry for protocol/algorithms organization/synchronization as defined by [iana.org](https://www.iana.org/) and [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md) model 
- [`+`] Full support for [SQL'92](https://github.com/VenuxSoftware/iana/docs/REGISTRY.md) for [IANA](https://github.com/VenuxSoftware/iana) registry processing  
- [`+`] Implemented automatic generation of all necessary SQL scripts and `Abstract Syntax Tree` to keep [IANA](https://github.com/VenuxSoftware/iana) registry up to date with [iana.org](https://www.iana.org/) database 

## [Build 64](https://github.com/VenuxSoftware/venux/)
_May 23, 2017_
_Alpha version_

- [`+`] Basic support for [Standards Compliant Interconnect](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md) model
- [`+`] Basic [compiler](https://github.com/VenuxSoftware/vsc) that is able to assemble an initial codebase
- [`+`] `Abstract Syntax Tree` consumer and producer 
- [`+`] Implemented support for [OpenXPS (XPS, XML Paper Specification)](https://www.ecma-international.org/publications/standards/Ecma-388.htm) consumer and producer
- [`+`] Implemented support for [OpenOffice (ODF, Open Document Format)](http://docs.oasis-open.org/office/v1.1/OS/OpenDocument-v1.1.odt) consumer and producer
- [`+`] Implemented support for [Microsoft Office (Word, Excel and Powerpoint) binary and OOXML](http://www.ecma-international.org/publications/standards/Ecma-376.htm) consumer and producer
- [`+`] Implemented support for [PDF](http://www.adobe.com/devnet/pdf/pdf_reference.html) consumer and producer
- [`+`] Implemented support for [HTML5](https://www.w3.org/TR/html5/) consumer and producer
- [`+`] Implemented support for [XML](https://www.w3.org/XML/) consumer and producer
- [`+`] Implemented support for [RDF](https://www.w3.org/RDF/) consumer and producer
- [`+`] Implemented support for [WebIDL](https://heycam.github.io/webidl/) consumer and producer
- [`+`] Integrated [WordNet](https://wordnet.princeton.edu/wordnet/frequently-asked-questions/database/) [database](https://github.com/VenuxSoftware/vsc/tree/master/rdf) 
- [`+`] Implemented [projects](https://github.com/VenuxSoftware/vsc/blob/master/projects/) and initial `project` setup [project1](https://github.com/VenuxSoftware/vsc/blob/master/projects/project1.json)
- [`+`] Initial [layout](https://github.com/VenuxSoftware?tab=repositories) of packages structure is generated according to specifications and [SCI](https://github.com/VenuxSoftware/venux/assets/docs/SCI.md) model
- [`+`] Defined a set of [utilities](https://github.com/VenuxSoftware/utils) to showcase capabilities of all the [packages](https://github.com/VenuxSoftware?tab=repositories)
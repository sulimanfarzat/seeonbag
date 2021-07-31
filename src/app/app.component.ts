import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SEEON180';

  keywords: string  = 'seeon, seeon 180, seeon180, seeon bag, Nassim Alkhalik, backpacks with a camera,\
  backpacks with a camera,backpack with camera,backpack with camera pocke,leather backpacks for women,leather backpacks for men,looking for a leather backpacks See,see180,seeon,seeon180,seeon180 backpack,smart backpack,seeon smart backpack,seeon180 backpack smart, ant-thif seeon180 backpack,ant-thif backpack see180,seeon180 ant-thif backpack, gps backpack,live tracking backpack,alert backpack, alert backpacks, ant thif backpack kickstarter travel,kickstarter backpack anti theft,kickstarter backpack wardrobe,kickstarter backpack nomatic,kickstarter backpack Singapore,kickstarter backpack 2020,kickstarter backpack waterproof,kickstarter backpack strap,artist backpack kickstarter,agazzi backpack kickstarter,arrisbackpack kickstarter,adventure backpack kickstarter,aer backpack kickstarter,kickstarter adjustable backpack,atlas backpack kickstarter,backpack kickstarter best,boundary backpack kickstarter,bobby backpack kickstarter,bouncing backpack kickstarter,business backpack kickstarter,kickstarter backpack camera,backpack chair kickstarter,kickstarter backpack companies,backpack beach chair kickstarter,cork backpack kickstarter,kickstarter convertible backpack,kickstarter charging backpack,dawn backpack kickstarter,kickstarter diaper backpack,kickstarter duffle backpack,everyday backpack kickstarter,era backpack kickstarter,errant backpack kickstarter,emergency backpack kickstarter,best backpack from kickstarter,frog backpack kickstarter,floating backpack kickstarter,french backpack kickstarter,kickstarter funded backpack,gravel, backpack kickstarter,gliding backpack kickstarter,gamer backpack kickstarter,kickstarter hiking backpack,backpack kayak kickstarter,korin backpack kickstarter,\
  kickstarter backpack laptop,leather backpack kickstarter,led backpack kickstarter,lunchbox backpack kickstarter,kickstarter backpack Malaysia,modular,backpack kickstarter,moment backpack kickstarter,new backpack kickstarter,backpack on kickstarter,onemo backpack kickstarter,kickstarter outdoor backpack,pix backpack kickstarter,kickstarter photography backpack,kickstarter picnic backpack,pm backpack kickstarter,parisian backpack kickstarter,best backpack kickstarter,kickstarter backpack shell,backpack strap kickstarter,backpack speaker kickstarter,smart backpack kickstarter,sling,backpack kickstarter,shadow backpack kickstarter,suspension backpack kickstarter,tropicfeel backpack kickstarter,kickstarter tech backpack,travel backpack kickstarter,unfound backpack kickstarter,urban backpack kickstarter,umbrella backpack kickstarter,vasco backpack kickstarter,vandra backpack kickstarter,kickstarter womens backpack,wingman backpack kickstarter,kickstarter backpack weatherproof,see 180, backpack cooler,\
  backpack purse,backpacking,backpack beach chair, backpack sprayer,backpacks for school, backpack kid,backpack blower,backpackboyz,backpack gcs,backpack accessories,backpack amazon, backpack and lunchbox set,backpack armor,backpack adidas,backpack as personal item,backpack asl,backpack aesthetic, a backpack in Spanish,a backpack in French,backpack blower,a backpack a bear, a backpack sprayer,a backpack is at rest on the classroom floor,a backpack with wheels,a backpack for cats, backpack boys,backpack backpack,backpack brands,backpack blower rack,backpack backpack lyrics,b backpack black,b backpack sprayer,backpack b&m,agnes b backpack,b&g backpack sprayer,john b backpack,agnes b backpack hk,bind b backpack.open,backpack chair,backpack carrier,backpack cooler yeti,backpack cooler Walmart,backpack cat carrier,backpack camping,backpack cooler bag,c backpack for sale,backpacking c&o canal,cpap for backpacking,c&n backpackers Ucluelet,studio c backpack,usb c backpack,t&c backpacks,nice c backpacking chair,backpack diaper bag,backpack dora,backpack drawing,backpack dog carrier,backpack duffle bag,backpack dora song,backpack dimensions,backpack definition,d backpackers barn,d backpack cooler,backpack d ring uses,backpack,d ring,backpack d&g,backpack d pack,backpack d brand,d&d backpack sheet,backpack emoji,backpack Europe,backpack expander,backpack essentials,backpack enlisted,backpack embroidery,backpack electric leaf blower,backpack europe route,hue backpacker hostel,ebags backpack,backpack e scooter,backpack e bike,backpack e-sports 15-17.3,backpacking e tool,backpacking e-reader,backpackers lodge,backpack flo milli,backpack for dogs,backpack for women,backpack for kids,backpack for girls,backpack for cats,backpack for men,backpack for parents,backpack tf,backpack f gear,backpack f-stop,f/ce backpack,k&f backpack,f stop backpack review,f.64 backpack,f kanken backpack,backpack guitar,backpack gungeon,backpack girls,backpack Gucci,backpack gas leaf blower,backpack garden sprayer,\
  backpack grill,dog,backpacks for sale,g backpack baby,backpack g c s,backpack g hook,backpacking food,backpack g star,backpacking tent,backpack harness,backpack hiking,backpack hooks,backpack hanger,backpack Herschel,backpack holster,backpack handbags,backpack harness for dogs,h backpack leaf blower,backpack h&m,backpack h.s.code,h&m backpacks for school,h&m backpack mens,h&m backpack india,h frame backpack,h&m backpack purse,backpack in Spanish,backpack ice chest,backpack in French,backpack Isaac,backpack icon,backpack in asl,backpack images,backpack in Russian,i backpack Canada,i am backpacker korea,i backpacker review,i am backpacker Europe,i backpack price in india,i backpack in Spanish,i backpack meaning,i backpack traductor,TRAVEL,TUMI INC., EASTPAK, GLOBE-TROTTER, THE NORTH FACE, AMERICAN TOURISTER, FJÄLLRÄVEN, GOYARD, DELSEY, SAMSONITE, PIQUADRO, BRIGGS & RILEY, HERSCHEL SUPPLY CO., PETUNIA PICKLE BOTTOM, RIMOWA ,ADVENTURE TRAVEL, VACATIONS, TRAVEL,LEISURE, TOURISM, BEHAVIORS: FREQUENT INTERNATIONAL TRAVELERS ,AIR TRAVEL, AIRPORT, FLIGHT, AIRBNB, AIRLINE TICKET, AIRLINE, TRIPADVISOR, HOTELS.COM, TRIVAGO, BOOKING.COM OR AGODA.COM ,THE BACKPACKER, BACKPACKER TRAVEL, BAGGAGE, SUITCASE, BACKPACKER (MAGAZINE), ULTRALIGHT BACKPACKING, BACKPACKERS, HIKING EQUIPMENT, BACKPACKING, HAND LUGGAGE, BACKPACKING , SUITCASE MAGAZINE ,BACKPACK, LEATHER ,IN COLLEGE, COLLEGE GRAD OR MASTERS DEGREE, INDUSTRY, IT AND TECHNICAL SERVICES, LEGAL SERVICES, SALES, BUSINESS AND FINANCE, MANAGEMENT OR TRANSPORTATION AND MOVING ,PRE-ORDER, FUNDRAISING, INDIEGOGO, CROWDFUNDING, CROWDRISE, GLOBALGIVING, SOFI (SOCIAL FINANCE INC.), BETABRAND, GOFUNDME, ANGELLIST, FUNDRAZR, FUNDING CIRCLE, CROWDCUBE, FUNDLY, COMPANISTO, YOUCARING, VACATIONS, EXPEDIA, TRAVEL WEBSITE, TRAVEL AGENCY, AIRBNB, TOUR OPERATOR, TRIPADVISOR, HOTELS.COM, TRIVAGO, BOOKING.COM, AGODA.COM, BAGGAGE, SUITCASE, BACKPACK, BAG, BACKPACKING (WILDERNESS), HIKING EQUIPMENT, HAND LUGGAGE, BACKPACKING (TRAVEL), BACKPACKING TRAVEL BLOG, KICKSTARTER ,TECHNOLOGY, THINKGEEK, MOBILE TECH & GADGET NEWS, TECHRADAR, WIRED (MAGAZINE), MOBILE PHONE ACCESSORIES, ENGADGET, SMART TECHNOLOGIES, TECHNOLOGY AND GADGETS, COOLEST GADGETS, LIFE HACKING, GADGET STORE, LATEST GADGETS NEWS, DIGITAL TRANSFORMATION, GADGET SHOW, DIGITAL TRENDS, GADGET, CNET, COOL GADGETS, THE VERGE, LIFEHACKER, SMART DEVICE, TECHCRUNCH, GADGET GEEKS, GEEK.COM, THE GADGET FLOW, GADGETS PORTAL, CONSUMER ELECTRONICS ,BEHAVIORS: TECHNOLOGY EARLY ADOPTERS, ENGAGED SHOPPERS , KICKSTARTER, INDIEGOGO, PERSONAL ORGANIZER, ENTREPRENEURSHIP, PRODUCTIVITY, LAPTOP, LOCK (DEVICE), ANTI-THEFT SYSTEM, KEYCHAIN, SECURITY, SAFETY, SMART LOCK ,smart backpacks for travel,smart backpack for work,smart backpack for school,smart backpacks Instagram,smart backpack with charger,smart backpack amazon,smart backpack with usb charging port,smart backpacks life,smart backpack features,smart backpack 2021,smart backpack with screen,smart backpack Australia,smart backpack anti theft,smart backpack aliexpress,smart backpack Alibaba,smart alec backpack,smart adidas backpack,lumzag smart backpack amazon,the smart backpack,how does a smart backpack work,how to make a smart backpack,smart backpack brands,smart backpack bd,smart backpack bags,smart backpack black,smart backpack Bluetooth,smart basic,backpack zara,smart bike backpack,smart black backpack mens,smart backpack Canada,smart backpack.com,smart backpack charger,smarty clear backpack,smart casual backpack,smart commuter backpack,smart camera backpack,smart cycling backpack,smart,backpack design,smart diaper backpack,smart doll backpack,smart display backpack,volkano smart deux backpack,petsmart dog backpack,volkano smart deux backpack lock,pix smart digital backpack,smart backpack ebay,smart ecom backpack,nayo smart exp backpack,embarcadero smart backpack,nordace siena – smart backpack ebay,smart backpack for everyday & travel,smart backpack for travel,smart backpack for cameraman,smart backpack for work womens,smart backpack for laptop,\
  smart backpack google,smart backpack grey,smart backpack guess,smart gym backpack,smart gear backpack,smart backpack with gps,smart shade backpack gazebo,ghost smart backpack,smart backpack handbag,smart hiking backpack,herschel smart backpack,smart water bottle holder backpack,head smart backpack,smart backpack india,smart backpack ireland,smart backpack instagram,smart backpack indiegogo,smart backpack instagram collaboration,best smart backpack india,pix smart backpack price in india,chicco smart support backpack instructions,konnect i smart backpack,smart backpack kickstarter,smart backpack kopen,keysmart backpack,kingsons smart backpack,kathmandu smart backpack,konzu smart backpack,kopack smart backpack,smart backpack ladies,smart backpack life,smart backpack laptop,smart backpack led,smart backpack luminous school bag,smart backpack luminous,smart laptop backpack womens,smart leather backpack mens,smart backpack mens,smart backpack mens for work,smart backpack market,smart backpack manufacturers,smart mini backpack,smart laptop backpack mens,black smart backpack mens,smart backpack nordace,smart backpack nz,smart backpack new look,smart nylon backpack,smart navy backpack,nordace smart backpack review,nayo smart backpack,nordace smart backpack uk,smart backpack on airplane,smart backpack office,smart outdoor backpack,smart organizer backpack,smart carry on backpack,graco gotham smart organizer backpack,osprey smart backpack,oslo smart backpack,smart backpack pakistan,smart backpack price,smart backpack pix,smart backpack private label,smart pack backpack,smart backpack with power bank,lumzag smart backpack price,smart backpack solar panel,qmadix smart backpack,quicksmart backpack stroller,smart backpack reviews,smart backpack reddit,smart running backpack,nayo smart backpack review,smart travel backpack review,chicco smart support backpack red,nordace urban max smart backpack review,smart backpack singapore,smart backpack solar,smart backpack sprayer,smart backpack size,smart support backpack chicco,smart sleeve backpack,smart school backpack,smart backpack travel,smart tech backpack,smart travel backpack uk,smart trike backpack,smart tree backpack,smart travel backpack australia,smart travel backpack amazon,smart backpack uk,smart backpack usb,ladies smart backpack uk,best smart backpack uk,smart womens backpack uk,smart vegan,backpack,nordace smart backpack video,pixelated smart backpack vat19,nordace siena smart backpack video,void smart backpack,volkano smart backpack,smart backpack womens,smart backpack womens uk,smart backpack waterproof,smart backpack wholesale,xiaomi smart backpack,ysl smart backpack,nordace siena – smart backpack youtube,smart backpack zara,smart black backpack zara,smart backpack 1.12.2,smart backpack mod 1.12.2,balance ecosmart 15.6 backpack black,smart backpack 2020,best smart backpack 2019,mavic 2 backpack smart controller,mammut neon smart 35l backpack,neon smart backpack 35l,top 5 smart backpack,nordace siena smart backpack,smart backpack for men,nordace siena smart backpack for women travel,smart backpack for women,smart backpack anti theft,smart backpack beige,360 v2 smart usb charge travel backpack b12,360 v2 smart usb charger travel backpack b12,smart backpack carry on,smart backpack cream,smart backpack usbc,swiss digital mens smart massaging backpack,dji mavic 2 pro backpack with smart controller,pix backpack with programmable screen smart digital,the era smart backpack,\
  nayo smart backpack exp,gruv gear club bag elite flight-smart tech backpack,smart lock with gps for backpacks,swiss gear 1900 scan smart laptop backpack,swiss gear scan smart tsa laptop backpack,hike smart backpack,smart water bottle holder for backpack strap,korin hipack smart anti theft backpack,swissgear jetta scan smart travel backpack,smart backpack kids,smart backpack kroser,smart backpack korin,smart backpack led,smart backpack luggage,smart backpack lock,smart backpack light,nordace siena smart backpack for men, ultimate smart all-in-one backpack & laptop case,ultimate smart all in one backpack,smatree mavic 2 pro osmo smart controller backpack,smart backpack plevo,smart backpack purse for women,smart backpack purple,chicco smart support backpack red,rainbow cloud smart led backpack,gen7pets geometric roller with smart-level dog & cat carrier backpack,smart backpack solar,pixelated smart backpack vat19,pixelated smart backpack vat19.com,smart backpack women,smart backpack waterproof,smart backpack with led,smart backpack with phone charger,smart pack backpack w cell phone charger,the phantom xl smart backpack,swissgear 18.5" scan smart tsa laptop and usb power plug backpack,swissgear 17.5 scan smart tsa laptop backpack,mavic 2 pro backpack with smart controller,mavic air 2 with smart controller backpack,indiegogo dawn backpack,indiegogo pakt backpack,indiegogo era backpack,indiegogo travel backpack,indiegogo smart backpack,indiegogo compass backpack,nomatic backpack indiegogo,indiegogo pix backpac,indiegogo bag,indiegogo bento bag,indiegogo camera bag,indiegogo garment bag,indiegogo luggage,indiegogo lunch bag,nanobag indiegogo,indiegogo sling bag,indiegogo slinger bag,indiegogo travel bag,indiegogo toiletry bag,indiegogo wrap bag,kickstarter backpack wardrobe,kickstarter backpack nomatic,kickstarter backpack shell,kickstarter backpack laptop,dawn backpack kickstarter,everyday backpack kickstarter,smart backpack kickstarter,korin backpack kickstarter,agazzi backpack kickstarter,arris backpack kickstarter,aer backpack kickstarter,atlas backpack kickstarter,kickstarter backpack anti theft,artist backpack kickstarter,adventure backpack kickstarter,kickstarter adjustable backpack,backpack kickstarter best,business backpack kickstarter,boundary backpack kickstarter,bobby backpack kickstarter,bouncing backpack kickstarter,kickstarter backpack camera,cork backpack kickstarter,backpack chair kickstarter,kickstarter backpack companies,backpack beach chair kickstarter,kickstarter convertible backpack,kickstarter charging backpack,kickstarter diaper backpack,kickstarter duffle backpack,errant backpack kickstarter,emergency backpack kickstarter,era backpack kickstarter,best backpack from kickstarter,floating backpack kickstarter,frog backpack kickstarter,french backpack kickstarter,kickstarter funded backpack,gamer backpack kickstarter,gravel backpack kickstarter,gliding backpack kickstarter,kickstarter hiking backpack,jopat backpack kickstarter,backpack kayak kickstarter,lunchbox backpack kickstarter,leather backpack kickstarter,led backpack kickstarter,modular backpack kickstarter,moment backpack kickstarter,kickstarter backpack malaysia,new backpack kickstarter,backpack on kickstarter,kickstarter outdoor backpack,onemo backpack kickstarter,kickstarter photography backpack,photo backpack kickstarter,pm backpack kickstarter,pix backpack kickstarter,kickstarter picnic backpack,parisian backpack kickstarter,\
  shadow backpack kickstarter,slicks backpack kickstarter,kickstarter backpack singapore,backpack strap kickstarter,backpack speaker kickstarter,sling backpack kickstarter,backpack kickstarter travel,tropicfeel backpack kickstarter,kickstarter tech backpack,tropical backpack kickstarter,unfound backpack kickstarter,urban backpack kickstarter,umbrella backpack kickstarter,ultimate backpack kickstarter,vasco backpack kickstarter,vandra backpack kickstarter,kickstarter backpack waterproof,kickstarter womens backpack,wingman backpack kickstarter,kickstarter backpack weatherproof,kickstarter backpack 2020,anti theft backpack,anti theft backpack amazon,anti theft backpack aliexpress,anti theft backpack australia,anti theft backpack argos,anti theft backpack australia review,anti theft backpack arctic fox,anti theft backpack american tourister,anti theft backpack amazon uk,anti theft backpack bobby,anti theft backpack brands,anti theft backpack best,anti theft backpack bobby elle,anti theft backpack bobby xd design,anti theft backpack black,anti theft backpack bd,anti theft backpack big w,anti theft backpack canada,anti theft backpack camera,anti theft backpack charging port,anti theft backpack cover,anti theft backpack cut proof,anti theft backpack cute,anti theft backpack culture kings,anti theft backpack compact,anti theft drawstring backpack,anti theft dslr backpack,anti theft backpack daraz,anti theft backpack description,anti theft backpack dischem,anti theft backpack design,anti theft backpack dubai,anti theft day backpack,anti theft backpack ebay,anti theft backpack egypt,anti theft backpack emag,anti theft expandable backpack,anti theft backpack for travel,anti theft backpack for laptop,anti theft backpack fashion,anti theft backpack facebook,anti theft backpack for ladies,anti theft backpack features,anti theft backpack flipkart,anti theft backpack for school,anti theft backpack game,anti theft backpack groupon,anti theft backpack grey,anti theft backpack game stores,anti theft backpack girl,anti theft backpack gray,anti theft backpack gifts,anti theft backpack handbag,anti theft backpack how does it work,anti theft backpack hidden zipper,anti theft backpack handbag uk,anti theft backpack how to charge,anti theft backpack hong kong,anti theft backpack hk,anti theft hiking backpack,anti theft backpack india,anti theft backpack ireland,anti theft backpack incredible connection,anti theft backpack in pakistan,anti theft backpack in sri lanka,anti theft backpack in lebanon,anti theft backpack jumia,anti theft backpack jarir,anti theft backpack japan,anti theft backpack kickstarter,anti theft backpack korin,anti theft backpack kuwait,anti theft backpack kogan,anti theft backpack kmart,anti theft backpack kenya,anti theft backpack kathmandu,anti theft backpack leather,anti theft backpack laptop,anti theft backpack lightweight,anti theft leather backpack purse,anti theft backpack lebanon,anti theft backpack ladies,antitheft backpack lock,anti theft backpack lidl,anti theft backpack makro,anti theft backpack mini,anti theft backpack mark ryden,anti theft backpack meaning,anti theft backpack mauritius,anti theft backpack material,anti theft backpack melbourne,anti theft backpack made in usa,anti theft notebook backpack,anti theft backpack north face,anti theft backpack nz,anti theft backpack near me,anti theft backpack nike,anti theft nylon backpack,anti theft backpack original,anti-theft oxford backpack,\
  anti theft backpack one day only,anti-theft backpack phantom,anti theft backpack patent,anti theft backpack price,anti theft backpack purse leather, anti theft backpack pacsafe,anti theft backpack prada,anti theft pocket backpack,anti theft backpack purse,anti theft backpack qatar,anti theft backpack review,anti theft backpack reddit,anti theft backpack rfid,anti theft rolling backpack,anti theft backpack + shopify,anti theft backpack south africa,anti theft backpack skroutz,anti theft backpack small,anti theft backpack samsonite,anti theft backpack stylish,anti theft backpack sekai,anti theft backpack sri lanka,anti theft backpack travel,anti theft backpack travelon,anti theft backpack tigernu,anti theft tech backpack,anti theft backpack takealot,anti theft backpack target,anti theft backpack tumi,anti theft backpack targus,anti theft backpack ultimate guard,anti-theft urban backpack,anti theft backpack usb charging how does it work,anti theft backpack uk,anti theft backpack under 500,anti theft backpack usb charging,anti theft backpack usb port,anti theft backpack usb,anti theft backpack verimark,anti theft backpack virgin megastore,anti-theft vacation backpack,anti theft backpack waterproof,anti theft backpack wish,anti theft backpack with usb charging port,anti-theft backpack with 3-digit lock,anti theft backpack with lock,anti theft backpack with usb port,womens anti theft backpack,anti theft backpack walmart,anti theft backpack xd design,anti-theft backpack x-edition,anti theft backpack xl,anti-theft backpack zipper,anti theft backpack 17 inch laptop,anti theft backpack 15 inch laptop,anti-theft backpack 18 inch,anti theft backpack 2020,anti-theft 25l backpack,anti theft backpack 30l,anti theft backpack 40l,anti-theft backpack,anti-theft backpack purse,anti-theft backpack with 3-digit lock,anti-theft backpack amazon,anti-theft backpack with usb charging port,anti-theft backpack and bag protector,anti theft backpack small,anti theft backpack travelon,anti theft backpack pacsafe,anti theft backpack adelaide,anti theft backpack ad,anti theft backpack australia,anti theft backpack aliexpress,anti theft backpack argos,anti theft backpack australia review,anti theft backpack arctic fox,the anti theft backpack,the bobby anti theft backpack,how does an anti theft backpack work,what is the best anti theft backpack,anti-theftbackpack & briefcase,anti theft backpack brown,anti theft backpack blower,anti theft backpack blue,anti theft backpack best brands,anti theft backpack black leather,anti theft backpack bobby,anti theft backpack black,anti theft backpack canada,anti theft backpack charging port,anti theft backpack cover,anti theft backpack cut proof,anti theft backpack cute,anti theft backpack culture kings,anti theft backpack camera,anti theft backpack compact,anti theft backpack daraz,anti theft backpack description,anti theft backpack dischem,anti theft backpack design,anti theft backpack dubai,anti theft day backpack,anti theft drawstring backpack,anti theft bag description,original anti theft backpack,anti theft backpack emag,anti theft backpack ebay,anti theft backpack egypt,anti theft bag ebay,anti theft bag egypt,anti theft expandable backpack,anti-theft backpack x-edition,anti theft backpack bobby elle,anti theft backpack for ladies,anti theft backpack features,anti theft backpack for travel,anti theft backpack flipkart,anti theft backpack for school,anti theft backpack fashion,\
  anti theft backpack for sale,anti theft backpack fur jaden,f gear anti theft backpack,anti theft backpack game,anti theft backpack groupon,anti theft backpack grey,anti theft backpack game stores,anti theft backpack girl,anti theft backpack gray,anti theft backpack gifts,anti theft bag gods,anti theft backpack handbag,anti theft backpack hidden zipper,anti theft backpack how does it work,anti theft backpack handbag uk,anti theft backpack how to charge,anti theft backpack hong kong,anti theft backpack hk,anti theft hiking backpack,anti theft backpack in ghana,anti theft backpack inside,anti theft backpack information,anti theft backpack india,anti theft backpack ireland,anti theft backpack incredible connection,anti theft backpack in pakistan,anti theft backpack in sri lanka,i want to backpack around the world,i want to backpack through europe,how to backpack around the world,is it possible to backpack around the world,how much does it cost to backpack around the world,anti theft backpack jumia,anti theft backpack jarir,anti theft backpack japan,anti theft bag jumia,anti theft bag jiji,anti theft laptop bag jumia,jansport anti theft backpack,anti theft backpack kickstarter,anti theft backpack kuwait,anti theft backpack kogan,anti theft backpack kmart,anti theft backpack kenya,anti theft backpack korin,anti theft backpack kathmandu,anti theft backpack leather,anti theft backpack lebanon,anti theft backpack laptop,anti theft backpack ladies,anti theft backpack lidl,anti theft backpack lazada,anti theft backpack levis,anti theft leather backpack uk,anti theft backpack makro,anti theft backpack malaysia,anti theft backpack meaning,anti theft backpack mauritius,anti theft backpack material,anti theft backpack mini,anti theft backpack mark ryden,anti theft backpack melbourne,securipak m anti-theft laptop backpack 15.6,securipak m anti-theft laptop backpack,anti theftbackpack nz,anti theft backpack near me,anti theft backpack north face,anti theft backpack nike,anti theft bag nz,anti theft bag near me,anti theft bag nairobi,anti theft bag nepal,lewis n clark anti theft backpack,anti theft backpack original,anti theft backpack one day only,anti theft bag original brand,anti theft bag online,anti-theft oxford backpack,anti theft bag original,anti theft bag on jumia,best anti theft backpack on amazon,anti theft backpack price,anti theft backpack price in bangladesh,anti theft backpack philippines,anti theft backpack price in pakistan,anti theft backpack purse leather,anti theft backpack pakistan,anti theft backpack pink,anti theft backpack qatar,flylite anti-theft quilted backpack,high quality anti-theft backpack,anti theft backpack review,anti theft backpack reddit,anti theft backpack rfid,anti theft rolling backpack,anti theft bag reddit,anti theft bag research,anti theft bag red,bobby anti theft backpack review,anti theft backpack shoulder bag,anti theft backpack south africa,anti theft backpack sri lanka,anti theft backpack singapore,anti theft backpack shopee,anti theft backpack + shopify,anti theft backpack strandbags,securipak s anti-theft laptop backpack,samsonite securipak s anti-theft laptop backpack,anti theft backpack takealot,anti theft backpack travel,anti theft backpack target,anti theft backpack tigernu,anti theft backpack tumi,anti theft backpack targus,anti theft travel backpack purse,anti theft backpack uk,anti theft backpack under 500,anti theft backpack usb charging,\
  anti theft backpack usb port,anti theft backpack ultimate guard,anti theft backpack usb,anti theft backpack usb charging how does it work,anti theft backpack uk reviews,anti theft backpack verimark,anti theft backpack virgin megastore,anti-theft vacation backpack,anti theft vest bag,baggallini anti-theft vacation backpack,travelon anti theft bag video,volkano anti theft backpack,vebeto anti theft backpack,anti theft backpack with water bottle holder,anti theft backpack waterproof,anti theft backpack with usb port,anti theft backpack walmart,anti theft backpack with solar charger,anti theft backpack wish,big w anti theft bag,anti-theft backpack with/ headphone & usb ports,anti theft backpack xd design,anti theft backpack xl,bobby anti theft backpack xl,xiaomi anti theft backpack,xd anti theft backpack review,xindao anti theft backpack,venturesafe x30 anti-theft backpack,metrosafe x anti-theft 25l backpack,metrosafe x anti-theft 20l backpack,venturesafe x 30l anti-theft backpack,venturesafe x 24l anti-theft backpack,metrosafe x anti-theft 25l backpack review,venturesafe x 24l anti-theft backpack review,quiksilver x pacsafe 25l anti-theft backpack,how to anti theft your backpack,how to make your backpack anti theft,anti-theft backpack zipper,zisco anti theft backpack,zisco anti theft backpack review,zoomlite anti theft backpack,ultimatesafe z28 anti-theft backpack,ultimatesafe z15 anti-theft backpack,3 in 1 anti theft backpack,anti theft backpack 30l,3 way anti theft backpack,pacsafe vibe 30 anti-theft 30l backpack,venturesafe 32l g3 anti-theft backpack,dry lite 30l anti-theft backpack,ladies 3 way waterproof anti-theft backpack,anti theft backpack 40l,anti theft travel backpack 40l,pacsafe 40l vibe anti-theft backpack,43490 anti-theft convertible backpack,42310 anti-theft classic backpack,pacsafe vibe 40 anti-theft backpack,43195 anti-theft tailored backpack,43410 anti-theft parkview backpack,anti theft backpack top 5,anti theft bag under 500,anti theft bag under 500 flipkart,55l anti-theft backpack & bag protector,best anti theft backpack under 1000,top 10 anti theft backpack,numinous 65l anti-theft backpack,anti theft backpack,kickstarter backer number,kickstarter backpack,kickstarter backerkit,kickstarter backer,kickstarter backer or not,kickstarter backer survey,kickstarter backed projects,kickstarter back rocker,kickstarter bag travel,kickstarter bag of dungeon,kickstarter bag paris,kickstarter camera bag,kickstarter sling bag,kickstarter ita bag,kickstarter lunch bag,kickstarter bike bag,kickstarter bean bag,kickstarter boba bag,kickstarter bunny bag,froggy ita bag kickstarter blushsprout,kickstarter cork bag,kickstarter convertible bag,kickstarter crossbody bag,kickstarter computer bag,kickstarter bean bag chair,kickstarter nomatic camera bag,kickstarter diaper bag,kickstarter duffle bag,kickstarter drawstring bag,kickstarter all day bag,kickstarter everyday bag,kickstarter edc bag,kickstarter bunny ear bag,kickstarter frog bag,kickstarter french bag,kickstarter food bag,kickstarter golf bag,kickstarter gym bag,kickstarter board game bag,kickstarter handlebar bag,kickstarter heat bag,kickstarter froggy ita bag,kickstarter frog ita bag,kickstarter puppy ita bag,kickstarter liquid ita bag,kickstarter bagel smart tape,kickstarter bagel,moment kickstarter bag,kickstarter laptop bag,kickstarter leather bag,kickstarter leaf bag,kickstarter lobster bag,kickstarter messenger bag,\
  kickstarter moose bag,kickstarter modular bag,kickstarter makeup bag,kickstarter mini bag,kickstarter peter mckinnon bag,kickstarter nanobag,kickstarter notebook bag,kickstarter nappy bag,kickstarter carry on bag,bag on kickstarter,kickstarter photo bag,kickstarter radiant bag,kickstarter bags,kickstarter sash bag,kickstarter sleeping bag,kickstarter slinger bag,kickstarter shopping bag,kickstarter sash bag 3.0,kickstarter switch bag,kickstarter toiletry bag,kickstarter tote bag,best kickstarter travel bag,kickstarter most funded travel bag,kickstarter weekender bag,kickstarter work bag,kickstarter waist bag,kickstarter womens bag,kickstarter 3 in 1 bag,sash bag kickstarter 2.5 ';

  public constructor(private titleService: Title,
                    private metaTagService: Meta) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    AOS.init({
      duration: 1500
    });

    // S.Farzat SEO Start //
    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: 'keywords', content: this.keywords },
      { name: 'author', content: 'Suliman Farzat' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-07-03', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);

    this.metaTagService.updateTag(
      { name: 'description', content: 'The backpack of the future. This high tech yet aesthetically pleasing bag is all you need to sustain the safest possible way of living your day-to-day life' }
    );
    //  S.Farzat SEO END //

  }

}

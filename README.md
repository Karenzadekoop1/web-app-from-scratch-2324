# Web App From Scratch @cmda-minor-web 2023 - 2024


## Assignment
1. Bouw je eigen SPA/WebSite met externe data van een API, minimaal 1 micro interactie.
2. Een TeamApp met een verzameling van alle losse websites van je teamleden

---

## Inleiding
Ik kwam dit vak binnen en dacht bijna... oh no i might have to leave. Maar ik geef niet zo makkelijk op dus begon heel erg hard te werken om dit op te pakken. Ik zou mezelf een echte beginner noemen als het komt aan coderen. Met Front-end dingen kan ik mezelf best wel redden (html en css) maar ik heb github / pushen pullen / data api, of nog nooit gebruikt of heel eerlijk niet eens van gehoord. Dus de eerste les was even heel intense voor mij. 

Ik heb veel hulp moeten vragen (waar ik eingelijk niet zo van hou) maar heb vooral heel veel opgezocht en zelfstudie gedaan omdat ik er niet tegen kan als ik helemaal niet weet waar we het over hebben in de klas. 

Ik had heel veel zin om iets tofs te maken


## Dag 1
Maandag zij we begonnen met de eerste les en idee generatie. Het idee was om een persoonlijke app te maken en een groep app. Met de groep app ging het idee best soepel maar met de persoonlijke nog wat stroever. Toen ik dacht aan een persoonlijke app dacht ik dat het over mezelf moest gaan dus ben ik met html en css wat in elkaar gaan zetten. Ik dacht ik maak een "menu" over mezelf en muziek (omdat ik dat heel leuk vind)

<img src="/README-img/ideeen.png" width="300" alt="schetsej van ideeen">

Maar we moesten alles van git/ github enzo ook allemaal regelen. Dat ging helemaal niet zo goed en ik begon meteen even te pannieken. Na de les heb ik eingelijk heel veel tijd verspilt om op te zoeken hoe dat allemaal werkt en wat dat allemaal inhoud. 
https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F

## Dag 2/3
Nadat ik heel veel tijd heb gebruikt aan opzoeken en meer opzoeken: Google maar vooral ook (boek) en een beetje achter kwam hoe ik branches kan maken en mijn code  moet pullen en pushen, Kwam ik er ook achter dat dat via VS-code veel makkelijker kan dan steeds via de Terminal en al die shortcut codes moeten herinneren. 

Ik ging door aan mijn HTML en CSS van mijn idee. Ik was heel erg zoekend van hoe ik de app eruit wil laten zien. Elke keer had ik een nieuw idee en wilde er wat anders mee doen. Ik ging dus aan de slag met een soort menu over mezelf en wat muziek betekent voor mij. 

Ik vond het responsiveness doen en goeie media querys en het product mooi responsive maken heel moeilijk

<img src="/README-img/menu schetsen.png" width="300" alt="schetsen eerste design">
<img src="/README-img/menu design.png" width="300" alt="schetsen eerste design">


I begon met het schetsen van hoe ik de pagina zou willen en was mijn hoofd aan het kraken over hoe je die grid in elkaar moest zetten. Ik heb zooo lang niet zo zitten berekenen. Uiteindelijk kwam ik door css grid opzoeken al een stuk verder en met een beetje cgpt vragen kwam ik er goed achter hoe dat werkt.

<img src="/README-img/design enu.png" width="300" alt="eerste design website">

## Dag 4
Nadat ik mijn design helemaal af had Met html en css en bijna wilde beginnen aan de Data dingen, was ik helemaal niet zo tevreden met mijn product dus wilde ik eingelijk helemaal opnieuw beginnen. 

Ik had opnieuw een schets gemaakt en begon meteen aan mijn code, omdat ik bang was dat ik tijd te kort zou hebben. Met combinatie van de team app en de persoonlijke. (hier in ongeveer waar mijn panniek begon) 

<img src="/README-img/cd design.png" width="300" alt="ruw ontwerp van eindproduct">
<img src="/README-img/binnen cd design.png" width="300" alt="ruw ontwerp eindproduct">



## Dag 5 
Ik was best goed bezig met mijn code van mijn nieuwe design maar begon een beetje panniek te krijgen omdat ik geen idee had hoe API werken, hoe ik met Fetchen en gewoon alles eromheen. Ik heb weer heel veel van mijn tijd besteed om dit allemaal op te zoeken. Ik zou zeggen dat ik hier echt iets te veel tijd aan het besteed om overover te lezen ipv echt te proberen en testen. Volgende keer moet ik gewoon beinnen en leren fouten maken. Heb geleerd dat ik daar veel sneller van leer.
Ik ging websites opzoeken zoals spotify api en lezen hoe dat allemaal werkte maar werd er snel heel erg "overwhelmed" van

https://blogs.mulesoft.com/learn-apis/api-led-connectivity/what-are-apis-how-do-apis-work/

## weekend 
In het weekend ging ik gewoon door aan mijn html css. Ik liet de data dingen nog even aan de kant.

## Dag 6
Ik heb mijn design af en het is tijd om de data erin te stoppen. Ik heb heel veel hulp gekregen van mijn team genoot Max (ik hielp hem met de design en hij mij met de data) 
Hij heeft veel dingen duidelijk gemaakt en goed uitgelegd hoe het allemaal werkt. Ik ging toen aan de slag met data verzamelen die ik nodig had voor mijn website. Ik zag dat mijn teamgenoten Rapid API https://rapidapi.com/Glavier/api/spotify23  hadden gebruikt maar voor de goeie versie moet je betalen. Wij hadden toen voor de team app bedacht om zelf een Json file te maken met de informatie te je krijgt via Rapid API en dit heb ik dan ook gedaan in mijn persoonlijke app. 
Ik wist dat ik niet zoveel informatie nodig had om te doen wat ik wilde doen dus ik heb die Json file zelf gemaakt. Het linken van de Json file en Javascript naar me html koste ook veel tijd omdat ik heeel dom de verkeerde Javascript mapje aan het linken was.

Het fetchen van de informatie zoals SONG en ARTIST ging soepel... 

alleen toen ik wilde dat het ging afspelen en de cover foto van de cd veranderen kwamen er veel complicaties. 
Ik dacht even heel simple om een function te maken om de foto van de cd naar de album cover te veranderen en vervolgens het liedje af te spelen. Dit werkte niet omdat ik nu zie dat ik de audioplayer niet eens goed heb gelinked
<img src="/README-img/proberen eind werkt niet.png" width="300" alt="code">

Uiteindelijk werkte de audio player wel nadat ik de json file element goed met appendChild heb gelinked en de aidio player de url laten fetchen om deze vervolgens te spelen. Alleen in de function wil ik ook dat de cover foto veranderd dus ik ging op cgpt vragen hoe dat kan en waarom mijn oude niet werkte en ik kreeg dit: 

<img src="/README-img/audio werkt, foto niet.png" width="300" alt="code">

de foto bleef maar niet veranderen dus ik ging even nakijken wat het probleem was... ben ik dit niet goed aan het linken of ben ik de code fout aan het schrijven? dus ik wilde een messege in de console voor als de coverurl niet available is... en dat was natuurlijk ook het probleem.

<img src="/README-img/cove foto error code.png" width="300" alt="code">
<img src="/README-img/cove foto error code.png" width="300" alt="error code">

Ik kreeg veel error van de cover foto omdat "deze niet available is" 

## Dag 7 
Ik liet dat probleem even aan de kant...
Ik heb gerealiseert dat mijn design helemaal niet responsive was en op mobiele versie echt helemaal lelijk was. 

<img src="/README-img/foto error responsiveness.png" width="300" alt="mobile version">

Dus veel van mijn ochtend werd besteed aan px,em,vw etc te veranderen en steeds blijven testen. Ik heb daarna veel met media queries moeten werken om deze er een beetje fatsoenlijk uit te laten zien



## Dag 8 
Ik heb gisteren niks kunnen maken met mijn media queries.. het werd me gewoon iets te moeilijk.

<img src="/README-img/media querys.png" width="300" alt="code">
<img src="/README-img/media photo.png" width="300" alt="mobile version lelijk">

Ik ging proberen te werken met de aspect ratioen veel procenten
Ik merkte ook dat ik heel veel extra elementen had die over elkaar waren e mij in de weg zat van designen. 
Het is gelukt met percentages en procenten om het product responsive te maken alleen de ul niet... dus ipv de tranlate code die ik doe ga ik dit even met eem grid oplossen

<img src="/README-img/ratio.png" width="300" alt="code">
<img src="/README-img/translate.png" width="300" alt="code">
<img src="/docs/README-img/media querys.png" width="300" alt="code">


Mijn enige struggle on is dat ik de coverfoto van de cd wil veranderen wanner het liedje speelt.. alleen in krijg steeds de warning dat de coverurl niet available is. Ik weet niet hoe ik dit verder moet oplossen dus heb het gewoon zo gelaten



## Conclusie
Het duurde mij echt heel lang om iets uit te voeren omdat ik veel dingen niet wist en steeds fouten maakte en dingen vaak gewoon niet werkte, of ik wilde gewoon helemaal opnieuw beginnen. Dit was heel frustrerend en ik ging mezelf veel vergelijken met de anderen in de klas. Maar heb een beetje gerealiseerd dat ik hier gewoon iets meer tijd in moet stoppen en vooral mezelf niet met anderen vergelijken. 
Ik ben best trots op mijn product en kan niet wachten om meer kennis hierover te krijgen om volgende keer veel toffere producten te maken. 

## Eindproduct

Mijn eindproduct is een cd met classic salsa liedjes erop. Ik ben een grote van van salsa muziek en het zet mij meteen in een goeie mood. 

Je maakt de "cd-case" open en kan de liedjes aanklikken om deze te laten afspelen. als je dan vervolgens op de knop in het midden van de cd drukt stopt het liedje. 







## Bronnen
- Javascript & jquery jon dukket
- Bron: "how do I design a cd in css" chat cpt
- how do i fetch jsonfiles in javascript (chat gpt) zelf aangepast
- https://codepen.io/yoann-b/pen/jOLjjOP
- https://blogs.mulesoft.com/learn-apis/api-led-connectivity/what-are-apis-how-do-apis-work/
- https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F
- https://rapidapi.com/Glavier/api/spotify23




## Rubric

Je inzet wordt beoordeeld met behulp van de rubric (zie hieronder). Je moet het criterium (middenkolom) behalen om het
vak te voltooien.
Tijdens de toets wordt je mondeling overhoord en krijg je feedback over dingen die we denken dat tekort schieten en dingen die
we denken dat een verbetering zijn op het criterium.

TBA

[//]: # ()
[//]: # (| Deficiency | Criterion                                                                                                                                                                              | Improvement |)

[//]: # (|:-----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|)

[//]: # (|            | *User Interface* - you design, build and test the user interface by applying interface design principles                                                                               |             |)

[//]: # (|            | *Code structure* - you write modular, consistent and efficient HTML, CSS and JavaScript code by applying structure and best practices. You manage state for the application and the UI |             |)

[//]: # (|            | *Data management* - you understand how you can work with an external API using asynchronous code. You can retrieve data, manipulate and dynamically convert it to structured html      |             |)

[//]: # (|            | *Project* - your app is working and published on GitHub Pages. Your project is thoroughly documented in the `README.md` file in your repository.                                       |             |)

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

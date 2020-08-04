# Kalapankki

## Sovelluksen idea ja toiminnallisuus
Sovellukseen toive tuli aloittelevalta kalastajalta, joka haluaisi tallentaa kalasaaliista tietoja, jotta voisi hyödyntää niitä tulevilla kalastusretkillä ja oppia millä kelillä ja vieheellä mikäkin kala nappaa. 
Sovelluksessa voi lisätä kalasaaliin tallentaen seuraavat tiedot: kalalaji, koko, viehetyyppi, vieheen nimi, sää, lämpötila, päivämäärä. Toive näihin tietoihin tuli kalastajalta. Tallennettuja tietoja voi myös muokata ja poistaa tarpeen mukaan. Tällä hetkellä kaikki tiedot näkyvät kaikille sisäänkirjautuville käyttäjille ja myös muokkaus ja poisto on sallittu kaikkien toimesta. Kalapankki on siis tällä hetkellä yhteinen ja vaatii toisten saalistietojen kunnioittamista. 

## Teknologiat
Sovellus on tehty Angularilla ja backend hyödyntäen Firebasea. 
Komennot, joilla kehitysversion saa Githubista:

## Työssä hyödynnetyt tutoriaalit
Eniten sovelluksen rakentamisessa auttoi: 
CodAffection Angular 7 CRUD using Firestore - tutoriaali, löytyy osoitteesta https://www.youtube.com/watch?v=5I6k77uqtLY

Lisäksi hyödynsin autentikaation kohdalla tätä: 
https://www.positronx.io/firebase-authentication-in-angular-8-with-angularfire2/

## Reflektio ja ajankäyttö
Sain harjoitustyöhön idean/toiveen lapseltani ja se lähti hioutumaan aluksi ihan hyvin. Sovelluksen pitäminen sopivan simppelinä vaati rajaamista ja toiveiden sekä kehitysideoiden karsimista. Pääsin alkuun ihan mukavasti ja homma rullasi jonkin aikaa melko sujuvaan tyyliin. 
Haasteita alkoi ilmaantua formien kohdalla ja ja tällöin kahlasin monia tutoriaaleja läpi, sekä etsin apuja optiman tallenteista. Tuli kirjoiteltua varmasti myös työhön sopimatonta koodia ja sitten lisäetsintöjen ja opettelujen jälkeen tein sovelluksen valmiiksi sopivan tutoriaalin avulla. Hyödynsin siis tutoriaaleja, mutta muunsin koodit kalapankkiin sopiviksi. Autentikaation tekeminen taisi sujua nopeammin ja jouhevammin, mitä sovelluksen luominen muilta osin. 

Githubia pyrin käyttämään siten kun tässä vaiheessa osasin. Tein kehitystä develop-haarassa mutta jossain vaiheessa en muistanut pushata etärepositoryyn muutoksia (jossain keskivaiheilla). Kaiken kaikkiaan olen iloinen siitä, että onnistuin tekemään tämän pitkään melko mahdottomalta tuntuneen projektin. Oppimisen kannalta olisi ollut hyödyllisempää, jos olisin saanut pohtia eri kohtia jonkun kanssa ääneen ihmetellen, enkä ainoastaan mielessäni tutoriaalien kanssa keskustellen. 

Työ onnistui mielestäni hyvin ja onnistuin yksinkertaistamaan sitä osuvissa kohdissa. Paljon paremman ja monipuolisemman sovelluksesta voisi tehdä, mutta tässä yhteydessä se on mielestäni onnistunut. 

Käytin työhön aikaa:

Jatkaakseni sovellusten parissa minun tulee kehittää ihan kaikkia tietoja ja taitoja. Kokonaiskuvaa on jonkin verran syntynyt ja kokonaisuuden ja osasten hahmottaminen suurempina tuntuu tällä hetkellä helpommalta, kuin yksittäisten koodien lisääminen osuvasti. Tunnen Angularia jo jonkin verran, mutta vaaditaan lisää tekemistä, jotta sen kiemurat kävisivät paremmin tutuiksi. Pystyn kuitenkin tällä hetkellä etsimään ja hyödyntämään tietoa melko hyvin ja näin ollen kaikista osa-alueista oppiminen on mahdollista myös itsenäisesti opiskellen. Kokonaisuudessaan olen ottanut valtavia oppimisaskeleita web-kehittäjäkoulutuksen aikana.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

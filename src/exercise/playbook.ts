// Greetings

// ersten Wine probieren

// Smalltalk

// PO:
// Algorithmic Aromas Tasting Co. - Startup
// wir wollen das wine tasting ins Jahr 2023 holen: der Taster kann sich in der App anmelden und
// bekommt dort auch ein Profil und Vorschläge, welche von unserer Software berechnet werden,
// wir wollen skalieren und gute Sommeliers skalieren nicht

// Dev: wir hatten doch ein EventStorming, ich hab ja alles vergessen,
// lass und da nochmal durchgehen

// PO: EventStorming erklären - Dev fragt

// Dev: ich hab da vor kurzem auf ne Konferenz nen Talk gesehen und würde das gerne mal ausprobieren
// "Also it is good for my CV if I use this!"
// PO: what
// DEV: never mind, anyway....

// Dev explains method "FDM"
// Slides: Book, TLDR,

//dev: we want to really understand each other, so please tell me how you call things!
// DEV: explizite Aufforderung: Bitte rede mir jederzeit rein, wenn etwas unklar ist,
// wir wollen ein gemeinsames Verständnis schaffen, möglichst explizit, möglichst genau, Mißverstänisse aus dem Weg räumen

// question from dev: whats the most important thing in your software?
// ubiquitous languages

type RecommendWine = (wines: Wine[]) => Wine;
type Wine = unknown; //explain: details later

// Format of Function =>, PO ask: what are these symbols?

// Meinst Du unseren Winekeller? Wine[] -> Winecellar

type RecommendWine1 = (wineCellar: WineCellar) => Wine;
type WineCellar = unknown;

// Ja Nee, wir empfehlen immer eine Auswahl aus 3 Weinen

type RecommendWine2 = (wineCellar: WineCellar) => WineRecommendation;
type WineRecommendation = [Wine, Wine, Wine];

// Dev: Probiert er alle 3 Weine?
// Po: Nee such sich einen aus
type RateWine = (rating: WineRating) => void;
// VOid-Diskussion explizit machen, Diskussion, ob zuerst Signatur komplett sein muss, oder
// ist es ok, mit dem ersten Typ ins Detail zu gehen

type WineRating = [Wine, Rating];

// Dev: Wie sieht das Rating aus, Percentage?
// PO: We want 5 Stars
// Dev: what is the lowest value?
// Publikum einbeziehen: Wie lässt sich das abbilden, z.B. number/int
type Rating = 1 | 2 | 3 | 4 | 5;

// Was

// Dev: Fragt was machen wir mit Winerating?
// PO: wir lernen mit der Zeit, den Geschmack des Tasters
// PO: denkt nur an rating
// DEV: das muss gespeichert werden!
// Dev: schlägt vor TasterRatingProfile ist auch in & out Param

type RateWine2 = (rating: WineRating, profile: TasterRatingProfile) => TasterRatingProfile;

// Dev: Wie sieht das Profile aus
// PO: Wissen wir noch nicht, wir kaufen KI-Algorithmus ein
type TasterRatingProfile = unknown;

// Dev: Wozu brauchen wir das Rating?
// PO: Wir wollen lernen, was der Taster mag, um ein besseres Recommendation zu geben
// PO: Wir müssen bei der nächsten Empfehlung beachten, was wir bereits über den Taster wissen

type RecommendWine3 = (wineCellar: WineCellar, profile: TasterRatingProfile) => WineRecommendation;

// Dev möchte generalisieren, aber wir möchten explizierte Darstellung
// Dev: "This is supposed to be hard"
// PO: "Das versteht doch Niemand"
// Übergeneralisierung
type RecommendWine4 = (wineCellar: WineCellar, options: { profile?: TasterRatingProfile }) => WineRecommendation;

// Diskussion: Explizite Darstellung
// Lösung: 2 verschiedene Funktionen für unterschiedliche Ereignisse

type RecommendNextWine = (wineCellar: WineCellar, profile: TasterRatingProfile) => WineRecommendation;
type RecommendFirstWine = (wineCellar: WineCellar) => WineRecommendation;

// => Wrapup: Slide, Motto: be more explicit, tradeoff klarmachen

// specify wine details (maybe fast forward, depending on time)

type Brand<K, T> = K & { __brand: T };

type WineColor = "Red" | "White" | "Rose";
type Sweetness = "Dry" | "Medium Dry" | "Sweet";
type Grape = string;
type Name = string;
type Year = number;
type Country = "France" | "Spain" | "Lithuania"; // and many more

type Wine2 = {
  color: WineColor;
  sweetness: Sweetness;
  grape: Grape;
  name: Name;
  year: Year;
  country: Country;
};

// *************** GO LIVE ***************

// Wir hatten ein paar Mal den Fall, dass ein neuer Taster direkt zwei Sauere Weine bekommen hat, obwohl er den ersten mit 1 Stern bewertet hat
// Das ist ein Riesenproblem. Wir wollen ja einen guten ersten Eindruck hinterlassen
type RateWine3 = (rating: WineRating, profile: TasterRatingProfile) => TasterRatingProfile;

// CodeBsp mit Tatsächlicher Benutzung
// Dev kuckt in den richtigen Code, findet Bug -> zurück zum Modelling, wie
// können wir solche Bugs in Zukunft verhindern

// =>  open file with code for audience

// => solution:

type RateWine4 = (rating: WineRating, profile: TasterRatingProfile) => UpdatedTasterRatingProfile;

type UpdatedTasterRatingProfile = TasterRatingProfile & { __brand: "updated" };

// New Features

// isLocal

type Wine3 = {
  color: WineColor;
  sweetness: Sweetness;
  grape: Grape;
  name: Name;
  year: Year;
  country: Country;
  isLocal: boolean;
};

type Wine4 = {
  color: WineColor;
  sweetness: Sweetness;
  grape: Grape;
  name: Name;
  year: Year;
  country: Country;
  origin: "local" | "foreign";
};

// boolean -> Union Type for Wine isLocal: true -> "local": "foreign" (origin)

// OnSale

type Wine5 = {
  color: WineColor;
  sweetness: Sweetness;
  grape: Grape;
  name: Name;
  year: Year;
  country: Country;
  onSale: OnSale;
};

type OnSale =
  | { kind: "not on sale" }
  | { kind: "stock sale"; stock: number }
  | { kind: "campaign"; from: Date; to: Date };

// Wrap Up: Patterns

// Slides: Strong TypeSystem, Languages

// Ideas:

// New Feature: WineRecommendation has a Percentage, use to show Branding, as, No-Primitives -> maybe smart constructor
// Optionals for some wines have no Recommendation percentage

// TODOs
/*

  prepare slides with patterns for Wrap-up at the end
  cleanup repo
  print cheat sheets
  leere Weinflasche organisieren

  -> more conflict


*/

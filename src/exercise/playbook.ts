type RecommendWine = (wines: Wine[]) => Wine;
type Wine = unknown; //explain: details later
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

// Wir hatten ein paar Mal den Fall, dass ein neuer Taster direkt zwei Sauere Weine bekommen hat, obwohl er den ersten mit 1 Stern bewertet hat
// Das ist ein Riesenproblem. Wir wollen ja einen guten ersten Eindruck hinterlassen
type RateWine3 = (rating: WineRating, profile: TasterRatingProfile) => TasterRatingProfile;

// CodeBsp mit Tatsächlicher Benutzung
// Dev kuckt in den richtigen Code, findet Bug -> zurück zum Modelling, wie
// können wir solche Bugs in Zukunft verhindern

type RateWine4 = (rating: WineRating, profile: TasterRatingProfile) => UpdatedTasterRatingProfile;

type UpdatedTasterRatingProfile = TasterRatingProfile & { __brand: "updated" };

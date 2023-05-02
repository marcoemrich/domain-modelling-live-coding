type Brand<K, T> = K & { __brand: T };

type Wine = unknown;
type UpdatedTasterRatingProfil = unknown;
type WineCellar = Wine[];

type WineRecommondation = { wine: Wine; recommendationPercentage: Percentage };

// move from multiple Wines WineRecommondation[] -> to exactly three wine recommondations

type WineRecommondationForNextRound = [WineRecommondation, WineRecommondation, WineRecommondation];

// Problem 1
// type Recommend = (profile: TasterRatingProfil) => WineRecommondationForNextRound;
// Po sagt, Leute sind zum ersten Mal da und bekommen 2 mal nacheinander einen sauren Wein
// müssen sicherstellen, dass das Profil auf jeden Fall aktualisiert ist
// type Recommend = (profile: UpdatedTasterRatingProfil) => WineRecommondationForNextRound;

// Problem 2
// Leute bekommen mehrfach hintereinander den gleichen Wein, der Ihnen sehr gut geschmeckt hat
// Lösung: Historie mitübergeben:  historyOfTastedWinesForTasting: Wine[],

// Problem 3
// wie "list" - "was ist denn ne List"? -> WineCellar
// listOfWine: Wine[] -> wineCellar: WineCellar
// type wineCellar = Wine[]

// type Recommend = (profile: UpdatedTasterRatingProfil, historyOfTastedWinesForTasting: Wine[], listOfWines: Wine[]) => WineRecommondationForNextRound;

type Recommend = (
  profile: UpdatedTasterRatingProfil,
  historyOfTastedWinesForTasting: Wine[],
  wineCellar: WineCellar
) => WineRecommondationForNextRound;

//start///////////// make logic understandable for Domain Experts ////////////////
type Percentage = Brand<number, "Percentage">;
const createPercentage1 = (percentage: number): Percentage => {
  if (percentage > 0 && percentage <= 100 && Math.floor(percentage) == percentage) {
    return percentage as Percentage;
  } else throw new Error("invalid percentage");
};

// PO versteht code nicht, Bug war es wird ein Prozentsatz angezeigt mit 5 Nachkommastellen, nach 2 Wein geht das gar nicht!

/////////// more readable /////////////////
const createPercentage2 = (percentage: number): Percentage => {
  if (isBetweenZeroAndHundredWithoutDecimals(percentage)) {
    return percentage as Percentage;
  } else throw new Error("invalid percentage");
};

function isBetweenZeroAndHundredWithoutDecimals(percentage: number) {
  return percentage > 0 && percentage <= 100 && Math.floor(percentage) == percentage;
}

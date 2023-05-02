{
  type Brand<K, T> = K & { __brand: T };

  type WineColor = "Red" | "White" | "Rose";
  type Sweetness = "Dry" | "Medium Dry" | "Sweet";
  type Grape = string;
  type Name = string;
  type Year = number;
  type Country = "France" | "Spain" | "Lithuania"; // and many more

  type Wine = { color: WineColor; sweetness: Sweetness; grape: Grape; name: Name; year: Year; country: Country };

  type Rating = 1 | 2 | 3 | 4 | 5;
  type AgeRange = "18-28" | "29-34" | "35-45" | "46-99";
  type City = string;
  type Residence = { city: City; country: Country };
  type Demographics = { ageRange: AgeRange; residence: Residence };
  type Taster = { name: Name; demographics: Demographics; favoriteWine: Wine };

  type Percentage = Brand<number, "Percentage">;
  const createPercentage = (percentage: number): Percentage => {
    if (percentage > 0 && percentage <= 100 && Math.floor(percentage) == percentage) {
      return percentage as Percentage;
    } else throw new Error("invalid percentage");
  };

  type Recommend = (
    wine: Wine,
    rating: Rating,
    taster: Taster
  ) => { wine: Wine; recommendationPercentage: Percentage }[];
}

/*
TODO:
- Idee für realistische Invariante
*/

/* Ideen: 
- verschiedene locations für verschieden tastings (premium oder anzahl der taster), verschiedene größen der Locations mit verschiedenem luxus level
- verschiedene 'states' eines tasting (geplant,  cancelt, 'noch keine location', scheduled)
- clash mit Name bei Wein und bei Taster, könnte man durch branding lösen, also: wir laufen rein, wenn wir Name bei beiden nehmen (zb. wir hatten 
  letztens Herrn Chardonnay zu Besuch und waren sehr verwirrt)
- 'Country' clash: es gibt WineCountry und TasterCountry, zb gibts kein Wein in Alaska, wir haben aber Taster von dort. Dann könnte man den type nochmal splitten
- Idee: PO kommt mit bugs zurück bzgl. percentage 
    - 150% wurde angezeigt, 
    - 10,999999 % wurde angezeigt
    - Math.floor(percentage) == percentage kann PO nicht lesen, wir machen eine Funktion draus. TODO: rausfinden, was umgangssprachlich 'ganz zahl' heißt
    - taster hat selben wein 10 mal nacheinander bekommen (da höchstes Rating)
*/

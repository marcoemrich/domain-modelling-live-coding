type RecommendWine = (wine: WineCellar, profile: TasterRatingProfile) => WineRecommendation;

type Wine = {
  name: Name;
  color: WineColor;
  grape: Grape;
  year: Year;
};

type Name = string;
type WineColor = "Red" | "White" | "Rose";
type Grape = string;
type Year = number;

type WineCellar = Wine;
type WineRecommendation = [Wine, Wine, Wine];

type RateWine = (rating: WineRating, profile: TasterRatingProfile) => TasterRatingProfile;

type WineRating = [Wine, StarRating];

type StarRating = 1 | 2 | 3 | 4 | 5;
type TasterRatingProfile = unknown;

type RecommendFirstWine = (wineCellar: WineCellar) => WineRecommendation;
type RecommendNextWine = (
  wineCellar: WineCellar,
  profile: UpdatedTasterRatingProfile
) => WineRecommendation;

type Wine = {
  color: WineColor;
  grape: Grape;
  name: Name;
  country: Country;
};

type WineColor = "Red" | "White" | "Rose";
type WineCellar = Wine[];
type WineRecommendation = [Wine, Wine, Wine];
type Country = "France" | "Spain" | "Lithuania";

type RateWine = (rating: WineRating, profile: TasterRatingProfile) => UpdatedTasterRatingProfile;

type WineRating = [Wine, StarRating];
type StarRating = 1 | 2 | 3 | 4 | 5;
type TasterRatingProfile = unknown;
type UpdatedTasterRatingProfile = TasterRatingProfile & {
  __brand: "UpdatedTasterRatingProfile";
};

type Grape = string;
type Name = string;

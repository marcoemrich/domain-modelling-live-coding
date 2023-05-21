type RateWine = (rating: WineRating, profile: TasterRatingProfile) => UpdatedTasterRatingProfile;

type UpdatedTasterRatingProfile = TasterRatingProfile & { __brand: "updated" };

// type RecommendNextWine = (wineCellar: WineCellar, profile: TasterRatingProfile) => WineRecommendation;
type RecommendNextWine = (wineCellar: WineCellar, profile: UpdatedTasterRatingProfile) => WineRecommendation;
const recommendNextWine: RecommendNextWine = (wineCellar, profile) => [{} as Wine, {} as Wine, {} as Wine];

const rateWine: RateWine = (rating: WineRating, profile: TasterRatingProfile) => ({} as UpdatedTasterRatingProfile);

type TasterRatingProfile = unknown;
type WineRating = unknown;
type WineCellar = unknown;
type Wine = unknown;
type WineRecommendation = [Wine, Wine, Wine];

function processRatingAndRecommendWine(ratingFromUI: WineRating, profile: TasterRatingProfile, wineCellar: WineCellar) {
  const updatedProfile = rateWine(ratingFromUI, profile);

  const recommendation = recommendNextWine(wineCellar, updatedProfile);

  return recommendation;
}

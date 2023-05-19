type RateWine = (rating: WineRating, profile: TasterRatingProfile) => TasterRatingProfile;
type RecommendNextWine = (wineCellar: WineCellar, profile: TasterRatingProfile) => WineRecommendation;

type TasterRatingProfile = unknown;
// type UpdatedTasterRatingProfile = TasterRatingProfile & { _brand: "UpdatedTasterRatingProfile" };

function processRatingAndRecommendWine(ratingFromUI: WineRating, profile: TasterRatingProfile, wineCellar: WineCellar) {
  const changedProfile = rateWine(ratingFromUI, profile);

  saveProfile(changedProfile);

  const recommendation = recommendNextWine(wineCellar, profile);

  return recommendation;
}

/*





























































*/

type WineRating = unknown;
type WineCellar = unknown;
type Wine = unknown;
type WineRecommendation = [Wine, Wine, Wine];

const recommendNextWine: RecommendNextWine = (wineCellar, profile) => [{} as Wine, {} as Wine, {} as Wine];
const rateWine: RateWine = (rating, profile) => ({} as TasterRatingProfile);
const saveProfile = (profile: TasterRatingProfile) => undefined;

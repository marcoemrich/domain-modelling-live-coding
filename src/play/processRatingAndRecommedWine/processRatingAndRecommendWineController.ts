function processRatingAndRecommendWine(
  ratingFromUI: WineRating,
  profile: TasterRatingProfile,
  wineCellar: WineCellar
) {
  const updatedProfile = rateWine(ratingFromUI, profile);

  saveProfile(updatedProfile);

  const recommendation = recommendNextWine(wineCellar, profile);

  return recommendation;
}

/*












*/

type RateWine = (rating: WineRating, profile: TasterRatingProfile) => TasterRatingProfile;

type RecommendNextWine = (
  wineCellar: WineCellar,
  profile: TasterRatingProfile
) => WineRecommendation;

// type UpdatedTasterRatingProfile = TasterRatingProfile & { _brand: "UpdatedTasterRatingProfile" };

/*
















































*/

type WineRating = unknown;
type WineCellar = unknown;
type Wine = unknown;
type WineRecommendation = [Wine, Wine, Wine];

const recommendNextWine: RecommendNextWine = (wineCellar, profile) => [
  {} as Wine,
  {} as Wine,
  {} as Wine,
];
const rateWine: RateWine = (rating, profile) => ({});
const saveProfile = (profile: TasterRatingProfile) => undefined;

type TasterRatingProfile = {};

// Greetings, first Wine, Dev: how is your new startup doing?

// PO: Algorithmic Aromas Tasting Co. - Startup
// Dev: EventStorming, remember

// PO: EventStorming with recommendation detailed

// Dev: seen at conference, Good for CV
// PO: what?
// DEV: never mind, anyway...., maybe ask audience

// Dev: explains "FDM"

// Dev: whats the most important thing in your software?
type RecommendWine = (wines: Wine[]) => Wine;
type Wine = unknown; //explain: details later

// PO: Symbols?

// PO: Wine[] -> Wine cellar
type RecommendWine1 = (wineCellar: WineCellar) => Wine;
type WineCellar = unknown;

// 3 Wines
type RecommendWine2 = (wineCellar: WineCellar) => WineRecommendation;
type WineRecommendation = [Wine, Wine, Wine];

// Dev: Tastes all 3?
// PO: No No, chooses one
type WineRating = [Wine, Rating];
type RateWine = (rating: WineRating) => void;

// Dev: Rating, Percentage?
// PO: We want 5 Stars
// Dev: what is the lowest value?
// Audience: representation? number/int
type Rating = number;
// PO: what number? 5 stars!
// Dev: 3.5?
// Dev: audience
type StarRating = 1 | 2 | 3 | 4 | 5;

// Dev: What happens with the Rating?
// PO: learn the taste of the taster
// DEV: need to save
type RateWine2 = (rating: WineRating, profile: TasterRatingProfile) => TasterRatingProfile;

// Dev: how does the Profile look?
// PO: No idea -> buz AI
type TasterRatingProfile = unknown;

// Dev: what to do with the TasterRatingProfile, can we use it for the Recommendation?
type RecommendWine3 = (wineCellar: WineCellar, profile: TasterRatingProfile) => WineRecommendation;

// Dev tries to generalize
// Dev: "This is supposed to be hard"
// PO: "nobody understands"
// OverGeneralization
type RecommendWine4 = (
  wineCellar: WineCellar,
  options: { profile?: TasterRatingProfile }
) => WineRecommendation;

// Explicit, Solution: 2 Functions
type RecommendNextWine = (
  wineCellar: WineCellar,
  profile: TasterRatingProfile
) => WineRecommendation;
type RecommendFirstWine = (wineCellar: WineCellar) => WineRecommendation;

// specify wine details (maybe fast forward, depending on time)

type Wine2 = {
  name: Name;
  color: WineColor;
  grape: Grape;
  year: Year;
};

type Name = string;
type WineColor = "Red" | "White" | "Rose";
type Grape = string;
type Year = number;

// PO: common understanding
// Dev:  implement the App matching Types, launch meet

// *************** GO LIVE *****************
// PO brings New Wine
// 2 saure Wine despite 1 Star Rating
type RateWine3 = (rating: WineRating, profile: TasterRatingProfile) => TasterRatingProfile;

// => Dev: look into the code
type RateWine4 = (rating: WineRating, profile: TasterRatingProfile) => UpdatedTasterRatingProfile;
type UpdatedTasterRatingProfile = TasterRatingProfile & { __brand: "UpdatedTasterRatingProfile" };

// *************** 3 Weeks later *****************

// New Feature -> OnSale
type Wine5 = {
  name: Name;
  color: WineColor;
  grape: Grape;
  year: Year;
  onSale: boolean;
  campaignStart: Date;
  campaignEnd: Date;
  stock: number;
};

// PO: that is wrong: only stock for Sale, Dates...
type Wine6 = {
  onSale: OnSale;
};

type OnSale = NotOnSale | StockSale | CampaignSale;

type NotOnSale = { saleType: "not on sale" };
type CampaignSale = { saleType: "campaign sale"; from: Date; to: Date };
type StockSale = { saleType: "stock sale"; stock: number };

// New Wine -> prefers beer

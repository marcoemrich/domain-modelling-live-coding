type WineCellar = Wine[];
type WineRecommendation = [Wine, Wine, Wine];

type WineRating = [Wine, StarRating];
type RateWine = (rating: WineRating, profile: TasterRatingProfile) => TasterRatingProfile;

type RecommendFirstWine = (wineCellar: WineCellar) => WineRecommendation;

type RecommendNextWine = (
  wineCellar: WineCellar,
  profile: TasterRatingProfile
) => WineRecommendation;

type StarRating = 1 | 2 | 3 | 4 | 5;
type TasterRatingProfile = unknown;

type Wine = {
  name: Name;
  color: WineColor;
  grape: Grape;
  year: Year;
  onSale: OnSale;
};

type OnSale = NotOnSale | StockSale | CampaignSale;

type NotOnSale = { saleType: "not on sale" };
type CampaignSale = { saleType: "campaign sale"; from: Date; to: Date };
type StockSale = { saleType: "stock sale"; stock: number };

type Name = string;
type WineColor = "Red" | "White" | "Rose";
type Grape = string;
type Year = number;

type RecommendFirstWine = (wineCellar: WineCellar) => WineRecommendation;

type RecommendNextWine = (
  wineCellar: WineCellar,
  profile: TasterRatingProfile
) => WineRecommendation;

type Wine = {
  color: WineColor;
  grape: Grape;
  name: Name;
  country: Country;
  year: Year;
  onSale: boolean;
  stock: number;
  campaignStart: Date;
  campaignEnd: Date;
};

type OnSale = NotOnSale | StockSale | CampaignSale;

type NotOnSale = { saleType: "not on sale" };
type CampaignSale = { saleType: "campaign sale"; from: Date; to: Date };
type StockSale = { saleType: "stock sale"; stock: number };

type Country = "Italy" | "France" | "Spain" | "Israel";

type WineColor = "Red" | "White" | "Rose";

type WineCellar = Wine[];
type WineRecommendation = [Wine, Wine, Wine];
type RateWine = (rating: WineRating, profile: TasterRatingProfile) => TasterRatingProfile;
type WineRating = [Wine, StarRating];

type StarRating = 1 | 2 | 3 | 4 | 5;
type TasterRatingProfile = unknown;
type Grape = string;
type Name = string;
type Year = number;

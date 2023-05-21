import { ServerWebSocketSendStatus } from "bun";

type Wine = {
  name: Name;
  color: WineColor;
  grape: Grape;
  onSale: OnSale;
};

type OnSale =
  | { kind: "not on sale" }
  | { kind: "stock sale"; stock: number }
  | { kind: "campaign sale"; from: Date; to: Date };

type Grape = string;
type Name = string;
type WineColor = "Red" | "White" | "Rose";

type WineCellar = Wine[];
type WineRecommendation = [Wine, Wine, Wine];

type Recommend = (wines: WineCellar, options: { tasterRatingProfile?: TasterRatingProfile }) => WineRecommendation;

type RecommendFirstWine = (wines: WineCellar) => WineRecommendation;
type RecommendNextWine = (wines: WineCellar, tasterRatingProfile: TasterRatingProfile) => WineRecommendation;

type WineRating = [Wine, StarRating];
type StarRating = 1 | 2 | 3 | 4 | 5;
type TasterRatingProfile = unknown;

type RateWine = (wineRating: WineRating, tasterRatingProfile: TasterRatingProfile) => TasterRatingProfile;

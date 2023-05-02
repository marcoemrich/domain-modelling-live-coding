import { Option, none, some } from "ts-option";
{
  type Brand<K, T> = K & { __brand: T };

  type DetermineWinner = (s: Scoresheet) => Player;

  type Scoresheet = [Player[], RoundScore[]];
  type Player = {
    playerNumber: PlayerNumber;
    name: Option<Name>;
  };

  type PlayerNumber = Brand<number, "PlayerNumber">;

  type AddScoreOfRound = (current: Scoresheet, newScores: RoundScore) => Scoresheet;

  type RoundScore = RoundScoreOfPlayer[];

  type RoundScoreOfPlayer = {
    tricksAnounced: number;
    tricksWon: number;
    bonusScoreFromCaptures: BonusScore;
  };

  type BonusScore = unknown;

  type CalculateRoundScoreForPlayer = (t: Tricks, tricksAnounced: number) => RoundScoreOfPlayer;

  type Tricks = Trick[];
  type Trick = Card[];
  type Card = SpecialCard | ColorCard;

  type SpecialCard = "Escape" | "Pirate" | "Scary Mary" | "Mermaid" | "Skull King";

  type ColorCard = { number: OneTo13; color: Color };
  type Color = "red" | "blue" | "yellow" | "black";
  type OneTo13 = Brand<number, "OneTo13">;
  type Shuffle = (deck: Deck) => ShuffledDeck;
  type Deck = { kind: "Deck"; cards: Card[] };
  type ShuffledDeck = { kind: "ShuffledDeck"; cards: Card[] };
  type Deal = (deck: ShuffledDeck) => Hand[];
  type Hand = { kind: "Hand"; cards: Card[] };
  
}

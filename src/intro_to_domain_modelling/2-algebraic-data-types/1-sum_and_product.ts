// # Algebraic Data Types (ADT)

// ### Sum Types (OR)

type Player = "PlayerOne" | "PlayerTwo";

type Points = "Love" | "Fifteen" | "Thirty";

type Score =
  | { kind: "Points"; points: [Points, Points] }
  | { kind: "Forty"; fortyPlayer: Player; pointsOtherPlayer: Points }
  | { kind: "Deuce" }
  | { kind: "Advantage"; player: Player }
  | { kind: "Game"; player: Player };

// ### Product Types (AND)

/* Product: Tuple */
type Coordinate = [number, number];

/* Product: Structure / Record / Object */
type Coordinate2 = { x: number; y: number };


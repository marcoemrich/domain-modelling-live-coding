// Invariant enforcement

// 2nd Try

{
  type points = "Love" | "Fifteen" | "Thirty" | "Forty";

  type score = {
    playerOne: points;
    playerTwo: points;
  };

  let s2: score = { playerOne: "Fifteen", playerTwo: "Love" };
  let even: score = { playerOne: "Forty", playerTwo: "Forty" };
}



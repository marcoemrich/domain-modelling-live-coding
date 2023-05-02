// Invariant enforcement
// 1st Try

{
  type points = number;

  type score = {
    playerOne: points;
    playerTwo: points;
  };

  let s: score = {
    playerOne: 1000,
    playerTwo: -15,
  };
}

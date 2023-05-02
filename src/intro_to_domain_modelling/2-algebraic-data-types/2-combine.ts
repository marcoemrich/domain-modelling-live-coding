// Combining & vs. |

{
  type A = number;
  type B = string;

  type C = A & B;
  const c: C = undefined;
}

{
  type A = { a: string };
  type B = { b: string };

  type AandB = A & B;
  type AorB = A | B;

  const and: AandB = { a: "foo", b: "bar" };
  const or1: AorB = { a: "foo" };
  const or2: AorB = { b: "foo" };

  const or3: AorB = { a: "foo", b: "bar" };

  // const foo = { a: "foo", b: "bar" };
  // const a1: A = foo;

  // const a2: A = { a: "foo", b: "bar" };
}

{
  type A = { a: string };
  type B = { b: string };

  type C = A & B;

  const f1 = (c: C) => undefined;

  type F = (c: C) => void;
  const f2: F = (c: C) => undefined;

  const f3: (c: C) => void = (c: C) => undefined;

  // f1({ a: "foo", b: "foo", d: 1 });

  const d = { a: "foo", b: "foo", d: 1 };
  f1(d);
}

{
  type T1 = [string, "x", string];
  type T2 = ["z", string, string];
  type T3 = T1 & T2;

  const t: T3 = ["z", "x", "y"];
}

// Combining |

{
  type A = string;
  type B = number;
  type C = { x: string };

  type ABC = A | B | C;
  const x: ABC = 1;
}

{
  type T1 = [string, "x", string];
  type T2 = ["z", string, string];
  type T3 = T1 | T2;

  const v1: T3 = ["z", "bar", "baz"];
  const v2: T3 = ["foo", "x", "baz"];
  // const v3: T3 = ["foo", "bar", "baz"];
}

// Combining via Tuple

{
  type AB = "A" | "B";
  type CD = "C" | "D";

  type T = [AB, CD];
  const t: T = ["A", "C"];
}

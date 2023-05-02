import { Option, none, some } from "ts-option";
{
  type Reciprocal = (n: number) => Option<number>;
  const reciprocal: Reciprocal = (n) => (n == 0.0 ? none : some(n));

  const cube = (x: number): number => x * x * x;

  // const result = cube(reciprocal(3))
  // const cubeOfReciprocal = (n: number): number | undefined => cube(reciprocal(3))

  const cubeOfReciprocal1 = (n: number): number | undefined => {
    const r = reciprocal(n);
    // return r !== undefined ? cube(r) : cube(1)
    return r.map(cube).orUndefined;
  };
  const cubeOfReciprocal2 = (n: number): number | undefined => reciprocal(n).map(cube).orUndefined;

  const cubeOfReciprocal3 = (n: number): number => reciprocal(n).map(cube).getOrElseValue(1);
}

{
  type Name = unknown;
  type Phone = unknown;

  type customer = {
    name: Name;
    phone: Option<Phone>;
  };
}

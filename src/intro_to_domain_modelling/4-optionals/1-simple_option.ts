// Model  Null-Values explicitly!

{
  type MaybeNumber = number | undefined;
  // type Option<T> = T | undefined
  // MaybeNumber = Option<number>;

  type reciprocalF = (n: number) => MaybeNumber;
  const reciprocal: reciprocalF = (n) => (n == 0.0 ? undefined : n);

  const cube = (x: number): number => x * x * x;

  // const result = cube(reciprocal(3))
  // const cubeOfReciprocal = (n: number): number | undefined => cube(reciprocal(3))

  const isNumber = (n: MaybeNumber): n is number => n !== undefined;

  const cubeOfReciprocal = (n: number): number | undefined => {
    const r = reciprocal(n);
    // return r !== undefined ? cube(r) : cube(1)
    return r !== undefined ? cube(r) : undefined;
  };
}

{
  type Option<T> = T | undefined;
  type Name = unknown;
  type Phone = unknown;

  type customer = {
    name: Name;
    phone: Option<Phone>;
  };
}

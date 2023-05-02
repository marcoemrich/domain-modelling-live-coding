import { describe, expect, it, test } from "vitest";

describe("suite name", () => {
  it("bar", () => {
    expect(1 + 1).eq(2);
  });
});

test("Math.sqrt()", () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test("JSON", () => {
  const input = {
    foo: "hello",
    bar: "world",
  };

  const output = JSON.stringify(input);

  expect(output).eq('{"foo":"hello","bar":"world"}');
});

const foo = () => 1;

test("Foo", () => {
  console.log(1);

  expect(foo()).toEqual(1);
});

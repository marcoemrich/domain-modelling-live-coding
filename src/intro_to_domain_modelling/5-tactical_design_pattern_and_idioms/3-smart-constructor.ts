import { Option, none, some } from "ts-option";

// Tactical Design Pattern and idioms

// Smart Constructor

type ShortName = { kind: "ShortName"; value: string }; /* Business Contraint: Length < 20 */
type MakeShortName = (name: string) => Option<ShortName>;

const smallerThan20 = (s: string): boolean => s.length < 20;

const makeShortName: MakeShortName = (s) => (smallerThan20(s) ? some({ kind: "ShortName", value: s }) : none);

makeShortName("Sven");

makeShortName("Foo bar Foo bar Foo bar ");

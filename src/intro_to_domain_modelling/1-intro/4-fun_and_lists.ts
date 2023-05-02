// Functions

type Shape = never;
type Size = never;

type AreaSize = (shape: Shape) => Size; // TS signatures need var names

type Add = (a: number, b: number) => number;
type Add2 = (numbers: [number, number]) => number;

// Lists

const l: Shape[] = [];

type Color = "Red" | "Green";
type SimplePicture = { shape: Shape[]; backgroundColor: Color };

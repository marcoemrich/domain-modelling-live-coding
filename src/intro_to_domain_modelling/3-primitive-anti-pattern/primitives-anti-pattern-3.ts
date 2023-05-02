// Primitive Types Anti-Pattern

// Solution: Tagged-Types

{
  type Meter = { kind: "meter"; value: number };
  type Seconds = { kind: "seconds"; value: number };

  const wayToNextRoom = { kind: "meter", value: 30.0 } as const;
  const durationToNextRoom = { kind: "seconds", value: 5 } as const;

  const speed = (way: Meter, time: Seconds) => way.value / time.value;

  // const result = speed(durationToNextRoom, wayToNextRoom);
  const result = speed(wayToNextRoom, durationToNextRoom);

  console.log(result);
}

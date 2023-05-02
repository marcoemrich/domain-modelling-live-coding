// Primitive Types Anti-Pattern

// Solution: Branding

{
  type Brand<K, T> = K & { __brand: T };

  type Meter = Brand<number, "Meter">;
  type Seconds = Brand<number, "Seconds">;

  const wayToNextRoom = 30.0 as Seconds;
  const durationToNextRoom = 5 as Meter;

  const speed = (way: Meter, time: Seconds) => way / time;

  const result = speed(durationToNextRoom, wayToNextRoom);
  // const result = speed(wayToNextRoom, durationToNextRoom);

  console.log(result);
}

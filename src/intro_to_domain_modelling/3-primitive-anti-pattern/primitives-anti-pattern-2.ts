// Primitive Types Anti-Pattern

// On the way to a solution: Type-Aliases
{
  type Meters = number;
  type Seconds = number;

  const durationToNextRoom = 30.0;
  const wayToNextRoom = 5.0;

  const speed = (way: Meters, time: Seconds) => way / time;

  const result = speed(durationToNextRoom, wayToNextRoom);
  // const result = speed(wayToNextRoom, durationToNextRoom);

  console.log(result);
}

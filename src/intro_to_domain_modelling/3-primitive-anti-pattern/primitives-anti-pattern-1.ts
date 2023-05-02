// Primitive Types Anti-Pattern

{
  const durationToNextRoom = 30.0;
  const wayToNextRoom = 5.0;

  const speed = (way: number, duration: number) => way / duration;

  // const result = speed(durationToNextRoom, wayToNextRoom);
  const result = speed(wayToNextRoom, durationToNextRoom);

  console.log(result);
}

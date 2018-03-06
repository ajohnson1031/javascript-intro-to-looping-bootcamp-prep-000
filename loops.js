function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    i === 1 ? array.push(`I am ${i} strange loop.`) : array.push(`I am ${i} strange loops.`);
  }

  return array;
}

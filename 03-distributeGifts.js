function distributeGifts(packOfGifts, reindeers) {
  let giftsWeight = 0;
  let weightCanLift = 0;

  for (const gift of packOfGifts) {
    giftsWeight += gift.length;
  }
  for (const reindeer of reindeers) {
    weightCanLift += reindeer.length * 2;
  }
  return Math.floor(weightCanLift / giftsWeight);
}

const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];
distributeGifts(packOfGifts, reindeers);

function wrapping(gifts) {
  let wrappedGifts = [];

  for (const gift of gifts) {
    let coverLength = gift.length + 2;
    let cover = '*'.repeat(coverLength);
    wrappedGifts.push(`${cover}\n*${gift}*\n${cover}`);
  }

  return wrappedGifts;
}

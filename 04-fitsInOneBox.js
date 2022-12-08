function fitsInOneBox(boxes) {
  let orderedBoxes = boxes.sort((a, b) => a.l - b.l || a.w - b.w || a.h - b.h);

  for (let i = 0; i < orderedBoxes.length - 1; i++) {
    console.log(orderedBoxes[i], orderedBoxes[i + 1]);
    if (orderedBoxes[i].l >= orderedBoxes[i + 1].l) {
      return false;
    }
    if (orderedBoxes[i].w >= orderedBoxes[i + 1].w) {
      return false;
    }
    if (orderedBoxes[i].h >= orderedBoxes[i + 1].h) {
      return false;
    }
  }
  return true;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];
const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];
const boxes3 = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
];
const boxes4 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2 },
];

// console.log(fitsInOneBox(boxes));
// console.log(fitsInOneBox(boxes2));
// console.log(fitsInOneBox(boxes3));
console.log(fitsInOneBox(boxes4));

function createCube(size) {
  let topParts = [];
  let bottomParts = [];
  let initialSpaces = size - 1;

  for (let i = 1; i <= size; i++) {
    let topFrontRow = `${' '.repeat(initialSpaces)}${'/\\'.repeat(i)}`;
    let bottomFrontRow = `${' '.repeat(initialSpaces)}${'\\/'.repeat(i)}`;
    let topSideRow = '_\\'.repeat(size);
    let bottomRow = '_/'.repeat(size);
    topParts = [...topParts, topFrontRow + topSideRow + '\n'];
    if (i != 1) {
      bottomParts = [bottomFrontRow + bottomRow + '\n', ...bottomParts];
    } else {
      bottomParts = [bottomFrontRow + bottomRow, ...bottomParts];
    }
    initialSpaces -= 1;
  }
  let result = `${topParts.join('')}${bottomParts.join('')}`;

  return result.replace(/['\\n']$/, '');
}

console.log(createCube(4));

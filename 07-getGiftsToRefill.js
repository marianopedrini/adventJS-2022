const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

// SOLUCION CON REDUCE
// const getGiftsToRefill = (a1, a2, a3) => {
//   const arr1 = [...new Set(a1)];
//   const arr2 = [...new Set(a2)];
//   const arr3 = [...new Set(a3)];

//   const itemsOutOfStock = [];

//   const amountOfItems = [...arr1, ...arr2, ...arr3].reduce((acc, item) => {
//     if (acc[item]) {
//       return { ...acc, [item]: acc[item] + 1 };
//     }
//     return { ...acc, [item]: 1 };
//   }, {});

//   for (let item in amountOfItems) {
//     amountOfItems[item] == 1 && itemsOutOfStock.push(item);
//   }
//   return itemsOutOfStock;
// };

const getGiftsToRefill = (a1, a2, a3) => {
  const itemsOutOfStock = [];

  const arr1 = [...new Set(a1)];
  const arr2 = [...new Set(a2)];
  const arr3 = [...new Set(a3)];

  const allItems = [...arr1, ...arr2, ...arr3];
  const amountOfItems = {};

  allItems.forEach(
    (item) => (amountOfItems[item] = (amountOfItems[item] || 0) + 1)
  );

  for (let item in amountOfItems) {
    amountOfItems[item] == 1 && itemsOutOfStock.push(item);
  }
  return itemsOutOfStock;
};

const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']

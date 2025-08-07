function getCombinations(products) {
  const res = [];

  const generate = (index, current) => {
    if (index === products.length) {
      res.push(current);
      return;
    }
    generate(index + 1, current);
    generate(index + 1, [...current, products[index]]);
  };

  generate(0, []);
  return res;
}

export function findBestCombination(products, budget) {
  const combos = getCombinations(products);
  let best = [];
  let max = 0;

  combos.forEach((combo) => {
    const total = combo.reduce((acc, p) => acc + p.price, 0);
    if (total <= budget && total > max) {
      max = total;
      best = combo;
    }
  });

  return best;
}

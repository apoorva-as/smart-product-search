export const getBestVendor = (vendors) => {
  let bestVendor = null;
  let lowestScore = Infinity;

  vendors.forEach((v) => {
    const score =
      (v.price * 0.5) +
      (v.distance * 0.3) -
      (v.rating * 0.2);

    if (score < lowestScore) {
      lowestScore = score;
      bestVendor = {
        ...v,
        score: Number(score.toFixed(2)),
      };
    }
  });

  return bestVendor;
};
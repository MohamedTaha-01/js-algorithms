function bucketPaint(matrix, coords, fill) {
  if (!matrix.length) return [];

  let m = [...matrix];
  const x = coords[0];
  const y = coords[1];

  if (y >= m.length || x >= m[y].length) return m;

  const numToReplace = m[y][x];
  m[y][x] = fill;

  for (let iy = Math.max(y - 1, 0); iy <= y + 1 && iy <= coords.length + 1; iy++) {
    for (let ix = Math.max(x - 1, 0); ix <= x + 1 && ix <= coords.length + 1; ix++) {
      try {
        if (JSON.stringify([ix, iy]) !== JSON.stringify(coords) && m[iy][ix] === numToReplace) bucketPaint(m, [ix, iy], fill);
      } catch (error) {}
    }
  }

  return m;
}

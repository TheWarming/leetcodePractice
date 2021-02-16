/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const R = M.length;
  const C = M[0].length;
  const res = new Array(R).fill(-1).map(item => new Array(C).fill(0))
  for (let r = 0; r < R; r++){
      for (let c = 0; c < C; c++) {
          let count = 0;
          for (let nr = r-1; nr <= r+1; nr++)
              for (let nc = c-1; nc <= c+1; nc++) {
                  if (0 <= nr && nr < R && 0 <= nc && nc < C) {
                      res[r][c] += M[nr][nc];
                      count++;
                  }
              }
      res[r][c] = parseInt(res[r][c]/count);
      }
  }
  return res
};
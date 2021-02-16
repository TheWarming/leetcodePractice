/* 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/island-perimeter
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

//又不会！！！

/**对于一个陆地格子的每条边，它被算作岛屿的周长当且仅当这条边为网格的边界或者相邻的另一个格子为水域。 因此，我们可以遍历每个陆地格子，看其四个方向是否为边界或者水域，如果是，将这条边的贡献（即 11）加入答案 \textit{ans}ans 中即可。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/island-perimeter/solution/dao-yu-de-zhou-chang-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */

var islandPerimeter = function (grid) {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const n = grid.length, m = grid[0].length;
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (grid[i][j]) {
                let cnt = 0;
                for (let k = 0; k < 4; ++k) {
                    let tx = i + dx[k];
                    let ty = j + dy[k];
                    if (tx < 0 || tx >= n || ty < 0 || ty >= m || !grid[tx][ty]) {
                        cnt += 1;
                    }
                }
                ans += cnt;
            }
        }
    }
    return ans;
};


/* 方法二：深度优先搜索
思路与算法

我们也可以将方法一改成深度优先搜索遍历的方式，此时遍历的方式可扩展至统计多个岛屿各自的周长。需要注意的是为了防止陆地格子在深度优先搜索中被重复遍历导致死循环，我们需要将遍历过的陆地格子标记为已经遍历过，下面的代码中我们设定值为 22 的格子为已经遍历过的陆地格子。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/island-perimeter/solution/dao-yu-de-zhou-chang-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */

var islandPerimeter = function (grid) {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const n = grid.length, m = grid[0].length;

    const dfs = (x, y) => {
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === 0) {
            return 1;
        }
        if (grid[x][y] === 2) {
            return 0;
        }
        grid[x][y] = 2;
        let res = 0;
        for (let i = 0; i < 4; ++i) {
            const tx = x + dx[i];
            const ty = y + dy[i];
            res += dfs(tx, ty);
        }
        return res;
    }

    let ans = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (grid[i][j] === 1) {
                ans += dfs(i, j);
            }
        }
    }
    return ans;
}


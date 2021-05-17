/* 12. 整数转罗马数字
罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给你一个整数，将其转为罗马数字。 */

/**
 * @param {number} num
 * @return {string}
 */

 //太蠢了
var intToRoman = function(num) {
  const MAP = new Map([
      [1,'I'],[5,'V'],[4,'IV'],[9,'IX'],
      [10,'X'],[50,'L'],[40,'XL'],[90,'XC'],
      [100,'C'],[500,'D'],[400,'CD'],[900,'CM'],
      [1000,'M']
      ])
  num += ''
  let ans = []
  let helper = 1
  for(let i = num.length-1; i >= 0; i--){
      const n = num[i]*helper
      if(MAP.has(n)){
          ans.unshift(MAP.get(n))
      }else{
          let s = ''
          let c = num[i]
          if(c >= 5){
              s = MAP.get(helper*5)
              c -= 5
          }
          for(let j = 1; j <= c; j++){
              s = s + MAP.get(helper)
          }
          ans.unshift(s)
      }
      helper *= 10
  }
  return ans.join('')
};


var intToRoman = function(num) {
  let values =[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let reps=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let res = '';
  for(let i=0; i<13; i++){
      while(num>=values[i]){
          num -= values[i];
          res += reps[i];
      }
  }
  return res;
}

var intToRoman = function(num) {
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens     = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones     = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const roman = [];
  roman.push(thousands[Math.floor(num / 1000)]);
  roman.push(hundreds[Math.floor(num % 1000 / 100)]);
  roman.push(tens[Math.floor(num % 100 / 10)]);
  roman.push(ones[num % 10]);
  return roman.join('');
};
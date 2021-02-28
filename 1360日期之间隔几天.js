/* 1360. 日期之间隔几天
请你编写一个程序来计算两个日期之间隔了多少天。

日期以字符串形式给出，格式为 YYYY-MM-DD，如示例所示。

 

示例 1：

输入：date1 = "2019-06-29", date2 = "2019-06-30"
输出：1 */

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  function leap_year(year){
      return ((year % 400 == 0) || (year % 100 !== 0 && year % 4 === 0))
  }
  function date_to_int(year, month, day){
      const month_length = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      let ans = day - 1
      while (month != 0){
          month -= 1
          ans += month_length[month]
          if (month === 2 && leap_year(year)){
              ans += 1
          }  
      }
      ans += 365 * (year - 1971)
      ans += parseInt((year - 1) / 4) - parseInt(1971 / 4)
      ans -= parseInt((year - 1) / 100) - parseInt(1971 / 100)
      ans += parseInt((year - 1) / 400) - parseInt(1971 / 400)
      return ans
  };
  date1 = date1.split('-')
  date2 = date2.split('-')
  return Math.abs(date_to_int(...date1) - date_to_int(...date2))
}
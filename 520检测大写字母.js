/* 给定一个单词，你需要判断单词的大写使用是否正确。

我们定义，在以下情况时，单词的大写用法是正确的：

全部字母都是大写，比如"USA"。
单词中所有字母都不是大写，比如"leetcode"。
如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
否则，我们定义这个单词没有正确使用大写字母。

示例 1:

输入: "USA"
输出: True
示例 2:

输入: "FlaG"
输出: False
注意: 输入是由大写和小写拉丁字母组成的非空单词。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/detect-capital
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let reg = /^([A-Z]+|[A-Z]{0,1}[a-z]+)$/
    return reg.test(word)
};


var detectCapitalUse = function(word) {
    let lastUpper = -1;
    let lastLower = -1;
    for(let i = 0; i < word.length; i++){
        if(word[i] >= 'a' &&  word[i] <= 'z'){
            lastLower = i;
        }else{
            lastUpper = i;
        }
    }
    return !(lastUpper >= 1 && lastLower >= 0)
};

/* bool detectCapitalUse(char * word){
    //记录大写字母、小写字母最后出现的位置   
    int lastUpperCharIndex = -1;
    int lastLowerCharIndex = -1;
    int index = 0;
    while(word[index]){
        if(word[index]>='a' && word[index]<='z')
            lastLowerCharIndex = index;
        else
            lastUpperCharIndex = index;

        index++;
    }

    //如果一个单词里存在小写字母，且大写字母的位置不为0，那么大写用法不正确
    if(lastUpperCharIndex>=1 && lastLowerCharIndex>=0){
        return false;
    }

    return true;
} */


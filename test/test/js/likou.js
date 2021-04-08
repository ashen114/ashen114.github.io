<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>// var wiggleSort = function(nums) {
//     let preArr = [];
//     numsLen = nums.length;
//     preArr = numsLen % 2 == 0 ? nums.sort().splice(0, numsLen / 2) : nums.sort().splice(0, (numsLen + 1) / 2);
//     let lastArr = nums.sort((a,b)=>b-a);
//     for(let index = 0; index < numsLen; index ++){
//         if(index % 2 == 0){
//            nums = lastArr.splice(index, 0, preArr.pop());
//         }
//     }
// };
// wiggleSort([4,5,5,6])

var longestPalindrome = function(s) {
    let strArr = [],strLen = 0;
    for(let i = 0; i < s.length; i++ ){
        strArr.push(s.split('')[i]);
         console.log('strArr:', strArr);
         if([].concat(strArr).join('') == [].concat(strArr).reverse().join('')){
            strLen = strArr.length
         }
    }
    return strLen;
};

longestPalindrome('baccab');

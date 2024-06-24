var text = "Mom"
var text1= text.toLowerCase()
var len=text1.length-1
var reverse=""

for(let i=len;i>=0;i--){
    let char=text1[i]
    reverse+=char
}
console.log(reverse==text1?"palindrome":"not palindrome");
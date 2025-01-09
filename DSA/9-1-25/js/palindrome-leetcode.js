// 125. Valid Palindrome

// "A man, a plan, a canal: Panama" 

let isPalindrome = function (input) {
    let start = 0, end = input.length - 1;
    while (start < end) {
        let s = input.charCodeAt(start), e = input.charCodeAt(end);
        if (!isLetter(s)) {
            start++; 
            continue;
        }
        if (!isLetter(e)) {
            end--; 
            continue;
        }
        if (toLowerCase(s) !== toLowerCase(e)) return false;
        start++;
        end--;
    }
    return true;
};

let isLetter = code => (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
let toLowerCase = code => (code >= 65 && code <= 90) ? code + 32 : code;

console.log(isPalindrome("A man, a plan, a canal, Panama"));


// Expected OutPut :- True

// 9. Palindrome Number

// let number = 121;
// let a = number, result = 0;

// while (number > 0) {
//     result = (result * 10) + (number % 10);
//     number = Math.floor(number / 10);
// }
// if (a == result) {
//     console.log("Number is Palindrome");
// } else {
//     console.log("Number is not Palindrome");
// }

// Expected OutPut :- Number is Palindrome
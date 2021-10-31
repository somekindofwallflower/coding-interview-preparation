function largestPalindromeProduct(n) {
  // Good luck!  
  let lowerBound = Math.pow(10, n - 1);
  let upperBound = Math.pow(10, n) - 1;
  let maxPalindrome = 0;

  for (let i = Math.pow(10, n - 2) * 11; i <= upperBound; i = i + 11) {
    for (let j = lowerBound; j <= upperBound; j++) {
      let number = i * j;
      if (number > maxPalindrome) {
        if (isNumPalindrome(number)) {
          maxPalindrome = number;
        }
      }
    }
  }
  return maxPalindrome;   
}

function isNumPalindrome(num)
{
  let textNum = num.toString();
  let left = 0;
  let textNumLength = textNum.length - 1;
  // Keep comparing characters while they are same  
  while (left < textNumLength) {
    if (textNum[left] != textNum[textNumLength]) {
      return false;
    }
    left++;
    textNumLength--;
  }
  return true;
}

largestPalindromeProduct(3);

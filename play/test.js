function isPalindrome(word)
{
  i=0;
  j=word.length;
  j=j-1;
  check=true
  console.log(j);
  while(i<j){
    if (word[i].toLowerCase()!=word[j].toLowerCase()){
        check=false;
        console.log(word[i]);
        console.log(word[j]);
        break;
    }
    i++;
    j--;

  }
  return check;
}
var word = 'Deleveled'
// ss=word.isUpper();
// console.log(ss)
console.log(isPalindrome(word));
// print(isPalindrome(word))
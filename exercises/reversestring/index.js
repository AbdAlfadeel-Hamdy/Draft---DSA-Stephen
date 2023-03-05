// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // solution (1)
  // let res = "";
  // for (const ch of str) {
  //   res = ch + res;
  // }
  // return res;
  //////////////////////////////
  // solution (2)
  const charArr = str.split('');
  return charArr.reduce((reversed, char) => char + reversed, '');
  //////////////////////////////
  // solution(3);
  // const reversedArr = str.split(
}

module.exports = reverse;

/**
Problem 1: Unused letters

Problem 1: Unused letters
Given a string of English letters, write a function that returns all the letters of the alphabet that are unused. 
For example, the string "A slow yellow fox crawls under the proactive dog" would return "bjkmqz" since none of those letters are used. 
The string "A quick brown fox jumps over the lazy dog" would return "" since all of the English letters are in that sentence.


 */


/**
 * 
 * one line solution
 
 Array.from(
  (new Set('abcdefghijklmnopqrstuvwxyz'.split('')))
    .difference(
      new Set('A slow yellow fox crawls under the proactive dog'.split(''))
    )
  ).join('');
 **/ 

const unused = (sentence) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const map = alphabet.reduce((acc, el) => {
    acc[el] = 0;
    return acc;
  }, {});



  sentence.toLowerCase().split('').map((el) => {
    map[el] += 1;
  });

  return Object.entries(map).reduce((acc, el) => {
    if(el[1] === 0) {
      acc += el[0];
    }
    return acc;
  }, '');
}


const test = (data, expected) => {
  const r = unused(data);
  console.log(`Test: "${expected}" to be "${r}"`);
  console.assert(expected === r, "Failed %o", data);
}

test("A slow yellow fox crawls under the proactive dog", "bjkmqz");
test("A quick brown fox jumps over the lazy dog", "");
test("foo baz bar", "cdeghijklmnpqstuvwxy");
test('hello RealWork', "???")


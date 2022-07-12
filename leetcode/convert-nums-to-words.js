function convert(num) {
  const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen '];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const mad = ['', 'thousand', 'million', 'billion', 'trillion'];

  function parseHundreds(n) {
    let r = "";
    if(n < 20) {
      r = [digits[n]];
    }
    if (n < 100 && n > 19) {
      r = [tens[ Math.floor(n / 10)], digits[ n % 10]];
    }

    if(n < 1000 & n > 99) {
      r = [digits[Math.floor(n / 100)], 'hundred', parseHundreds(n % 100)];
    }
    return r.join(' ');
  }

  let c = num;
  let groups = [];
  let f = true;
  while(f) {
    let mod = c % 1000;
    let rest = Math.floor(c / 1000);
    groups.unshift(mod);
    if(rest > 0) {
      c = rest;
    } else {
      f = false;
    }
  }

  let r = groups.reduceRight((memo, num, i, list) => {
    memo = [parseHundreds(num), mad[list.length - 1 - i]].concat(memo);
    return memo;
  }, []).join(' ');

  return `${num} - ${r}\n`;
}


console.log(
  convert(1),
  convert(10),
  convert(11),
  convert(19),
  convert(20),
  convert(21),
  convert(99),
  convert(100),
  convert(101),
  convert(909),
  convert(919),
  convert(9190),
  convert(90012),
  convert(112122),
  convert(900122),
  convert(1111122),
  convert(11111122),
  convert(111111122),
);
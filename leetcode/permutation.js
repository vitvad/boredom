let base62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
let nums = '0123456789'.split('');


function perm_1(list) {
  return list.length ? list.reduce((r, v, i) => [
    ...r,
    ...perm_1([
        ...list.slice(0, i),
        ...list.slice(i + 1)
      ]).map(x => [v, ...x])
  ]
  , []) : [ [] ]
}

console.log('simple permutation', perm_1([1,2,3]));




function perm_2(coll) {
  let helper = (acc, v) => {
    return acc.reduce((r, el) => {
      r.push(el.concat(v));
      r.push(el);
      return r;
    }, [])
  }
  return coll.reduce((m, v) => {
    return helper(m, v);
  }, [[]]);
}


console.log(perm_2([1, 2, 3]));

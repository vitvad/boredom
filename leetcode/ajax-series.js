function fetch(params) {
  return Promise.resolve(params);
}

function loadSeries(urls) {
  let results = [];
  let helper = (urls) => {
    let [url, ...rest] = urls;
    return fetch(url).then((response) => {
      console.log('done for ', url)
      results.push({[url]: response});
      return (rest.length !== 0) ? helper(rest) : Promise.resolve(results);
    });
  };
  return helper(urls);
}

console.log(loadSeries([
  'google.com',
  'ya.ru',
  'facebook.com'
]).then( r => console.log('done', r))
)
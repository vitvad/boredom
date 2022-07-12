let debounce = (fn, wait) => {
  let timer;

  return (...args) => {
    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  }
};

function log(m) {
  console.log(m);
};


for(let i=0; i< 10; i++) {
  log(`test ${i}`);
;}

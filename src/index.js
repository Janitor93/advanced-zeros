module.exports = function getZerosCount(number, base) {
  let noz = Number.MAX_VALUE;
  let j = base;
  for(let i = 2; i <= base; i++) {
    if(j % i == 0) {
      let power = 0;
      while(j % i == 0) {
        power++;
        j /= i;
      }
      let c = 0;
      let k = Math.floor(number / i);
      
      while(k > 0) {
        c += k;
        k  = Math.floor(k / i);
      }
      noz = Math.min(noz, Math.floor(c / power));
    }
  }

  return noz;
}


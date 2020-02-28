// a self dividing number is a number that is divislbe by every number it contains
// given an upper and lower bound, return a list containing every self dividing number
// self dividing number cannot contain digit 0
// boundaries, left <= 1, right <= 10000

const selfDividing = (left, right) => {
  let out = [];
  for (let i = left; i <= right; i++) {
    if (helper(i)) out.push(i);
  }
  return out;

  function helper(num) {
    // let tenThousand = num === 10000 ? 1 : null;
    // let thousand = num >= 1000 ? Math.floor((num % 10000) / 1000) : null;
    // let hundred = num >= 100 ? Math.floor(((num % 10000) % 1000) / 100) : null;
    // let ten =
    //   num >= 10 ? Math.floor((((num % 10000) % 1000) % 100) / 10) : null;
    // let one = num >= 1 ? Math.floor((((num % 10000) % 1000) % 100) % 10) : null;

    // if (tenThousand === 0) return false;
    // if (thousand === 0) return false;
    // if (hundred === 0) return false;
    // if (ten === 0) return false;
    // if (one === 0) return false;

    // if (tenThousand && num / tenThousand !== Math.floor(num / tenThousand))
    //   return false;
    // if (thousand && num / thousand !== Math.floor(num / thousand)) return false;
    // if (hundred && num / hundred !== Math.floor(num / hundred)) return false;
    // if (ten && num / ten !== Math.floor(num / ten)) return false;
    // if (one && num / one !== Math.floor(num / one)) return false;

    let digits = toDigit(num);
    if (digits.some(d => d === 0)) return false;
    for (let d of digits) {
      if (num / d !== Math.floor(num / d)) return false;
    }
    return true;
  }

  function toDigit(n) {
    let out = [];
    while (n) {
      out.push(Math.floor(n / 10000));
      n -= Math.floor(n / 10000) * 10000;

      out.push(Math.floor(n / 1000));
      n -= Math.floor(n / 1000) * 1000;

      out.push(Math.floor(n / 100));
      n -= Math.floor(n / 100) * 100;

      out.push(Math.floor(n / 10));
      n -= Math.floor(n / 10) * 10;

      out.push(n);
      n -= n;
    }

    while (out[0] === 0) {
      out.shift();
    }
    return out;
  }
};

console.log(selfDividing(15, 75));

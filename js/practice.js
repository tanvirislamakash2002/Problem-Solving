const sumAndMultiply = (n) => {
  let total = 0;
  let combine = ''
  const arr = n.toString().split('')

  for (a of arr) {
    if (a !== "0") { 
      combine += a
      total += Number(a)
     }
  }
  return combine* total
};

const result = sumAndMultiply(10203004)
console.log(result);
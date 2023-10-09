let array = [1,2,2,3,3,4,4,5,5,5];

const freqCount = array.reduce((item, frequency) => {
  item[frequency] = (item[frequency] || 0) + 1;
  return item;
}, {});

console.log(freqCount);
// console.log(array);
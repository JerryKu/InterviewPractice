// let array = [1,7,3,0,5,8,3,2,6,2,1,1,4,5];
// let bitArr = new Array(array.length+2).join('0').split('').map(parseFloat);
// // console.log(bitArr);
// let sum = function(bit_arr, indx){
//   result = 0;
//   while(indx !== 0){
//     result += bit_arr[indx];
//     indx -= indx & -indx;
//   }
//   return result;
// }
//
// let add = function(bit_arr, indx, val){
//   while(indx < bit_arr.length){
//     bit_arr[indx] += val;
//     indx += indx & -indx;
//   }
// }
// for(let i = 0; i < array.length; i++){
//   add(bitArr, i+1, array[i]);
// }
// let range_sum = function(from, to){
//    return sum(bitArr, to) - sum(bitArr, from-1);
// }
// console.log(range_sum(1, 5));

class BIT {
  constructor(array){
    this.array = [0].concat(array);
    for(let indx = 1; indx < this.array.length; indx++){
      let indx2 = indx + (indx & - indx);
      if(indx2 < this.array.length){
        this.array[indx2] += this.array[indx];
      }
    }
  }
  prefixQuery(indx){
    indx += 1;
    let result = 0;
    while(indx !== 0){
      result += this.array[indx];
      indx -= indx & -indx;
    }
    return result;
  }
  rangeQuery(from, to){
    return this.prefixQuery(to) - this.prefixQuery(from-1);
  }
}

let bit_arr = new BIT([1,7,3,0,5,8,3,2,6,2,1,1,4,5]);
console.log(bit_arr.prefixQuery(3));
console.log(bit_arr.rangeQuery(0, 13));

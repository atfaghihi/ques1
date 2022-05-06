function moveZero (array){
//     let len = array.length;
//     let zero = [];
//     let unzero = [];
// for(let i = 0; i < len; i++){
//     if(array[i] !== 0){
//         unzero.push(array[i]);
//     }else {
//         zero.push(array[i]);
//     }
// }
// return unzero.concat(zero);
return result = array.filter((item) => item !== 0).
concat(array.filter((item) => item === 0));


}
let arr = [1, 0, 1, 2, 0, 1, 3];
console.log(moveZero(arr));

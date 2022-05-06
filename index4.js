function deNest(array){
        while(Array.isArray(array)){
           array = [...array][0];
    }
    return array;

}
let arr = [[[[[[[[[[[[3]]]]]]]]]]]];
console.log(deNest(arr));
function secret(str){
    let star = str.split("*");
    const print = `<${star[0]}></${star[0]}>`.repeat(+star[1]);
    return print;
   

}
let str = "div*2";
console.log(secret(str));
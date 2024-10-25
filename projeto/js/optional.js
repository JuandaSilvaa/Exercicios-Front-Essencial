// const produto = "adsasdasda";

// if (produto) {
//     console.log("Tem conteudo");
    
// }else{
//     console.log("Produto é undefined");
    
// }


// console.log(produto?.descricao??"Descricao n existe");



// const produto2 = {
//     descricao: "celular",
//     valor: 2000,
// };

// produto2.descricao = "TV 42"
// console.log(produto2?.descricao??"Descricao n existe");

const idade = null
//Null Coalescing Operator
console.log(`Sua idade é: ${idade || "Não Informada"}`);

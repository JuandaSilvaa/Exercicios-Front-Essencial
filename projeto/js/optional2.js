const pessoa = {
    nome: "Ana",
    sobrenome: "silva",
    idade: 25,
    endereco:{
        rua: "Rua bingen",
        numero: 878,
        bairro:"Bingen"
    },
    // exibirPessoa(){
    //     return "ok";
    // }

}

console.log(pessoa.exibirPessoa?.()??"Não encontrado");
console.log('nome' in pessoa);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));




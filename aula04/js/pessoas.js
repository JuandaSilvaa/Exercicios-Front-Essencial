const pessoas = [
  { nome: "João", idade: 20, cidade: "Petrópolis" },
  { nome: "Ana", idade: 28, cidade: "Petrópolis" },
  { nome: "Carla", idade: 44, cidade: "São Paulo" },
  { nome: "Carlos", idade: 38, cidade: "Petrópolis" },
  { nome: "Igor", idade: 16, cidade: "Juiz de Fora" },
];

const filtro = pessoas.filter(
  (pessoa) => pessoa.cidade === "Juiz de Fora" && pessoa.idade < 18
);

// console.log(filtro.map((pessoas) => pessoas.nome + "-" + pessoas.cidade));

const busca = pessoas.find(
  (pessoas) => pessoas.cidade.toLowerCase() === "Petrópolis".toLowerCase
);

// console.log(busca);

const buscaLetra = pessoas.filter((pessoas) => pessoas.nome.toLowerCase().includes("o")
);
console.log(buscaLetra);

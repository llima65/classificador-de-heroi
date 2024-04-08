/*
Criar uma variável para armazenar nome e experiência (XP) de um herói

Xp for menor do que 1.000 = Ferro
Xp for entre 1.001 e 200 = Bronze
Xp for entre 2.001 e 5.000 = Prata Ouro
Xp for entre 5.001 e 8.000 = Platina Diamente
Xp for entre 8.001 e 9000 = Ascendente
Xp for entre 9.001 e 10.000 = Imortal
Xp for maior ou igual a 10.001 = Radiante
*/

// Array de heróis com nome e XP
let herois = [
    { nome: "Raio Dourado", xp: 8000 },
    { nome: "Lâmina de Vento", xp: 1500 },
    { nome: "Estrela da Manhã", xp: 500 },
    { nome: "Sombra Negra", xp: 10000 },
    { nome: "Vento Dourado", xp: 3000 }
];

// Iterando sobre cada herói e exibindo o resultado
for (let heroi of herois) {
    let nivel;

    if (heroi.xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}



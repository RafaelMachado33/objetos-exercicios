/*# Exercício 3

Observe o objeto abaixo e, utilizando o **espalhamento** (ou **spread**), resolva os exercícios a seguir:

```
const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
}
```

a) Crie uma **cópia** do objeto acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”.*/

const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
}

const pokemon2 = {
    ...pokemon1,               //Spread -----
    nome: "Squirtle",
    tipo: "Água",

}
//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.

pokemon1.ataque = [];

/*c) Crie um objeto de `ataque` com a estrutura abaixo e **o adicione no array `ataques`**, utilizando `**push()**`:

```
nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
```
*/


pokemon1.ataque.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
});

//d) Na cópia do objeto original, ou seja, no objeto que representa o **Squirtle**, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original.

pokemon2.ataque = [...pokemon1.ataque]   //Aqui estou só copiando o ataque do pokemon de outro array

//e) Para o objeto original, adicione no array de `ataques` o seguinte ataque: **“Folha Navalha”**, com **45 de dano**, **100 de precisão**, e do tipo **“Grama”**.

const ataque2 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama ",
    precisao: 100
}


pokemon1.ataque.push(ataque2);


//f) Para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array de `ataques`.
const ataque3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
}

pokemon2.ataque.push(ataque3);
//g) Imprima ambos os objetos no console e verifique se todas as informações adicionadas aparecem na impressão.
pokemon1.nome=pokemon1.nome.toUpperCase();
console.log(pokemon1);

console.log("-".repeat(70));

console.log(pokemon2);















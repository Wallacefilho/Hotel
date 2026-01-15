// hotel infinito representado por um array
let hotel = [];

// lista inicial de nomes
let listaDeNomes = [
  "Ana",
  "Bruno",
  "Carlos",
  "Daniela",
  "Marcelo",
  "Clarice"
];

// inicia o hotel com o quarto 0 vazio
function iniciarHotel() {
  hotel = [];
  hotel[0] = null;
}

// adiciona uma nova lista de hóspedes (SEM UNSHIFT / SPLICE)
function adicionarNovaLista(novaLista) {

  // empurra os hóspedes antigos para frente
  for (let i = hotel.length - 1; i >= 1; i--) {
    hotel[i + novaLista.length] = hotel[i];
  }

  // coloca os novos hóspedes a partir do quarto 1
  for (let i = 0; i < novaLista.length; i++) {
    hotel[i + 1] = novaLista[i];
  }

  // garante que o quarto 0 fique vazio
  hotel[0] = null;
}

// mostra os quartos
function mostrarHotel() {
  for (let i = 0; i < hotel.length; i++) {
    if (hotel[i] === null) {
      console.log("Quarto " + i + ": vazio");
    } else {
      console.log("Quarto " + i + ": " + hotel[i]);
    }
  }
}

// total de hóspedes
function totalHospedes() {
  console.log("Total de hóspedes: " + (hotel.length - 1));
}

/* EXECUÇÃO */
iniciarHotel();
adicionarNovaLista(listaDeNomes);
mostrarHotel();
totalHospedes();

// nova lista
let novaLista = ["Eduardo", "Fernanda", "Paulo"];
adicionarNovaLista(novaLista);

console.log("---- LISTA ----");
mostrarHotel();
totalHospedes();

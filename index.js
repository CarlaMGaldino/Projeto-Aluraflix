var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/8/8f/%C3%80_Espera_de_um_Milagre.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/Twilight_Poster.jpg/250px-Twilight_Poster.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/87/29/75/19874043.jpg",
];

var input = document.getElementById("valor");
var botaoNovo = document.querySelector("button");
var divImg = document.querySelector(".imagens-filmes");

for (var i = 0; i < listaFilmes.length; i++) {
  var domImg = document.createElement("img");
  domImg.classList.add("img-filmes");
  domImg.src = `${listaFilmes[i]}`;
  divImg.appendChild(domImg);
}

botaoNovo.onclick = function (e) {
  e.preventDefault();
  listaFilmes.push(input.value);
  console.log(listaFilmes);
  for (var i = 3; i < listaFilmes.length; i++) {
    var domImg = document.createElement("img");
    domImg.classList.add("img-filmes");
    domImg.src = `${listaFilmes.pop()}`;
    divImg.appendChild(domImg);
  }
};

input.addEventListener("click", () => (input.value = ""));

document.addEventListener("DOMContentLoaded", function() {
    const filmeId = new URLSearchParams(window.location.search).get("id");
    const filme = filmes.find(f => f.id == filmeId); 

    if (filme) {
        document.getElementById("titulo").textContent = filme.title;

        const imagem = document.querySelector(".filme-imagem");
        imagem.src = filme.image;
        imagem.alt = filme.title;

        const filmeInfo = document.querySelector(".filme-info");
        filmeInfo.querySelector("h1").textContent = filme.title;
        filmeInfo.querySelector("p:nth-of-type(1)").textContent = filme.description; 
        filmeInfo.querySelector("p:nth-of-type(2)").textContent = "Gêneros: " + filme.genero.join(", ");
        filmeInfo.querySelector("p:nth-of-type(4)").innerHTML = `<img src="idade/${filme.idade}.png" alt="${filme.idade}" />`; 
        filmeInfo.querySelector("p:nth-of-type(3)").textContent = "Ano: " + filme.ano; 

        filmeInfo.style.color = "#ac6d00"; 
        filmeInfo.style.fontSize = "18px"; 
    }
});

function displayFilmes(filmes) {
    const container = document.getElementById('filmes-container');
    container.innerHTML = '';

    if (filmes.length === 0) {
        container.innerHTML = '<p>Nenhum filme encontrado.</p>';
        return;
    }

    filmes.forEach(filme => {
        const div = document.createElement('div');
        div.className = 'filme';
        div.innerHTML = `
            <div style="cursor: pointer;" onclick="window.location.href='filme.html?id=${filme.id}'">
                <img src="${filme.image}" alt="${filme.title}">
                <h3>${filme.title}</h3>
            </div>
        `;
        container.appendChild(div);
    });
}

document.getElementById('search').addEventListener('input', filterFilmes);
document.getElementById('genero').addEventListener('change', filterFilmes);
document.getElementById('idade').addEventListener('change', filterFilmes);

displayFilmes(filmes);

function filterFilmes() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const selectedGenero = document.getElementById('genero').value;
    const selectedIdade = document.getElementById('idade').value;

    const filteredFilmes = filmes.filter(filme => {
        const matchesSearch = filme.title.toLowerCase().includes(searchQuery);
        const matchesGenero = selectedGenero ? filme.genero.some(genero => genero.toLowerCase() === selectedGenero) : true;
        const matchesIdade = selectedIdade ? filme.idade === selectedIdade : true;

        return matchesSearch && matchesGenero && matchesIdade;
    });

    displayFilmes(filteredFilmes);
}

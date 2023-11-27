// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(response => response.json())
//     .then(json => {
//         console.log(json.results);
//     });

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(json => {
        printPokemons(json.results);
    });

function printPokemons(pokemons){
    const container = document.getElementById('container');
    
    pokemons.forEach(pokemon => {
        console.log(pokemon);
        container.innerHTML = `
        ${container.innerHTML}
        <div class="card">
        <span> N°. ${getPokemonId(pokemon.url)}</span>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(pokemon.url)}.png"/>
        <h2>${pokemon.name}</h2>
        </div>`;
    });
}

function getPokemonId(url){
    return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
}
const parsePokemon = () => {
    const pokemonList = document.getElementById("pokemonList");

    const url = "http://api.vschool.io:6543/pokemon.json";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const pokedex = JSON.parse(xhr.responseText)["objects"][0]["pokemon"];
            for (let i = 0; i < pokedex.length; i++) {
                pokemonList.innerHTML += `<li>Pokemon Name: ${pokedex[i].name}</li>`;
            }
        }
    }

}

parsePokemon();

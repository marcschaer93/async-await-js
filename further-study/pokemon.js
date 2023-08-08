const BASE_URL = "https://pokeapi.co/api/v2/pokemon"


class Pokemon {
    constructor(id) {
        this.id = id
    }

    async getInfo(id) {
        let response = await axios.get(`${BASE_URL}/${this.id}`)
        console.log('res', response.data.name);
        // this.name = response.data.name
    }
}

// p = new Pokemon(44)

let baseURL = "https://pokeapi.co/api/v2";
  
// 1.
async function part1() {
    let data = await $.getJSON(`${baseURL}/pokemon/?limit=1000`);
    console.log("DATA", data);
}
part1()

// 2 
async function part2() {
  let data = await $.getJSON(`${baseURL}/pokemon/?limit=1000`);

  let pokemons = await Promise.all([
    $.getJSON(`${baseURL}/pokemon/${Math.floor((Math.random()) * 1000)}`),
    $.getJSON(`${baseURL}/pokemon/${Math.floor((Math.random()) * 1000)}`),
    $.getJSON(`${baseURL}/pokemon/${Math.floor((Math.random()) * 1000)}`)
  ])

  pokemons.forEach(p => console.log(p.name))

}

part2()


  // 2.
  // async function part2() {
  //   let allData = await $.getJSON(`${baseURL}/pokemon/?limit=1000`);
  //   let randomPokemonUrls = [];
  //   for (let i = 0; i < 3; i++) {
  //     let randomIdx = Math.floor(Math.random() * allData.results.length);
  //     let url = allData.results.splice(randomIdx, 1)[0].url;
  //     randomPokemonUrls.push(url);
  //   }
  //   let pokemonData = await Promise.all(
  //     randomPokemonUrls.map(url => $.getJSON(url))
  //   );
  //   pokemonData.forEach(p => console.log(p));
  // }
  

// 3





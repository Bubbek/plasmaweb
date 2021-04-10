// GET
const featuredGames1 = '/rust'
const featuredGames2 = '/fortnite'
const featuredGames3 = '/minecraft'
const searchUrl = 'https://api.rawg.io/api/games?search='
const baseUrl = 'https://api.rawg.io/api/games'
const APIKey = '?5af5541c6fb54481958f0fb28ae1b924'

// hämta alla spelet
export function getGames() {
  const games = fetch(baseUrl + APIKey)
    .then((res) => res.json())
    .then((res) => console.log(res))

  return games
}

// söker efter spel
export function searchGame(gameTitle) {
  const game = fetch(searchUrl + gameTitle + APIKey)
    .then((res) => res.json())
    .then((res) => console.log(res))
  return game
}

// hämta ett specifik spel
export function getGame() {
  const game = fetch(baseUrl + featuredGames1 + APIKey)
    .then((res) => res.json())
    .then((res) => console.log(res))

  return game
}

/*
fetch('https://api.rawg.io/api/games?key=5af5541c6fb54481958f0fb28ae1b924')
  .then((res) => res.json())
  .then((res) => console.log(res))
*/

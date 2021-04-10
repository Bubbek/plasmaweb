const popularGames = [
  {
    id: 1,
    title: 'Among Us',
    img: 'https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg',
  },
  {
    id: 2,
    title: 'Path of Exile',
    img: 'https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg',
  },
  {
    id: 3,
    title: 'Rust',
    img: 'https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg',
  },
]
const newGames = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    img: 'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
  },
  {
    id: 2,
    title: 'Assassin´s Creed Valhalla',
    img: 'https://media.rawg.io/media/games/a8b/a8bf6f31bfbdaf7d4b86c1953c62cee0.jpg',
  },
  {
    id: 3,
    title: 'Spellbreak',
    img: 'https://media.rawg.io/media/screenshots/417/417f422878bc0c546ffa76c4858c42de.jpg',
  },
]
const ongoingEvents = [
  {
    id: 1,
    title: 'Valorant',
    img: 'https://media.rawg.io/media/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg',
  },
  {
    id: 2,
    title: 'Overwatch',
    img: 'https://media.rawg.io/media/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg',
  },
  {
    id: 3,
    title: 'EVE Online',
    img: 'https://media.rawg.io/media/games/82b/82be203e68d737762846203811165933.jpg',
  },
]

export function getPopularGames() {
  return popularGames
}
export function getNewGames() {
  return newGames
}
export function getOngoingEvents() {
  return ongoingEvents
}

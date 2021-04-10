const featuredGames = [
  {
    id: 1,
    title: 'Rust',
    description:
      'To survive is the main task in the game Rust. It is necessary to survive in the area, which is now wholly wild but was recently inhabited. At the beginning of the game, there is only a rock and a torch.',
    img: 'https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg',
    category: 'Survival',
  },
  {
    id: 2,
    title: 'Minecraft',
    description:
      'One of the most popular games of the 2010s, Minecraft allows you to rebuild the environment around you. The world of the game is open, infinitely wide, and procedurally generated. It is composed of small 3D cubes that represent specific types of materials or terrain. The gameplay is centered on mining and building various structures of your choice.',
    img: 'https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg',
    category: 'Sandbox',
  },
  {
    id: 3,
    title: 'Fortnite',
    description:
      'Fortnite is a survival simulator with an open world. The primary goal of the game is to collect resources and then try to survive at day and night directly. Players will gather in teams to collect items that they can use to build a Fort during the day and to defend against zombies at night.',
    img: 'https://media.rawg.io/media/games/d97/d97f663b752a6484df105993f17abb49.jpg',
    category: 'Battle Royale',
  },
]

const newGames = [
  {
    id: 1,
    title: 'Phasmophobia',
    img:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/739630/capsule_616x353.jpg?t=1609602804',
    description:
      'Phasmophobia is a 4 player online co-op psychological horror where you and your team members of paranormal investigators will enter haunted locations filled with paranormal activity and gather as much evidence of the paranormal as you can.',
    category: 'Horror',
    price: 'Free',
  },
  {
    id: 2,
    title: 'Among Us',
    img: 'https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg',
    description:
      'Join your crewmates in a multiplayer game of teamwork and betrayal! Play online or over local wifi with 4-10 players as you attempt to hold your spaceship together and return back to civilization.',
    category: 'Psychological',
    price: '3$',
  },
  {
    id: 3,
    title: 'Fall Guys',
    img: 'https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg',
    description:
      'Fall Guys Ultimate Knockout is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes.',
    category: 'Battle Royale',
    price: '19.99$',
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    img: 'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
    description:
      'Cyberpunk 2077 is a science fiction game loosely based on the role-playing game Cyberpunk 2020. The game is set in the year 2077 in a fictional futuristic metropolis Night City in California.',
    category: 'RPG',
    price: '100$',
  },
  {
    id: 5,
    title: 'Sea of Thieves',
    img: 'https://media.rawg.io/media/games/a39/a392d867d88f20448ddcdce099ae07ee.jpg',
    description:
      'Sea of Thieves is a cooperative multiplayer action-adventure game developed by Rare. The game features a cartoonish pirate aesthetic to it and features no plot whatsoever. The players set out to explore an open shared world...',
    category: 'Adventure',
    price: '10$',
  },
]

const salesGames = [
  {
    id: 1,
    title: 'Valorant',
    img: 'https://media.rawg.io/media/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg',
    description:
      'Valorant is a 4 player online co-op psychological horror where you and your team members of paranormal investigators will enter haunted locations filled with paranormal activity and gather as much evidence of the paranormal as you can.',
    category: 'Shooter',
    price: 'Free',
  },
  {
    id: 2,
    title: 'Apex Legends',
    img: 'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
    description:
      'Apex Legends Play online or over local wifi with 4-10 players as you attempt to hold your spaceship together and return back to civilization.',
    category: 'Battle Royale',
    price: 'Free',
  },
  {
    id: 3,
    title: 'Rocket League',
    img: 'https://media.rawg.io/media/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg',
    description:
      'Rocket League is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes.',
    category: 'Sport',
    price: 'Free',
  },
  {
    id: 4,
    title: 'Satisfactory',
    img: 'https://media.rawg.io/media/games/ac7/ac7eb85b920f73ea116eca09bea04191.jpg',
    description:
      'Satisfactory is a science fiction game loosely based on the role-playing game Cyberpunk 2020. The game is set in the year 2077 in a fictional futuristic metropolis Night City in California.',
    category: 'Builder',
    price: '12.99$',
  },
  {
    id: 5,
    title: 'Witcher 3',
    img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
    description:
      'Witcher 3 is fun is a cooperative multiplayer action-adventure game developed by Rare. The game features a cartoonish pirate aesthetic to it and features no plot whatsoever. The players set out to explore an open shared world...',
    category: 'RPG',
    price: '10$',
  },
]

const jumboGames = [
  {
    id: 1,
    title: 'Counter-Strike: Global Offensive',
    img: 'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
    description:
      'Counter-Strike is a multiplayer phenomenon in its simplicity. No complicated narratives to explain the source of the conflict, no futuristic and alien threats, but counter-terrorists against terrorists.',
    category: 'Shooter',
  },
]

export function getFeaturedGames() {
  return featuredGames
}

export function getNewsGames() {
  return newGames
}

export function getJumboGames() {
  return jumboGames
}

export function getSalesGames() {
  return salesGames
}

export function getGame(id) {
  return newGames.find((game) => game.id === id)
}

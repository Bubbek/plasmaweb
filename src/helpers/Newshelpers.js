const newGames = [
  {
    id: 1,
    title: 'Phasmophobia',
    newsTitle: 'Scary shit',
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
    newsTitle: 'New Map Release',
    img: 'https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg',
    description:
      'Join your crewmates in a multiplayer game of teamwork and betrayal! Play online or over local wifi with 4-10 players as you attempt to hold your spaceship together and return back to civilization.',
    category: 'Psychological',
    price: '3$',
  },
  {
    id: 3,
    title: 'Fall Guys',
    newsTitle: 'New Season in a month',
    img: 'https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg',
    description:
      'Fall Guys Ultimate Knockout is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes.',
    category: 'Battle Royale',
    price: '19.99$',
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    newsTitle: 'Hotfixes and bugs',
    img: 'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
    description:
      'Cyberpunk 2077 is a science fiction game loosely based on the role-playing game Cyberpunk 2020. The game is set in the year 2077 in a fictional futuristic metropolis Night City in California.',
    category: 'RPG',
    price: '100$',
  },
  {
    id: 5,
    title: 'Sea of Thieves',
    newsTitle: 'Adding more islands to travel too',
    img: 'https://media.rawg.io/media/games/a39/a392d867d88f20448ddcdce099ae07ee.jpg',
    description:
      'Sea of Thieves is a cooperative multiplayer action-adventure game developed by Rare. The game features a cartoonish pirate aesthetic to it and features no plot whatsoever. The players set out to explore an open shared world...',
    category: 'Adventure',
    price: '10$',
  },
]

export function getNewsGames() {
  return newGames
}

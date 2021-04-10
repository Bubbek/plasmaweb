import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import * as g from '../helpers/customGames'
// import Button from 'react-bootstrap/Button'
// import Product from '../pages/Product'
import {Link} from 'react-router-dom'

export default function NewGames() {
  // const [selectedGame, setSelectedGame] = useState(undefined)
  // const onSelectedGame = (game) => {
  //   setSelectedGame(game)
  // }
  // const users = [
  //   {id: 1, name: 'john'},
  //   {id: 2, name: 'charles'},
  // ]

  return (
    // <div>
    //   {users.map((user, key) => {
    //     return (
    //       <div>
    //         <Product user={user} />
    //       </div>
    //     )
    //   })}
    // </div>

    // {
    /* return (
          <div key={user.id}>
            {user.name}
            <Link
              to={{
                pathname: `/product/${user.name}`,
                state: {users: user},
              }}
            >
              <button>View</button>
            </Link>
          </div>
        ) */
    // }

    <CardDeck>
      {g.getNewsGames().map((game) => (
        <Card>
          <Card.Img variant="top" src={game.img} />
          <Card.Body>
            <Card.Title>{game.title}</Card.Title>
            {/* <Card.Text style={{color: 'black'}}>{game.description}</Card.Text> */}
            <Card.Text>
              <small className="text-muted">{game.category}</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{backgroundColor: 'black'}}>
            <small style={{color: 'white'}}>{game.price}</small>
            {/* <Button onClick={() => onSelectedGame(game)} href="/product" size="sm"> */}
            {/* {selectedGame ? game.id === selectedGame.id : null} */}
            {/* Link */}
            {/* </Button> */}
            {/* <Product game={game} /> */}
            <div key={game.id}>
              {/* {game.title} */}
              <Link
                to={{
                  pathname: `/product/${game.title}`,
                  state: {newGames: game},
                }}
              >
                {/* <button>View</button> */}
              </Link>
            </div>
          </Card.Footer>
        </Card>
      ))}
    </CardDeck>
  )
}

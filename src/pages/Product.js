import React from 'react'
import {Link} from 'react-router-dom'
import '../css/product.css'
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Button from 'react-bootstrap/Button'
// import * as g from '../helpers/customGames'
// import NewsJumbotron from '../components/NewsJumbotron'
// import NewGames from '../components/NewGames'
// import Form from 'react-bootstrap/Form'

// console.log(g.getGame(3))

export default function Product(props) {
  // const {state} = useLocation()

  // console.log(state.users)
  // console.log('we got game:', game)
  return (
    <div>
      <Link to={`/product/${props.user.id}`}>
        <h1 style={{color: 'white'}}>TEST</h1>
        {props.user.name}
        <Link to="/">
          <button>Back</button>
        </Link>{' '}
        */}
      </Link>
    </div>
    // <Button href="/product" size="sm">
    //   Link
    // </Button>
    // <NewGames />
    // <NewsJumbotron />
    // <Jumbotron>
    //   {g.getJumboGames().map((game) => (
    //   <>
    //     <h1>Try {game.title} Now!</h1>

    //     <p>{game.description}</p>
    //     {/* <img src={game.img} alt="Girl in a jacket" width="400" height="300" /> */}
    //     <p>
    //       <Button variant="light">Try now</Button>
    //     </p>
    //   </>
    //   ))}
    // </Jumbotron>
  )
}

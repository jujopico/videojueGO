import React from 'react'

const Home = props => {
  const redirectToGames = () => props.history.push('/games')

  const handleRandomGame = () =>{
    let favoriteGames= [52939, 225576, 31906, 22511, 4286, 323065, 59202, 274762, 41494, 27989, 27989, 28469, 21958, 56088, 58813, 24079]
    const id = Math.floor(Math.random() * favoriteGames.length)
    props.history.push(`/games/${favoriteGames[id]}`)}

return (
    <div className= "home">
      <h1>Welcome to videojueGO!</h1>
      <div className="button-div">
        <button 
        className="waves-effect waves-light btn-large"
        onClick={redirectToGames}
        >
        Search for a Game!
        </button>
        <button
        className="waves-effect waves-light btn-large randomGameButton"
        onClick={handleRandomGame}
        >Surprise Me!
        </button>
      </div>
    </div>
    <div>
      <button className="randomGameButton" onClick={handleRandomGame}>Random Game</button>
    </div>
    </>
  )
}

export default Home
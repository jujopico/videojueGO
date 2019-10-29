import React from 'react'
import homeLogo from '../images/homeLogo.png'

  const Home = props => {
  const redirectToGames = () => props.history.push('/games')

  const handleRandomGame = () =>{
    let favoriteGames= [52939, 225576, 31906, 22511, 4286, 323065, 59202, 274762, 41494, 27989, 28469, 21958, 56088, 58813, 24079]
    const id = Math.floor(Math.random() * favoriteGames.length)
    props.history.push(`/games/${favoriteGames[id]}`)}
  
  return (
    <>
    <div>
      <img className="LOGO" height="500px" src={homeLogo} alt="ifeelbadforu" ></img>
      <button className="startSearching" onClick={redirectToGames}>LETS START SEARCHING</button>
    </div>
    <div>
      <button className="randomGameButton" onClick={handleRandomGame}>Random Game</button>
    </div>
    </>
  )
}

export default Home
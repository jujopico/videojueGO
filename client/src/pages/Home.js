import React from 'react'


const Home = props => {

  const redirectToGames = () => props.history.push('/games')

  return (
    <div className= "home">
      <img className="LOGO" height="500px" src="homeLogo.png" alt="ifeelbadforu" ></img>
      <button className="startSearching" onClick={redirectToGames}>LETS START SEARCHING</button>
    </div>
  )
}

export default Home
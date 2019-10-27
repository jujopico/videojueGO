import React from 'react'

class SingleGame extends React.Component {
  state = { game: {} }


  //Go to our server
  fetchGame = () => {
    fetch(`/game/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(game => this.setState({ game }))
  }

  render(){
    const { game } = this.state;
    return(
      <div className="single-game">
        <div className="game-data">
          <img height="600px" src={game.background_image} alt={game.name}/>
          <h1>{game.name}</h1>
          <table>
            <tr>
              <td>Platforms:</td>
              <td>{game.platforms && game.platforms.map(platformObj => <p>{platformObj.platform.name}</p>)}</td>
            </tr>
            <tr>{
              game.metacritic ?(
                <>
                <td>Metacritic Rating:</td>
                <td>{game.metacritic / 100}</td>
                </>
              ) : null
            }
            </tr>
            <tr>
              <td>Description:</td>
              <td>{game.description_raw}</td>
            </tr>
            <tr>
              <td>Developers:</td>
              <td>{game.developers && game.developers.map(developer => <p>{developer.name}</p>)}</td>
            </tr>
            <tr>
              <td>Publishers:</td>
              <td>{game.publishers && game.publishers.map(publisher => <p>{publisher.name}</p>)}</td>
            </tr>
          </table>
        </div>

      </div>
    )
  }

  componentDidMount(){
    this.fetchGame()
  }
}

export default SingleGame


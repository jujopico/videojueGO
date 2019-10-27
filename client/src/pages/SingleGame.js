import React from 'react'

class SingleGame extends React.Component {
  state = { game: [] }

  fetchGame = () => {
    fetch(`https://api.rawg.io/api/games/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(game => this.setState({ game })
        )
  }

  render(){
    return(
      <div className="single-game">
        <h1>{this.state.game.name}</h1>
        <div className="game-data">
          <img src={this.state.game.background_image} alt={this.state.game.name}/>
           { <table>
            <tbody>
              {
                ["released", "rating", "platforms"].map(dataPoint => (
                  <tr key={dataPoint}>
                    <td>{dataPoint}</td>
                    <td>{this.state.game[dataPoint]}</td>
                  </tr>
                ))
              }
              <tr>
                <td>Rating</td>
                <td>{this.state.game.Metascore}/100</td>
              </tr>
            </tbody>
          </table>}
        </div>

      </div>
    )
  }

  componentDidMount(){
    this.fetchGame()
  }
}

export default SingleGame

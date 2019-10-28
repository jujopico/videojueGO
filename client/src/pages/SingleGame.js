import React from 'react'
import Placeholder from '../components/Placeholder'
import Singlegamebody from '../components/Singlegamebody'

class SingleGame extends React.Component {
  state = { game: {} }

  fetchGame = () => {
    fetch(`/game/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(game => this.setState({ game }))
  }

  render(){
    const { game } = this.state
    return(
      <div className="single-game container">
      {game.name ? <Singlegamebody game={game}/> : <Placeholder />}
      </div>
      )
  }

  componentDidMount(){
    this.fetchGame()
  }
}

export default SingleGame


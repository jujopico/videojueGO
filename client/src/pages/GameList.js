import React from 'react'
import { Link } from 'react-router-dom'
import cutie from "../images/cutie.jpg"
import '../App.css'
import axios from 'axios'

const debounce = (fn, delay) => {
  let timer;
  return function(...args){
    const context = this
    timer && clearTimeout(timer);
    timer = setTimeout(_=> fn.apply(context, args), delay);
  }
}

class GameList extends React.Component {
  state = { games: [], searchTerm: "" }

  handleInputChange = (event) => {
    let searchTerm = event.target.value
    if (searchTerm.trim().length === 0) searchTerm = "Mario + Rabbids Kingdom Battle"
    this.setState({ searchTerm }, this.handleSearch)
  }

  handleSearch = debounce(async event => {
    const {searchTerm}= this.state
    const {data} = await axios.get(`/games/${searchTerm}`)
    this.setState({ games: data.results || [] })
  }, 500) 

  render() {
    return(
      <div className="game-list">
        <h1>Search for a game!</h1>
        <input
          type="text"
          onChange={this.handleInputChange}
          id="user-input"
          autoComplete="off"
        />

        <div className="results">
          {
            this.state.games.map(game => (
              <Link key={game.id} to={`/games/${game.id}`}>
                <div className="game">
                  <h6>{game.name}</h6>
                  <img src={game.background_image ? game.background_image : cutie } alt={game.name}/>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

export default GameList
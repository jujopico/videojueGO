import React from 'react'
import cutie from "../images/cutie.jpg"


const Singlegamebody = (props) => {
    const {game} = props
    return(
        <div className="single-game">
            <div className="game-data">
                <img className="z-depth-2" height="600px" src={ game.background_image ? game.background_image : cutie } alt={game.name}/>
                <h1>{game.name}</h1>
                <div>
                <h5>Platforms:</h5>
                <p>{game.platforms && game.platforms.map(platformObj => <p key={platformObj.platform.name}>{platformObj.platform.name}</p>)}</p>
                </div>
                <div>
                {
                game.metacritic ?(
                    <>
                    <h5>Metacritic Rating:</h5>
                    <p>{game.metacritic / 100}</p>
                    </>
                ) : null
                }
                </div>
                <div>
                <h5>Description:</h5>
                <p>{game.description_raw}</p>
                </div>
                <div>
                <h5>Developers:</h5>
                <p>{game.developers && game.developers.map(developer => <p key={developer.name}>{developer.name}</p>)}</p>
                </div>
                <div>
                <h5>Publishers:</h5>
                <p>{game.publishers && game.publishers.map(publisher => <p key={publisher.name}>{publisher.name}</p>)}</p>
                </div>
            </div>
        </div>
    )}

export default Singlegamebody
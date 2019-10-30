import React from 'react'
import cutie from "../images/cutie.jpg"


const Singlegamebody = (props) => {
    const {game} = props
    return(
        <div className="single-game">
            <div className="game-data">
                <img className="z-depth-2" width="100%" height="100%" src={ game.background_image ? game.background_image : cutie } alt={game.name}/>
                <h1>{game.name}</h1>
                <div className="platforms">
                <h5 >Platforms:</h5>
                {game.platforms && game.platforms.map((platformObj, i) => {
                    if (i === game.platforms.length-1){
                        return <span key={platformObj.platform.name}>{platformObj.platform.name}</span>
                    }
                    return <span key={platformObj.platform.name}>{platformObj.platform.name}, </span>
                })
                }
                </div>
                <br/>
                <div className="metacritic">
                {
                game.metacritic ?(
                    <>
                    <h5>Metacritic Rating:</h5>
                    <p>{game.metacritic}/100</p>
                    </>
                ) : null
                }
                </div>
                <div className="description">
                <h5>Description:</h5>
                <p>{game.description_raw}</p>
                </div>
                <div className="developers">
                <h5>Developers:</h5>
                {game.developers && game.developers.map((developer, i) => {
                    if(i === game.developers.length -1){
                        return <span key={developer.name}>{developer.name}</span>
                    }
                    return <span key={developer.name}>{developer.name}, </span>})
                }
                </div>
                <br/>
                <div className="publishers">
                <h5>Publishers:</h5>
                {game.publishers && game.publishers.map((publisher, i) => {
                    if(i === game.publishers.length -1){
                        return <span key={publisher.name}>{publisher.name}</span>
                    }
                    return <span key={publisher.name}>{publisher.name}, </span>})
                }
                </div>
            </div>
        </div>
    )}

export default Singlegamebody
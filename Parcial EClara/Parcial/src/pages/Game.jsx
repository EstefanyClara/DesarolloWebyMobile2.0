import  { useEffect } from 'react';
import { getGames } from '../api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Game.css";

const Game = () => {
    const[game, setGame]= useState([]);  
    

    useEffect(() => {
      const getGamesPayload= async()=>{
        const newGame= await getGames();
        setGame(newGame);
      };
      getGamesPayload();
    },[]);


    return (
        <div>
            <section>
                <button className='button' onClick={()=>{
                    window.history.back();
                }} >Atras</button>
            </section>
            <div>
                {game.map((game)=>{
                    return(
                        <div key={game.id}>
                            <h1>Nombre: {game.title}</h1>
                            <p>Descripcion: {game.description}</p>
                            <p> Jugadores: {game.players}</p>
                            <p>Categorias: {game.categories}</p>
                        </div>
                    )
                }
                )}

            </div>
            
        </div>
        
    )

}; export default Game;
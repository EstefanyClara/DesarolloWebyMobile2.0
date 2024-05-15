
import { useEffect } from "react";
import Buttons from "../Buttons";
import "./CardStyle.css";
import { useNavigate } from "react-router-dom";
import { getGames } from "../../api";


const Card = ({children}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getGamesPayload= async()=>{
      const newGame= await getGames();
      console.log(newGame);
    };
    getGamesPayload();
  },[]);

//obtener id del boton
const handleClick = (id) => {
   console.log(id);
  navigate("/game");
};
  return (
  <div className="containerCard">
    {children}
      <div>
        <button className="button" onClick={handleClick}>Ver</button>
      <button className="button">
          Eliminar
        </button>
      </div>
    </div>
  );
} 
export default Card;

import "./CardStyle.css";
import { useNavigate } from "react-router-dom";



const Card = ({children}) => {
  const navigate = useNavigate();

  
  return (
  <div className="containerCard">
      {children}
      <div>
        <button 
        style= {{marginRight: "1rem"}}
        onClick={()=>{
          navigate("/TaskDetails/" );
        }}>
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default Card;

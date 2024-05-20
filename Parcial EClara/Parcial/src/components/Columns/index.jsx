import "./Columns.css";
import Card from "../Card";
import { useEffect } from "react";
import { useState } from "react";
import { getGames } from "../../api";


const Columns = ({title}) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const getGamePayload = async () => {
            const newGame= await getGames();
            setGames(newGame);
        };
        getGamePayload();
    },[]);


    return (
        <div className="container">
            <h1>{title}</h1>
            {games.map((g)=>{
                return (
                    <Card key={g.id}>
                            <h2 className="titulo">{g.title}</h2>
                    </Card>
                        );
                })}
            
        </div>
        )
}
export default Columns;

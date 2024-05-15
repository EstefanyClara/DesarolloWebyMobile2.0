
import Buttons from "../components/Buttons";
import  Columns from "../components/Columns";
import "./Dashboard.css";


const Dashboard = () => {

    return (
        <div className="containerDash">
            <div>
                <button className="button">Agregar Juego</button>
            </div>
            <div>
                <Columns></Columns>
            </div>
        </div>
    );
}; export default Dashboard;
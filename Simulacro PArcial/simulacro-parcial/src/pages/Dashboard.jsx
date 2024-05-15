  
import  Columns from "../components/Columns";
import "./Dashboard.css";

const Dashboard = () => {
//en el dashborard tenes que configurar las tres columnas que van a ser de las tareas to do, progress y done
    const titles = ["To Do", "In Progress", "Done"];

    return (
        <div className="containerDash">
            <Columns title={titles[0]}></Columns>
            <Columns title={titles[1]}></Columns>
            <Columns title={titles[2]}></Columns>
        </div>
    );
}; export default Dashboard;
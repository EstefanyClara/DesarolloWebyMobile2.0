import "./Columns.css";
import Card from "../Card";
import { useEffect } from "react";
import { useState } from "react";
import { getTasks } from "../../api";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";

const Columns = ({title}) => {
    const navigate = useNavigate();
    const [task, setTask] = useState([]);

    useEffect(() => {
        const getTaskPayload = async () => {
            const newTask= await getTasks();
            setTask(newTask);
        };
        getTaskPayload();
    },[]);

    const filterTask = task.filter(task=>task.status===title);

    return (
        <div className="container">
            <h1>{title}</h1>
            {filterTask.map((t)=>{
                return (
                    <Card key={t.id}>
                            <h2>{t.title}</h2>
                            <p>{t.description}</p>
                            <p>{t.assignedTo}</p>
                    </Card>
                        );
                })}
            <div>
                <button
                    style={{marginRight: "1rem"}}
                    onClick={()=>{
                    navigate("/NewTask")
                }}>Agregar Tarea</button>                
            </div>
        </div>
        )
}
export default Columns;

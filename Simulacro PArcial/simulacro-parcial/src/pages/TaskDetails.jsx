
import { useEffect, useState } from "react"
import { getTasks } from "../api"
import Card from "../components/Card";


const TaskDetails = ({children}) => {
    const[task, setTask] = useState([]);
    //const { id } = useParams()

    useEffect(() => {
        const getTaskPayload = async () => {
            const newTask= await getTasks();
            setTask(newTask);
        };
        getTaskPayload();
    },[]);


    return (
        <div>
            {task.map((t)=>{
                return (
                    <div key={t.id}>
                            <h2>Titulo: {t.title}</h2>
                            <p>Id: {t.id}</p>
                            <p>Descipcion: {t.description}</p>
                            <p>Asignado a: {t.assignedTo}</p>
                            <p>Estado: {t.status}</p>

                    </div>
                        );
                })
            }

        </div>
    )
}

export default TaskDetails
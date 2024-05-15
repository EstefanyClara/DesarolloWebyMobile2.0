import { useEffect } from "react";

const NewTask= () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const assignedTo = e.target.assignedTo.value;
        const status = e.target.status.value;
        const newTask = {title, description, assignedTo, status};
        console.log(newTask);
    };

    return (
        <div>
            <h1>Nueva Tarea</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Título</label>
                <input type="text" id="title" name="title" required/>
                <label htmlFor="description">Descripción</label>
                <input type="text" id="description" name="description" required/>
                <label htmlFor="assignedTo">Asignado a</label>
                <input type="text" id="assignedTo" name="assignedTo" required/>
                <label htmlFor="status">Estado</label>
                <select id="status" name="status" required>
                    <option value="To Do ">Pendiente</option>
                    <option value="In Process">En Proceso</option>
                    <option value="Done">Terminada</option>
                </select>
                
                <button type="submit" >Agregar</button>
            </form>
        </div>
    );
}; 
export default NewTask;
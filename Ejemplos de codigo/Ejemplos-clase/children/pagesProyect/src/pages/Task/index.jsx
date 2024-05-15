import { useParams } from "react-router-dom";

const Task = () => {
  let { id } = useParams();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Esta es la tarea numero: {id} </h1>
    </div>
  );
};

export default Task;
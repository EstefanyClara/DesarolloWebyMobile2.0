import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Este es mi perfil</h1>
      <button
        style={{ width: "120px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Volver al Home
      </button>
      <button
        style={{ width: "120px" }}
        onClick={() => {
          navigate("/tasks/88");
        }}
      >
        Ver Tarea
      </button>
      <Link to={"../configuration"}>Ver configuracion</Link>
    </div>
  );
};

export default Profile;
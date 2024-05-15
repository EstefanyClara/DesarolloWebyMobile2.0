import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Este es el home de mi web</h1>
      <Link to={"../profile"}>Ir a mi perfil</Link>
      <Link to={"../configuration"}>Ver configuracion</Link>
      <Link to={"../tasks/50"}>Ver tarea</Link>
    </div>
  );
};

export default Home;
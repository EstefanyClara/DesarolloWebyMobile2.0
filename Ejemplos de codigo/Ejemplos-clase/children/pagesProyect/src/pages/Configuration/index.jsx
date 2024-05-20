import { useNavigate } from "react-router";

const Configuration = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Esta es la pagina de configuracion de mi web</h1>
      <button
        style={{ marginRight: "1rem" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Volver al Home
      </button>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Ir a mi perfil
      </button>
    </>
  );
};

export default Configuration;
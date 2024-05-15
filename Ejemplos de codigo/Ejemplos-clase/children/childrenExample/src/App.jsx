import Card from "./components/Card";
import CardContent from "./components/CardContent";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Card>
        <CardContent title="Prueba" description="Usando la prop children" />
      </Card>
      <Card>
        <CardContent
          title="Otra Prueba"
          description="Usando la prop children tambien"
        />
      </Card>
    </div>
  );
}
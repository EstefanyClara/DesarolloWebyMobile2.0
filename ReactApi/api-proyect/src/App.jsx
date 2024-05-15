import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getJokes } from './api'
import Card from './components/Card'

export default function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJokePayload = async () => {
      const newJoke = await getJokes();
      setJokes(newJoke);
    };
    getJokePayload();
  }, []);


  return (
    <div className="App">
      {jokes?.map((j) => {
        return (
          <Card>
            <p>{j}</p>
          </Card>
        );
      })}
    </div>
  );
}


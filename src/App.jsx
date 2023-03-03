import { useEffect, useState } from 'react';
import './App.css';
import Jokes from './Components/jokes';

function App() {

  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
    .then((res) => res.json())
    .then((data) => setJokes(data.jokes));

  }, []);

const single = () => {
  setJokes(j => [...j].filter('single'))
}
  
  return (
    <div className="App">
      <header className="App-header">
        
      <Jokes />

        <button onClick={single}>Joke</button>
        <button>Setup ir delivery</button>
        <ul>
              {
                jokes?.map(j => <li key={j.id}>{j.setup} <small style={{fontSize: '50%'}}>{j.type}</small></li>)
              }
        </ul>
      
      </header>
    </div>
  );
}

export default App;

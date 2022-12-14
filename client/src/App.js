import {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch("/movies")
    .then(r => r.json())
    .then(movies => console.log(movies))
  },[])


  return (
    <h1>Hello Dummy!</h1>
  );
}

export default App;

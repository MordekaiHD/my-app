import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Greeting />
    <CurrentTime />
    </div>
  );
}

export default App;


function Greeting() {
  return (
    <div>
    <h1>Привет, React!</h1>
    </div>
  );
}

function CurrentTime() {
  return ( 
    <div> {new Date().toLocaleTimeString()} </div>
  );
}


import logo from './logo.svg';
import './App.css';
import Bee from './bee/bee'
import BeeCanvas from './bee/beeCanvas'

function App() {
  return (
    <div className="App">
      <header className="App-header">Bee Saver</header>
      <BeeCanvas />
      {/* <Bee /> */}
    </div>
  );
}

export default App;

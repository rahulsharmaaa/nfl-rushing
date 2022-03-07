import './App.css';
import DisplayTable from './components/DisplayTable/DisplayTable';
import Data from './data/rushing.json'

function App() {
  return (
    <div >
      <header className="App-header">
        <DisplayTable data={Data} />
      </header>
    </div>
  );
}

export default App;
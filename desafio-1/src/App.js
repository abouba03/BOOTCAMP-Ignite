import "./App.css";
import {Card} from "./components/Card";
import {RepositoryList} from "./components/RepositoryList";

function App() {
  return (
    <div>
      <div className="App-header">
        <h1>Praticando o conceito de API</h1>
        <Card/>
        <RepositoryList/>
      </div>
    </div>
  );
}

export default App;

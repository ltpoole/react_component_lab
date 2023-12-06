import "./App.css";
import NameBadge from "./components/NameBadge/NameBadge";
import NamesList from "./components/NamesList/NamesList";

function App() {
  return (
    <div className="App">
      <NameBadge displayedName="LaBorris Poole" />
      <NamesList />
    </div>
  );
}

export default App;

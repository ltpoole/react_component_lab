import "./App.css";
import NameBadge from "./components/NameBadge/NameBadge";
import NamesList from "./components/NamesList/NamesList";

const names = [
  { firstName: "Shane", lastName: "Battier" },
  { firstName: "Carlos", lastName: "Boozer" },
  { firstName: "Jayson", lastName: "Williams" },
  { firstName: "Mike", lastName: "Dunleavy" },
];

function App() {
  return (
    <div className="App">
      <NameBadge displayedName="LaBorris Poole" />
      <NamesList names={names} />
    </div>
  );
}

export default App;

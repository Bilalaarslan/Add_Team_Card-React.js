import "./App.css";
import Team from "./Teams";
import { useState } from "react";

function App() {
  const [teams, setTeams] = useState([]);

  function getRandomTeam() {
    const teamArray = ["Madrid", "Barcelona", "Manchester", "Arsenal"];
    return teamArray[Math.floor(Math.random() * teamArray.length)];
  }

  const handleClick = () => {
    setTeams([...teams, getRandomTeam()]);
  };

  const clearClick=()=>{
    setTeams([]);
  }

  const teamList = teams.map((team, index) => {
    return <Team key={index} teamName={team} />;
  });
  return (
    <div className="App">
      <div className="buttonContainer">
        <button className="appButtonAdd" onClick={handleClick}>
          Add Team
        </button>
        <button className="appButtonClear" onClick={clearClick}>
          Clear All Team
        </button>
      </div>

      <div className="teamList">{teamList}</div>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import CharacterGallery from "./components/CharacterGallery";
import SingleCharacter from "./components/SingleCharacter";

function App() {
    return (
      <div>
        <Header />
        <Router>
          <CharacterGallery path="/" />
          <SingleCharacter path="/characters/:character_id"/>
        </Router>
      </div>
    );
}

export default App;

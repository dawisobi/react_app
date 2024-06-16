import "./App.css";
import Header from "./Header.js";
import { RecipesList } from "./RecipesList.js";
import SearchBar from "./SearchBar.js";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  return (
    <div className="App">
      <Header />
      <SearchBar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
      <header className="App-header"></header>
    </div>
  );
}

export default App;

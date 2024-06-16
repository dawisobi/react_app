import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");
  console.log(query);
  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=61912b35&app_key=51772129e46388e546dbf19c272949c7`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <Box
      sx={{
        paddingTop: 1,
        paddingRight: 0.25,
        paddingLeft: 0.25,
        paddingBottom: 0.25,
      }}
    >
      <TextField
        label="Wyszukaj"
        onChange={handleChange}
        sx={{
          width: "100%",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={fetchRecipes}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </Box>
  );
};

export default Searchbar;

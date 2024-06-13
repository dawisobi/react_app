import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

async function fetchRecipes() {
  const response = await fetch(
    "https://api.edamam.com/api/recipes/v2?type=public&app_id=61912b35&app_key=51772129e46388e546dbf19c272949c7&q=chicken",
  );
  const data = await response.json;
  console.log(data);
}

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        label="Wyszukaj"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={fetchRecipes}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

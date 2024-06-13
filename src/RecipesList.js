import { Grid } from "@mui/material";

export const RecipesList = ({ recipes }) => {
  return (
    <Grid container>
      {recipes.map((recipe) => (
        <Grid item xs={12} md={6} lg={4}></Grid>
      ))}
    </Grid>
  );
};

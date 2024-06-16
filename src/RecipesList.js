import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  height: 100%;
`;

export const RecipesList = ({ recipes }) => {
  return (
    <Grid container spacing={4} padding={5}>
      {recipes.map((recipe, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <StyledCard>
            <CardMedia
              component="img"
              height="240"
              image={recipe.recipe.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              {recipe.recipe.ingredientLines.map((ingredientLine, index) => (
                <Typography
                  gutterBottom
                  variant="body"
                  component="div"
                  key={index}
                >
                  {ingredientLine}
                </Typography>
              ))}
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

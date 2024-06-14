import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              flex: 1,
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "Bold",
              marginTop: 1,
              marginBottom: 1,
            }}
          >
            Wyszukiwarka przepisów
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              fontSize: "18px",
              display: "block",
              marginTop: 0.5,
              marginBottom: 1,
            }}
          >
            Wyszukaj ulubione przepisy
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

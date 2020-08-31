import React from "react";
import "./styles.css";
import { MainLayout } from ".";
import { Grid } from "semantic-ui-react";

export function App() {
  return (
    <>
      <Grid>
        <MainLayout />
      </Grid>
    </>
  );
}

export default App;

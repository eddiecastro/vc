import React from "react";
import "./styles.css";
import { MainLayout } from "./MainLayout";
import { Grid } from "semantic-ui-react";
import { Footer } from "./subcomponents";

function App() {
  return (
    <>
      <Grid>
        <MainLayout />
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default App;

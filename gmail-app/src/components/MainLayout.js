import React from "react";
import "./styles.css";
import { Grid, Image } from "semantic-ui-react";
import { MainHeader, Footer } from "./subcomponents";

export function MainLayout() {
  return (
    <Grid celled="internally" className="main-layout">
      <Grid.Row>
        <Grid.Column width={16}>
          <MainHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={10}>
          <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={16}>
          <Footer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default MainLayout;

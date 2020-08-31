import React from "react";
import "./styles.css";
import { Grid, Image, Icon, Sidebar, Menu, Segment } from "semantic-ui-react";
import { MainHeader, Footer, EmailTable, SideBar } from ".";

export default function MainLayout() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Grid className="main-layout">
      {/* <Grid columns={1}> */}
      <Grid.Row centered stretched>
        <Grid.Column width={16}>
          <MainHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={1}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={14}>
          <EmailTable />
        </Grid.Column>
        <Grid.Column width={1}>
          <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
        </Grid.Column>
        {/* <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>  */}
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={16}>
          <Footer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

import React, { useState } from "react";
import "./styles.css";
import {
  Grid,
  Icon,
  Popup,
  Menu,
  Segment,
  Transition,
  Button
} from "semantic-ui-react";
import { MainHeader, Footer, EmailTable, SideBar } from ".";

export default function MainLayout() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(prevState => !prevState.visible);

  return (
    <Grid className="main-layout" stackable>
      {/* <Grid columns={1}> */}
      <Grid.Row>
        <Grid.Column width={16}>
          <MainHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column
          width={1}
          style={{ paddingLeft: 10 }}
          computer={1}
          mobile={4}
        >
          <Button
            style={{ backgroundColor: "transparent" }}
            onClick={toggleVisibility}
          >
            <Popup
              trigger={
                <Icon
                  name="plus circle"
                  size="huge"
                  style={{ color: "white" }}
                />
              }
              content="Compose"
              basic
              label={{ as: "a", corner: "left", icon: "heart" }}
            />
          </Button>

          {/* <SideBar /> */}
        </Grid.Column>
        <Grid.Column width={14} mobile={8}>
          <EmailTable visible={visible} setVisible={setVisible} />
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

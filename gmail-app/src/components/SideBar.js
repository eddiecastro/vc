import React from "react";
import {
  Popup,
  Icon,
  Image,
  Divider,
  Sidebar,
  Grid,
  Label
} from "semantic-ui-react";

export default function SideBar() {
  //   const [visible, setVisible] = React.useState(false);

  return (
    <Grid columns={1} style={{ marginTop: 15, paddingBottom: 5 }}>
      <Grid.Row>
        <Grid.Column>
          <Label as="a" color="teal">
            Inbox
          </Label>
        </Grid.Column>
        <Grid.Column>
          <Label as="a" color="blue">
            Business
          </Label>
        </Grid.Column>
        <Grid.Column>
          <Label as="a" color="red">
            Important
          </Label>
        </Grid.Column>
        <Grid.Column>
          <Label as="a" color="green">
            family
          </Label>
        </Grid.Column>
        <Grid.Column>
          <Divider style={{ color: "grey" }} />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Icon name="chat" size="small" style={{ color: "white" }} />
            }
            content="Forums"
            basic
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Icon
                name="video camera"
                size="small"
                style={{ color: "white" }}
              />
            }
            content="Start Meeting"
            basic
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Icon
                name="keyboard outline"
                size="small"
                style={{ color: "white" }}
              />
            }
            content="Join Meeting"
            basic
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Popup
            trigger={
              <Image
                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                avatar
              />
            }
            content="John Doe"
            basic
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Image
                src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                avatar
              />
            }
            content="Jane Doe"
            basic
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Image
                src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
                avatar
              />
            }
            content="Stevie Doe"
            basic
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Image
                src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
                avatar
              />
            }
            content="Patrick Doe"
            basic
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

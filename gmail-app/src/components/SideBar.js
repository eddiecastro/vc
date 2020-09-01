import React from "react";
import {
  Popup,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Grid,
  Label
} from "semantic-ui-react";

export default function SideBar() {
  const [visible, setVisible] = React.useState(false);

  return (
    <Grid columns={1} style={{ marginLeft: 20 }} container>
      <Grid.Row style={{ marginLeft: 10 }}>
        <Grid.Column>
          <Popup
            trigger={
              <Icon name="plus circle" size="huge" style={{ color: "white" }} />
            }
            content="Compose"
            basic
            label={{ as: "a", corner: "left", icon: "heart" }}
          />
          {/* <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        /> */}
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Icon name="envelope" size="small" style={{ color: "white" }} />
            }
            content="Inbox"
            basic
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Icon name="star" size="small" style={{ color: "white" }} />
            }
            content="Starred"
            basic
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Icon name="clock" size="small" style={{ color: "white" }} />
            }
            content="Snoozed"
            basic
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Icon name="bookmark" size="small" style={{ color: "white" }} />
            }
            content="Important"
            basic
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Icon
                name="paper plane"
                size="small"
                style={{ color: "white" }}
              />
            }
            content="Sent"
            basic
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Icon name="file" size="small" style={{ color: "white" }} />
            }
            content="Drafts"
            basic
          />
          <div></div>
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

// https://react.semantic-ui.com/images/avatar/small/elliot.jpg'

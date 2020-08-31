import React from "react";
import {
  Header,
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
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Icon
            link
            name="plus circle"
            size="huge"
            style={{ color: "white" }}
            onFocus={() => console.log("click")}
          />
          {/* <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        /> */}

          <Image
            src="https://www.gstatic.com/images/icons/material/system/2x/inbox_white_20dp.png"
            size="mini"
            label={{
              as: "a",
              color: "red",
              corner: "right",
              icon: "save",
              size: "tiny"
            }}
          />
        </Grid.Column>
        <Grid.Column>
          <Icon name="star" size="small" style={{ color: "white" }} />
        </Grid.Column>
        <Grid.Column>
          <Icon name="clock" size="small" style={{ color: "white" }} />
        </Grid.Column>
        <Grid.Column>
          <Icon name="bookmark" size="small" style={{ color: "white" }} />
        </Grid.Column>
        <Grid.Column>
          <Icon name="paper plane" size="small" style={{ color: "white" }} />
        </Grid.Column>
        <Grid.Column>
          <Icon name="file" size="small" style={{ color: "white" }} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

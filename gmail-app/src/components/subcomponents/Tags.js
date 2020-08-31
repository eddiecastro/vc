import React from "react";
import { Grid, Icon, Button } from "semantic-ui-react";

export default function Tags() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Icon
            link
            name="plus circle"
            size="huge"
            style={{ color: "white" }}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

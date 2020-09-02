import React from "react";
import { Grid, Icon, Image, Search } from "semantic-ui-react";

export default function MainHeader() {
  return (
    <Grid className="main-header">
      <Grid.Row>
        <Grid.Column>
          <Icon name="bars" size="large" style={{ color: "white" }} />
        </Grid.Column>
        <Grid.Column style={{ width: "109px", height: "40px" }}>
          <Image srcSet="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_2x.png 2x ,https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x.png 1x" />
        </Grid.Column>
        <Grid.Column width={10}>
          <Search
            fluid
            style={{ marginLeft: 35, width: "100%" }}
            input={{ icon: "search", iconPosition: "left" }}
            placeholder="Search mail"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

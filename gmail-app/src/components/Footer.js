import React from "react";
import { Grid, Icon, GridColumn } from "semantic-ui-react";
// import "./styles.css";

export function Footer() {
  return (
    <Grid textAlign="center" className="footer">
      <Grid.Row columns={3}>
        <Grid.Column width={5.33}>
          <p style={{ color: "white" }}>24.68 GB (24%) of 100 GB used</p>
          <Grid.Row>
            <a href="">Manage</a>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column style={{ display: "inLine" }}>
          <a href="">Terms · </a>
          <a href="">Privacy ·</a>
          <a href="">Program Policies</a>
        </Grid.Column>
        <Grid.Column>
          <p style={{ color: "white" }}>
            Last account activity: 39 minutes ago
          </p>
          <Grid.Row>
            <a href="">Details</a>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Footer;

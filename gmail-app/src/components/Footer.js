import React from "react";
import { Grid, Sticky, Button } from "semantic-ui-react";

export function Footer() {
  return (
    <Sticky>
      <Grid textAlign="center" className="footer">
        <Grid.Row columns={3}>
          <Grid.Column>
            <p style={{ color: "#919191" }}>24.68 GB (24%) of 100 GB used</p>
            <Grid.Row>
              <Button style={{ backgroundColor: "transparent" }}>
                <p style={{ color: "#919191" }}>Manage </p>
              </Button>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column style={{ display: "inLine" }}>
            <Button style={{ backgroundColor: "transparent" }}>
              <p style={{ color: "#919191" }}>Terms</p>
            </Button>
            <span style={{ color: "#919191" }}> ·</span>
            <Button style={{ backgroundColor: "transparent" }}>
              <p style={{ color: "#919191" }}>Privacy </p>
            </Button>
            <span style={{ color: "#919191" }}> ·</span>
            <Button style={{ backgroundColor: "transparent" }}>
              <p style={{ color: "#919191" }}>Program Policies</p>
            </Button>
          </Grid.Column>
          <Grid.Column>
            <p style={{ color: "#919191" }}>
              Last account activity: 39 minutes ago
            </p>
            <Grid.Row>
              <Button style={{ backgroundColor: "transparent" }}>
                <p style={{ color: "#919191" }}>Details </p>
              </Button>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Sticky>
  );
}

export default Footer;

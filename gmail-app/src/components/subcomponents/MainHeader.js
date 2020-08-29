import React from "react";
import { Grid, Icon, Image, Header, Search } from "semantic-ui-react";
import gmail from "../../images/clipart2640630.png";

export function MainHeader() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Icon name="bars" size="large" style={{ color: "white" }} />
        </Grid.Column>
        <Grid.Column>
          <Image src={gmail} size="small" />
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" content="GMAIL" style={{ color: "white" }} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Search
            fluid
            style={{ marginLeft: 35 }}
            input={{ icon: "search", iconPosition: "left" }}
            placeholder="Search mail"
            // loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={_.debounce(this.handleSearchChange, 500, {
            //   leading: true,
            // })}
            // results={results}
            // value={value}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default MainHeader;

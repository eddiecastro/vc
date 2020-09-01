import React, { useState } from "react";
import "./styles.css";
import {
  Table,
  Menu,
  Icon,
  Image,
  Header,
  Sidebar,
  Segment,
  Popup,
  Grid,
  Button,
  Label,
  Divider
} from "semantic-ui-react";
import { GetEmails } from "./GetEmails";

export default function EmailTable({ visible, setVisible }) {
  return (
    // <>
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={visible}
        onHide={() => setVisible(false)}
        width="thin"
      >
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
      </Sidebar>

      <Sidebar.Pusher>
        <Table inverted selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Table.Cell>
                  <Header as="h4" image>
                    <Image
                      src="https://www.gstatic.com/images/icons/material/system/2x/inbox_white_20dp.png"
                      size="mini"
                    />
                    <Header.Content style={{ color: "white" }}>
                      Primary
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <div className="header-active"></div>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <GetEmails />
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    // </>
  );
}

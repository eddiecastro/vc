import React from "react";
import "../styles.css";
import { Table, Menu, Label, Icon, Image, Header } from "semantic-ui-react";
import { GetEmails } from "./GetEmails";

export function EmailTable() {
  return (
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
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
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Table.Cell>
              <Header as="h4" image>
                <Icon name="users" size="mini" style={{ color: "white" }} />
                <Header.Content style={{ color: "white" }}>
                  Social
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Table.Cell>
              <Header as="h4" image>
                <Icon name="tag" size="mini" style={{ color: "white" }} />
                <Header.Content style={{ color: "white" }}>
                  Promotions
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {/* <Table.Row> */}
        {/* <Table.Cell> */}
        <GetEmails />
        {/* </Table.Cell> */}
        {/* <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row> */}
        {/* <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row> */}
        {/* <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row> */}
        {/* <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row> */}
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
  );
}
export default EmailTable;
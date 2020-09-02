import React, { useState } from "react";
import { Table, Checkbox, Button, Icon, Label } from "semantic-ui-react";

export default function Emails({
  id,
  sender,
  subject,
  date,
  deleteEmail,
  setSelectedEmail,
  tag
}) {
  const [display, setDisplay] = useState(false);
  const [tagColor, setTagColor] = useState(JSON.stringify(tag));

  const click = () => {
    setDisplay(!display);
  };

  const handleClick = () => {
    deleteEmail();
  };

  const handleChange = (e, value) => {
    setSelectedEmail(value.value);
  };

  const color = () => {
    if (tagColor === JSON.stringify("Important")) {
      return "red";
    } else return "blue";
  };
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <Button
            aria-label="email-checkbox"
            style={{ backgroundColor: "transparent" }}
          >
            <Checkbox
              className="checkbox"
              onClick={click}
              onChange={handleChange}
              value={id}
            />
          </Button>
          {sender}
        </Table.Cell>
        <Table.Cell>{subject}</Table.Cell>
        <Table.Cell>
          <Label as="a" color={color()} style={{ marginLeft: 30 }}>
            {JSON.parse(tagColor)}
          </Label>
        </Table.Cell>
        <Table.Cell>
          {date}
          {display ? (
            <Button
              style={{ backgroundColor: "transparent" }}
              onClick={handleClick}
              aria-label="delete-email"
            >
              <Icon
                name="trash"
                size="large"
                style={{ color: "white" }}
                aria-label="delete-email"
              />
            </Button>
          ) : null}
        </Table.Cell>
      </Table.Row>
    </>
  );
}

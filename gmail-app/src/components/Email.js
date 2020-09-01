import React, { useState, useCallback } from "react";
import { Table, Checkbox, Button, Icon } from "semantic-ui-react";

export default function Emails({
  id,
  sender,
  subject,
  date,
  deleteEmail,
  setSelectedEmail
}) {
  const [display, setDisplay] = useState(false);

  const click = () => {
    setDisplay(!display);
  };

  const handleClick = useCallback(() => {
    deleteEmail();
  });

  const handleChange = useCallback((e, value) => {
    setSelectedEmail(value.value);
  });

  return (
    <>
      <Table.Row>
        <Table.Cell>
          <Checkbox
            className="checkbox"
            onClick={click}
            onChange={handleChange}
            value={id}
          />
          {sender}
        </Table.Cell>
        <Table.Cell>{subject}</Table.Cell>
        <Table.Cell>
          {date}
          {display ? (
            <Button
              style={{ backgroundColor: "transparent" }}
              onClick={handleClick}
            >
              <Icon name="trash" size="large" style={{ color: "white" }} />
            </Button>
          ) : null}
        </Table.Cell>
      </Table.Row>
    </>
  );
}

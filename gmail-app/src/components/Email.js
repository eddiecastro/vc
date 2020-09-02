import React, { useState, useEffect } from "react";
import { Table, Checkbox, Button, Icon, Label } from "semantic-ui-react";

export default function Emails({
  id,
  sender,
  subject,
  date,
  deleteEmail,
  setSelectedEmail,
  tags
}) {
  const [display, setDisplay] = useState(false);
  const [addTag, setAddTag] = useState("");
  const [tagColor, setTagColor] = useState("");

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
    if (tags && tags.length === 2) {
      setAddTag("both");
    } else if (tags && tags !== []) {
      tags.map(t => {
        if (t === "work") {
          setTagColor("blue");
          setAddTag("work");
        } else if (t === "travel") {
          setTagColor("green");
          setAddTag("travel");
        }
      });
    } else {
      setAddTag("");
    }
  };

  useEffect(() => {
    color();
  });
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
        {addTag !== "" && addTag !== "both" ? (
          <Table.Cell>
            <Label as="a" color={tagColor} style={{ marginLeft: 30 }}>
              {addTag}
            </Label>
          </Table.Cell>
        ) : (
          <Table.Cell>
            <Label as="a" color="blue" style={{ marginLeft: 30 }}>
              work
            </Label>
            <Label as="a" color="green" style={{ marginLeft: 30 }}>
              travel
            </Label>
          </Table.Cell>
        )}

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

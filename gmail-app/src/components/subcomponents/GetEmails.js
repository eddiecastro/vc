import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "semantic-ui-react";

export function GetEmails() {
  const [emails, setEmails] = useState([]);
  const [errors, setErrors] = useState({ error: "" });

  const getEmails = async () => {
    try {
      const res = await axios.get("../emails.json");
      const data = res.data;

      console.log(typeof data);
      setEmails(data);
    } catch (err) {
      console.log(err);
      setErrors({ error: err.message });
      return err.message;
    }
  };

  useEffect(() => {
    getEmails();
  }, []);

  console.log(emails);

  const allEmails =
    emails &&
    emails.map(({ sender, subject, time }) => {
      return (
        <>
          <Table.Row>
            <Table.Cell>{sender}</Table.Cell>
            <Table.Cell>{subject}</Table.Cell>
            <Table.Cell>{time}</Table.Cell>
          </Table.Row>
        </>
      );
    });

  return <>{allEmails}</>;
}

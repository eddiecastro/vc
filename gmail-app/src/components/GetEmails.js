import React, { useState, useEffect } from "react";
import axios from "axios";
import { Email } from ".";
import { Table, Checkbox, Button, Icon } from "semantic-ui-react";

export function GetEmails() {
  const [emails, setEmails] = useState([]);
  const [value, setValue] = useState("");

  const setSelectedEmail = value => setValue(value);

  const deleteEmail = () => {
    const newList = emails.filter(item => item.id !== value);
    setEmails(newList);
  };

  const getEmails = async () => {
    try {
      const res = await axios.get("../emails.json");
      const data = res.data;
      setEmails(data.emails);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmails();
  }, []);

  console.log(emails);
  const allEmails =
    emails &&
    emails.map(email => {
      return (
        <Email
          key={email.id}
          id={email.id}
          sender={email.sender}
          subject={email.subject}
          date={email.date}
          deleteEmail={deleteEmail}
        />
      );
    });

  return <>{allEmails}</>;
}

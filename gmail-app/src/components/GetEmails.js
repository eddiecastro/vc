import React, { useState, useEffect } from "react";
import axios from "axios";
import { Email } from ".";
import { format, parseISO } from "date-fns";

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
      setEmails(data.messages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmails();
  }, []);
  console.log(typeof emails);
  const allEmails =
    emails &&
    emails.map(email => {
      const formatted = parseISO(email.date);
      const date = format(new Date(formatted), "mm-dd-yyyy");
      return (
        <Email
          key={email.id}
          id={email.id}
          sender={email.sender}
          subject={email.subject}
          date={date}
          deleteEmail={deleteEmail}
          setSelectedEmail={setSelectedEmail}
          tags={email.tags}
        />
      );
    });

  return <>{allEmails}</>;
}

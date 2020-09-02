import React from "react";
import { render } from "@testing-library/react";
import { Email } from ".";

test("it renders the component", () => {
  const props = {
    id: 1,
    sender: " Test 1",
    subject: "lorum ipsum",
    date: "2020-07-08T07:01:43.511Z",
    tag: "Personal"
  };

  const { container } = render(
    <Email
      id={props.id}
      sender={props.sender}
      subject={props.sender}
      subject={props.subject}
      date={props.date}
      tag={props.tag}
    />
  );

  expect(container.firstChild).toMatchSnapshot();
});

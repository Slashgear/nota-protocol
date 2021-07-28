import { Input } from "./form/inputJSON.component";
import { Button } from "./form/button.component";
import { Form, Legend } from "./form/form.component";
import * as React from "react";

export const SendJson = () => {
  const send = event => {
    event.preventDefault();
    const chars = event.target[0].value.replace(/\s/g, "").split("");
    console.log("Speaking", chars);
    chars.forEach(char => {
      window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(char));
    });
  };

  return (
    <Form onSubmit={send}>
      <Legend>Send a JSON</Legend>
      <Input name="json" defaultValue={""} />
      <Button type="submit">Send</Button>
    </Form>
  );
};

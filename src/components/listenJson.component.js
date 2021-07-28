import { Input } from "./form/inputJSON.component";
import { Button } from "./form/button.component";
import { Form, Legend } from "./form/form.component";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

export const ListenJson = () => {
  const [value, setValue] = useState();
  const recognition = useRef();

  useEffect(() => {
    const rec = new window.webkitSpeechRecognition();
    rec.continuous = true;
    rec.interimResults = true;
    rec.onStart = () => {
      console.log("Starting listening");
    };
    rec.onresult = event => {
      console.log(event);
      const char = event.results[0][0].transcript;
      setValue(value => value + char);
    };
    recognition.current = rec;
  }, [recognition]);

  const listen = event => {
    event.preventDefault();
    recognition.current.start();
  };
  return (
    <Form onSubmit={listen}>
      <Legend>Listen a JSON</Legend>
      <Input value={value} readOnly disabled />
      <Button type="submit">Listen</Button>
    </Form>
  );
};

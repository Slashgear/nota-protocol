import { Input } from "./form/inputJSON.component";
import { Button } from "./form/button.component";
import { Form, Legend } from "./form/form.component";
import * as React from "react";
import { useEffect, useRef } from "react";

export const Listen = () => {
  const input = useRef();
  const recognition = useRef();

  useEffect(() => {
    const RecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!RecognitionAPI) {
      window.alert("Sorry speech recognition is not available on your browser");
    }
    const api = new RecognitionAPI();
    api.lang = "en-US";
    api.continuous = false;
    api.interimResults = false;
    api.onstart = () => {
      console.log("Starting listening");
    };
    api.onresult = event => {
      console.log(event);
      const message = event.results[0][0].transcript;
      console.log("Detected message", message);
      input.current.value += message;
    };
    recognition.current = api;
  }, [recognition]);

  const listen = event => {
    event.preventDefault();
    recognition.current.start();
  };

  return (
    <Form onSubmit={listen}>
      <Legend>Listen</Legend>
      <Input ref={input} />
      <Button type="submit">Listen</Button>
    </Form>
  );
};

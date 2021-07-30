import { Input } from "./form/inputJSON.component";
import { Button } from "./form/button.component";
import { Form, Legend } from "./form/form.component";
import * as React from "react";
import { stringToHexa } from "../hexa.utils";
import { NOTAMapping } from "../nota";

export const Send = () => {
  const send = async event => {
    event.preventDefault();
    // eslint-disable-next-line
    window.speechSynthesis;
    const { value: message } = event.target[0];
    console.log({ message });
    const hexa = stringToHexa(message);
    console.log({ hexa });
    setTimeout(() => {
      const voiceUs = window.speechSynthesis
        .getVoices()
        .find(voice => voice.lang === "en-US");
      console.log({ foundVoice: voiceUs });
      const encodedMessage = hexa
        .split("")
        .map(code => NOTAMapping[code])
        .join(" ");
      console.log({ encodedMessage });
      const utterance = new window.SpeechSynthesisUtterance(encodedMessage);
      utterance.voice = voiceUs;
      window.speechSynthesis.speak(utterance);
    }, 50);
  };

  return (
    <Form onSubmit={send}>
      <Legend>Send</Legend>
      <Input name="data" defaultValue="Hello world!" />
      <Button type="submit">Send</Button>
    </Form>
  );
};

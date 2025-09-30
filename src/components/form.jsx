import { use } from "react";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [TElNum, setTelNum] = useState("");

  const handleSubmit = (e) => {
    e.prenentDefault();
    console.log({ name, Email, TElNum });
    alert(" הטופס נשלח!");
  };
}

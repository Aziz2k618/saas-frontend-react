import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const[message,setMessage]=useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || messageText === "") {
      setMessage("Please fill in all fields.");
      return;
    }
    if(!email.includes("@")){
      setMessage("Please enter a valid email address.");
      return;
    }
    console.log(name, email , messageText);
    setMessage("Form submitted successfully!");

    setName("");
    setEmail("");
    setMessageText("");
  };

  return (
    <section>
      <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setMessage("");
        }}
      />
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setMessage("");
        }}
      />

      <textarea
        placeholder="Enter your message"
        value={messageText}
        onChange={(e) => {
          setMessageText(e.target.value);
          setMessage("");
        }}
      />

      <p>Hello, {name}</p>
      <p>Your email is: {email}</p>
      <button type="submit">Submit</button>
    </form>
    {message && <p>{message}</p>}
    </section>
  );
}
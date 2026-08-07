import {useState} from "react";
import Button from "../Button/Button";

export default function Hero({title, description, button1, button2}){
  const [message, setMessage] = useState("");
  function handleClick(){
    alert("Button clicked!");
  }
  return(
    <div className="hero">
      <section>
       <h1>{title}</h1>

       <p>{description}</p>
       {message && <p>{message}</p>}

       <Button onClick={handleClick}>{button1}</Button>
       <Button onClick={()=>setMessage("Thanks for checking out our projects!")}>{button2}</Button>

      </section>  
    </div>
  );
}

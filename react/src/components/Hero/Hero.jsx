import Counter from "../Counter/Counter";

export default function Hero(props){
  return(
    <div className="hero">
      <section>
       <h1>{props.title}</h1>

       <p>{props.description}</p>

       <button>{props.button1}</button>
       <button>{props.button2}</button>

      </section>  
    </div>
  );
}

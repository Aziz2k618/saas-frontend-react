

export default function Hero({title, description, button1, button2}){
  return(
    <div className="hero">
      <section>
       <h1>{title}</h1>

       <p>{description}</p>

       <button>{button1}</button>
       <button>{button2}</button>

      </section>  
    </div>
  );
}

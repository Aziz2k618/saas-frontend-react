const features =[
  "Responsive Design",
  "Customizable Templates",
  "Advanced Analytics",
  "Seamless Integration",
  "24/7 Support"
];

export default function Features(){
  return(
    <div className="features">
      <section>
        <h2>Our Features</h2>
        <p>Discover the powerful features that make our platform stand out.</p>
        <p>From seamless integration to advanced analytics, we provide everything you need to build and grow your online presence.</p>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>   
      </section>
    </div>
  );
}



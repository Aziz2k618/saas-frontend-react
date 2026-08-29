import "./Features.css";
import ServiceCard from "../ServiceCard/ServiceCard";


const features =[
  "Responsive Design",
  "Customizable Templates",
  "Advanced Analytics",
  "Seamless Integration",
  "24/7 Support"
];

const services = [
{
  title: "Web Development",
  description: "We offer professional web development services to create stunning and functional websites tailored to your business needs."
},{
  title: "UI/UX Design",
  description: "Our expert designers create intuitive and visually appealing user interfaces that enhance the overall user experience."
},{

  title: "Digital Marketing",
  description: "We provide comprehensive digital marketing solutions to help you reach your target audience and grow your online presence."
}
];

export default function Features(){
  return(
    <div className="features">
      <section>
        <h2>Our Features</h2>
        <p>Discover the powerful features that make our platform stand out.</p>
        <p>From seamless integration to advanced analytics, we provide everything you need to build and grow your online presence.</p>
        <div className="services-list">
          {services.map((service) => (        
            <ServiceCard key={service.title}
              title={service.title} 
              description={service.description} />
          ))}
        </div>  
      </section>
    </div>
  );
}



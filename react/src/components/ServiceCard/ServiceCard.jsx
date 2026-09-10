export default function ServiceCard({ title, description }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
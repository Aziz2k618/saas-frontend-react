import {useState} from 'react';


export default function ProjectCard({ title, description, category, link }) {
  const [isShowDetail, setShowDetail] = useState(false);

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{category}</p>
      {link && (<a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>)}
      <button onClick={()=>setShowDetail(prev => !prev)}>
        {isShowDetail ? 'Hide Details' : 'Show Details'}
      </button>
      {isShowDetail && (
  <p>This project demonstrates a modern React application.</p>
)}
    </div>
  );
}
import React from 'react';

const ProjectCard = ({projectContainer, projectImageCss, projectTitle, projectDescription, title, description, imageUrl }) => {
  return (
    <div className={`${projectContainer}`}>
      {imageUrl && (<img src={imageUrl} alt={title} className={`${projectImageCss}`} />)}
      <h2 className={`${projectTitle}`}>{title}</h2>
      <p className={`${projectDescription}`}>{description}</p>
    </div>
  );
};

export default ProjectCard;

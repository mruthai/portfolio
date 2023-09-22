import React from 'react';

const ProjectCard = ({projectContainer, projectImageCss, projectTitle, projectDescription, title, description, imageUrl }) => {

  //  Used props on for css and display properties
// Advantage of using props for both allows programmer to write content and style in single module
  return (
    <div className={`${projectContainer}`}>
      {imageUrl && (<img src={imageUrl} alt={title} className={`${projectImageCss}`} />)}
      <h2 className={`${projectTitle}`}>{title}</h2>
      <p className={`${projectDescription}`}>{description}</p>
    </div>
  );
};

export default ProjectCard;

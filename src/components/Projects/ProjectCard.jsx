import React from 'react';

const ProjectCard = ({projectContainer, projectMiniContainerOne, projectMiniContainerTwo, projectImageCss, projectTitle, projectDescription, title, description, imageUrl, projectUl, projectTools, projectToolCss, projectUrl, projectLink }) => {

  //  Used props on for css and display properties
// Advantage of using props for both allows programmer to write content and style in single module
  return (
    <div className={`${projectContainer}`}>
      <div className={`${projectMiniContainerOne}`}>
      {imageUrl && (<img src={imageUrl} alt={title} className={`${projectImageCss}`} />)}
      </div>
      <div className={`${projectMiniContainerTwo}`}>
      <h2 className={`${projectTitle}`}>{title}</h2>
      <p className={`${projectDescription}`}>{description}</p>
      <ul className={`${projectUl}`}>
          {projectTools.map((items, index) => (
            <li key={index} className={`${projectToolCss}`}>{items}</li>
          ))}
        </ul>
        <a className={`${projectLink}`} href={`${projectUrl}`} target="_blank" rel="noreferrer">↪︎</a>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from 'react'

const ContentBasic = ({ classContentBasicCss, contentTitle, contentParagraph, classParagraphContent, classHeadingContent}) => {
  return (
    <div className={`${classContentBasicCss}`}>
      <h1 className={`${classHeadingContent}`}>{contentTitle}</h1>
      {contentParagraph.map((paragraph, index) => (
      <p key={index} className={`${classParagraphContent} mb-4`}>
        {paragraph}
        </p>
      ))}
    </div>
  )
}

export default ContentBasic
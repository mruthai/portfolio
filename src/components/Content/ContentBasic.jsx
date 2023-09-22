import React from 'react'

const ContentBasic = ({ classContentBasicCss, contentParagraph, classParagraphContent }) => {
  //  Used props on for css and display properties
// Advantage of using props for both allows programmer to write content and style in single module
  return (
    <div className={`${classContentBasicCss}`}>
      {contentParagraph.map((paragraph, index) => (
      <p key={index} className={`${classParagraphContent} mb-4`}>
        {paragraph}
        </p>
      ))}
    </div>
  )
}

export default ContentBasic

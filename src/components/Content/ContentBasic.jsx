import React from 'react'

const ContentBasic = ({ classContentBasicCss, contentParagraph, classParagraphContent }) => {
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

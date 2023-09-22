import React from 'react'

const HeadingOne = ({headingOneTitle, headingOneTag, headingTwoTag, titleOne, tagOne, tagTwo}) => {
  //  Used props on for css and display properties
// Advantage of using props for both allows programmer to write content and style in single module
  return (
    <div>
      <h1 className={`${headingOneTitle}`}>{titleOne}</h1>
      <p className={`${headingOneTag}`}>{tagOne}</p>
      <p className={`${headingTwoTag}`}>{tagTwo}</p>
    </div>
  )
}

export default HeadingOne
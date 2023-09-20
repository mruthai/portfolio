import React from 'react'

const HeadingOne = ({headingOneTitle, headingOneTag, headingTwoTag, titleOne, tagOne, tagTwo}) => {
  return (
    <div>
      <h1 className={`${headingOneTitle}`}>{titleOne}</h1>
      <p className={`${headingOneTag}`}>{tagOne}</p>
      <p className={`${headingTwoTag}`}>{tagTwo}</p>
    </div>
  )
}

export default HeadingOne
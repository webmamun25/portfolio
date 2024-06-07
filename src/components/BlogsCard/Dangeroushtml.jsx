import React from 'react'

const Dangeroushtml = ({ content }) => {
  return (
    <div className='truncate' dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export default Dangeroushtml
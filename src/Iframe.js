import React from 'react'

const Iframe = ({title, classStyle, link}) => {
  return (
    <iframe title={title} className={classStyle}
            src={link} >
    </iframe>
  )
}

export default Iframe
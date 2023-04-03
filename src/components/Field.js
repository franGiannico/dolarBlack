import React from 'react'

const Field = ({ type , value , label}) => {
  return (
    <div className='ed-item form__item'>
        <label htmlFor={ type }>
        { label }
        <input 
            type={ type } 
            name={ type } 
            id={ type } 
            defaultValue={ value } 
        />
        </label>
    </div>
  )
}

export default Field
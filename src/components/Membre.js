import React, { Fragment } from 'react'

const Membre = ({ nom, age, children, hideName, handleChange }) => {
  return(
    <Fragment>

      <h2 className={ age < 18 ? 'enfant' : 'adulte'  }>Membre de ma famille : {nom.toUpperCase()} : {age}</h2>
      { children && <p>{children}</p> }
      <input value={nom} onChange={handleChange} type='text' />
      <button onClick={hideName}>X</button>
    </Fragment>
  )
}

export default Membre

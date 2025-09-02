import React from 'react'

export const component = (props) => {
    const {Name}=props
    const {Age}=props
  return (
    <div>
        <h2>My name is {Name}</h2>
        <h2>My age is {Age}</h2>
    </div>
  )
}
export default component

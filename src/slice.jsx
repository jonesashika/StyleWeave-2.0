import React from 'react'

export const slice = () => {
    const cities=['nagercoil','chennai','colachel','kanyakumari','chennai']
    const slices=cities.slice(0,2)
    console.log(slices );
  return (
    <div>{slices}</div>
  )
}
export default slice
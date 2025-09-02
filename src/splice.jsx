import React from 'react'

export const splice = () => {
    const cities = ['nagercoil', 'chennai', 'colachel', 'kanyakumari', 'chennai']
    cities. splice(2,0,'marthandam')
    console.log(cities);
    return (
        <div>{cities}</div>
    )
}
export default splice

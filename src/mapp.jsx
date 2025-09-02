import React from 'react'
import {item1} from './map'

export const Itemlist = () => {
  return (
    <div>
        {item1.map((kk)=>(
            <ul>
                <li key={kk.id}>
                    <container className ='content'>
                        <div>
                            <img src="{kk.image}" alt="" className='car' />
                        </div>
                        <div className='content1'></div>
                        <div> {kk.name}</div>
                        <div> {kk.para}</div>
                        <div className='{kk?.type==="standard"?"hlo":"jjj"}'>{kk.price}</div>
                        </container> 
                        
                            
                        
                    
                </li>
            </ul>
        ))}
    </div>
  )
}
const Map1=()=>{
    return(
        <div className='item'>
            <Itemlist style={item1}/>
        </div>
    )
}
export default Map1
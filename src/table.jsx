import React from 'react'

export const datas = [
    {
        id: 1,
        first_name: "jones",
        last_name: "ashika",
        email: "a@gmail.com",
        phone_no: 12345
    },
    {
        id: 2,
        first_name: "jon",
        last_name: "ash",
        email: "b@gmail.com",
        phone_no: 12345

    },
    {
        id: 3,
        first_name: "jonz",
        last_name: "ashi",
        email: "c@gmail.com",
        phone_no: 12345

    },
]
const tablecomponents =()=>{
return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>Email</th>
                    <th>PHONE NO</th>
                </tr>
            </thead>
        
        <tbody>
            {datas?.map((e) => (
                <tr>
                    <td>{e.id}</td>
                    <td>{e.first_name}</td>
                    <td>{e.last_name}</td>
                    <td>{e.email}</td>
                    <td>{e.phone_no}</td>
                </tr>
            ))}
            
        </tbody>
        </table>

    </div>
        )
    }    

export default tablecomponents


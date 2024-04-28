import React from 'react'
import { personData } from './data'
import './crudoperation.css'


const CrudOperation = () => {
    return (
        <div>
            <table style={{ width: "50%" }}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                    </tr></thead>   
                {
                    personData.map((data) => {
                        return (
                            <tbody key={data.id}>
                                <tr >
                                    <td>{data.name}</td>
                                    <td> {data.age}</td>
                                    <td>{data.gender}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default CrudOperation

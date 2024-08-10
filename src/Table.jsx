import React from 'react'

export const Table = ({ headings, data, columns, fnEdit, fnDelete }) => {
    return (
        <div>
            <table border="1px">
                <thead>
                    <tr>
                        {
                            headings?.map?.((val, index) => {
                                return <th key={index}>{val}</th>
                            })
                        }
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map?.((obj, index) => {
                            return <tr key={index}>
                                {
                                    columns?.map?.((key, ind) => {
                                        return <td key={ind}>{obj[key]}</td>
                                    })
                                }
                                <td><button onClick={() => fnEdit(obj)}>Edit</button></td>
                                <td><button onClick={() => fnDelete(obj)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}



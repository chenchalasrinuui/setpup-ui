import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from './Table'

export const Users = ({ data }) => {
    const fnEdit = (data) => {
        console.log(data)
    }

    const fnDelete = (data) => {
        console.log(data)
    }
    return (
        <div>
            <Table
                headings={["Name", "LOCAtion", "Email", "Phone"]}
                data={data}
                columns={['name', 'loc', 'phone', 'email']}
                fnEdit={fnEdit}
                fnDelete={fnDelete}
            />
        </div>
    )
}

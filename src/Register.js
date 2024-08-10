import React, { useContext, useRef, useState } from 'react'
import axios from 'axios'
import { appCtx } from './statemanagement/context'

export const Register = ({ getUsers }) => {
    const [dataObj, setDataObj] = useState({ name: '', loc: "", email: '', phone: '' })
    const { dispatch } = useContext(appCtx)
    const handleChange = (eve) => {
        const { id, value } = eve.target
        setDataObj({
            ...dataObj,
            [id]: value
        })

    }

    const handleRegister = () => {
        const { loc, name, email, phone } = dataObj;
        dispatch({ type: "LOADER", payload: true })
        axios.post(`https://stepup-server-snowy.vercel.app/users/register/${loc}?name=${name}`, { email }, {
            headers: {
                phone
            }
        })
            .then((res) => {
                const { acknowledged, insertedId } = res?.data;
                if (acknowledged && insertedId) {
                    setDataObj({ name: '', loc: "", email: '', phone: '' })
                    getUsers();
                    alert('saved')
                } else {
                    alert('not saved')
                }
            })
            .catch((res) => {
                alert('something went wrong')
            })
            .finally(() => {
                dispatch({ type: "LOADER", payload: false })
            })
    }
    return (
        <div>
            <h3>Register</h3>
            <p>
                <b>Name:</b><input value={dataObj?.name} id="name" onChange={handleChange} />
            </p>
            <p>
                <b>Phone:</b><input value={dataObj?.phone} id='phone' onChange={handleChange} />
            </p>
            <p>
                <b>Locaiton:</b><input value={dataObj?.loc} id='loc' onChange={handleChange} />
            </p>
            <p>
                <b>email:</b><input value={dataObj?.email} id="email" onChange={handleChange} />
            </p>
            <p>
                <button onClick={handleRegister}>Register</button>
            </p>
        </div>
    )
}

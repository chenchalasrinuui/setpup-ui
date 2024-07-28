import React, { useRef } from 'react'
import axios from 'axios'

export const Register = () => {
    const dataObj = useRef({})
    const handleChange = (eve) => {
        const { id, value } = eve.target
        dataObj.current = {
            ...dataObj.current,
            [id]: value
        }
    }

    const handleRegister = () => {
        const { loc, name, email, phone } = dataObj.current
        axios.post(`http://localhost:2020/users/register/${loc}?name=${name}`, { email }, {
            headers: {
                phone
            }
        })
            .then((res) => {
                console.log('success', res)
            })
            .catch((res) => {
                console.log('fail', res)
            })
            .finally(() => {
                console.log('success/fail')
            })
    }
    return (
        <div>
            <h3>Register</h3>
            <p>
                <b>Name:</b><input id="name" onChange={handleChange} />
            </p>
            <p>
                <b>Phone:</b><input id='phone' onChange={handleChange} />
            </p>
            <p>
                <b>Locaiton:</b><input id='loc' onChange={handleChange} />
            </p>
            <p>
                <b>email:</b><input id="email" onChange={handleChange} />
            </p>
            <p>
                <button onClick={handleRegister}>Register</button>
            </p>
        </div>
    )
}

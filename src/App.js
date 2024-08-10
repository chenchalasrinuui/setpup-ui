import logo from './logo.svg';
import React, { useState, useEffect, useReducer } from 'react'
import './App.css';
import { Register } from './Register';
import { Users } from './Users';
import axios from 'axios';
import { Loader } from './Loader';
import appReducer from './statemanagement/appReducer';
import { init } from './statemanagement/init'
import { Provider } from './statemanagement/context';

function App() {
  const [data, setData] = useState([])
  const [state, dispatch] = useReducer(appReducer, init)
  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    const res = await axios.get('https://stepup-server-snowy.vercel.app/users/get-users')
    setData(res?.data);
  }



  return (
    <div>
      <Provider value={{ state, dispatch }}>
        <Register getUsers={getUsers} />
        <Users data={data} />
        {state?.isShowLoader && <Loader />}
      </Provider>

    </div>
  );
}

export default App;

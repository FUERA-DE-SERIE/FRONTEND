import React, { useState, useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import axios from 'axios';
import AppRouter from "./routers/AppRouter";


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false, lastPath: '/' }
}

function App() {

  const [user, dispatch] = useReducer( authReducer, {}, init)

  useEffect(() => {

    if (!user) {
      return
    }

    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const [dishes, setDishes] = useState([])

  //List Task
  const listTasks = () => {
    axios
      .get("http://localhost:5000/api/dish/list")
      .then((res) => {
        const data = res.data;
        setDishes(data)
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
    });
  }

  listTasks()

  return (
    <AuthContext.Provider value={
      {
        user,
        dispatch,
        dishes
      }
    }>
      <AppRouter/>
    </AuthContext.Provider>

  );
}

export default App;

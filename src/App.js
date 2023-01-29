import React, { useState, useEffect } from 'react'
import FormComponent from './components/FormComponent'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useStateValue } from './context/StateProvider'
import './App.css';
import { auth } from './config/firebase'
import Dashboard from './components/Dashboard';



function App() {

  const [state, dispatch] = useStateValue();
  const [isLoggedin, setIsLoggedin] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('token')
    if (user !== null || undefined) {
      setIsLoggedin(true)
    } else {
      setIsLoggedin(false)
    }
  });

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // a user has logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // no user logged in
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  console.log(state)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {state.user !== null ?
            <Route path='/' element={<Dashboard />} /> :
            <Route path='/' element={<FormComponent />} />
          }
        </Routes>

      </div>
    </BrowserRouter>

  );
}




export default App;

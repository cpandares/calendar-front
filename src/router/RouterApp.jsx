import { Navigate, Route, Routes } from "react-router-dom"


import { Login } from "../auth";
import { CalendarScreen } from "../calendar";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";


export const RouterApp = () => {

     const { checkAuthToken,status } = useAuthStore()
      //const authStatus = 'not-authenticated';

      useEffect(()=>{
        checkAuthToken();
      },[])

      if(status === 'checking') {
        return (
            <h5>Loading...</h5>
        )
      }

  return (
    <Routes>
        {
            (status === 'not-authenticated')
            ?
               ( 
                <>
                  <Route path="/auth/*" element={ <Login />} />
                  <Route path="/*" element = <Navigate to="/auth/login" /> />
                </>

               )
            :
               (
                <>
                 <Route path="/" element={ <CalendarScreen />} />
                <Route path="/*" element = <Navigate to="/" /> />
                </>

               )

        }

        
    </Routes>
  )
}

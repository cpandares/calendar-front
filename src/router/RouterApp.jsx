import { Navigate, Route, Routes } from "react-router-dom"


import { Login } from "../auth";
import { CalendarScreen } from "../calendar";


export const RouterApp = () => {

    const authStatus = 'authenticated';

  return (
    <Routes>
        {
            (authStatus === 'not-authenticated')
            ?
                <Route path="/auth/*" element={<Login />} />
            :
                <Route path="/*" element={ <CalendarScreen />} />

        }

        <Route path="/*" element = <Navigate to="/auth/login" /> />
    </Routes>
  )
}

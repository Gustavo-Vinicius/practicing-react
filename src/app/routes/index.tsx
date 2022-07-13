
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
        
        <Route path = "Entrar" element = {<Login/>}/>
        <Route path = "/pagina-inicial" element = {<Dashboard/>} />

        <Route path = "*" element = {<Navigate to = "/pagina-inicial"/>}/>
       
        </Routes>
        </BrowserRouter>
    );
}


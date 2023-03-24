import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import ListsPage from "../pages/Home/Lists/Lists";
import HotelsPage from "../pages/Home/Hotels/Hotels";


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/lists" element={<ListsPage/>}/>
                <Route path="/lists/:id" element={<HotelsPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App;
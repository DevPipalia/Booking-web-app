import React from "react";
import Header from "../../../components/Header/Header";
import Navbar from "../../../components/Navbar/Navbar";



function ListsPage(){
    return(
        <>
        <div>
        <Navbar/>
        <Header type="list"/>
            Lists
        </div>
        </>
    )
}

export default ListsPage;
import React from "react";
import NavigationBar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";

function HomePage(){
    return(
        <div>
            <NavigationBar/>
            <Header/>
            <Featured/>
            <p>Home</p>
        </div>
    )
}

export default HomePage;
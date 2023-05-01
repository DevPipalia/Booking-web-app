import React from "react";
import NavigationBar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import PropertyList from "../../components/propertyList/Propertylist";

function HomePage(){
    return(
        <div>
            <NavigationBar/>
            <Header/>
            <Featured/>
            <PropertyList/>
            <p>Home</p>
        </div>
    )
}

export default HomePage;
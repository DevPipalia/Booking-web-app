import React from "react";
import NavigationBar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import PropertyList from "../../components/propertyList/Propertylist";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";

function HomePage(){
    return(
        <div>
            <NavigationBar/>
            <Header/>
            <Featured/>
            <PropertyList/>
            <FeaturedProperties/>
            <MailList/>
            <p>Home</p>
        </div>
    )
}

export default HomePage;
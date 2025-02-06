import React from "react";
import Sidebar from "./Sidebar";

const Home = () => {
    return (
        <div className="home-page">
            <div className="header">
                <h2><span style={{color: "#FF6767"}}>TO</span>-DO</h2>
            </div>
            <div className="site-content">
                <Sidebar />
            </div>
        </div>
    )
}

export default Home;
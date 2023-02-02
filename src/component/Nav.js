import React from "react";

function nav(){
    return(
        <ul>
            <li>
                <a rel="home" href="home">Home</a>
            </li>
            <li>
                <a rel="about" href="about">About</a>
            </li>
            <li>
                <a rel="menu" href="menu">Menu</a>
            </li>
            <li>
                <a rel="contact" href="contact">Contact</a>
            </li>
        </ul>
    )
}

export default nav;
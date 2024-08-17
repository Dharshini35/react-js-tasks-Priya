import React from "react";
import Img1 from "./Image/rcb-img.png";
import Img2 from "./Image/csk-img.png";

function Task2(){
    return(
        <>
        <div className="Container">
            <div className="Card">
                <h1>INDIAN SUPER LEAGUE!!</h1>
             <img src={Img1} className="img1"/> 
             <img src={Img2} className="img2"/>
            </div>
        </div>
        </>
    )
}

export default Task2;
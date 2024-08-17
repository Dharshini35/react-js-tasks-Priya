import React, { Component } from "react";

import Img from "./Image/women.png";
import Img1 from "./Image/blue.png";
const Task1 = () => {
  return (
    <>
      {/*Class Components*/}
      <div class="main">
        <h1 class="head">CONGRATULATIONS</h1>
        <div class="card">
          {/* Images */}
            <img src={Img} class="imgclass" alt="..." />        
            <h3 class="cardtitle">PRIYA DHARSHINI R</h3>
            <p class="card-text">
              KG COLLEGE OF ARTS AND SCIENCE<br></br> COIMBATORE
            </p>
            <img src={Img1} class="imgclass" alt="..." />      
        </div>
      </div>
    </>
  );
};
export default Task1;
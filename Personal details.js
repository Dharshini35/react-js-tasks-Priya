import React from "react";

function Home() {
 
  let form = () => {
    let username = document.getElementById('username').value;
    let age = document.getElementById('age').value;
    let mark = document.getElementById('mark').value;
    let num = document.getElementById('num').value;
    alert(`Username: ${username}\n Age: ${age}\nDepartment: ${mark}\nCollege: ${num}`);
  };

  return (
    <>
      <div>
        <h1>Enter Your Details </h1>
        <label>Enter your Name:</label>
        <input type="text" id="username" name="username" /><br/>
        <label>Enter your Age:</label>
        <input type="number" id="age" name="age" /><br/>
        <label>Enter your hsc Marks:</label>
        <input type="number" id="mark" name="mark" /><br/>
        <label>Enter your Ph no:</label>
        <input type="number" id="num" name="num" /><br/>
        <button onClick={form}>Submit</button>
      </div>
    </>
  );
}

export default Home;
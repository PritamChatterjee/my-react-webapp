import React from "react";

function Greeting()
{
    //arrow function
    const greet = () => {
        alert("Hello, Welcome to ReactJS!");
    }

    //call the above function when click a button

    return(
        <>
            <br></br>
            <button onClick={greet} className="btn btn-success">
                Click Me </button>

            <br /> <br></br>

            <button onClick={()=> alert('Hi chithra')} 
            className="btn btn-primary">
                Greeting</button>
        </>
    );
}

export default Greeting;
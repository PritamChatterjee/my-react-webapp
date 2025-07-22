import React from "react";
import Layout from "./Layout";

function MyFunComp() {
             const x = 9;
            let text = null;

             if (x <= 10)
                text = "Hello";
            else
                text = "Goodbye";

        let temp = [];

        for(let i = 0; i<= 5; i++) {
            //temp[i] = <h3 key={i}>Heading {i}</h3>;
            temp[i] = i;
        }
    return(
        <>
            <Layout></Layout>
            <h2>Function Component</h2>
            <p>This is a functional component in React.</p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nemo numquam dolor velit laboriosam, quam totam provident, libero iusto porro, quidem sequi laudantium veritatis cum harum eos facilis sed. Nam!
            </p>
            <button className="btn btn-success">Click Me</button>

           

             
            <h2>{text}</h2>
            {temp.toString()}
        </>
    );
}

export default MyFunComp;
import React, { useState } from "react";

function HookDemo()
{
    const[click, setClick] = useState(0);

    return(
        <div>
           <h2>
             you clicked {click} times
           </h2>

           <button onClick={()=>setClick(click+1)}>CLick me</button>

        </div>
    );
}
export default HookDemo;
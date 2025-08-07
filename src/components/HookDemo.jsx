import React, { useState } from "react";
// react hooks are functions that let you use state and other React features in functional components.
// They allow you to manage state, lifecycle methods, and side effects in a more concise and readable way.
// Hooks were introduced in React 16.8 to enable stateful logic in functional components.
// Hooks are a way to use React features without writing class components.
// They provide a more functional approach to building components, making it easier to share logic 
// between components.
// Hooks are a powerful feature in React that simplifies state management and enhances code reusability.
// Hooks allow you to write cleaner and more maintainable code by separating concerns and avoiding complex class hierarchies.
// useState is a React Hook that lets you add state to functional components.
// It allows you to declare state variables in functional components, which were previously only possible in class components.
// useState returns an array with two elements: the current state value and a function to update it.
// The initial state can be set by passing a value to useState, and the state can be updated by calling the update function.
// This hook is essential for managing local component state in functional components, making them more powerful and flexible.
// useState is a fundamental part of React's Hooks API, enabling stateful logic in functional components.
// useState is a key feature in React that allows developers to create dynamic and interactive user interfaces without the need for class components.

// This component demonstrates the use of the useState hook in React.
// It allows you to manage state in a functional component, making it easy to create interactive UIs.
function HookDemo()
{
  // useState is a hook that allows you to add state to functional components in React.
  // It returns an array with two elements: the current state value and a function to update it.
  // The initial state can be set by passing a value to useState, and the state can be 
  // updated by calling the update function.
  // Here, we are initializing a state variable 'click' with an initial value of 0.
  // The 'setClick' function is used to update the 'click' state variable.
  // This allows us to keep track of how many times the button has been clicked.
  // The useState hook is essential for managing local component state in functional components.
  // It enables developers to create dynamic and interactive user interfaces without the need for class components.
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
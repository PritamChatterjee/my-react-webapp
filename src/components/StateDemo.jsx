import React, { Component } from 'react'
// import component from react library for creating stateful components
// component is a class that allows us to manage state and lifecycle methods in React.
// component is essential for building interactive and dynamic user interfaces in React applications.
// component provides a way to encapsulate logic and UI, making it reusable and maintainable.
// component is the foundation for creating complex UIs in React, allowing developers to build modular and scalable applications.
// component is a fundamental concept in React that enables developers to create rich user experiences.
// component is a powerful tool for building modern web applications with React.
// component is a key part of React's architecture, enabling the creation of dynamic and responsive user interfaces.
// component is used to define the structure and behavior of a React application.
// component is a building block of React applications, allowing developers to create reusable UI elements.
// component is a class that extends React.Component, providing access to state and lifecycle methods.
// class is a blueprint for creating objects in JavaScript, and in React, it is used to define components with state and behavior.
// class is a way to create reusable components in React, encapsulating both logic and UI.
// class is a fundamental concept in object-oriented programming, and in React, it allows for the creation of complex components with state management.
// class is used to define the structure and behavior of a React component, enabling developers to create dynamic and interactive user interfaces.
export class StateDemo extends Component {
// constructor is a special method in a class that is called when an instance of the class is created.
// constructor is used to initialize the state and bind methods in a React component.
// constructor is essential for setting up the initial state of a component and preparing it for rendering.
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, this is a state demo!'
        };
    }   

  render() {
    return (
      <div>
        <h1>State Demo</h1>
        <p>This component demonstrates how to use state in React.</p>
        <p>State is used to manage data that can change over time.</p>  
        <p className='text-primary'>In this example, we have a message stored in the state:
             {this.state.message}
             </p>
        <p>State can be updated using the setState method.</p>
        <p>When state changes, the component re-renders to reflect the new state.</p>
        <p>State is local to the component and cannot be accessed by other components directly.</p>
        <p>To update the state, you can use the following method:</p>
        
        <button onClick={() => this.setState({ message: 'State has been updated!' })} className="btn btn-primary">Update State</button>
        
        <p>After clicking the button, the message will change to: {this.state.message}</p>
        <p>Understanding state is crucial for building interactive applications in React.</p>
      </div>
    )
  }
}

export default StateDemo

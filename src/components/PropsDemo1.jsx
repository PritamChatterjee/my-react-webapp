import React from 'react'

function PropsDemo(props) {
  return (
    <div>
        <p>Props are used to pass data from parent to child components.</p>
        <p>They are read-only and cannot be modified by the child component.</p>
        <p>Props can be of any data type, including strings, numbers, arrays, and objects.</p>
        <p>In this example, we are using props to display a message: {props.message}</p>
        <p>Props help in making components reusable and dynamic.</p>
        <p>To use this component, you can pass a message prop like this:</p>
         
        <p>Props are a fundamental concept in React and are essential for building interactive UIs.</p>
        <p>They allow components to communicate and share data effectively.</p>
        <p>Understanding props is crucial for mastering React development.</p>

        <h1>Learn - {props.coursename}</h1>

    </div>
  )
}

export default PropsDemo

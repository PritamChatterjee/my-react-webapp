import React from 'react'
// 
//This component demonstrates how to loop through an array and render elements in React.
// import React from 'react'; means we are importing the React library to use its features in this component.
// react library is used to create components and manage the UI in a declarative way.
// react library is essential for building user interfaces in a modular and efficient manner.
// react library provides the core functionality for creating components, managing state, and handling events.
// react library is the foundation for building React applications, allowing developers to create reusable UI components.
// react library is a powerful tool for building interactive and dynamic web applications.
function Loop() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
      // key is a special prop in React that helps identify which items have changed, are added, or are removed.
      // It is used to optimize the rendering process by allowing React to keep track of elements in a list.
      // Using a unique key for each element helps React efficiently update the UI when the list changes.
      // Keys should be unique among siblings but can be reused across different lists.
      // Keys are important for performance and to avoid unnecessary re-renders in React applications.
      arr.push(<h3 key={i}>Hello {i}</h3>);
    } else {
      arr.push(<h3 key={i}>World {i}</h3>);
    }
  }

  return (
    <div>
        
        <h1>Looping in React</h1>
        <p>This is a simple example of how to loop through an array and render elements in React.</p>
        <p>Each element is assigned a unique key based on its index.</p>
        {arr}
    </div>
  )
}

export default Loop;

import React from 'react';
// This component demonstrates how to inject data into a React component.
// It shows how to use props to pass data from a parent component to a child component.
// Props are used to make components reusable and dynamic, allowing them to display different data based on the input they receive.
// In this example, we are injecting a name and a list of items into the component.
function App() {
  const name = 'Alice';
  const items = ['Apple', 'Banana', 'Orange'];
  const divStyle = {
    marginTop: '20px',
    border: '1px solid #ccc'
  };

  return (
    <div style={divStyle}>
      {/* Data injection example */}
      <h1>Welcome, {name}!</h1>
      <p>Today is {new Date().toLocaleDateString()}.</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li style={{ padding: 3 }} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;

// Import the React library, which is required to create React components
import React from "react";

// Define a functional component named Course that accepts props as a parameter
function Course(props) {
  // Return JSX that describes the component's UI
  return (
    // A React fragment (shorthand syntax <>) to group multiple elements without adding an extra DOM node
    <>
       {/* A line break element for spacing */}
      <br></br>
    {/* A heading level 2 (h2) element that displays the word "Learn" followed by the title passed via props */}
      <h2>
        Learn {props.title}
      </h2>
     {/* Close the React fragment */}
    </>
  );
}

// Export the Course component as the default export, making it available for import in other files
export default Course;
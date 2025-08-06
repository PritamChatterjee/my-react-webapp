// Import the React library, which is required to create React components
import React from 'react';



// Import a custom Layout component from a file named 'Layout' in the same directory
import Layout from './Layout';

// Define a functional component named Attributes
function Attributes() {
  // The component returns JSX, which describes the UI structure
  return (
    // A div element serves as the root container for the component's content
    <div>
      {/* Render the Layout component, likely providing a consistent structure or styling */}
      <Layout></Layout>
      {/* A heading level 2 (h2) element with Bootstrap's 'text-primary' class for blue text color */}
      <h2 className='text-primary'>
        {/* Attributes in JSX */}
      </h2>
      {/* A paragraph (p) element with a custom data attribute 'dataSampleAttribute' and Bootstrap's 'bg-info' class for a light blue background */}
      <p dataSampleAttribute='test' className='bg-info'>
       {/* Text explaining JSX attribute naming conventions, followed by a line break */}
        * attribute name must be camelCase <br/>
         {/* Additional text explaining why camelCase is used (to avoid conflicts with JavaScript keywords) */}
        * bec some words are keyword in JS
      </p>
     {/* Close the div container */}
    </div>
  );
}

// Export the Attributes component as the default export, making it available for import in other files
export default Attributes;
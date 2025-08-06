// Import the React library, which is required to create React components
import React from "react";

// Define a class-based React component named ReactForm that extends React.Component
class ReactForm extends React.Component {
  // Constructor method to initialize the component's state and bind methods
  constructor(props) {
    // Call the parent class (React.Component) constructor, passing props
    super(props);
    // Initialize the component's state with an email property set to an empty string
    this.state = { email: '' };
    // Bind the handleChange method to the component instance to ensure 'this' refers to the component
    this.handleChange = this.handleChange.bind(this);
    // Bind the handleSubmit method to the component instance for the same reason
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Method to handle changes in the input field
  handleChange(event) {
    // Update the component's state with the new email value from the input field
    this.setState({ email: event.target.value });
  }

  // Method to handle form submission
  handleSubmit(event) {
    // Display an alert with the email value from the state upon form submission
    alert('Submit Success :' + this.state.email);
    // Prevent the default form submission behavior to avoid page reload
    event.preventDefault();
  }

  // Render method to define the component's UI
  render() {
    // Return JSX that describes the component's UI
    return (
      // A form element that triggers handleSubmit when submitted
      <form onSubmit={this.handleSubmit}>
        // Add a line break for spacing
        <br />
        {/* An input element of type text, bound to the email state, and updates on change */}
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
        ></input>

       {/* An empty comment or whitespace (no functional impact) */}
    
         {/* A button of type submit with Bootstrap's btn and btn-primary classes for styling */}
        <button type="submit" value="Register" className="btn btn-primary">
          Register Here
        </button>
      </form>
    );
  }
}

// Export the ReactForm component as the default export, making it available for import in other files
export default ReactForm;
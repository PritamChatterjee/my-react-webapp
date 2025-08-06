// Import the React library, which is required to create React components
import React from "react";

// Import a custom Layout component from a file named 'Layout' in the same directory
import Layout from "./Layout";

// Define a class-based React component named ReactState that extends React.Component
class ReactState extends React.Component {
  // Constructor method to initialize the component's state and bind methods
  constructor() {
    // Call the parent class (React.Component) constructor
    super();
    // Initialize the component's state with a display property set to false
    this.state = { display: false };
    // Bind the toggleDisplay method to the component instance to ensure 'this' refers to the component
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  // Method to toggle the display state between true and false
  toggleDisplay() {
    // Update the state by setting display to the opposite of its current value
    this.setState({ display: !this.state.display });
  }

  // Render method to define the component's UI
  render() {
    // Return JSX that describes the component's UI
    return (
      // A div element serves as the root container for the component's content
      <div>
        // Render the Layout component, likely providing a consistent structure or styling
        <Layout></Layout>
        // A heading level 2 (h2) element displaying "React State"
        <h2>React State </h2>
        // A ternary operator to conditionally render content based on the display state
        {
          this.state.display ? (
            // If display is true, render a div containing a paragraph and a button
            <div>
              {/* // A paragraph element containing placeholder text (Lorem ipsum) */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias molestiae ad accusamus pariatur consequuntur ea dolor, excepturi saepe unde, itaque ipsam eveniet explicabo perferendis aliquid consectetur? Ea, temporibus nihil?
              </p>
              {/* A line break element for spacing */}
              <br></br>
              {/* A button with an onClick event bound to toggleDisplay and Bootstrap classes for styling */}
              <button onClick={this.toggleDisplay} className="btn btn-primary">
                Show More
              </button>
            </div>
          // If display is false, no closing tag or content is provided (incomplete ternary)

                ):(
                    <div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nemo esse rem, magni quaerat necessitatibus totam iusto temporibus quisquam reprehenderit modi vero ipsam. Cumque enim architecto velit porro nisi perferendis.
                            Sit earum laborum quasi sequi porro deleniti quam. Perferendis minima aspernatur deleniti totam nesciunt ducimus facere natus exercitationem molestias est culpa vero quibusdam deserunt, aliquid harum esse dolore qui et.
                            Beatae dolores sapiente tempore nulla sunt, ullam doloremque atque quisquam adipisci vero laboriosam voluptas earum distinctio fugit nemo voluptates quam possimus ipsa numquam harum commodi. Eligendi, deserunt eum! Libero, odit!
                        </p>
                        <br></br>
                        <button onClick={this.toggleDisplay} className="btn btn-primary">Show Less</button>
                    </div>
                )
            }
            </div>
            
        );
    }
}
export default ReactState;
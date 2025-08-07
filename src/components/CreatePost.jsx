// Import React library and useState hook for managing component state
import React, { useState } from "react";
// Import axios library for making HTTP requests
import axios from "axios";

// Define a functional component named CreatePost
const CreatePost = () => {
    // Initialize state variable 'title' with an empty string and 'setTitle' to update it
    const [title, setTitle] = useState("");
    // Initialize state variable 'body' with an empty string and 'setBody' to update it
    const [body, setBody] = useState("");
    // Initialize state variable 'responseMessage' with an empty string to store success/error messages
    const [responseMessage, setResponseMessage] = useState("");

    // Define handleSubmit function to handle form submission, takes event as parameter
    const handleSubmit = (event) => {
        // Prevent default form submission behavior (e.g., page reload)
        event.preventDefault();

        // Create an object 'newPost' with the current values of title and body
        const newPost = {
            title, // Shorthand for title: title
            body,  // Shorthand for body: body
        };

        // Make a POST request to the specified API endpoint with the newPost data
        axios
            .post("https://jsonplaceholder.typicode.com//posts", newPost)
            // Handle successful response: update responseMessage state with success message
            .then(() => {
                setResponseMessage("Post created successfully!");
            })
            // Handle error response: update responseMessage state with error message
            .catch(() => {
                setResponseMessage("Error creating post");
            });
    };

    // Return the JSX to render the component's UI
    return (
        // Container div for the form and related elements
        <div>
             {/* Heading for the form */}
            <h2>Create New Post</h2>
             {/* Form element with onSubmit event handler set to handleSubmit function */}
            <form onSubmit={handleSubmit}>
                {/* Input field for post title */}
                <input
                    // Set input type to text
                    type="text"
                    // Placeholder text shown when input is empty
                    placeholder="Post Title"
                    // Bind input value to the 'title' state variable
                    value={title}
                    // Update 'title' state when the input value changes
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* Textarea for post body content */}
                <textarea
                    // Placeholder text shown when textarea is empty
                    placeholder="Post Body"
                    // Bind textarea value to the 'body' state variable
                    value={body}
                    // Update 'body' state when the textarea value changes
                    onChange={(e) => setBody(e.target.value)}
                />
                {/* Submit button for the form */}
                <button type="submit">Create Post</button>
            </form>
            {/* Conditionally render responseMessage if it exists (non-empty string) */}
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

// Export the CreatePost component as the default export for use in other files
export default CreatePost;
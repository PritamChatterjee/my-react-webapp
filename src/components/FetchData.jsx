import axios from "axios";
// axios is a promise-based HTTP client for the browser and Node.js.
// npm install axios
// It is used to make HTTP requests to servers, allowing you to send and receive data.
// axios is a promise-based HTTP client for the browser and Node.js.
// It is used to make HTTP requests to servers, allowing you to send and receive data.
// axios provides a simple and intuitive API for making requests, handling responses, and managing errors.
// It supports features like request and response interceptors, automatic JSON data transformation, and cancellation of requests.
// axios can be used to perform GET, POST, PUT, DELETE, and other HTTP methods.
// It is widely used in web applications for fetching data from APIs or submitting data to servers.
// axios is often preferred for its ease of use and flexibility compared to the native fetch API.
// It can be easily integrated with React, Vue, and other JavaScript frameworks.
// axios is a popular choice for making HTTP requests in modern web development due to its simplicity and powerful features.
import { useEffect, useState } from "react";
// useEffect is a React hook that allows you to perform side effects in function components.
// It is used to handle operations like data fetching, subscriptions, or manually changing the DOM.
// useEffect runs after the component renders and can be configured to run on specific state or prop changes.
function FetchData()
{
// useState is a React hook that allows you to add state to function components.
// It returns an array with two elements: the current state value and a function to update that state.
// useState is used to manage local component state in functional components, replacing the need for class-based state management.
// It allows you to create reactive components that can respond to user interactions or data changes.
    const[data,setData] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts";
    // useEffect is a React hook that allows you to perform side effects in function components.
    // It is used to handle operations like data fetching, subscriptions, or manually changing the DOM.
    // useEffect runs after the component renders and can be configured to run on specific state or prop changes.
    useEffect( ()=>
         {
            // The empty dependency array [] means this effect runs only once after the initial render.
            // This is similar to componentDidMount in class components.
            // It is used to fetch data from an API when the component mounts.
            // axios.get(url) makes a GET request to the specified URL.
            // promise is a JavaScript object that represents the eventual completion (or failure) of an 
            // asynchronous operation.
            // It allows you to handle asynchronous operations in a more manageable way.
            // In this case, axios.get(url) returns a promise that resolves with the response from the API.
            // It returns a promise that resolves with the response data.
            // The then() method is used to handle the successful response, 
            // setting the data state with setData(res.data).
            // The catch() method is used to handle any errors that occur during the request, logging them to the console.
            axios.get(url)
            .then(res=>setData(res.data))
            .catch(err => console.log(err));
         }, [])
    
         return(
            <div>
                <h1>React API - fetch Data using axios</h1>
                <table>
                    <th>id</th>
                    <th>name</th>
                    <tbody>
                       
                        {
                            data.map((posts,id)=>{
                                return <tr key={id}>
                                    <td>{posts.id}</td>
                                    <td> {posts.title}</td>

                                    <td>{posts.body}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
         )
}
export default FetchData;
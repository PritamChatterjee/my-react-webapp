import React from "react";

import { Component } from "react";
import Layout from "./Layout";

class MyClassCompoent extends Component
{
    
    render() {
        return (
            <>
            <Layout></Layout>
                <h2>Class Component</h2>
                <p>This is a class component in React.</p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nemo numquam dolor velit laboriosam, quam totam provident, libero iusto porro, quidem sequi laudantium veritatis cum harum eos facilis sed. Nam!
                </p>

                <input type="text" placeholder="Enter text here" />
            </>
        );
    }
}
export default MyClassCompoent;
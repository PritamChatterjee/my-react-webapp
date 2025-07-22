import React from "react";

class FullStack extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            course:'Java Fullstack',
            fees:34000.00,
            duration:'3months'
        };
        this.changeFees = () =>{
            this.setState(
                {fees:25000.00}
            );
        }
    }
    render()
    {
        return(
            <div>
                <h2>React State with Props</h2>
                <h3>Course: {this.state.course}</h3>
                <h3>Fees: {this.state.fees}</h3>
                <h3>Duration:{this.state.duration}</h3>

                <button type="button" onClick={this.changeFees} className="btn btn-danger">Change Fees</button>
            </div>
        )
    }

}
export default FullStack;
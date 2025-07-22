import React from "react";

class ReactForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {email:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({email:event.target.value})
    }
    handleSubmit(event)
    {
        alert('Submit Success :' + this.state.email);
        event.preventDefault();
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
            <br />
            <input type="text" value={this.state.email}
                    onChange={this.handleChange}></input>

            &nbsp; &nbsp;
            <button type="submit" value="Register" className="btn btn-primary">Register Here</button>
        </form>
        );
    }
}
export default ReactForm;
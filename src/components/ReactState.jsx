import React from "react";
import Layout from "./Layout";

class ReactState extends React.Component
{
    constructor()
    {
        super();        //base  class constructor 
        this.state = {display:false};   // initialize the state object
        this.toggleDisplay = this.toggleDisplay.bind(this);     // events
    }

    toggleDisplay()
    {
        this.setState({display:!this.state.display});
    }
    render()
    {
        return(
            <div>
                <Layout></Layout>
                 <h2>React State </h2>
            {
                this.state.display?(
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias molestiae ad accusamus pariatur consequuntur ea dolor, excepturi saepe unde, itaque ipsam eveniet explicabo perferendis aliquid consectetur? Ea, temporibus nihil?
                        </p>
                        <br></br>
                        <button onClick={this.toggleDisplay} className="btn btn-primary">Show More</button>
                    </div>

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
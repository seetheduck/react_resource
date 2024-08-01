import React, { Component } from "react";
import ShowNumber from "./ShowNumber";

export default class ShowNumberSuper extends Component{
    render(){
        return(
            <div id="super">
                <h1>ShowNumber Super</h1>
                
                {/* <ShowNumber number={this.props.number}/> */}
                <ShowNumber/>
            </div>
        )
    }
}
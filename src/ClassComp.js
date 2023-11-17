import { Component } from "react";

class ClassComp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>This is class Component</h2>
                <h3>coureName : {this.props.course}</h3>
            </div>
        )
    }
}

export default ClassComp
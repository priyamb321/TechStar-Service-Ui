import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props){
        super(props)
        this.state={
            x:0,
            y:0
        }
    }
    logMousePosition=e=>{
        console.log(e,'mouseee')
        // this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mouseMove',this.logMousePosition())
    }
    render() {
        return (
            <div>
                X-{this.state.x} Y-{this.state.y}
            </div>
        )
    }
}

export default ClassMouse

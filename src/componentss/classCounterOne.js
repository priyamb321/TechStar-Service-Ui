import React, { Component } from "react";

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} did times`;
  }
  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} upd times`;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} titles
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
////////////////////conditionalyy run effectssss------------------text input to class nameee
// import React, { Component } from 'react'

//  class ClassCounterOne extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             count:0,
//             name:''
//         }
//     }
//     componentDidMount(){
//         document.title=`Clicked ${this.state.count} 9 times`
//     }
//     componentDidUpdate(prevProps,prevState){
//         /runing evertimeee---hackkkkk
//         if(prevState.count!==this.state.count){
//             console.log(`Updating document titlee`)
//             document.title=`Clicked ${this.state.count} 888times`
//         }

//     }
//     render() {
//         return (
//             <div>
//                 <input type='text'
//                 value={this.state.name}
//                 onChange={e=>{
//                     this.setState({name:e.target.value})
//                 }}
//                 />
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>Click {this.state.count} titles
//                 </button>
//             </div>
//         )
//     }
// }

// export default ClassCounterOne

import React from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

class Post extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
         Axios.get(`https://jsonplaceholder.typicode.com/posts`)
   .then(response=>{
       const posts=response.data
       console.log(response.data)
       this.setState({posts})
   })
   .catch(err=>{
       alert(err)
   })
    }

    render(){
        return(
            <div>
                <h2>UserPost:{this.state.posts.length}</h2>
          <ul>
              {this.state.posts.map(po=>{
                  return <li key={po.id}><Link to={`/posts/${po.id}`}>{po.title}</Link></li>
              })}
          </ul>
            </div>
        )
    }
}
export default Post

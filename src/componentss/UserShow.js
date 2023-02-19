import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:{},
            posts:[]
        }
    }
    componentDidMount(){
        console.log(this.props)
        const id=this.props.match.params.id
Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
 .then(response=>{
     const users=response.data
     console.log(users)
     this.setState({users})
 })
 Axios.get(`https://jsonplaceholder.typicode.com/posts`)
 .then(response=>{
     const all_post=response.data
     const posts=all_post.filter(po=>po.userId==id)
    // let posts=response.data.filter(po=>po.userId==id)
     console.log("lo",posts)
     this.setState({posts})
 })
}

    render(){
        return(
            <div>
            <h1>UserShow</h1>
            <h2>USER NAME:{this.state.users.name}</h2>
            <h2>Post List-{this.state.posts.length}</h2>
            <ul>
             {this.state.posts.map(post=>{
                 return<li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
             })}   
            </ul>
            </div>
        )
    }
}
export default UserShow
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
          post:{},
          user:{},
          comments:[]

        }

    }
    componentDidMount(){
        const id=this.props.match.params.id
        console.log('id',id)
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            const post=response.data
            this.setState({post})
           // console.log(response.data)
           const user_Id=post.userId
           axios.get(`http://jsonplaceholder.typicode.com/users/${user_Id}`)
           .then(response=>{
               const user=response.data
               console.log(user)
               this.setState({user})
               axios.get(`http://jsonplaceholder.typicode.com/comments`)
               .then(response=>{
                   const comment_all=response.data
                   const comments=comment_all.filter(comment=>comment.postId==user_Id)
            this.setState({comments})
                   console.log(comments)
                })
           })
        })
    }
    render(){
        return(
            <div>
                <h1>Post Show-{this.state.post.id}</h1>
                <h2>USERNAME-{this.state.user.name}</h2>
                <h2>TITLE-{this.state.post.title}</h2>
                <h2>BODY-{this.state.post.body}</h2>
                <h2>COMMENTS-{this.state.comments.length}</h2>
                <ul>
                    {
                        this.state.comments.map(co=>{
                            return<li key={co.id}>{co.body}</li>
                        })
                    }
                </ul>
                <p><Link to={`/users/${this.state.user.id}`}>More posts from {this.state.user.name}</Link></p>
            </div>
        )
    }
}
export default PostShow
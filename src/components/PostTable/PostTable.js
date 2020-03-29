import React, { Component } from 'react'
import Post from '../Post/Post';

class PostTable extends Component{

    showPosts = () =>{
        const posts = this.props.posts;

        if(posts.length === 0) return null;

        return (
            <React.Fragment>
                {Object.keys(posts).map(i =>(
                    <Post key={i} post={posts[i]} deletePost={this.props.deletePost}/>
                ))}
            </React.Fragment>
        )
    }

    render(){
        return(
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Titulo</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showPosts()}
                </tbody>
            </table>
        )
    }
}

export default PostTable;
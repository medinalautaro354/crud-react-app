import React, { Component } from 'react';
import PostTable from '../PostTable/PostTable';

class Posts extends Component{
    render(){
        return (
            <div className='col-12 col-md-8'>
                <h1 className='text-center'>Posts</h1>
                    <PostTable posts={this.props.posts} deletePost={this.props.deletePost}/>          
            </div>
        )
    }
}

export default Posts;
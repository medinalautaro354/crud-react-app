import React, { Component } from 'react'

class DetailPost extends Component{

    showPost = (props) =>{
        if(!props.post) return null;
        const {id, body, title, userId} = this.props.post;

        return (
            <React.Fragment>
                <h1>{title}</h1>
                <p>Autor: {userId}</p>
                {body}
            </React.Fragment>
        )
    }

    render(){
        return(
            <div className='col-12 col-md-8'>
                {this.showPost(this.props)}
                
            </div>
        )
    }
}

export default DetailPost;
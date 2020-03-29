import React, { Component } from 'react'

class FormNewPost extends Component{

    titlePostRef = React.createRef();
    contentPostRef = React.createRef();

    sendData = (e) =>{
        e.preventDefault();
        
        let post = {
            title: this.titlePostRef.current.value,
            body: this.contentPostRef.current.value,
            userId: 1
        }

        this.props.createPost(post);
        
    }
    render(){
        return(
            <form className='col-8' onSubmit={this.sendData}>
                <legend className='text-center'>Crear nuevo post</legend>
                <div className='form-group'>
                    <label>Titulo del post</label>
                    <input type='type' className='form-control' placeholder='Titulo del post' ref={this.titlePostRef}/>
                </div>
                <div className='form-group'>
                    <label>Contenido:</label>
                    <textarea className='form-control' placeholder='Contenido' ref={this.contentPostRef}></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Crear</button>
            </form>
        )
    }
}

export default FormNewPost;
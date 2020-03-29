import React, { Component } from 'react'

class FormUpdatePost extends Component{

    titlePostRef = React.createRef();
    contentPostRef = React.createRef();

    showForm = () =>{

        if(!this.props.post) return null;

        const { body, title} = this.props.post;

        return (
            <form className='col-8' onSubmit={this.sendData}>
                <legend className='text-center'>Editar post</legend>
                <div className='form-group'>
                    <label>Titulo del post</label>
                    <input type='type' className='form-control' defaultValue={title} placeholder='Titulo del post' ref={this.titlePostRef}/>
                </div>
                <div className='form-group'>
                    <label>Contenido:</label>
                    <textarea className='form-control' placeholder='Contenido' defaultValue={body} ref={this.contentPostRef}></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        )
    }

    sendData = (e) =>{
        e.preventDefault();
        const {id, userId} = this.props.post;

        const post = {
            id,
            userId,
            body: this.contentPostRef.current.value,
            title: this.titlePostRef.current.value
        }

        this.props.updatePost(post);
    }

    render(){

        return(
            <React.Fragment>
                {this.showForm()}
            </React.Fragment>
        )
    }
}

export default FormUpdatePost;
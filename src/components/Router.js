import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import Header from './Header/Header';
import NavigatorBar from './NavigatorBar/NavigatorBar';
import {baseUrl} from '../configuration/config';
import Posts from './Posts/Posts';
import DetailPost from './DetailPost/DetailPost';
import FormNewPost from './FormNewPost/FormNewPost';
import FormUpdatePost  from './FormUpdatePost/FormUpdatePost';

class Router extends Component{

    state ={
        posts: []
    }

    componentDidMount(){
        this.getPosts();
    }

    getPosts = () =>{
        let url = `${baseUrl}posts`;

        axios.get(url)
        .then(response =>{

            this.setState({
                posts: response.data
            });
        });

    }

    deletePost = (id) =>{
        let url = `${baseUrl}posts/${id}`;
        
        axios.delete(url)
        .then(response =>{
            if(response.status === 200){

                let posts = [...this.state.posts];
                posts = posts.filter(f => f.id !== id);

                this.setState({
                    posts
                })
            }   
        })

    }

    createPost = (post) =>{
        let url = `${baseUrl}posts`;

        axios.post(url, {post})
        .then(response =>{
            if(response.status === 201){
                this.showSuccessPopUp();
                let id = {id: response.data.id};

                let entity = Object.assign({}, response.data.post, id);

                this.setState(prevState =>({
                    posts: [...prevState.posts, entity]
                }))
            }
        })
    }

    showSuccessPopUp = () =>{
        Swal.fire(
            'Post creado!',
            'Se creo correctamente!',
            'success'
          )
    }

    updatePost = (post) =>{
        let url = `${baseUrl}posts/${post.id}`;

        axios.put(url, {post})
        .then(response => {
            if(response.status === 200){

                Swal.fire(
                    'Post actualizado!',
                    'Se actualizo correctamente!',
                    'success'
                  )
                  
                let id = response.data.id;
                const posts = [...this.state.posts];

                const currentPostId = posts.findIndex(f => f.id === id);

                posts[currentPostId] = post;

                this.setState({
                    posts
                })
            }
        })
    }
    render(){
        return (
            <BrowserRouter>
            <div className='container'>
                <div className='row justify-content-center'>
                    <Header />
                    <NavigatorBar/>
                    <Switch>
                        <Route exact path='/' render={ () =>{
                            return(
                                <Posts posts={this.state.posts} deletePost={this.deletePost}/>
                            )
                        }}/>
                        <Route exact path='/posts/:id' render={(props) =>{
                            let id = props.location.pathname.replace('/posts/', '');

                            let post = this.state.posts.filter(f => f.id == id);

                            return(
                                <DetailPost key={id} post={post[0]}/>
                            )
                        }} />
                        <Route exact path='/crear' render={() =>{
                            return(
                                <FormNewPost createPost={this.createPost}/>
                            )
                        }} />
                        <Route exact path='/editar/:id' render={(props) =>{
                            let id = props.location.pathname.replace('/editar/', '');

                            let post = this.state.posts.filter(f => f.id == id);

                            return(
                                <FormUpdatePost key={id} post={post[0]} updatePost={this.updatePost}/>
                            )
                        }} />
                    </Switch>
                </div>
            </div>
            </BrowserRouter>
        )
    }
}

export default Router;
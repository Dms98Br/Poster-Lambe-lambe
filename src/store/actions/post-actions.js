import {
    SET_POSTS,
    CREATING_POST,
    POST_CREATED
} from './actionTypes-actions'

import axios from 'axios'

export const addPost = post => {
    return dispatch => { 
        dispatch(creatingPost())              
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-lambe-lambe-reactnative-back.cloudfunctions.net/uploadImage',
            method: 'post',
            data:{
                image: post.image.base64
            }
        }).catch( err => console.log('err1', err))//Erro 500 está aqui
        .then( resp => {
            post.image = resp.data.imageUrl            
            axios.post('/posts.json', { ...post })
            .catch(err => console.log('err2', err))
            .then(res => {
                dispatch(fetchPosts())
                dispatch(postCreated())
            })
        })
    }
}

export const addComment = payload =>{        
    console.log('payload', payload);
    return dispatch =>{
        axios.get(`/posts/${payload.postId}.json`)
        .catch( err => console.log(err))
        .then(res => {
            const comments = res.data.comments || []
            comments.push(payload.comments)
            axios.patch(`posts/${payload.postId}.json`, {comments})
            .catch( err => console.log(err))
            .then( res => {
                dispatch(fetchPosts())
            })
        })
    }
    // return{
    //     type: ADD_COMMENT,
    //     payload: payload
    // }
}

export const setPosts = posts =>{    
    return{
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () =>{    
    return dispatch => {
        axios.get('/posts.json')
        .catch( err => console.log('err fetchPosts',err))
        .then( res => {
            const rawPosts = res.data
            const posts = []
            for(let key in rawPosts ){
                posts.push({
                    ...rawPosts[key],
                    id: key
                })
            }
            dispatch(setPosts(posts.reverse()))
        })
    }
}

export const creatingPost = () =>{
    return{
        type: CREATING_POST
    }
}

export const postCreated = () =>{
    return{
        type: POST_CREATED
    }
}
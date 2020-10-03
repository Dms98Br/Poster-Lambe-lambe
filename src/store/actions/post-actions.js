import { SET_POSTS, ADD_COMMENT } from './actionTypes-actions'
import axios from 'axios'
export const addPost = post => {
    return dispatch => {                
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
            .then(res => console.log('res.data ',res.data))
        })
    }
}

export const addComment = payload =>{        
    return{
        type: ADD_COMMENT,
        payload: payload
    }
}

export const setPosts = posts =>{
    console.log('posts-actions',posts);
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
            dispatch(setPosts(posts))
        })
    }
}
import { ADD_POST, ADD_COMMENT } from './actionTypes-actions'
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
            console.log('post.image',post.image);
            axios.post('/posts.json', console.log('Aqui 3',{ ...post }))
            .catch(err => console.log('err2', err))
            .then(res => console.log('Aqui ',res.data))
        })
    }
}

export const addComment = payload =>{    
    console.log('payload ', payload);
    return{
        type: ADD_COMMENT,
        payload: payload
    }
}
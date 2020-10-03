import { Alert } from 'react-native';
import { SET_POSTS, ADD_COMMENT } from '../actions/actionTypes-actions'

const initialState = {
    posts:[]
}

const reducer = ( state = initialState, actions ) =>{        
    switch (actions.type) {        
        case SET_POSTS:
            return {
                ...state,
                posts: actions.payload
            }
        case ADD_COMMENT:            
            //console.log('state.posts fora posts: ', state.posts);
            return{
                ...state,
                posts: state.posts.map( post => {
                    if(post.id === actions.payload.postId){                        
                        if( post.comments ){
                            post.comments = post.comments.concat(
                                actions.payload.comment
                            )
                        } else{
                            post.comments = [ actions.payload.comment ]
                        }
                        // console.log('post ', post);
                        // console.log('state.posts antes do return ', state.posts);
                        return post
                    }
                })
            }
        default:
            return state
    }
}
export default reducer
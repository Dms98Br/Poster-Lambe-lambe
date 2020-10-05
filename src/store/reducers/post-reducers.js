import { Alert } from 'react-native';
import {
    SET_POSTS,
    CREATING_POST,
    POST_CREATED
} from '../actions/actionTypes-actions'

const initialState = {
    posts:[],
    isUploading: false
}

const reducer = ( state = initialState, actions ) =>{        
    switch (actions.type) {        
        case SET_POSTS:
            return {
                ...state,
                posts: actions.payload
            }
        case CREATING_POST:
            return{
                ...state,
                isUploading: true
            }
        
        case POST_CREATED:
            return{
                ...state,
                isUploading: false
            }

        default:
            return state
    }
}
export default reducer
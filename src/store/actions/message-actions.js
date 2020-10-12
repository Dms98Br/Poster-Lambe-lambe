import { SET_MESSAGE } from './actionTypes-actions'

export const setMessage = message => {
    return{
        type: SET_MESSAGE,
        payload: message
    }
}
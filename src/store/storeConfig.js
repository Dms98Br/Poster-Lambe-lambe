import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user-reducers'
import postReducer from './reducers/post-reducers'

const reducers = combineReducers({
    user: userReducer,
    posts: postReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig
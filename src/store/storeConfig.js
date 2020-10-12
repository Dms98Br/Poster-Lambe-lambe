import { 
    createStore, 
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user-reducers'
import postReducer from './reducers/post-reducers'
import messageReducer from './reducers/message-reducer'

const reducers = combineReducers({
    user: userReducer,
    posts: postReducer,
    message: messageReducer
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig
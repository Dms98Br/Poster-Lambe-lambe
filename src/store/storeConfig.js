import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user-reducers'

const reducers = combineReducers({
    user: userReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig
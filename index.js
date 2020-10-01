
import {AppRegistry} from 'react-native';
import Navigator from './src/Navigator'
import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'
import {name as appName} from './app.json';
const store = storeConfig()

axios.defaults.baseURL = 'https://lambe-lambe-reactnative-back.firebaseio.com/'

const Redux = () =>(
    <Provider store={store}>
        <Navigator />
    </Provider>
)


AppRegistry.registerComponent(appName, () => Redux);

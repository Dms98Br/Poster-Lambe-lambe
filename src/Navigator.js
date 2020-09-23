import React,{Component} from 'react'
import { 
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './Screens/Feed'
import AddPhoto from './Screens/AddPhoto'
import Profile from './Screens/Profile'
import Login from './Screens/Login'
import Register from './Screens/Register'

const authRouter = createStackNavigator({
    Login :{ screen: Login, navigationOptions: { title: 'Login' } },
    Register: { screen: Register, navigationOptions: { title: 'Register' } }
},{
    initialRouteName: 'Login'
})

const loginOrProfileRouter= createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter,
}, {
    initialRouteName: 'Auth'
})

const MenuRoutes={
    Feed:{
        name:'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor })=>
                <Icon name='home' size={30} color={tintColor}/>
        }
    },
    Add:{
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions:{
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) =>
            <Icon name='camera' size={30} color={tintColor}/> 
        }
    },
    Profile:{
        name: 'Profile',
        screen: loginOrProfileRouter,
        navigationOptions:{
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
            <Icon name='user' size={30} color={tintColor}/> 
        }
    }
}
const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions:{
        showlabel: false
    }
}
const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

export default MenuNavigator


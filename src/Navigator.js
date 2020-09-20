import React,{Component} from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './Screens/Feed'
import AddPhoto from './Screens/AddPhoto'

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
        screen: Feed,
        navigationOptions:{
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
            <Icon name='user' size={30} color={tintColor}/> 
        }
    }
}
const MenuConfig = {
    InitialRouteName: 'Feed',
    tabBarOptions:{
        showlabel: false
    }
}
const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

export default MenuNavigator


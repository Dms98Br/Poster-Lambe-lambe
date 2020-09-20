import React, { Component } from 'react';
import Header from './src/components/Header'
import Post from './src/components/Post'
import { View } from 'react-native'

export default class App extends Component{
  render(){
    const comments =[{
      nickname: 'Ze',
      comment:'Nice !'
    },{
      nickname: 'Sesinho',
      comment: 'Maravilha'
    }]
    return(
      <View style={{flex: 1}}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')}
          comments={comments}/>
        
      </View>
    )
  }
}


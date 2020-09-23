import React, { Component } from 'react'
import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component{
    state={
        posts:[{
            id: Math.random(),
            nickname: 'Rafael',
            email: 'rafs@email.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments:[{
                nickname: 'Jonh',
                comment: 'Stunning'
            },{
                nickname: 'AnJu',
                comment:'Bela foto'
            }]
        },{
            id: Math.random(),
            nickname: 'Chico',
            email: "chiquinho@email.com",
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render(){
        return(
            
            <View style={ styles.container}>
                <Header/>
                <FlatList 
                    data={this.state.posts}
                    keyExtractor={item=>`${item.id}`} 
                    renderItem={({ item })=>
                        <Post key={ item.id }{ ...item }/>
                    }
                />

            </View>
            
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})
export default Feed

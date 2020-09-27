import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, FlatList, View, LogBox } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component{
    render(){        
        console.log('Feed', this.props.posts)
        return(        
            <View style={ styles.container}>
                <Header/>                
                <FlatList 
                    data={ this.props.posts }
                    keyExtractor={item => `${item.id}`} 
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

const mapStateToProps = ({ posts }) => {
    console.log('postsFeed', posts.posts);
    return{
        posts: posts.posts
    }
}
export default connect(mapStateToProps)(Feed)
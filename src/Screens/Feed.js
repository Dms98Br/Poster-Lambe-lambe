import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/header'
import Post from '../components/post'
import { fetchPosts } from '../store/actions/post-actions'

class Feed extends Component{
    componentDidMount = () =>{
        this.props.onFetchPosts()
    }
    render(){
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
    return{
        posts: posts.posts
    }
}

const mapDistpatchToProps = dispatch =>{
    return {
        onFetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Feed)
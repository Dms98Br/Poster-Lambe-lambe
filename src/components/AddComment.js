import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../store/actions/post-actions'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as  TWF,
    TouchableOpacity as TO,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComments extends Component{
    state={
        comment: '',
        editmode: false
    }

    handleAddComment=()=>{        
        // console.log('this.props.postId ', this.props.postId)
        // console.log('this.props.name ', this.props.name)
        // console.log('this.state.comment ', this.state.comment)
        this.props.onAddComment({
            postId: this.props.postId,
            comment: {
                nickname: this.props.name,
                comment: this.state.comment
            }
        })        
        this.setState({ comment: '', editMode: false })
    }

    render(){
        let commentArea = null
        if (this.state.editmode){
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder='Pode comentar...' style={styles.input} 
                        autoFocus={true} value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment}/>
                    <TO onPress={()=> this.setState({ editmode: false })}>
                        <Icon name='times' size={15} color='#555'/>
                    </TO>
                </View>
            )
        } else{
            commentArea = (
                <TO onPress={()=> this.setState({editmode: true})}>
                    <Icon style={{marginLeft: 10}} name='comment-o' size={25} color='#555'/>
                    <Text style={styles.caption}>
                        Adicionar comentário
                    </Text>
                </TO>
            )
        }
        return(
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    caption:{
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC',        
    },
    input:{
        width: '90%'
    }
})

const mapStateToProps = ({ user }) =>{
    return{
        name: user.name
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onAddComment: payload => dispatch(addComment(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComments)
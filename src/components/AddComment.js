import React, { Component } from 'react'
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
        Alert.alert('Adicionado', this.state.comment)
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
export default AddComments
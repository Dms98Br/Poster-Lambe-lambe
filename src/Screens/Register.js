import React,{ Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity as TO,
    TextInput
} from 'react-native'
import { connect } from 'react-redux'
import { createUser } from '../store/actions/user-actions'

class Register extends Component{
    state={
        name: '',
        email: '',
        password: ''
    }
    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading){
            this.setState({
                name: '',
                email: '',
                password: ''
            })
            this.props.navigation.navigate('Profile')
        }
    }
    render(){
        return(
            <View style={styles.container}>
            <TextInput placeholder='Nome' style={styles.input}
                autoFocus={true} value={this.state.name}
                onChangeText={ name => this.setState({ name })}/>
            <TextInput placeholder='E-mail' style={styles.input}
                value={this.state.email}
                keyboardType='email-address'
                onChangeText={ email => this.setState({ email })}/>
            <TextInput placeholder='Senha' style={styles.input}
                value={this.state.password} secureTextEntry={true}
                onChangeText={ password => this.setState({ password })}/>            
            <TO 
                onPress={ () => { this.props.onCreateUser(this.state) } }
                style={styles.buttom}>
                <Text style={styles.buttomText}>Salvar</Text>
            </TO>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText:{
        fontSize: 20,
        color:'#FFF'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})

const mapDispatchToProps = dispatch => {
    return{
        onCreateUser: user => dispatch( createUser(user) )
    }
}
const mapStateToProps = ({ user }) =>{
    return{
        isLoading: user.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
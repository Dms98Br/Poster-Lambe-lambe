import React,{ Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity as TO,
    TextInput
} from 'react-native'

class Login extends Component{
    state={
        email:'',
        password:''
    }
    login = () => {
        this.props.navigation.navigate('Profile')
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder='E-mail' style={styles.input}
                    autoFocus={true} keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput placeholder= 'Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password} />
                <TO onPress={this.login} style={styles.buttom}>
                    <Text style={styles.buttomText}>Login</Text>
                </TO>
                <TO onPress={ () => {
                    this.props.navigation.navigate('Register')
                } } style={styles.buttom}>
                    <Text style={styles.buttomText}>Criar nova conta...</Text>
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
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText:{
        fontSize: 20,
        color: '#FFF'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }
})
export default Login
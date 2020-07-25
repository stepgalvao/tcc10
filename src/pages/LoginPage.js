import  React, {Component} from 'react'
import { Container, Icon } from 'native-base'
import { View,Text, StyleSheet,TextInput,Button, TouchableOpacity,Image} from 'react-native'
import CustomHeader from '../components/CustomHeader'
import * as Navigation from '../components/CustomNavigation'
import HomePage from './HomePage'




export default class LoginPage extends Component{

    constructor(props){
        super(props)
        this.state={
          logo: '<TCC/>',
          login: '',
          password: ''
        }
        this.logar = this.logar.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
        this.openFacebook = this.openFacebook.bind(this);
        this.openGoogle = this.openGoogle.bind(this);
    }

    static PAGE_NAME = "/Login";   
    
    static active(param=undefined){
      console.log(`${this.PAGE_NAME} actived with param ${param}`)
      Navigation.navigate({name:this.PAGE_NAME,param:param})
  }

  //função que chama pagina HOME sem validação ainda

  logar(){
    HomePage.active()
  }

  //função que chama pagina Cadastro 

  cadastrar(){
    CadastroPage.active();
  }

  //função Logar com facebook

  openFacebook(){
    alert('Logar com facebook');
  }

  //função Logar com google

  openGoogle(){
    alert('Logar com Google');
  }

    render(){
      
        return(
            <Container>                
                
                <View style={styles.container}>

                     <Image
                      source={require('../../assets/logo2.png')}
                      style={styles.imagem1}
                      />

                    <View style={styles.areaInput}>
                
                        <Text style={styles.texto}>Email</Text>
                        <TextInput
                        style={styles.input}
                        value={this.state.login}
                        placeholder='digite seu email...'
                        onChangeText={(text)=> this.setState({login: text})}
                        />

                        <Text style={styles.texto}>Senha</Text>
                        <TextInput
                        style={styles.input}
                        value={this.state.password}
                        placeholder='digite sua senha...'
                        secureTextEntry = {true}
                        onChangeText={(text)=>this.setState({password: text})}
                        />

                        <Button
                        style={styles.botao}
                        title='ENTRAR'
                        onPress={this.logar}                    
                        />

                        <TouchableOpacity
                        style={styles.opacity}
                          onPress={this.cadastrar}
                        >
                          <Text style={styles.opacityText}>Cadastrar</Text>
                        </TouchableOpacity>

                        <View style={styles.viewOpacity}>
                        
                            <TouchableOpacity
                            style={styles.opacityFace}
                              onPress={this.openFacebook}
                            >
                              <Text style={styles.textToucha}>
                                <Icon name='logo-facebook' style={styles.icon}/>  Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={styles.opacityGoogle}
                              onPress={this.openGoogle}
                            >
                              <Text style={styles.textToucha}>
                              <Icon name='logo-google' style={styles.icon}/>  Google</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
        
                </View>                  
                    
            
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },

    areaInput:{
     backgroundColor: '#F5F5DC',
     width: 300,
     height: 400,
     borderRadius: 10
    },

    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10
      },
    
      input:{
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        borderColor: '#121212',
        borderWidth: 1,
        height: 40,
        width: 300,
        fontSize: 17,
        borderRadius: 5,
      },

      textoLogo:{
        marginBottom: 70,
        fontSize: 50,
        color: '#120a8f',
        fontWeight: 'bold'   
      },

      opacity:{
         marginTop: 30,      
      },

      opacityText:{
        color: '#000',
        fontSize: 20,
        marginLeft: 10 
      },

      imagem1: {
        height: 150,
        width: 100,
        borderRadius: 20,
      },

      viewOpacity:{
        alignItems: 'center',
        justifyContent: 'center'
      },

      opacityFace:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 200,
        height: 40,
        backgroundColor: '#0000FF',
        borderRadius: 15
      },

      opacityGoogle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: 200,
        height: 40,
        backgroundColor: '#FF0000',
        borderRadius: 15
      },

      textToucha:{
       color: '#FFF'
      },

      icon:{
        color: '#FFF',
        fontSize: 18 
      }    
});
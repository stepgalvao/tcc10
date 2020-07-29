import React, { Component } from 'react'
import { Container, Icon, Content} from 'native-base'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, Form } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import * as Navigation from '../components/CustomNavigation'
import HomePage from './HomePage'


export default class CadastroPage extends Component {

 

    static PAGE_NAME = "/CadastroPage";

    static active(param = undefined) {
        console.log(`${this.PAGE_NAME} actived with param ${param}`)
        Navigation.navigate({ name: this.PAGE_NAME, param: param })
    }

    

    render() {

        return (
            <Container>
                <CustomHeader title="Cadastro"/>
                <Content  >
                    <View style={styles.container}> 
           
                    <Text>digite seu nome </Text>                   
                        <TextInput  style={styles.form} placeholder="digite seu nome " textContentType="name"/>
                        <Text>digite sua matricula</Text>
                        <TextInput style={styles.form} placeholder="digite sua matricula " />
                        <Text>digite sua Senha </Text>
                        <TextInput style={styles.form} placeholder="digite sua Senha " textContentType="password"/>
                    
                    </View>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:50,
    },
    form:{
        height: 40, 
        width: 300,
        borderColor: 'gray',
         borderWidth: 1 ,
         borderRadius:30,
         paddingLeft:10,
         paddingRight:10,
         textAlign: 'center',
    }
});

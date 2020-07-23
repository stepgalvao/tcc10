import  React, {Component} from 'react'
import { Container, Body, Content } from 'native-base'
import { Text } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import * as Navigation from '../components/CustomNavigation'


export default class DisciplinaPage extends Component{
    static PAGE_NAME = "/Disciplina";
    
    /**
     * 
     * @param {Normas.Param} param Need param to active the page 
     */
    static active(param=undefined){
        console.log(`${this.PAGE_NAME} actived with param ${param}`)
        Navigation.navigate({name:this.PAGE_NAME,param:param})
    }

    render(){
        return(
            <Container>
                <CustomHeader title="Disciplina" subtitle="Parte de Disciplina"/>
                <Content>
                    <Text>"Disciplina Page"</Text>
                </Content>
            </Container>
        )
    }
}
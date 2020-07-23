import  React, {Component} from 'react'
import { Container, Body, Content } from 'native-base'
import { Text } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import * as Navigation from '../components/CustomNavigation'


export default class NormasPage extends Component{
    static PAGE_NAME = "/Normas";
    
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
                <CustomHeader title="Normas" subtitle="Normas de escrita"/>
                <Content>
                    <Text>"Normas Page"</Text>
                </Content>
            </Container>
        )
    }
}
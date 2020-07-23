import React, {Component} from 'react'
import { Header, Body, Left, Right, Icon, Text, Title, Button, Subtitle } from 'native-base'
import { StyleSheet, View } from 'react-native'
import * as Naviagtion from '../components/CustomNavigation'
/**
 * Props: 
 *  title
 */
export default function CustomHeader({title,subtitle,backButton=true}){
    return(
        <Header>
            
            <Left style={styles.left}>
                {
                    Naviagtion.asBackPage() &&
                    <Button transparent onPress={()=>Naviagtion.goBack()}>
                        <Icon name='left' type='AntDesign'/>
                    </Button>
                }
            </Left>
            <Body style ={styles.body}>
                <View style={{flexDirection:'column'}}>
                    <Title style={styles.title}>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </View>
            </Body>
            <Right style = {styles.right}>
                <Button transparent>
                    <Icon name='menu'/>
                </Button>
            </Right>
        </Header>
    )
}


const styles = StyleSheet.create({
    left:{
        flex:1
    },

    right:{
        flex:1
    },
    body:{
        justifyContent:'center', 
        flexDirection:'row', 
        flex:2
    },
    

    title:{
        textAlign:'center'
    }

})
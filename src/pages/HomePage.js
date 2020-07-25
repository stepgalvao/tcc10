import React,{ Component } from "react";
import { View, Text, StyleSheet,Dimensions, Alert, } from "react-native";
import { Body, Container, Header, Title, Right, Button, Icon, Left, Content, Subtitle, Grid, Col, Card, Footer, FooterTab } from "native-base";
import * as Colors from '../style/Colors'
import * as MyGridMenu from '../components/CustomGridMenu'
import CustomHeader from "../components/CustomHeader";
import DisciplinaPage from "./DisciplinaPage";
import NormasPage from "./NormasPage";
import * as Navigation from '../components/CustomNavigation'





class ItemModel{
    constructor(title,iconName,iconFonte){
        this.title = title
        this.iconName = iconName
        this.iconFonte = iconFonte
    }
}

const MENU_LIST = [
    new MyGridMenu.ItemModel({
        name:"Normas ABNT",
        callback:()=>{
            NormasPage.active()
        },
        icon:new MyGridMenu.ItemModel.IconModel({name:'earth', type:"AntDesign"})
    }),
    new MyGridMenu.ItemModel({
        name:"Disciplina", 
        callback:()=>{
            DisciplinaPage.active()
        },
        icon:new MyGridMenu.ItemModel.IconModel({name:"book-open",type:"SimpleLineIcons"})
    }),
    new MyGridMenu.ItemModel({
        name:"Repositorios",
        callback:()=>{Alert.alert('Repositorios')},
        icon:new MyGridMenu.ItemModel.IconModel({name:'database', type:"AntDesign"})
    }),
    new MyGridMenu.ItemModel({
        name:"Orientações",
        callback:()=>{Alert.alert('Orientações')},
        icon:new MyGridMenu.ItemModel.IconModel({name:'graduation-cap', type:"FontAwesome"})
    }),
    new MyGridMenu.ItemModel({
        name:"Ferramentas",
        callback:()=>{Alert.alert('Ferramentas')},
        icon:new MyGridMenu.ItemModel.IconModel({name:'cubes', type:"FontAwesome"})
    }),
    new MyGridMenu.ItemModel({
        name:"Sugestões",
        callback:()=>{Alert.alert('Sugestão')},
        icon:new MyGridMenu.ItemModel.IconModel({name:'question-cap', type:"FontAwesome"})
    }),
];

export default class HomePage extends Component{
    static PAGE_NAME = "/Home"
    /**
     * 
     * @param {navigation} navigation Navigation object from react navigation 
    
    static active({navigation,param}){
        Navigation.navigate(this.PAGE_NAME)
    }*/

    static active(param=undefined){
        console.log(`${this.PAGE_NAME} actived with param ${param}`)
        Navigation.navigate({name:this.PAGE_NAME,param:param})
    }

        render(){
        const headerTitle = 'TCC 10'
        const headerSubtitle = 'Modulo de Teste'
        return(
            <Container>
                <CustomHeader title={headerTitle} subtitle={headerSubtitle}/>
                <Content contentContainerStyle={{flex:1}}>
                    <View style={[{flex:1,paddingTop:30}]}>
                        <MyGridMenu.GridMenu items={MENU_LIST}/>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>

                    </FooterTab>
                </Footer>
            </Container>    
        )
    }
}

function GridMenu({items}){
    let rows =[]
    for (i=0;i<items.length;i+=2){
        console.log(`Add item ${i}`);
        rows.push(
            <Grid key={i}>
                <Col>
                    <Item item={items[i]} index={i}/>                        
                </Col>
                <Col>
                    <Item item={items[i+1]} index={i+1}/>   
                </Col>
            </Grid>
        )
    }
    return rows;
}

function Item(props) {
    //const colors = ["#9999ff","#040430","#040e67", "#6666ff","#5555ff","#043c73","#041c54","#0000ff"]
    return(
        <View style={[styles.itemContainer]}>
            <View style={styles.itemBody}>
                <Icon type={props.item.iconFonte} name={props.item.iconName} style={{fontSize:60, color:Colors.PRIMARY}}/>
                <View style={{paddingTop:10}}>
                    <Text style={{color:"black",}}>{props.item.title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },
    headerTitle:{
      textAlign: "center" ,
      fontWeight:'bold',
      fontSize:20,

    },
    headerTitleContainer:{
      alignContent:'center',
      flex:1

    },
    showBorder:{
      borderColor: 'black',
      borderWidth:10,
    },
    listConteiner:{
        flex:1,
        //marginVertical:20,
    },
    itemContainer:{
        alignItems:'stretch',
        justifyContent: 'center',
        flex: 1,
        height: (Dimensions.get("window").width/2),
        padding:20,
    },

    itemBody:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        borderColor: Colors.BORDER,
        borderWidth:1
    }
});

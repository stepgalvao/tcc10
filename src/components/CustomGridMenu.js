import React, {Component} from 'react'
import { View, StyleSheet, Text, Dimensions, Alert, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Icon, Button } from 'native-base'
import * as Colors from '../style/Colors'
import { TouchableHighlight } from 'react-native-gesture-handler'

/**
 * Model of Item used in this GridMenu
 */
export class ItemModel{

    static IconModel = class IconModel{
        /**
         * 
         * @param {String} name Name of icon
         * @param {String} type Icon database of vector icons  
         * @param {()=>{}} callback Callback function active on press the item.  
         */
        constructor({name,type,callback}){
            this.name=name
            this.type=type
        }
        
        toString(){
            return `IconModel(name:${this.name} type ${this.type})`
        }
    }
    /**
     * 
     * @param {String} name name item
     * @param {IconModel} icon icon used on the item
     */
    constructor({name,icon,callback}){
        this.name = name
        this.icon = icon
        this.callback = callback
    }

    toString(){
        return `ItemModel(name:${this.name} icon:${this.icon})`
    }
}

/**
 * 
 * @param {Item[]} items List of menu items Item(name Icon(name,type))  
 */
export function GridMenu({items}) {
    //const items = []
    const rows = []
    for (let i=0;i<items.length;i+=2){
        rows.push(
            <GridRow items={items.slice(i,i+2)}/>
        )
    }
    
    return(
        <View style={styles.gridMenuContainer}>
            {rows}
        </View>
    )
}

function GridRow({items}) {
    
    console.log(`items: ${items}`)
    
    return (
        <View style={[styles.gridRow]}>
            <GridItem item={items[0]}/>
            <GridItem item={items.length<2?undefined:items[1]}/>
        </View>
    )
}

function GridItem({item}) {
    //const item = new ItemModel()
    return (

        <View style={[styles.itemContainer]}> 
            <TouchableWithoutFeedback onPress={item.callback} style={{flex:1}}>
            <View style={[styles.showBorder,{justifyContent:'center',flex:1,flexDirection:'column'}]}>
                {item!=undefined && <Icon name = {item.icon.name} type={item.icon.type} style={styles.itemIcon}/> }
                {item!=undefined && <Text style={styles.itemName}>{item.name}</Text>}
            </View>
            </TouchableWithoutFeedback>
        </View>        
    )
}


const styles = StyleSheet.create({
    gridMenuContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'stretch',
    },
    gridRow:{
        paddingLeft:30,
        paddingRight:30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    itemContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        height:(Dimensions.get("window").height/4)-10,
        padding:5
        //width:(Dimensions.get("window").height/4)
    },
    itemIcon:{
        color:Colors.PRIMARY,
        textAlign:'center'

    },
    itemName:{
        color:Colors.TEXT.PRIMARY,
        textAlign:'center'

    },
    showBorder:{
        borderColor:Colors.BORDER,
        borderWidth:1
    }
})
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Image, View, TouchableOpacity,Text, StyleSheet } from 'react-native'

function ItemMenu( { item } ){
    const focused = item.navigation.isFocused();
    return(
        <TouchableOpacity
            style={styles.item(focused)}
            onPress={()=>item.navigation.navigate(item.route.name)}
        >
            <Text style={styles.text(focused)}>
            {
                item.options.title ? item.options.title :
                item.route.name
            }
            </Text>
        </TouchableOpacity>
    )
}

export default function CompDrawer(props) {
  const listMenu = Object.values(props.descriptors)
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor:'#222933',marginTop:-5}} >
        <View style={{backgroundColor:'#318551',padding:20,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontWeight:600,fontSize:20}}>Survey Jalan App</Text>
            <View style={{marginVertical:20,width:100,height:100,backgroundColor:'white',borderRadius:100,padding:10}}>
                <Image style={{width:'100%',height:'100%'}} source={require('../../../assets/img/logo_ptpn.png')} />
            </View>
            <Text style={{color:'#fff',fontSize:17,fontWeight:'bold',textAlign:'center'}}>1234567 - Full Name - Role - AFDX </Text>
            <TouchableOpacity style={{backgroundColor:'#fc8412',paddingVertical:8,paddingHorizontal:25,justifyContent:'center',alignItems:'center',borderRadius:30,marginTop:20}}>
                <Text style={{fontSize:15,color:'#fff',fontWeight:'bold'}}>Log Out</Text>
            </TouchableOpacity>
        </View>
        {
            listMenu.map((item,index)=>{
                return <ItemMenu item={item} key={index} /> 
            })
        }
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    item: (focused) => ({
        backgroundColor:'red',
        paddingVertical:10,
        paddingHorizontal:15,
        backgroundColor: focused ? '#3a4657' : '#222933',
    }),
    text: (focused) => ({
        fontSize:16,
        fontWeight: focused ? 'bold' : 'normal',
        color:focused ? '#8c8d8f' : '#8c8d8f'
    })
})
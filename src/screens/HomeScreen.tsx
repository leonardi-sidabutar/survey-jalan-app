import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen( {navigation} ) {
  return (
    <ScrollView style={{padding:5}}>
    <View style={styles.boxInfo}>
      <Text style={{fontSize:14,fontWeight:600,color:'#000',marginBottom:15}}>SURVEYOR INFORMATION</Text>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image
            style={{width:80,height:80}}
            source={require('../../assets/img/logo_ptpn.png')}
        />
        <View style={{marginLeft:15}}>
            <Text>Name : LEONARDI SIDABUTAR</Text>
            <Text>Kebun : <Text style={{fontWeight:'bold'}}>ADO</Text></Text>
            <Text>Afd : AFDELING I</Text>
            <Text>Last Photo : 12-12-2023</Text>
        </View>
      </View>
    </View>
    <View style={styles.boxInfo}>
        <Text style={{fontSize:14,fontWeight:600,color:'#000',marginBottom:10}}>SURVEY INFORMATION</Text>
        <Text>Photo Log :</Text>
        <Text>Last Photo :</Text>
        <TouchableOpacity
            style={{backgroundColor:'#fc8412',padding:8,justifyContent:'center',alignItems:'center',borderRadius:30,marginTop:20}}
            onPress={()=>navigation.navigate('Map')}
        >
            <Text style={{fontSize:16,fontWeight:'bold',color:'#fff'}}>Photo Survey Sync</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    boxInfo:{
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:10,
        backgroundColor:'#FFF',
        padding:15,
        margin:10
    }
})
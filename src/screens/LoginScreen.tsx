import React, { useState } from 'react'
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native'

export default function LoginScreen( { navigation } ) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function Login
  const login = () => {
    navigation.navigate('MainDraw')
  }

  return (
    <ScrollView>
      <View style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',padding:20}}>
        <Text style={{fontSize:24,marginBottom:60,fontWeight:600}}>Survey Jalan</Text>
        <Image
          style={{width:125,height:125,marginBottom:40}}
          source={require('../../assets/img/logo_ptpn.png')}
        />
        <View style={{width:'100%'}}>
          <TextInput style={styles.formInput} placeholder='Username' value={username} onChangeText={(value)=>setUsername(value)} />
          <TextInput style={styles.formInput} placeholder='Password' value={password} onChangeText={(value)=>setPassword(value)} />
          <TouchableOpacity
            style={{margin:5,backgroundColor:'#378d58',padding:10,justifyContent:'center',alignItems:'center',borderRadius:30,marginTop:20}}
            onPress={login}
          >
            <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
    </View>
    {/* <DatePicker date={date} onDateChange={setDate} /> */}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  formInput:{
    borderColor:'#ddd',
    borderWidth:1,
    backgroundColor:'#fff',
    borderRadius:10,
    padding:8,
    margin:5
  }
})
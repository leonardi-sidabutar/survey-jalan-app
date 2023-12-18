import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Tanggal() {

  // Mengatur Data Tanggal
  const [month, setMonth] = useState('')
  const [year, setYear]   = useState('')

  useEffect(()=>{
    // Dapatkan informasi bulan dan tahun saat ini
    const curentDate   = new Date() ;
    const curentMonth  = curentDate.getMonth() + 1 ;
    const curentYear   = curentDate.getFullYear() ;

    // Setel nilai default pada state
    setMonth(String(curentMonth))
    setYear(String(curentYear))
  },[])

  return (
    <View style={styles.formTanggal}>
    <View style={{padding:5,width:'20%'}}>
      <Text>Periode</Text>
    </View>
    <View style={{padding:5,width:'40%'}}>
      <View style={{backgroundColor:'#f2f2f2',borderRadius:5}}>
        <RNPickerSelect
            placeholder={{
              label: 'Pilih Bulan Survey',
              value: null,
            }}
            onValueChange={(value) => setMonth(value)}
            items={[
              { label: 'JAN', value: '1' },
              { label: 'FEB', value: '2' },
              { label: 'MAR', value: '3' },
              { label: 'APR', value: '4' },
              { label: 'MEI', value: '5' },
              { label: 'JUN', value: '6' },
              { label: 'JUL', value: '7' },
              { label: 'AGS', value: '8' },
              { label: 'SEP', value: '9' },
              { label: 'OKT', value: '10' },
              { label: 'NOV', value: '11' },
              { label: 'DES', value: '12' },
            ]}
            value={month}
        />
      </View>
    </View>
    <View style={{padding:5,width:'40%'}}>
      <View style={{backgroundColor:'#f2f2f2',borderRadius:5}}>
        <RNPickerSelect
          placeholder={{
            label: 'Pilih Tahun Survey',
            value: null,
          }}
          onValueChange={(value) => setYear(value)}
          items={[
            { label: '2021', value: '2021' },
            { label: '2022', value: '2022' },
            { label: '2023', value: '2023' },
          ]}
          value={year}
        />
      </View>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
    },
    formTanggal:{
      width:'100%',
      backgroundColor:'#fff',
      flexDirection:'row',
      alignItems:'center'
    }
  });
import React, { useState } from 'react'
import { Image, SafeAreaView, View,Text, Pressable, StyleSheet } from 'react-native'
import { launchCamera , launchImageLibrary } from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

// Component
import Tanggal from '../components/Tanggal'

export default function ImageScreen() {
  const [images, setImages] = useState([]);

  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(option, (res) => {
      if (res.didCancel) {
        console.log('User Cancel Image Picker');
      } else if (res.errorCode) {
        console.log('Error Camera : ', res.errorMessage);
      } else {
        const data = res.assets[0];
        setImages([...images, data]);
        console.log(data);
      }
    });
  };

  const openGalery = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(option, (res) => {
      if (res.didCancel) {
        console.log('User Cancel Image Picker');
      } else if (res.errorCode) {
        console.log('Error Camera : ', res.errorMessage);
      } else {
        const data = res.assets[0];
        setImages([...images, data]);
        console.log(data);
      }
    });
  };

  console.log("Image Data : ",images);

  return (
    <SafeAreaView>

      {/* Component Tanggal */}
      <Tanggal/>

      {images.length > 0 && (
        <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>
          {images.map((image, index) => (
            <View key={index} style={{ width: '50%', padding: 5 }}>
              <View style={{ padding: 8, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '100%', height: 120 }} source={{ uri: image.uri }} />
                <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="image" size={20} color="tomato" />
                  <Text style={{ fontSize: 13, marginLeft: 5 }}>{image.fileSize} MB</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Pressable onPress={openCamera} style={{ padding: 10, margin: 10, backgroundColor: '#318551' }}>
          <Text>Open Camera</Text>
        </Pressable>

        <Pressable onPress={openGalery} style={{ padding: 10, margin: 10, backgroundColor: '#318551' }}>
          <Text>Open Galery</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
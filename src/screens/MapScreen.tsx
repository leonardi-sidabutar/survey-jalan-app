import React, { useEffect, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { View, StyleSheet, Text } from 'react-native';
import Tanggal from '../components/Tanggal';

const MapScreen = () => {
  const markers = [
    { title: 'Berlin', coordinates: { latitude: 52.5172, longitude: 13.3889 } },
    { title: 'New York', coordinates: { latitude: 40.7306, longitude: -73.9352 } },
    { title: 'Tokyo', coordinates: { latitude: 35.6895, longitude: 139.6917 } },
    { title: 'MyHome', coordinates: { latitude: 3.5222055314182983, longitude: 98.70719121534255 } },
  ];

  const polylineCoordinates = [    
    { latitude: 2.6928, longitude: 99.5860 },
    { latitude: 2.6959, longitude: 99.5860 },
    { latitude: 2.6959, longitude: 99.5861 },
    { latitude: 2.6959, longitude: 99.5861 },
    { latitude: 2.6959, longitude: 99.5862 },
    { latitude: 2.6959, longitude: 99.5864 },
    { latitude: 2.6959, longitude: 99.5865 },
    { latitude: 2.6958, longitude: 99.5866 },
    { latitude: 2.6952, longitude: 99.5882 },
    { latitude: 2.6973, longitude: 99.5905 },
    { latitude: 2.6928, longitude: 99.5905 },
    { latitude: 2.6928, longitude: 99.5860 },
  ];

  return (

    <View style={styles.container}>
      <Tanggal />
      <MapView
        style={styles.map}
        mapType="satellite"
        initialRegion={{
          latitude: 2.6928,  // Ganti dengan koordinat yang sesuai
          longitude: 99.5860,  // Ganti dengan koordinat yang sesuai
          latitudeDelta: 0.010,
          longitudeDelta: 0.010,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.title}
            coordinate={marker.coordinates}
          />
        ))}
        <Polyline
          coordinates={polylineCoordinates}
          strokeColor="#ff0000" // Warna polyline
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  }
});

export default MapScreen;
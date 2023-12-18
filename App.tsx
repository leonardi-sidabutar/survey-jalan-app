// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

// Pages
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import ImageScreen from './src/screens/ImageScreen';

// Comp
import { CompDrawer } from './src/components';

// Type Navigator
const Stack  = createNativeStackNavigator();
const Tab    = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MainTab(){
  return(
    <Tab.Navigator
      screenOptions={({route}) => (
        {
        tabBarIcon:({ focused, color, size}) => {
          let iconName ;
          if(route.name == "Home"){
            iconName="home"
          }else if(route.name == "Map")
          {
            iconName='map'
          }else{
            iconName='image'
          }
          return <Icon name={iconName}  size={size} color={color}/>
        },
        tabBarActiveTintColor:'#318551',
        tabBarInactiveTintColor:'gray'
      })}
    >

      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{headerShown:false}}
      />
      <Tab.Screen name='Map' component={MapScreen} options={{headerShown:false}} />
      <Tab.Screen name='Image' component={ImageScreen} options={{headerShown:false,tabBarBadge:3}} />
    </Tab.Navigator>
  )
}

function MainDraw(){
  return(
    <Drawer.Navigator
      screenOptions={{
        headerTintColor:'white',
        headerStyle:{
          backgroundColor:'#378d58'
        },
        headerTitleStyle:{
          fontWeight:'600',
        }
      }}
      initialRouteName='HomeDrawer'
      drawerContent={(props)=> <CompDrawer {...props} />  }
    >
      <Drawer.Screen name="HomeDrawer" component={MainTab} />
      <Drawer.Screen name="MapDrawer" component={MainTab} />
      <Drawer.Screen name="GaleryDrawer" component={MainTab} />
    </Drawer.Navigator>
  )
}

function App() {
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName='Login'
        // screenOptions={{
        //   headerTintColor:'white',
        //   headerStyle:{
        //     backgroundColor:'#378d58'
        //   },
        //   headerTitleStyle:{
        //     fontWeight:'600',
        //   }
        // }}
      >

        {/* Menampilkan Drawer*/}
        <Stack.Screen
          name='MainDraw'
          component={MainDraw}
          options={{headerShown:false}}
        />

        {/* Setting Header Show : Off Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown:false,
          }}
        />

        {/* Setting Header Style Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title:"Dashboard"}}
        />

        {/* <Stack.Screen
          name='Info'
          component={InfoUser}
          options={({ route }) => ({ title:route.params })}
        /> */}

        <Stack.Screen name='Map' component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
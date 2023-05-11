import React,{useState} from 'react';  
import { StyleSheet, Text, View } from 'react-native';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import MapsScreen from './MapsScreen';
import CameraScreen from './CameraScreen';
import { Ionicons } from "react-native-vector-icons";
const Tab = createBottomTabNavigator();
const MainScreen = () =>{
    return (
        <View style={{ flex: 1 }}>
          <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
                ),
            }} />
            <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-circle-outline" size={size} color={color} />
                ),
            }} />
            <Tab.Screen 
            name="Maps" 
            component={MapsScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="map" size={size} color={color} />
                ),
            }} />
            <Tab.Screen 
            name="Camera" 
            component={CameraScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="camera" size={size} color={color} />
                ),
            }} />
          </Tab.Navigator>
        </View>
      );
} ;
export default MainScreen;  
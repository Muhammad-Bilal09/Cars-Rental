import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import   Home  from './src/Screen/home'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';
import Info from './src/Screen/info';
import Saved from './src/Screen/saved';
import Setting from './src/Screen/setting';
export default function App() {
  const Tab= createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:({})=>(
          <AntDesign name='home' size={24} color='black'/>
        )
      }} />
      <Tab.Screen name="Info" component={Info}  options={{
      tabBarIcon:({})=>(
        <MaterialIcons name='info' size={30} color='black'/>
      )
      }}/>
     
      <Tab.Screen name="Saved" component={Saved} options={{
        tabBarIcon:({})=>(
          <MaterialIcons name='bookmark-border' size={26} color='blue'/>
        )
      }} />
       <Tab.Screen name="Setting" component={Setting} options={{
        tabBarIcon:({})=>(
          <Octicons name='gear' size={28} color='green'/>
        )
      }} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeBaseProvider,
  HamburgerIcon,
  CheckIcon,
  Icon,
  View,
  Fab,
} from 'native-base';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
function HomeScreenTab() {
  return (
    <View flex="1" bg="orange.300" alignItems="center" justifyContent="center">
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreenTab() {
  return (
    <View flex="1" bg="orange.200" alignItems="center" justifyContent="center">
      <Text>Settings!</Text>
    </View>
  );
}
const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#F18129'}}>
        <Tab.Screen
          name="Home"
          component={HomeScreenTab}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <HamburgerIcon size="5" color="purple.900" />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreenTab}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => <CheckIcon size="5" color="emerald.500" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <MyTabs />
    </NativeBaseProvider>
  );
};

export default App;

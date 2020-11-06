import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  SignUp,
  SignIn,
  UploadPhoto,
  Message,
  Hospital,
  Doctor,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={Doctor} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Hospital" component={Hospital} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

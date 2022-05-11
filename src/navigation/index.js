import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInscreen from '../screens/SignInScreen'; 
import SignUpscreen from '../screens/SignUpscreen';
import ConfirmEmailscreen from '../screens/ConfirmEmailscreen';
import ForgotPasswordscreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';



const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="SignIn" component={SignInscreen} />
       <Stack.Screen name="SignUp" component={SignUpscreen} />
       <Stack.Screen name="ConfirmEmail" component={ConfirmEmailscreen} />
       <Stack.Screen name="ForgotPassword" component={ForgotPasswordscreen} />
       <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
       
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
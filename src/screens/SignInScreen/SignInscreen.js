import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import {useNavigation } from '@react-navigation/native';

const SignInscreen = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();


  const { username, setUsername } = useState('');
  const { password, setPassword } = useState('');

  const onSignInPressed=() => {
    // validate user
    navigation.navigate('HomeScreen');

  };


  const onForgotPasswordPressed=() => {
  
   navigation.navigate('ForgotPassword');
  };

  const onSignUpPress=() => {

    navigation.navigate('SignUp');
  };



  // height takes up 30% of screen 
  return (
    <ScrollView showVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Image source={Logo} style={[styles.Logo, {height: height * 0.3}]} resizeMode="contain" />  
      
      <CustomInput placeholder="username" value={username} setValue={setUsername}/>
      <CustomInput placeholder="password" value={password} setValue={setPassword}
      secureTextEntry
      />


      <CustomButton text="Sign In" onPress={onSignInPressed} />

      <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY" />

      

      <SocialSignInButtons />

<CustomButton text="Don't have an account? Create one " onPress={onSignUpPress} type="TERTIARY" />

    </View>
    </ScrollView >
  );
};


const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth:300,
    maxHeight: 200,
  },

});


export default SignInscreen
import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  

  const { code, setCode } = useState('');
  const {newPassword, setNewPassword} = useState('');

  const navigation = useNavigation();

  const onSubmitPressed=() => {
    navigation.navigate('HomeScreen');
  };
  
  const onSignInPress=() => {
    navigation.navigate('SignIn');
  };



  // height takes up 30% of screen 
  return (
    <ScrollView showVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>
      
      
      <CustomInput placeholder="code" value={code} setValue={setCode}
      secureTextEntry
      />
      <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword}
      secureTextEntry
      />


      <CustomButton text="Submit " onPress={onSubmitPressed} />

    
      
    
     
     <CustomButton text="Back to Sign in " onPress={onSignInPress} type="TERTIARY" />

    </View>
    </ScrollView >
  );
};


const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    padding: 20,
  },
  
  title: {
    fontSize:24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075'
  },


});


export default NewPasswordScreen;
import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation} from '@react-navigation/core';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignUpscreen = () => {
  
  const { username, setUsername } = useState('');
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');
  const { passwordRepeat, setPasswordRepeat } = useState('');

  const navigation = useNavigation();

  const onRegisterPressed=() => {
    navigation.navigate('ConfirmEmail');
  };
  
  const onSignInPress=() => {
    navigation.navigate('SignIn');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };



  // height takes up 30% of screen 
  return (
    <ScrollView showVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      
      <CustomInput placeholder="username" value={username} setValue={setUsername}/>
      <CustomInput placeholder="email" value={email} setValue={setEmail}/>

      <CustomInput placeholder="password" value={password} setValue={setPassword}
      secureTextEntry
      />
      <CustomInput placeholder="Repeat password" value={passwordRepeat} setValue={setPasswordRepeat}
      secureTextEntry
      />


      <CustomButton text="Register" onPress={onRegisterPressed} />

    
      <Text>By registering , you confirm that you accept our <Text style={styles.link } onPress={onTermsOfUsePressed}> Terms of Use </Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy </Text> </Text>

      <SocialSignInButtons />

<CustomButton text="Have an account? Sign in " onPress={onSignInPress} type="TERTIARY" />

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


export default SignUpscreen
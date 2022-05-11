import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.containers}>
      <TextInput
      value={value}
      onChangeText={setValue} 
      placeholder={placeholder}
      style={styles.input} 
      secureTextEntry={secureTextEntry}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    width: '100%',
    backgroundColor: 'white',

    width: '80%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },

  input: {},
  
});

export default CustomInput
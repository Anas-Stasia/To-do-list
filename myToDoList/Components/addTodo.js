import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View} from 'react-native';

export default function AddTodo (submitHandler) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
     setText()
  }
  return (
    <View>
      <TextInput
      style={styles.input}
      placeholder='new todo...'
      onChangeText={changeHandler}
      />

      <Button onPress={() => submitHandler (text)} title='add todo' color='coral'/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    paddingVertical: 6,
    borderBottomColor:'#ddd'


  }
 }

 )
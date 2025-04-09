import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList , Alert, TouchableWithoutFeedback, Keybord} from 'react-native';
import Header from './Components/header';
import TodoItem from './Components/todoItem';
import AddTodo from './Components/addTodo';
import Sandbox from './Components/sideWork';

export default function App() {
  const[todos, setTodos] = useState([
    {text: 'Code', key: '1'},
    {text: 'Learn', key: '2'},
    {text: 'Relax', key: '3'},
    {text: 'Browse', key: '4'},
    {text: 'Cook', key: '5'},
    {text: 'Pray', key: '6'}
  

  ]
  );

  const pressHandler = (key) => {
    setTodos((prevTodos ) =>{
      return prevTodos.filter(todo => todo.key != key);
    }
    )
  }

  const submitHandler = (text) => {

    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, Key: Math.random().toString()},
          ...prevTodos
        ];
  
      });
    } else {
      Alert.alert('OOPS!', 'toDOS must be 3 chars long' [
        {text: 'Understood', onpress: () => console.log('alert closed')}
      ])
    }
  
  }

  return (
   // <Sandbox/>
    <TouchableWithoutFeedback onPress={() => {
      Keybord.dismiss();
      console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
      {/* Header */}
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
         {/* to do form */}
         <View style={styles.list}>
         <FlatList 
         data={todos}
         renderItem={({item}) => (
          <TodoItem items={item} pressHandler={pressHandler}/> 
         )
        }
         />
         </View>

      </View>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    
  },
  content: {
    padding: 40,
    flex: 1
  },
  list:{
    marginTop:20,
    flex: 1
  }
});

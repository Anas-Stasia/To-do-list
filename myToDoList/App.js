import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Components/header';
import TodoItem from './Components/todoItem';

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
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header/>
      <View style={styles.content}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    padding: 40,
  },
  list:{
    marginTop:20
  }
});

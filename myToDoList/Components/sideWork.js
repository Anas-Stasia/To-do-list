import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Sandbox() {
  return(

<View style={styles.container}>
  <Text style={styles.boxOne}>one</Text>
  <Text style={styles.boxTwo}>two</Text>
  <Text style={styles.boxThree}>three</Text>
  <Text style={styles.boxFour}>four</Text>
</View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    paddingTop: 40,
    backgroundColor:'#ddd',
    justifyContent:'space-around',
    alignItems:'center'
  },
  boxOne:{
    backgroundColor:'skyblue',
    padding: 20,
  },
  boxTwo:{
    backgroundColor:'violet',
    padding: 30,
  },
  boxThree:{
    backgroundColor:'gold',
    padding: 40,
  },
  boxFour:{
    backgroundColor:'coral',
    padding: 50,
  },
});
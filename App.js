import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:30}} >

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput placeholder="Course Goal" style={{borderColor:"black",borderWidth:1, padding:10, width:200}}/>
        <Button title="Add" style={{padding:5}}/>
      </View>
      <View>
      </View>

      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
});

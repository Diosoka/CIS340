import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.containerButton}>
        <Button
            onPress={() => {
              alert('You tapped button 1');
            }}
            title="Press Button 1"
      />
    </View>


       <View styles={styles.containerLayoutButton}>
        
        <Button
            onPress={() => {
              alert('You tapped button 2')
            }}
            title="Press Button 2"
       />


       <Button
            onPress={() => {
              alert('You tapped button 2');
            }}  
            title="Great!"
            color='green'
       />

       </View>



       <View style={styles.containerButton} >

        <Button
             onPress={() => {
              alert('You tapped button Tap Me!');
             }}
             title="Tap Me!"
          />


       </View>


    </View>
  );
}

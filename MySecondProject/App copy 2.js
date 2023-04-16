import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {

  function getFullName(fName,mName,lName){
    return fName + " " + mName + " " + lName;
  }

  const pet = "Dog";
  return (
    <Text>
      {"\n\n\n\n\n\n"}
      Hello, I am a student in CIS340! {"\n"}
      My full name is {getFullName("Dylan","Tyler","McClure")} {"\n"}
      I have a {pet}!
      </Text>
      
  );
}


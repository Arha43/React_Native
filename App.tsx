import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import StyleCards from './components/StyleCards'
import ActionCards from './components/ActionCards'
import ChatCard from './components/ChatCard'

const App = () => {
  return (
      <ScrollView style={styles.container}>
      <FlatCards/>
       <ElevatedCards/>
       <StyleCards/>
       <ChatCard/>
       <ActionCards/>
      </ScrollView>
    
  )
}
const styles=StyleSheet.create(
  {
    container:{
      backgroundColor: '#310E3D',
    }
  }
);
export default App
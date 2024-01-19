import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Modal from './Modal'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:0.075,backgroundColor:"#363E8E",justifyContent:"center",alignItems:"flex-start",paddingLeft:10}}>
        <Header />
      </View>
      <View style={{flex:0.9}}>
        <Modal/>
      </View>
      <View style={{flex:0.2,backgroundColor:"#363E8E",justifyContent:"center",alignItems:"flex-start",paddingLeft:10}}>
        <Footer />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "gray"
  }
})
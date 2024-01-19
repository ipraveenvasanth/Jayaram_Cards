import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View>
      <Text style={{color:"white",fontSize:14,fontWeight:"500",marginTop:2}}>For Order :</Text>
      <Text style={{color:"white",fontSize:20,fontWeight:"bold",marginTop:2}}>Sivakasi  +91 98947 10050</Text>
      <Text numberOfLines={2} ellipsizeMode='tail' style={{color:"white",fontSize:14,fontWeight:"500",marginTop:2}}>1/4, Sattur Road, Near Royal Travels, Opp. Old Rto Office, Sivakasi, Virudhunagar-626189, Tamil Nadu, India
      </Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})
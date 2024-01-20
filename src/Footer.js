import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Footer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.orderText}>For Order :</Text>
      <Text style={styles.phoneNumber}>Sivakasi +91 98947 10050</Text>
      <Text numberOfLines={2} ellipsizeMode='tail' style={styles.address}>
        1/4, Sattur Road, Near Royal Travels, Opp. Old Rto Office, Sivakasi, Virudhunagar-626189, Tamil Nadu, India
      </Text>

    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    // If you have any styles for the container
  },
  orderText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 2
  },
  phoneNumber: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 2
  },
  address: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 2
  },
});

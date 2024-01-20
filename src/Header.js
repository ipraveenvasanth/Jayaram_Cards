import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JAYARAM CARDS</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // Add any styles for the View container here
  },
  title: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
    // Add any additional styling for the title here
  },
});

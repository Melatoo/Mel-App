import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";



const Header = () => {
    return (
      <View style={styles.container}>
        <Text>Meu App</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      backgroundColor: '#f5f5f5',
    },
    logo: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
});
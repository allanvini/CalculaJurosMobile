import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export function NavigationCard({navigation, goto, icon, description}) {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate(goto)}}>
        <View style={styles.rect}>
          {icon}
        </View>
        <View style={styles.rect2}>
            <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 150,
    backgroundColor: "rgba(150,123,250,1)",
    width: 150,
    opacity: 0.8,
    margin: 10,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 5,
      width: 0
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10
  },
  rect: {
    flex: 0.71,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  rect2: {
    flex: 0.29,
    margin: 0
  },
  description: {
    textAlign: 'center',
    color: 'white'
  }
});
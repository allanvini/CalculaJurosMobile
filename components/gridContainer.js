import React from 'react';
import { View, StyleSheet } from 'react-native';

export function GridContainer({children}){
  return (
    <View style={styles.gridContainer}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    top: 30,
    left: 30,
    display: 'grid',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});
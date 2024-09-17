import React from 'react';
import { View, StyleSheet } from 'react-native';

const Table = () => {
  return (
    <View style={styles.table}>
    <View style={styles.tableTop} />
    <View style={styles.tableBot} />
    </View>
  );
};

const styles = StyleSheet.create({
    table:{
        width: '100%', 
       
         backgroundColor: '#FFF0D1',  
      
    },
    tableTop:{
            
        height: 40,         
       
       
    },
  tableBot: {
    width: '100%',       
    height: 20,         
    backgroundColor: '#ECDFCC',  
    marginTop: 10,      
  
  },
});

export default Table;

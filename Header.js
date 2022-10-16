import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header (){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TO DO LIST</Text>
        </View>
    )
}
    
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'pink',
    },
    title: {
        textAlign: 'center',
        color: '#ffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
})
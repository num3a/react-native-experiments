import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ToolBar extends Component {
    render(){
        return <View style={styles.container}>
            <Text style={styles.title}>Markets</Text>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default ToolBar;
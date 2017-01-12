import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Wall from './wall';
import ToolBar from './toolbar';

class App extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ToolBar/>
                <Wall />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        paddingTop: 45,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default App;

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import Navigation from './navigation';
import Wall from './wall';
import { NavigationBar, Title, View } from '@shoutem/ui';


class App extends Component {
    render(){
        return (
            <View>
                <NavigationBar
                    styleName="clear"
                    centerComponent={<Title>TITLE</Title>}
                />
                <Navigation/>
                <Text>TEST</Text>
                <Wall/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
export default App;


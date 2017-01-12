import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import Analysts from './analysts';
import PublicationDetails from './publicationDetails';

class WallItem extends Component{
    _onWallItemPress(item){
        alert(item.title);
    }
    render(){
        const { item } = this.props;
        return (<View key={item.id} >
            <TouchableHighlight
                onPress={() => this._onWallItemPress(item)}
                underlayColor="transparent"
            >
                <View style={styles.row}>
                    <Text style={styles.rowResearchCategory}>{item.researchCategory}</Text>
                    <Text style={styles.rowTitle}>{item.title}</Text>
                    <PublicationDetails/>
                    <Analysts analysts={item.analysts} />
                </View>
            </TouchableHighlight>
        </View>);
    }
}


const styles = StyleSheet.create({
    row: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        marginRight: 5,
        marginLeft: 5,
        padding: 5,
        height: 200,
    },
    rowSeparator: {
        height: 5
    },
    rowResearchCategory: {
        color: '#23558C',
        fontWeight: 'bold',
    },
    rowTitle: {
        fontWeight: '600',
        fontSize: 18,
        color: '#333'
    },
    publicationTag: {
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: '#35bd5b',
        width: 50,
        height: 20,
        borderRadius: 5,
        justifyContent: 'center',
    },
    publicationTagText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
        padding: 3,
    },
});
export default WallItem;

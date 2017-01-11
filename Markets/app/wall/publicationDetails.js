import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

class PublicationDetails extends Component {
    render(){
        return   <View style={styles.publicationTag}>
            <Text style={styles.publicationTagText}>3 hours</Text>
        </View>;
    }
}


const styles = StyleSheet.create({

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
export default PublicationDetails;


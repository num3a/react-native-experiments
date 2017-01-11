import React, {Component} from "react";
import {View, StyleSheet, Text, Image} from "react-native";

class Analysts extends Component {

    render(){
        const { analysts } = this.props;
        const firstAnalysts = analysts[0];

        return (
            <View style={styles.rowAnalyst} >

                <View style={styles.rowAnalystDetails} key={firstAnalysts.id}>
                    <Image
                        style={styles.rowAnalystImage}
                        source={{uri: firstAnalysts.photoUrl}}
                    />
                    <Text style={styles.rowAnalystName}>{firstAnalysts.name}</Text>
                </View>
            </View>);

    }
}


const styles = StyleSheet.create({

    rowAnalystImage: {
        paddingLeft: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    rowAnalyst: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    rowAnalystDetails: {
        paddingTop: 10,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    rowAnalystName: {
        marginLeft: 10,
        marginTop: 10,
    },
});

export default Analysts;
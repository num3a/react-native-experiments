import React, {Component} from "react";
import {View, StyleSheet, Text, Image} from "react-native";

class Analysts extends Component {

    render(){
        const { analysts } = this.props;

        return <View>
            {
                analysts.map((analyst, index) => {
                    return (
                        <View style={styles.rowAnalyst} key={index}>

                            <View style={styles.rowAnalystDetails} key={analyst.id}>
                                <Image
                                    style={styles.rowAnalystImage}
                                    source={{uri: analyst.photoUrl}}
                                />
                                <Text style={styles.rowAnalystName}>{analyst.name}</Text>
                            </View>
                        </View>);
                })
            }
        </View>;
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
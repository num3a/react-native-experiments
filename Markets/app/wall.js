import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ListView, View, Title, Row, Text, Subtitle, Caption, Button, Icon } from '@shoutem/ui';


class Wall extends Component {
    constructor(){
        super();

        this.state = {
            data: [
                {
                    title: 'FI Special - SG Special: Ten charts to start the year (6p)',
                    researchCategory: 'Research',
                    published: '6 hours',
                    analyst: 'CHAIGNEAU Vincent',
                    likes: 4,
                    views: 340
                },
                {
                    title: 'FI Special - SG Special: Ten charts to start the year (6p)',
                    researchCategory: 'Research',
                    published: '6 hours',
                    analyst: 'CHAIGNEAU Vincent',
                    likes: 4,
                    views: 340
                },
                {
                    title: 'FI Special - SG Special: Ten charts to start the year (6p)',
                    researchCategory: 'Research',
                    published: '6 hours',
                    analyst: 'CHAIGNEAU Vincent',
                    likes: 4,
                    views: 340
                },
            ]
        };
    }

    _renderFooter(){
        return (
            <View />
        );
    }

    _renderHeader(){
        return (
            <View />
        );
    }

    _renderRow(item) {
        return(
            <Row>
                <View styleName="vertical stretch space-between">
                    <Subtitle>{item.title}</Subtitle>
                </View>
                <Button styleName="right-icon"><Icon name="add-to-cart" /></Button>

            </Row>
        );
    }

    render(){
        return (
            <ListView
                data={this.state.data}
                renderFooter={() => this._renderFooter()}
                renderHeader={() => this._renderHeader()}
                renderRow={(item) => this._renderRow(item)}
                style={styles}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});

export default Wall;


import React, { Component } from 'react';
import { NavigationBar, Title } from '@shoutem/ui';

class Navigation extends Component {
    render(){
        return (
            <NavigationBar
                styleName="clear"
                centerComponent={<Title>TITLE</Title>}
            />
        );
    }
}

export default Navigation;
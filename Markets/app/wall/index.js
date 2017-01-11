import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image } from 'react-native';
import { WallItemsData } from '../data/wall';

import WallItem from './wallItem';

class Wall extends Component {
    constructor(){
      super();

      const data = this.duplicateData();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(data),
      };
    }

    duplicateData(){
      var data = WallItemsData[0];
      let result = [];
      for(let i = 0; i < 24; i++){
        result.push(data);
      }
      return result;
    }

    renderRow(wallItem, sectionID, rowID){
      return <WallItem item={wallItem} key={rowID}/>;
    }

    render(){
      return (
        <View>
          <ListView
               dataSource={this.state.dataSource}
               renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData,  sectionID, rowID)}
               renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=> <View style={styles.rowSeparator} key={rowID}/>}
             />
         </View>
    );
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
export default Wall;

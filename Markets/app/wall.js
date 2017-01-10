import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image } from 'react-native';
import { WallItemsData } from './data/wall';

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
        data.id = i;
        result.push(data);
      }
      return result;
    }
    renderAnalysts(analysts){
      return analysts.map((analyst) => {
        return (<View style={styles.rowAnalystDetails} key={analyst.id}>
          <Image
            style={styles.rowAnalystImage}
            source={{uri: analyst.photoUrl}}
          />
            <Text style={styles.rowAnalystName}>{analyst.name}</Text>
          </View>);
      });
    }

    renderRow(rowData){
      return (<View key={rowData.id} style={styles.row}>
          <Text style={styles.rowResearchCategory}>{rowData.researchCategory}</Text>
          <Text style={styles.rowTitle}>{rowData.title}</Text>
          <View style={styles.rowAnalyst}>
            {this.renderAnalysts(rowData.analysts)}
          </View>
          <View style={styles.publicationTag}>
            <Text style={styles.publicationTagText}>3 hours</Text>
          </View>
      </View>);
    }

    render(){
      return (
        <View>
          <ListView
               dataSource={this.state.dataSource}
               renderRow={(rowData) => this.renderRow(rowData)}
               renderSeparator={()=> <View style={styles.rowSeparator} />}
             />
         </View>
    );
    }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#F5F5F5',
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
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
  rowAnalystImage: {
    paddingLeft: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  rowAnalyst: {
    alignItems: 'flex-start',
    flexDirection: 'row',
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

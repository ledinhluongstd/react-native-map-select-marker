import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapSelectMarker from './components/mapSelectMarker';

export default class App extends React.Component {
  getData(address, lat, long){
    console.log(address, lat, long)
  }
  render() {
    return (
      <View style={styles.container}>
       <MapSelectMarker getData={this.getData.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

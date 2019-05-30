/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import { Provider, connect } from 'react-redux';
import configureStore from './store';
import  {ACTION_TYPE_ADD_TASK} from './actions/actionTypes';
import { addPlace, deletePlace, deleteAllPlaces, updatePlace } from './actions/actionCreator';
import Icon from 'react-native-vector-icons/FontAwesome';
const store = configureStore();

class SecondScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: '',
    }
  }

  iterateItems = ({item, index})=>{
    return(
       <View style={{ height: 40, width: '100%' , flexDirection:'row', justifyContent:'space-between', padding:5}}>
          <Text>{item.value}</Text>
      </View>
    );
  }



  render() {
    return (
        <View style={styles.container}>
            <FlatList
              data={this.props.tasks}
              renderItem={this.iterateItems}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ ()=><View style={{height:4, color:'blue'}}/> }
              />
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  alert(JSON.stringify(state.reducer_add_task.places))
  return{
    tasks: state.reducer_add_task.places
  }
}


export default connect(mapStateToProps)(SecondScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

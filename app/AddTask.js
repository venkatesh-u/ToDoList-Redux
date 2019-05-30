/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import  {ACTION_TYPE_ADD_TASK} from './actions/actionTypes';
import { addPlace, deletePlace, deleteAllPlaces, updatePlace } from './actions/actionCreator';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
    }
  }

  updateText = (text, msg) => {
    this.setState({ task: text })
  }


  deleteItem = (item, index)=>{
        this.props.deleteTask(item.value, index);
  }

  updateItemContent = (index)=>{
    this.props.updateContent("Text Changed", index);

  };


  iterateItems = ({item, index})=>{
    return(
       <View style={{ height: 40, width: '100%' , flexDirection:'row', justifyContent:'space-between', padding:5}}>
          <Text>{item.value}</Text>
            <TouchableOpacity onPress={()=>this.updateItemContent(index)}>
                <Text> UPDATE</Text>
             </TouchableOpacity>
          <Icon name="trash" onPress={()=>this.deleteItem(item, index)}  size={30}> </Icon>
      </View>

    );
   
  }

  onClickButton = ()=>{
    if(this.state.task.length != 0){
        this.props.addTask(this.state.task);
        this.setState({task:''})
    }
  }

  deleteAllItems =()=>{
    this.props.removeAll();
  }

  navigateToNextPage = ()=>{
    this.props.navigation.navigate('SecondScreen');

  }


  render() {
    return (
        <View style={styles.container}>

          <View style={{ flexDirection: 'row'}}>
            <TextInput
              style={{ borderColor: 'black', borderWidth: 1, width: '85%' }}
              onChangeText={this.updateText}
              value={this.state.task}/>

            <Button onPress={this.onClickButton} title='Add' style={{ width: '15%' }} />
          </View>

          <Button onPress={this.deleteAllItems} title='Delete All' style={{ margin:20}} />

          <View style={{ flex: 9, borderColor: 'red', borderWidth: 1 }}>
            <FlatList
              data={this.props.tasks}
              renderItem={this.iterateItems}
              keyExtractor={(item, index) => index.toString()}
              keyboardShouldPersistTaps="always"
              ItemSeparatorComponent={ ()=><View style={{height:4, color:'blue'}}/> }
              />
          </View>

           <View style={{ flexDirection: 'row'}}>
              <Button onPress={this.navigateToNextPage} title='Next Page' />
            </View>

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

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: task => dispatch(addPlace({value:task })),
    deleteTask: (task, index) => dispatch(deletePlace({value:task, index:index})),
    removeAll: ()=> dispatch( deleteAllPlaces() ) ,
    updateContent: (task, index)=> dispatch( updatePlace({value: task, index: index}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)

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

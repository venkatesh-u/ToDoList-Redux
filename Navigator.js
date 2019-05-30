import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import AddTask from './app/AddTask';
import SecondScreen from './app/secondScreen'

import configureStore from './app/store';
const store = configureStore()

const Navigator = createStackNavigator({
    FirstScreen: {
        screen: AddTask,
        navigationOptions: {
            title: 'Screen1',
        }
    },

     SecondScreen: {
        screen: SecondScreen,
        navigationOptions: {
            title: 'Screen2',
        }
     }


})
const AppContainer = createAppContainer(Navigator);


export default class Navigatorr extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            < Provider store = { store } >
                <AppContainer />
            </Provider >
        );
    }

}



// export default AppContainer;


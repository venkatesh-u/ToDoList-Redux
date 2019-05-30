/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navigatorr from './Navigator';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import React,{Component} from 'react';
const store = configureStore()


// const RNRedux = ()=>{
//     <Provider store={store}>
        // <Navigator/>
    // </Provider>
// }

AppRegistry.registerComponent(appName, () => Navigatorr);

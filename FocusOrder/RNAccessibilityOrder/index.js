/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import {name as appName} from './app.json';

const App =
  Platform.OS === 'ios'
    ? require('./AppIos').default
    : require('./AppAndroid').default;

AppRegistry.registerComponent(appName, () => App);

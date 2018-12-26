import React from 'react';
import reducers from './reducers/reducer'
import Tabs from './components/Tabs'
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import UdaciStatusBar from './components/UdaciStatusBar';
import { purple } from './utils/colors';

export default class App extends React.Component {  

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <Tabs/>
        </View>
      </Provider>
    );
  }
}
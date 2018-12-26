import React from 'react';
import reducers from './reducers/reducer'
import Tabs from './components/Tabs'
import HistoryDetail from './components/HistoryDetail'
import UdaciStatusBar from './components/UdaciStatusBar';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { purple, white } from './utils/colors';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    } 
  },
  HistoryDetail: {
    screen: HistoryDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
})

const Main = createAppContainer(MainNavigator);
export default class App extends React.Component {  

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <Main/>
        </View>
      </Provider>
    );
  }
}
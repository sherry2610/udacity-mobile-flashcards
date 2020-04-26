import React from 'react'
import {View, Text} from 'react-native'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middlewares'

const store = createStore(reducer,middleware)

export default function App(){
  return (
    <Provider store={store}>
      <View>
        <Text>Hello</Text>
      </View>
      </Provider>
  )
}
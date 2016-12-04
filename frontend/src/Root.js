import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import { routes } from './routes'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    )
  }
}

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
)

export default App
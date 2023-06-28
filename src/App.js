import {BrowserRouter, Route, Switch} from 'react-router-dom'

import TechEra from './components/TechEra'
import Header from './components/Header'
import TechCourse from './components/TechCourse'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={TechEra} />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App

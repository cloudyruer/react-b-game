import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Game from './pages/Game'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Game} />
      </Switch>
    </Router>
  )
}

export default App

import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Dashbord from './pages/Dashbord';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashbord' component={Dashbord} />
      </Switch>
    </div>
  );
}

export default App;

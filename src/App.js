import logo from './logo.svg';
import './styles.css';
import Home from './components/home/home';
import { BrowserRouter, Route } from 'react-router-dom';
import Customers from './components/customers/customers';
import Register from './components/register/register';
import Login from './components/login/login';
import TeamWeights from './components/teamweights/teamweights';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/customers' component={Customers} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/teamweights' component={TeamWeights} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './styles.css';
import Home from './components/home/home';
import { BrowserRouter, Route } from 'react-router-dom';
import Customers from './components/customers/customers';
import Register from './components/register/register';
import Login from './components/login/login';
import TeamWeights from './components/teamweights/teamweights';
import Loginv2 from './components/loginMain/login';
import EnterWeight from './components/enterweight/enterweight';
import MyWeight from './components/myweight/myweight';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/customers' component={Customers} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Loginv2} />
        <Route path='/teamweights' component={TeamWeights} />
        <Route path='/enterweight' component={EnterWeight} />
        <Route path='/myweight' component={MyWeight} />
      </BrowserRouter>
    </div>
  );
}

export default App;

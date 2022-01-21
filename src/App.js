import logo from './logo.svg';
import './styles.css';
import Home from './components/home/home';
import { BrowserRouter, Route } from 'react-router-dom';
import Customers from './components/customers/customers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/customers' component={Customers} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Register from './views/Register';
import Atm from './views/AtmCard';
import AtmPin from './views/AtmCardPin';
import PaymentOptions from './views/PaymentOptions';
import PayWithBank from './views/PayWithBank';
import Tranfer from './views/Transfer';
import Receipt from './views/Receipt';

function App() {
  return (
    <Fragment>
      <Router>
          <Switch>
          <Route exact path='/' component={Register} />
           <Route path='/options' component={PaymentOptions}/>
           <Route path='/card' component={Atm} />
           <Route path='/card-pin' component={AtmPin} />
           <Route path='/transfer' component={Tranfer} />
           <Route path='/receipt' component={Receipt} />
           <Route path='/bank' component={PayWithBank} />
          </Switch>
       </Router>
       <Footer/>
    </Fragment>
  );
}

export default App;
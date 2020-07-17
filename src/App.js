import React from 'react';
import { BrowserRouter as Router,Route,Redirect } from 'react-router-dom'

import Navbar from './components/Navigation/navbar/navbar'
import Signup from './components/Navigation/Links/SignUp'
import SignIn from './components/Navigation/Links/SignIn'
import Cart from './components/Navigation/Links/cart'
import Account from './components/Navigation/Links/Account'
import Landing from './components/Dashboard/Landing'
import ForgetPassword from './components/Navigation/Links/ForgetPassword'
import Item from './components/individual-item/Item'
import * as Routes from './constant/routes'


//import withAuth from './components/session/withAuth'

function App(props) {
  
  return (
    <Router>
      <Navbar />
      <Redirect from='/E-commerce' to='/' />
      <Route exact path={Routes.landing} component={Landing} />
      <Route path={Routes.signIn} component={SignIn} />
      <Route path={Routes.signUp} component={Signup} />
      <Route path={Routes.cart} component={Cart} />
      <Route path={Routes.account} component={Account} />
      <Route path={Routes.forgetPassword} component={ForgetPassword}  />
      <Route  path={`${Routes.Item}/:id`} component={Item}  />
    </Router>
  
  );
}

//export default withAuth(App);
export default (App);

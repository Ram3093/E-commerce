import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Routes from '../../../constant/routes'
import SignOutButton from '../../Navigation/Links/Logout'
const NavigationAuth=()=>{
    return(
       
          <ul id="nav-mobile" className="right hide-on-med-and-down">
         
            <li>
                <NavLink to={Routes.cart}><i className="fas fa-shopping-cart" style={{fontSize:"20px"}}>&nbsp;&nbsp;Cart</i></NavLink>
            </li>
            <li>
                <NavLink to={Routes.account}><i className="fas fa-user" style={{fontSize:"20px"}}>&nbsp;&nbsp;Account</i> </NavLink>
            </li>
            
            <li>
                <SignOutButton />
               
            </li>
          </ul>
    )
}

export default NavigationAuth;
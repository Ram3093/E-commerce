import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Routes from '../../../constant/routes'

const NavigationNonAuth=()=>{
    return(
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
            <NavLink to={Routes.signUp}><i>SignUp</i></NavLink>
        </li>
        <li>
            <NavLink to={Routes.signIn}><i>SignIn</i></NavLink>
        </li>

      </ul>
    )
}

export default NavigationNonAuth;
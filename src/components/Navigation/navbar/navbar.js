import React from 'react'
import { Link } from 'react-router-dom'
import * as Routes from '../../../constant/routes'
//import { AuthUserContext } from '../../session/index'
import { connect } from 'react-redux'
import  NavigationAuth  from './NavigationAuth' 
import  NavigationNonAuth  from './NavigationNonAuth' 
const navbar=(props)=>{ 
    const { auth }=props;
    //console.log('mgic auth',auth)
    const links=auth.uid? <NavigationAuth />:  <NavigationNonAuth />
    return(
        <nav style={{backgroundColor:"#204051",height:"70px"}}>
             <div className='container'>
                       <div className="nav-wrapper z-depth-0" >
                          <Link to={Routes.landing}  className="brand-logo" style={{paddingLeft:"10px"}}  ><i className="fas fa-store"></i>ReactReserve</Link>
                          <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        </div>
                        {/* <NavigationNonAuth />
                        <NavigationAuth /> */}
                        {links}
                        
             </div>
        </nav>
    )
}
        
        





const mapStateToprops=(state)=>{
   // console.log('map state in navbar',state)
    return{
       auth:state.firebase.auth
    }
}


export default connect(mapStateToprops)(navbar)

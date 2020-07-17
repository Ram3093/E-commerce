import React, { Component } from 'react'
//import { withProtectRoute } from '../../session/index'



const arrayImage=[];
console.log(localStorage.getItem('url'))



class Cart extends Component {
    render() {
        
        return (
            // <AuthUserContext.Consumer>
            // {authUser => (
                <div>
                   <form style={{width: '50%',margin: '30px auto', border: '1px solid #CCC' , borderRadius: '0.5em'}}>
	                     <div className="cart" style={{margin:'60px 10px'}}>
		                       <div className="row" style={{marginTop:'3rem' }}>
			                        <div className="col-1" style={{width:'50%', float: 'left'}}>
				                        <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGOXKAgST8gfuou8g9rtGpWSrwEMS_D_kGKrsuj3IRpHy7h5jzV_UJp2OczmbRV3D7bjszgw-_dxg&usqp=CAc" width="200px" style={{paddingBottom: '20px'}} alt=""/>
			                            <span style={{float: 'right', paddingRight: '70px'}}>Product name</span>
                                    </div>
			                        <div className=" col-2" style={{ width:'50%', float: 'left', paddingTop: '50px' }}>
	                                   
		                                 <span><button className='btn grey lighten-4' style={{float:'right'}}><img src="https://img.icons8.com/material-two-tone/2x/delete-sign.png" width="10px" alt="" /></button></span>
		                            </div>
	                            </div>
                               <hr style={{width:'90%',  border: '1px solid #CCC', borderBottom: '0px' }} />
	                           
                            </div>
                            
 
                    </form>
        
                </div>
            // )}
            // </AuthUserContext.Consumer>
        )
    }
}

//const condition = authUser => !!authUser;
//export default withProtectRoute(condition)(Cart)
export default Cart

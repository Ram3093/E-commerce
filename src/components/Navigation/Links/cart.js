import React, { Component } from 'react'
//import { withProtectRoute } from '../../session/index'



//const arrayImage=[];
//console.log(localStorage.getItem('url'))



class Cart extends Component {
  
    render()
    {
        const sessionItem=JSON.parse(sessionStorage.getItem('products'))
        console.log(sessionItem)   
        console.log(typeof(sessionItem))  
        
        const sessionProducts=sessionItem ? sessionItem.map((el)=>{
            return (
               
            <div className='row card' style={{marginTop: "30px" }}>
              <div className='col l6  m12 s12' style={{padding:"30px"}}>
                               <img src={el.Url}  width="300" height="300" alt='random' />
                          </div>

                    <div className="col l3  m12 s12" >
                            <div style={{paddingTop:" 80px", paddingLeft:"10px" }}>
                                   <p style={{ boxSizing:"border-box",fontSize:"1.5rem",fontWeight:"bolder",cursor:"pointer"  }}>{el.productName}</p>
                                   <p style={{ display:"inlineBlock", marginTop:"15px", fontSize:"25px",fontWeight:"bolder",cursor:"pointer"}}><i className="fas fa-rupee-sign"> &nbsp;{el.productPrice}</i></p>
                            </div>
                    </div>


                    <div className='col l3  m12 s12'>
                      <p style={{paddingTop: "115px" ,paddingLeft:"75px", fontWeight:"bolder" }} ><i onClick={()=>{}} className="material-icons" style={{fontSize:"2.5rem",cursor:"pointer"}}>close</i> </p> 
                    </div>
             </div>          
            
        )
            })
      :<h4 className='center red-text'>No item added to card</h4>
        
        return (
            <div className='container' style={{padding: "0 200px"}}>
                     { sessionProducts }
            </div>
            // <AuthUserContext.Consumer>
            // {authUser => (
               
            // )}
            // </AuthUserContext.Consumer>
        )
    }
}

//const condition = authUser => !!authUser;
//export default withProtectRoute(condition)(Cart)
export default Cart

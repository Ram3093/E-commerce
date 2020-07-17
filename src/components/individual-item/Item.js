import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
//import { AuthUserContext } from '../session/index'
// SignInPage from '../Navigation/Links/SignIn'
//import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const containerStyle={
    padding:" 30px 80px",
    

}

// const ItemPage=()=>{
//     return(
//         <div>
//           <Item />
//             {/* <AuthUserContext.Consumer>
//                 {authUser=> authUser ? < Item1 />: <SignInPage/>}
//             </AuthUserContext.Consumer> */}
//             {/* < Item1 /> */}
//         </div>
//     )
// }



class Item extends Component {
    state={
        error:"",
        displayItem:null
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state)

      const  { product } =this.props

     if(product){
         //localStorage.setItem('url',product.Url)
         sessionStorage.setItem('url',product.Url)
     }



    }
    render() {
      
    
     const { product,auth } =this.props
     console.log(this.props) 
      if(!auth.uid){   return  <Redirect       to='/signIn'    />     }
        //console.log("displayitem is ",displayItem1) 
     if (product){
        return (
            <div className='container' style={ containerStyle }>
               <div className='row'>
                      <div className='col l6'>
                          <div className='card' style={{border:"none"}}>
                                 <div className='card-image'>
                                
                                    <img src={product.Url} alt="img-phn" />
                                    
                                 </div>

                            </div>
                      </div>
                      <div className='col l6'>
                             <div className='' style={{textAlign:"left"}} >
                                             <h5 style={{padding:"20px 0 0 0",fontWeight:"bolder"}}>{product.productName}</h5>
                                             <p style={{padding:" 0  0 0 0",fontWeight:"bolder"}}><i className="fas fa-rupee-sign" ></i>  {product.productPrice}</p>
                            </div>
                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <div >
                                        <input type='number' placeholder="1" style={{width:"150px",float:"left"}} />
                                        <button type="submit" className='btn orange darken-4' style={{float:"left", height:"46px",fontSize:".2rem",textTransform:"none"}}><i className="fas fa-shopping-cart">  Add to cart</i></button>
                                    </div>
                                </form>
                            </div>

                      </div>
               </div>
               <div style={{marginTop:"15px",padding:"5px"}}>
                   <h5>About this product</h5>
                   <p>The product is very expressive.The product is very expressive.The product is very expressive.The product is very expressive </p>
               </div>
            </div>
        )
     }
     else{
         return(
             <div className='container center'>
                 <p>content loading.........</p>
             </div>
         )
     }
       
    }
}

const mapSateToProps=(state,ownProps)=>{
    const id=ownProps.match.params.id;
    //console.log("own state is ",state,id)
    const products=state.firestore.data.Products;
     const  product=products ? products[id]:null
    return{
        product:product,
        auth:state.firebase.auth
        // content:state.content.find(content=>content.id===id),
       // Products:state.firestore.ordered.Products
    }
}

//const Item1=withRouter(connect(mapSateToProps)(Item))

export default compose(connect(mapSateToProps),
   firestoreConnect(  [
                         {  collection:'Products' } 
                       ]
                   )
)(Item)



// const Item1= compose(connect(mapSateToProps),withRouter,
//    firestoreConnect(  [
//                          {collection:'Products' } 
//                        ]
//                    )
// )(Item)


//export default ItemPage

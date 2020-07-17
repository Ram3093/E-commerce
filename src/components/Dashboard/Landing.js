import React, { Component } from 'react'
import Card from './Card'
//for connect to store
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import "firebase/storage"


 class Landing extends Component {
  render(){
       //console.log('special',this.props)
        const {  Product} =this.props
      // console.log('content goes to card is ',content,Product)
        const contents=Product ? Product.map((el)=>{
            return(
                 <div key={el.id}>
                     <  Card content={el} />
                     
                 </div>

            )
        }):null

        return (
            <div  className='container'> 
               
               {/* <  Card arrImage={arrImage} /> */}
               { contents }
               
            </div>
        )
     }
}

const mapStateToProps=(state)=>{
   // console.log('firestore',state)
    return{
        content:state.project.content,
        Product:state.firestore.ordered.Products
    }
}

//export default connect(mapStateToProps)(Landing)

export default compose(connect(mapStateToProps),
   firestoreConnect(  [
                         {collection:'Products' } 
                       ]
                   )
)(Landing)

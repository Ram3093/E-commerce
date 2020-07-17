import React, { Component }  from 'react'
import  './card.css'
import * as Routes from '../../constant/routes'
import { Link } from 'react-router-dom'
//import firebase from 'firebase/app'


class Card extends Component {
  state={
    url:null
  }
  // componentDidMount(){
  //   const storage=firebase.storage().ref(`Phone-Images/`);
   
 
  //    // console.log('first1',this.props.arrImage.img1Src)
  //      storage.child(this.props.arrImage.img1Src).getDownloadURL().then(url=>(
           
  //           this.setState({url:url})
           
          
           
  //      ))
   
 
  // }
   //const {arrImage}=props
 // console.log('arrimage is ',props.arrImage)
  // console.log(props)
render(){
 //console.log('content receive in card is ',this.props)
      return (
        <div style={{color:"red",boxSizing:"border-box"}}>
           <div style={{width:"220px",cursor:"pointer", float:"left",margin:" 30px 50px 30px",padding:"10px",color:"grey"}} className="card"  >
             <div className="card-image">
               {
                <img src={this.props.content.Url} style={{width:"200px" , height:"200px"}} alt='redme'/>
               }
              

               
            
             </div><br />
             <div className="card-action"  >
               <Link to={Routes.Item+"/"+this.props.content.id}><span style={{color:'black',fontSize:"1rem",fontWeight:"bold",fontFamily:" 'Merriweather', serif"}}>{this.props.content.productName}</span></Link>
               <br />
               <Link to={Routes.Item+"/"+this.props.content.id}><h5 style={{padding:"10px 0px 0px"}}><i className="fas fa-rupee-sign" style={{marginRight:"10px"}}></i>{this.props.content.productPrice}</h5></Link>

             </div>
          
       </div>

       </div>
                
               
     )
   
}
    
       
 
}

export default Card

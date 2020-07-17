//import React from 'react'
import firebase from 'firebase/app'
const images=[
    'oppo.jpg','OnePlus-8-Pro.jfif','oppop-reno-3.jpg','realme-10.jpeg',
    'Realme-X2-Pro_2.jpg','samsung-galaxy-note-20.jpg'
 ]

 const storage=firebase.storage().ref(`Phone-Images/`);
 export const urls=[];
 images.map(el=>{
   
    storage.child(el).getDownloadURL().then(url=>{
        urls.push(url)
        console.log('got downloaed url',url)
        
    })

 })
 //console.log("urls is",urls)

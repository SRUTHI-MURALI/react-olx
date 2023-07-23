import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';

import { FirebaseContext,AuthContext } from '../../Store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Create = () => {
  const history= useHistory()
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const [name,setName]=useState('')
  const [categoryname,setCategoryName]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  const date=new Date()
 
  const handleSubmit = () => {
    firebase
      .storage()
      .ref(`/images/${image.name}`)
      .put(image)
     
      .then(({ ref }) => {
      
        ref.getDownloadURL().then((url) => {
        
        firebase.firestore().collection('products').add({
          name,
          category:categoryname,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        history.push('/')
        });
      })
      
  };
  
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={categoryname}
              onChange={(e)=>{setCategoryName(e.target.value)}}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number"
             value={price}
             onChange={(e)=>{setPrice(e.target.value)}}
             id="fname" name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):'' }></img>
          
            <br />
            <input 
            onChange={(e)=>{
              setImage(e.target.files[0])
            }}
            type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;

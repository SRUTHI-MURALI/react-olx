import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../Store/PostContext';
import { FirebaseContext } from '../../Store/Context';
function View() {
  const {postDetails}=useContext(PostContext)
  const [userDetails,setuserDetails]=useState([])
  const {firebase}=useContext(FirebaseContext)
 
  useEffect(()=>{
    const {userId}=postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc=>{
        setuserDetails(doc.data())
      })
    })
   
  },[])

  {
   
  }
  return (
    <>
     <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.displayName}</span>
          <p>{postDetails.categoryName}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
    </>
   
  );
}
export default View;

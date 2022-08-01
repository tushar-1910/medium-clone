import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Contexts } from "../contexts/Contexts";
import "./productdesc.css";


export const ProductDescription=()=>{
    const [proddata,setProddata]=useState();
    const {productId}=useParams();
    const {handleshowBag} = useContext(Contexts)
    
   const getProductById=async()=>{
        fetch(`http://localhost:8080/products/${productId}`)
        .then((res)=>res.json())
        .then((response)=>setProddata(response));
   }

   useEffect(()=>{
    getProductById();
   },[])


    console.log("checking product data",proddata);

    const handlecart=()=>{
      let dummydata={
         quantity:1,
         ordertotal:500      
      }
      fetch(`http://localhost:8080/createOrder/${productId}`,{
         method:"POST",
         body:JSON.stringify(dummydata),
         headers:{
            "Content-Type":"application/json",
            "token":localStorage.getItem("token")
         }
      })
      .then((res)=>res.json())
      .then((response)=>{
         console.log(response);
         handleshowBag();
      });
    }
    if(proddata){
        return (
            <div className="css-proddescbody">
                <div className="css-proddescwrapper">
                   <ul className="css-proddescH">
                     <li className="css-proddescH1">
                        <a className="name" href="#">Home</a>
                        <span className="arrow">❯</span>
                     </li>
                     <li className="css-proddescH1">
                        <a className="name" href="#">Men's Store</a>
                        <span className="arrow">❯</span>
                     </li>
                     <li className="css-proddescH1">
                        <a className="name" href="#">Skin Care</a>
                        <span className="arrow">❯</span>
                     </li>
                     <li className="css-proddescH1">
                        <a className="name" href="#">Moisturizers</a>
                        <span className="arrow">❯</span>
                     </li>
                   </ul>
                   <div className="mainprodwrapper">
                     <div className="mpwleft">
                       <div className="hearticon">
                         <button className="hearticonbtn">
                          <i className="fa-solid fa-heart"></i>
                         </button>
                       </div>
                       <div className="imageWrapper">
                          <div  className="imageWrapperleft">
                            <img src={require("./imagedescleft.PNG")} alt="" width="100%" height="100%" />
                          </div>
                          <div className="imageWrapperright">
                            <div className="imageWrapperright1">
                              <div className="imageWrapperright11">
                                <img src={proddata.image_url} alt="" />
                              </div>
                            </div>
                          </div>
                       </div>
                     </div>
                     <div className="mpwright">
                       <div className="mpwright1">
                          <div className="mpwright11">
                             <h1>{proddata.name}</h1>
                          </div>
                          <div className="rating-section">
                            <div className="starimage">
                                <img src={require("./ratingstars.PNG")} alt="" />
                                <span>{proddata.rating}/5</span>
                            </div>
                            <div className="ratingAndReview">
                               <span>{Math.floor(Math.random() * (30000 - 3000) + 3000)} ratings & {Math.floor(Math.random() * (3000 - 300) + 300)} reviews</span>
                            </div>
                            <div style={{borderRight:"none"}} className="ratingAndReview">
                              <span>Q&As</span>
                            </div>
                          </div>
                          <div className="mrpsection">
                             <div className="mrpsection1">
                                {
                                    proddata.discount===0 ? 
                                    <div>
                                       <span className="css-mainprice">MRP :<span className="css-mrp"> ₹{proddata.mrp}</span></span>
                                       
                                    </div> 
                                    : <div>
                                        <span className="css-MrpCutoff">MRP :<span> ₹{proddata.mrp}</span></span>
                                        <span className="css-mrp">₹{proddata.price}</span>
                                        <span className="prodOffer"> {proddata.discount}% Off</span>
                                        
                                    </div>
                                }
                             </div>
                          </div>
                          <div className="taxtag">
                            inclusive of all taxes
                          </div>
                          <div className="product-offer-section">
                             <div className="offertag">
                             <i style={{fontSize:"10px"}} className="fa-solid fa-circle"></i> &nbsp;
                              {
                                proddata.offertag==="" ? "Buy 2 Get 1 Free..." : proddata.offertag
                              }
                             </div>
                             <button className="moreOfferbtn">View more offers</button>
                          </div>
                          <div className="quantity-wrapper">
                             <div className="quantity-wapper1">
                                <div className="qwselectbox">
                                    <select className="qwselectsize" name="" id="">
                                       <option value="">Select size (3)</option>
                                       <option value="15">15ml</option>
                                       <option value="30">30ml</option>
                                       <option value="50">50ml</option>
                                    </select>
                                </div>
                             </div>
                             <div className="quantity-buttonwrapper">
                               <button className="qwbtn1">
                                   <span className="qwbtn11">15ml</span>
                                </button>
                               <button className="qwbtn1">
                                   <span className="qwbtn12">30ml</span>
                                </button>
                               <button className="qwbtn1">
                                   <span className="qwbtn12">50ml</span>
                                </button>
                             </div>
                          </div>
                          <div className="css-cartboxWrapper">
                             <div className="css-cbw1">
                                 <div className="css-cbw11">
                                    <button onClick={()=>handlecart()} className="css-cbwbtn">
                                        <span className="css-cbwbtn-text">Add to Bag</span>
                                    </button>
                                 </div>
                             </div>
                             <div className="pincodeWrapper">
                                 <div className="pincodeWrapper1">
                                    <div className="pincodeWrapper11">
                                       <i className="fa-solid fa-location-dot"></i>
                                       <span className="deliverytag">Delivery Options</span>
                                    </div>
                                    <div className="pincodeWrapper12">
                                        <span className="pinbox">
                                            <input className="pininput" type="tel" placeholder="Enter Pincode" maxLength={6} minLength={6} />
                                        </span>
                                        <button className="pincheck">Check</button>
                                    </div>
                                 </div>
                             </div>
                          </div>
                          <img src={require("./productfoot.PNG")} alt="" width="100%"  />
                       </div>
                     </div>
                   </div>
                </div> 
            </div>
        )
    }
    
}
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductList } from "../Redux/moisturizers/action";
import { useNavigate } from "react-router-dom";
import   "./moisturizers.css";


export const Moisturizers=()=>{

    const {pdata,isLoading,isError}=useSelector((state)=>state.pdata);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        dispatch(getProductList(""));
    },[dispatch])
    
    if(isLoading){
        return <h1>Loading ...</h1>
    }
    if(isError){
        return <h1>Something Went Wrong ...</h1>
    }
    //category: "Moisturizers"
    let moistdata;
    if(isLoading===false && isError===false){
        moistdata=pdata.filter((ele)=>{
           return ele.category==="Moisturizers"
        })
    }
    
    
    //console.log(isLoading,isError,pdata,moistdata)
    return (
        <div className="moistCont1">
            <div className="moistCont11">
              <div className="moistCont111">
                <ul className="cssR1">
                  <li className="cssR11">
                    <a className="cssR111" href="#">Home</a>
                    <span className="cssR112arrow"> ❯ </span>
                  </li>
                  <li className="cssR11">
                    <a className="cssR111" href="#">Skin</a>
                    <span className="cssR112arrow"> ❯ </span>
                  </li>
                  <li className="cssR11">
                    <a className="cssR111" href="#">Moisturizers</a>
                  </li>
                </ul>
                <div className="cssR2">
                    <h1 className="cssR2H">
                      Moisturizers Products Collection 
                       &nbsp;
                      <span>(3221)</span>
                    </h1>
                </div>
                <div className="cssR3">
                  <img src={require("./moisturizerspic1.PNG")} alt="" width="100%" />
                </div>
                <div className="cssR4">
                  <h1 className="cssR4H">All Products</h1>
                </div>
                <div className="listWrapper">
                  <div className="filters">
                    <div className="filtersListing">
                      <div className="filter-sort">
                        <div className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Sort By : Popularity</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Popularity</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Discount</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Name</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Customer Top Rated</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">New Arrivals</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Price :High To Low</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Price : Low To HIgh</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                             </ul>
                          </div>
                        </div>
                      </div>
                      <div className="filters-strip">
                         <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Category</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul id="categorybox" className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Face Moisturizer  2165</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Night Cream 603</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Face Oils 562</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">All Purpose Gels/Creams58</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                             </ul>
                          </div>
                         </div>
                         <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Brand</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Nykaa Naturals 94</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">The Body Shop 65</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Olay 64</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Soulflower 62</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Mamaearth 56</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Bella Vita Organic 51</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Lotus Herbals48</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                             </ul>
                          </div>
                        </div>
                        <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Price</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Rs. 0 - Rs. 499  (1242)</span>
                                    </div>
                                    <div  className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Rs. 500 - Rs. 999 (942)</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Rs. 1000 - Rs. 1999 (602)</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Rs. 2000 - Rs. 3999 (302)</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Rs. 4000 & Above133</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                             </ul>
                          </div>
                        </div>
                        <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Discount</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">70% And Above 2</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">60% And Above 5</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">50% And Above 88</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">40% And Above 451</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">30% And Above 1074</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">20% And Above 1945</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">10% And Above 2497</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">All Discounted Products 2556</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                             </ul>
                          </div>
                        </div>
                        <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Avg Customer Rating</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">4 Stars & Above 2731</span>
                                    </div>
                                    <div  className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">3 Stars & Above 2898</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">2 Stars & Above 2914</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">1 Stars & Above 2922</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                             </ul>
                          </div>
                        </div>
                        <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Skin Type</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Dry  1424</span>
                                    </div>
                                    <div  className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Normal 1405</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Oily 1370</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Combination 1344</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Sensitive 1321</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                             </ul>
                          </div>
                        </div>
                        <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Formulation</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Cream 1717</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Oil 571</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Liquid 565</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Gel 546</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Lotion/Body Butter 185</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Mask 158</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Balm 64</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Mist 19</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Scrub 16</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Foam 16</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                             </ul>
                          </div>
                        </div>
                        <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Gender</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Unisex 1782</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Female 1491</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Male 37</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Boy 8</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Girl 6</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                             </ul>
                          </div>
                        </div>
                        <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Concious</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Cruelty-Free 941</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Vegan 484</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Clean 306</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                             </ul>
                          </div>
                        </div>
                        <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button className="css-fs111">
                               <span>Ingredient</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul className="css-sortbox">
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Aloe vera 226</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Shea Butter 98</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Coconut 90</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Neem 75</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Turmeric 71</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Green Tea 69</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Honey 61</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Tea Tree 50</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Argan Oil 47</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                               <div className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">SandalWood 34</span>
                                    </div>
                                    <div className="control-indicator radio"></div>
                                 </label>
                               </div>  
                             </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="productListing">
                    <div className="productList-wrapper">
                      {
                         moistdata.map((ele)=>(
                          <div key={ele._id} onClick={()=>{navigate(`/productdesc/${ele._id}`)}} className="productWrapper">
                             <div className="css-pw1">
                                <div className="css-pw11">
                                  <img  src={ele.image_url} alt="" width="100%" height="200px" />
                                  <div className="pcontent">
                                    <div className="ptitle">
                                      {ele.name}
                                    </div>
                                    <div className="prate">
                                      {
                                        ele.discount===0 ? 
                                        <div>
                                           <span className="css-mrptag">MRP : <span>₹{ele.mrp}</span> </span>
                                        </div> 
                                        : <div>
                                            <span className="css-mrptag1">MRP : <span>₹{ele.mrp}</span> </span>
                                            <span className="css-originalprice">₹{ele.price}</span>
                                            <span className="productoffer">{ele.discount}% Off</span>
                                        </div> 
                                      }
                                    </div>
                                    <div className="offertag">
                                      {
                                         ele.offertag ? <p>{ele.offertag}</p> : <p></p>
                                      }
                                    </div>
                                    <div className="css-ratingimage">
                                       <span ><div style={{display:"flex",alignItems:"center",flexDirection:"row"}}><img src={require("./ratingstars.PNG")} /></div></span>
                                       <span>({Math.floor(Math.random() * (3000 - 200) + 200)})</span>
                                    </div>
                                  </div>
                                </div>
                             </div>
                          </div>       
                         ))       
                      }   
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}


                    // <div>{
                    //       moistdata.map((ele)=>(
                    //         <div style={{display:"flex",flexDirection:"row"}}>
                    //           <img src={ele.image_url} alt="" />
                    //         </div>
                    //       ))
                        
                    //     }
                    // </div>
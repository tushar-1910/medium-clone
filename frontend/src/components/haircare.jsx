import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import   "./moisturizers.css";
import { useRef } from "react";



export const Haircare=()=>{
    const [type,setType]=useState("");
    const [moistdata,setMoistdata]=useState();

    const navigate=useNavigate();
    const sortid=useRef();
    const categorybox=useRef();
    const brandid=useRef();
    const priceid=useRef();
    const discountid=useRef();
    const cratingid=useRef();
    const skintypeid=useRef();
    const fmid=useRef();
    const genderid=useRef();
    const conciousid=useRef();
    const ingrid=useRef();
    
    //sorting references
    const popularityradio=useRef();
    const discountradio=useRef();
    const nameradio=useRef();
    const ratingradio=useRef();
    const newarrivalradio=useRef();
    const hightolowradio=useRef();
    const lowtohighradio=useRef();
    
    //category filters references
    const facemoistradio=useRef();
    const ncreamradio=useRef();
    const faceoilradio=useRef();
    const allcreamsradio=useRef();
    
    //brand filters references
    const nykaradio=useRef();
    const mamaearthradio=useRef();
    const pondsradio=useRef();
    
    useEffect(()=>{
      if(type===""){
        fetch(`http://localhost:8080/productbycategory/?category=Haircare`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="popularity"){
        fetch(`http://localhost:8080/productbycategory/?category=Moisturizers`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="facemoisturizers"){
        fetch(`http://localhost:8080/productbycategory/?category=Moisturizers`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="nightcreams"){
        fetch(`http://localhost:8080/productbycategory/?category=nightcreams`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="faceoils"){
        fetch(`http://localhost:8080/productbycategory/?category=faceoils`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="allcreams"){
        fetch(`http://localhost:8080/product/?sort=popularity`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="discount"){
        fetch(`http://localhost:8080/product/?sort=discount&order=Dsc`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="name"){
        fetch(`http://localhost:8080/product/?sort=name&order=Asc`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="rating"){
        fetch(`http://localhost:8080/product/?sort=rating&order=Dsc`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="newarrival"){
        fetch(`http://localhost:8080/product/?sort=newarrival&order=Dsc`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="lowtohigh"){
        fetch(`http://localhost:8080/product/?sort=lowtohigh&order=Dsc`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="hightolow"){
        fetch(`http://localhost:8080/product/?sort=hightolow&order=Dsc`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="nykaproducts"){
        fetch(`http://localhost:8080/product/?sort=nykaproducts`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="mamaearthproducts"){
        fetch(`http://localhost:8080/product/?sort=mamaearthproducts`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }else if(type==="pondsproducts"){
        fetch(`http://localhost:8080/product/?sort=pondsproducts`)
        .then((res)=>res.json())
        .then((response)=>setMoistdata(response));
      }
    },[type])


    //console.log(moistdata)

    //toggle functionality of filters and sort
    const handlesorttoggle=()=>{
      if(sortid.current.style.display==="block"){
        sortid.current.style.display="none";
      }else{
        sortid.current.style.display="block";
      }
    }
    const handlecategorytoggle=()=>{
      if(categorybox.current.style.display==="block"){
        categorybox.current.style.display="none";
      }else{
        categorybox.current.style.display="block";
      }
    }
    const handlebrandtoggle=()=>{
      if(brandid.current.style.display==="block"){
        brandid.current.style.display="none";
      }else{
        brandid.current.style.display="block";
      }
    }
    const handlepricetoggle=()=>{
      if(priceid.current.style.display==="block"){
        priceid.current.style.display="none";
      }else{
        priceid.current.style.display="block";
      }
    }
    const handlediscounttoggle=()=>{
      if(discountid.current.style.display==="block"){
        discountid.current.style.display="none";
      }else{
        discountid.current.style.display="block";
      }
    }
    const handlecustomerratingtoggle=()=>{
      if(cratingid.current.style.display==="block"){
        cratingid.current.style.display="none";
      }else{
        cratingid.current.style.display="block";
      }
    }
    const handleskintypetoggle=()=>{
      if(skintypeid.current.style.display==="block"){
        skintypeid.current.style.display="none";
      }else{
        skintypeid.current.style.display="block";
      }
    }
    const handlefmtoggle=()=>{
      if(fmid.current.style.display==="block"){
        fmid.current.style.display="none";
      }else{
        fmid.current.style.display="block";
      }
    }
    const handlegendertoggle=()=>{
      if(genderid.current.style.display==="block"){
        genderid.current.style.display="none";
      }else{
        genderid.current.style.display="block";
      }
    }
    const handleconcioustoggle=()=>{
      if(conciousid.current.style.display==="block"){
        conciousid.current.style.display="none";
      }else{
        conciousid.current.style.display="block";
      }
    }
    const handleingtoggle=()=>{
      if(ingrid.current.style.display==="block"){
        ingrid.current.style.display="none";
      }else{
        ingrid.current.style.display="block";
      }
    }

    
    // sorting functionality
    const handlepopularity=()=>{
      popularityradio.current.style.background="rgb(252, 39, 121)";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
      
      setType('popularity')

    }

    const handlediscount=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="rgb(252, 39, 121)";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
      
      setType('discount')
    }
    
    const handlename=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="rgb(252, 39, 121)";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
      
      setType('name')
    }
    const handlerating=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="rgb(252, 39, 121)";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
      
      setType('rating')
    }
    const handlenewarrival=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="rgb(252, 39, 121)";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
      
      setType('newarrival')
    }
    const handlehightolow=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="rgb(252, 39, 121)";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
      
      setType('hightolow')
    }
    const handlelowtohigh=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="rgb(252, 39, 121)";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
      
      setType('lowtohigh')
    }

     //category filtering
    const handlefacemoisturizers=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="rgb(252, 39, 121)";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
  
      setType('facemoisturizers')
    }
    const handlenightcreams=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="rgb(252, 39, 121)";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
      setType('nightcreams')
    }
    const handlefaceoils=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="rgb(252, 39, 121)";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
  
      setType('faceoils')
    }
    const handleallpurpose=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="rgb(252, 39, 121)";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
  
      setType('allcreams')
    }


    //brand filtering
    const handlenykaproducts=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="rgb(252, 39, 121)";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="white";
  
      setType('nykaproducts')
    }
    const handlemamaearcthproducts=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="rgb(252, 39, 121)";
      pondsradio.current.style.background="white";
  
      setType('mamaearthproducts')
    }
    const handlepondsproducts=()=>{
      popularityradio.current.style.background="white";
      discountradio.current.style.background="white";
      nameradio.current.style.background="white";
      ratingradio.current.style.background="white";
      newarrivalradio.current.style.background="white";
      hightolowradio.current.style.background="white";
      lowtohighradio.current.style.background="white";
      facemoistradio.current.style.background="white";
      ncreamradio.current.style.background="white";
      faceoilradio.current.style.background="white";
      allcreamsradio.current.style.background="white";
      nykaradio.current.style.background="white";
      mamaearthradio.current.style.background="white";
      pondsradio.current.style.background="rgb(252, 39, 121)";
  
      setType('pondsproducts')
    }
    
    if(moistdata){
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
                    <a className="cssR111" href="#">Hair</a>
                    <span className="cssR112arrow"> ❯ </span>
                  </li>
                  <li className="cssR11">
                    <a className="cssR111" href="#">HairCare</a>
                  </li>
                </ul>
                <div className="cssR2">
                    <h1 className="cssR2H">
                       Hair Care guide
                       &nbsp;
                      <span>(4809)</span>
                    </h1>
                </div>
                <div className="cssR3">
                  <img src={require("./haircareimage.PNG")} alt="" width="100%" />
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
                             <button onClick={()=>handlesorttoggle()} className="css-fs111">
                               <span>Sort By : Popularity</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul  ref={sortid} className="css-sortbox">
                               <div onClick={()=>handlepopularity()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Popularity</span>
                                    </div>
                                    <div ref={popularityradio}   className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handlediscount()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Discount</span>
                                    </div>
                                    <div ref={discountradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handlename()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Name</span>
                                    </div>
                                    <div ref={nameradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handlerating()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Customer Top Rated</span>
                                    </div>
                                    <div ref={ratingradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handlenewarrival()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">New Arrivals</span>
                                    </div>
                                    <div ref={newarrivalradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handlehightolow()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Price :High To Low</span>
                                    </div>
                                    <div ref={hightolowradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handlelowtohigh()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Price : Low To HIgh</span>
                                    </div>
                                    <div ref={lowtohighradio} className="control-indicator radio"></div>
                                 </label>
                               </div>  
                             </ul>
                          </div>
                        </div>
                      </div>
                      <div className="filters-strip">
                         <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button onClick={()=>handlecategorytoggle()} className="css-fs111">
                               <span>Category</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul ref={categorybox} className="css-sortbox">
                               <div onClick={()=>handlefacemoisturizers()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Face Moisturizer  2165</span>
                                    </div>
                                    <div ref={facemoistradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handlenightcreams()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Night Cream 603</span>
                                    </div>
                                    <div ref={ncreamradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handlefaceoils()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Face Oils 562</span>
                                    </div>
                                    <div ref={faceoilradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handleallpurpose()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">All Purpose Gels/Creams58</span>
                                    </div>
                                    <div ref={allcreamsradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                             </ul>
                          </div>
                         </div>
                         <div style={{borderBottom:"solid 1px #ebebeb"}} className="css-fs1">
                          <div className="css-fs11">
                             <button onClick={()=>handlebrandtoggle()} className="css-fs111">
                               <span>Brand</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul ref={brandid} className="css-sortbox">
                               <div onClick={()=>handlenykaproducts()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Nykaa Naturals 94</span>
                                    </div>
                                    <div ref={nykaradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handlemamaearcthproducts()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">MamaEarth 56</span>
                                    </div>
                                    <div ref={mamaearthradio} className="control-indicator radio"></div>
                                 </label>
                               </div>
                               <div onClick={()=>handlepondsproducts()} className="css-sortbox1">
                                 <input  id="" type="radio" />
                                 <label className="control" htmlFor="">
                                    <div className="control-value">
                                        <span className="title">Ponds 64</span>
                                    </div>
                                    <div ref={pondsradio} className="control-indicator radio"></div>
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
                                        <span className="title">The Body Shop 65</span>
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
                             <button onClick={()=>handlepricetoggle()} className="css-fs111">
                               <span>Price</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul ref={priceid} className="css-sortbox">
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
                             <button onClick={()=>handlediscounttoggle()} className="css-fs111">
                               <span>Discount</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul ref={discountid} className="css-sortbox">
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
                             <button onClick={()=>handlecustomerratingtoggle()} className="css-fs111">
                               <span>Avg Customer Rating</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul ref={cratingid} className="css-sortbox">
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
                             <button onClick={()=>handleskintypetoggle()} className="css-fs111">
                               <span>Skin Type</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul ref={skintypeid} className="css-sortbox">
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
                          <div  className="css-fs11">
                             <button onClick={()=>handlefmtoggle()}  className="css-fs111">
                               <span>Formulation</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul ref={fmid}  className="css-sortbox">
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
                             <button onClick={()=>handlegendertoggle()}  className="css-fs111">
                               <span>Gender</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul ref={genderid} className="css-sortbox">
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
                             <button onClick={()=>handleconcioustoggle()} className="css-fs111">
                               <span>Concious</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul ref={conciousid} className="css-sortbox">
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
                             <button onClick={()=>handleingtoggle()} className="css-fs111">
                               <span>Ingredient</span>
                               <i style={{color:"#fc2779"}} className="fa-solid fa-angle-down"></i>
                             </button>
                             <ul ref={ingrid} className="css-sortbox">
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
                                       <span>({ele.rating})</span> &nbsp;
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
    
}

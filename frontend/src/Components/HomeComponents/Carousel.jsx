import React from 'react'
// import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel'
import Item from './Item';
import './Homepage.css'
// import { Indulge } from './indulgeCarousel'
// import Card from './Card'
const  breakPoints1 = [
    {width:1600,itemToShows:1},
    {width:550,itemToShows:2},
    {width:610,itemToShows:3},
    {width:726,itemToShows:4},
    {width:1000,itemToShows:5},
    {width:1500,itemToShows:6},
    {width:2000,itemToShows:7},
    // {width:1900,itemToShows:8},
    // {width:1,itemsToShow:1},



];


// function carousal(){
    const breakPoints = [
    {itemsToShow:1},
    {itemsToShow:2},
    {itemsToShow:3},
    {itemsToShow:4},
    {width:1,itemsToShow:5},
    {width:5,itemsToShow:6},
    {width:6,itemsToShow:7}



    ];

    // const  breakPoints1 = [
    //     {width:1,itemToShows:1},
    //     {width:550,itemToShows:2},
    //     {width:610,itemToShows:3},
    //     {width:726,itemToShows:4},
    //     {width:1000,itemToShows:5},
    //     {width:1500,itemToShows:6},
        // {width:1,itemsToShow:1},



    // ];
    

function Carousel1(){
        return (
            <>
            <div className='carousel-space'>
            <Carousel breakPoints1={breakPoints1}>
               <Item>
                <img  className='slider-img' src = "https://images-static.nykaa.com/uploads/75248bc5-3dbb-4a1f-94fc-8e6c437b8e74.png?tr=w-1200,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img  src = "https://images-static.nykaa.com/uploads/06776958-f4d3-4000-9799-00bf735f880d.png?tr=w-1200,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img  src = "https://images-static.nykaa.com/uploads/cfbb509d-2d3a-443a-b117-bf1868455fac.png?tr=w-1200,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img  src = "https://images-static.nykaa.com/uploads/9cd5d829-a967-4792-85bf-9d1162440db5.png?tr=w-1200,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/e67a58b7-9b8f-44c1-8b08-705e319fb313.png?tr=w-1200,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/048c6958-deb7-4aac-ae0e-1eecce255888.png?tr=w-1200,cm-pad_resize" alt= ""/>
               </Item>
            </Carousel>

       </div>

      
       <div className='carousel2'>
       <Carousel breakPoints={breakPoints}>
   <Item>
       <img src = "https://images-static.nykaa.com/uploads/6914c8bc-fe83-4675-bc1f-5ebcd4698a91.jpg?tr=w-200,cm-pad_resize" alt = ""/>
     {/* <h3>At $1508 (Save 35%)</h3> */}
  </Item>
  <Item>
       <img src = "https://images-static.nykaa.com/uploads/a3a60369-531a-4474-b66c-65afbc7e102f.jpg?tr=w-200,cm-pad_resize" alt = ""/>
  </Item>
  <Item>
       <img src = "https://images-static.nykaa.com/uploads/35d0e059-ab59-45c8-885b-6f6c7500a4f5.jpg?tr=w-200,cm-pad_resize" alt = ""/>
  </Item>
  <Item>
       <img  src = "https://images-static.nykaa.com/uploads/ddbc6881-f888-4262-962e-95b19afeb2d9.jpg?tr=w-200,cm-pad_resize" alt = ""/>
  </Item>
  <Item>
       <img src = "https://images-static.nykaa.com/uploads/b6d64107-77ff-4fe3-99cd-d638a8f5516a.jpg?tr=w-200,cm-pad_resize" alt = ""/>
  </Item>
  <Item>
       <img  src = "https://images-static.nykaa.com/uploads/06653e4b-369f-4637-bff4-3e831aea3d29.jpg?tr=w-200,cm-pad_resize" alt = ""/>
  </Item>
  <Item>
       <img src = "https://images-static.nykaa.com/uploads/f3a4fe74-87dd-4aef-82e3-434452a4d66f.jpg?tr=w-200,cm-pad_resize" alt = ""/>
  </Item>
  <Item>
       <img src = "https://images-static.nykaa.com/uploads/480b4c62-197a-4c72-811d-73ec4b76d72d.jpg?tr=w-200,cm-pad_resize" alt = ""/>
  </Item>
  <Item>
       <img  src = "https://images-static.nykaa.com/uploads/6914c8bc-fe83-4675-bc1f-5ebcd4698a91.jpg?tr=w-200,cm-pad_resize" alt = ""/>
  </Item>
  <Item>
       <img src = "https://images-static.nykaa.com/uploads/6914c8bc-fe83-4675-bc1f-5ebcd4698a91.jpg?tr=w-200,cm-pad_resize" alt = ""/>
  </Item>
      </Carousel>
       </div>



       <div className='carousel2'>
       <Carousel breakPoints={breakPoints}>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/22ca58f9-ec45-4108-b673-89e6fdd8cb4d.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/99011205-f54b-43c9-b5d4-7c9419594ed4.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/79bfd80a-1d55-4117-b0bc-68e69e34ece0.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/851fd518-a8f8-404d-a1cc-3c57505446d8.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/799ed387-16d9-4602-a809-4c3843d0ae75.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/799ed387-16d9-4602-a809-4c3843d0ae75.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/a809cbf7-d8d5-4c51-810c-7761e847c586.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/851fd518-a8f8-404d-a1cc-3c57505446d8.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/851fd518-a8f8-404d-a1cc-3c57505446d8.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/f4a758d1-9dfa-46de-b7e9-44ef23baf1aa.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src = "https://images-static.nykaa.com/uploads/932f1a78-fa8e-44dd-a6c9-0a0aca7fb0c6.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src ="https://images-static.nykaa.com/uploads/0c28bdc6-1221-49e7-9640-7de02b45fc3b.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               <Item>
                <img src ="https://images-static.nykaa.com/uploads/a42c9765-efcf-4422-b38d-6239579ddc20.jpg?tr=w-120,cm-pad_resize" alt = ""/>
               </Item>
               </Carousel>
               </div>
       </>
        )
    }
    
export { Carousel1 }
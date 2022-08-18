import React from 'react'
// import Carousal from 'react-elastic-carousel'
import products from './product.png';
import product from './product1.png';
import Offers from './offer-img.png'
import Steals from './steal-img.png'

// import { Carousel1 } from './Carousel'
import './Homepage.css'
import { Home } from '../home/Home';
import { Footer } from '../footer/Footer';
// import images from './images'

function Homepage(){
return(
    <>
    {/* <Home /> */}
    {/* <h2>this is my home page</h2> */}
    <img className='first-img1' src = "https://images-static.nykaa.com/uploads/c758ab69-2581-44a6-bcc2-b8e90fb5db13.gif?tr=w-1200,cm-pad_resize" alt = "" />
   {/* <div><Carousel1 /></div> */}
    <img className = "first-img" src = "https://images-static.nykaa.com/uploads/30732215-3b4e-4ea5-ae70-b171d7c64455.gif?tr=w-1200,cm-pad_resize" alt = ""/>
    <img  className = "first-img" src = "https://images-static.nykaa.com/uploads/35a003cc-c7ed-4f76-bccb-0362784092ef.png?tr=w-1200,cm-pad_resize" alt = ""/>
     <div className='main-box'>
        <div className='sub-main1'>
        <div className='small-img'>
         <img src = "https://images-static.nykaa.com/uploads/c56d2df7-6589-4ca9-b32c-3248556db03f.jpg?tr=w-300,cm-pad_resize"  alt = ""/>
        </div>
        <div className='small-img'>
            <img src = "https://images-static.nykaa.com/uploads/000fdc62-572c-4a9b-94a4-9536b24896b8.png?tr=w-300,cm-pad_resize" alt = ""/>
        </div>
        <div className='small-img'>
            <img src = "https://images-static.nykaa.com/uploads/0ba9ffca-7bfe-494e-b687-204ada78ee58.jpg?tr=w-300,cm-pad_resize" alt = ""/>
        </div>
        <div className='small-img'>
            <img src = "https://images-static.nykaa.com/uploads/f20df0a4-f426-41d9-91a6-327f1674e74a.jpg?tr=w-300,cm-pad_resize" alt = ""/>
        </div>
       </div>
        

     </div>
     {/* <div > */}
     <img className='first-img' src = "https://images-static.nykaa.com/uploads/24d764b1-0e25-4e45-9a0c-a6dac14d26e6.png?tr=w-1200,cm-pad_resize" alt = ""/>
     <div className='main-box1'>
        <div className='sub-main'>
        <div className='small-img1'>
            <img src = "https://images-static.nykaa.com/uploads/32abcf40-72b1-4287-b36d-baee44b3747e.jpg?tr=w-400,cm-pad_resize" alt=""/>
           
           {/* <p>Buy 2 Get Exra </p> */}
        </div>
        <div className='small-img1'>           
             <img src = "https://images-static.nykaa.com/uploads/a7b91b21-5dab-46aa-89e0-c944153e5024.jpg?tr=w-400,cm-pad_resize" alt=""/>
         {/* <p>On Bestsellars Pick Gift worth</p> */}
         
         </div>
        <div className='small-img1'>  
            <img src = "https://images-static.nykaa.com/uploads/346a6bc5-2fa7-459b-b2f1-323c32ce2978.jpg?tr=w-400,cm-pad_resize" alt=""/>
            
       </div>
        <div className='small-img1'>           
             <img src = "https://images-static.nykaa.com/uploads/cb4402ac-b359-403c-ad33-bda5ae6d45b9.jpg?tr=w-400,cm-pad_resize" alt=""/>
             {/* <h2>fdmkdfkds</h2> */}
            
        </div>
        <div className='small-img1'>           
             <img src = "https://images-static.nykaa.com/uploads/ab13493b-8408-43d0-b41a-1e2a5a5c1ad0.jpg?tr=w-400,cm-pad_resize" alt=""/>
             
           </div>
        <div className='small-img1'>           
             <img src = "https://images-static.nykaa.com/uploads/a9fb1018-7478-455d-8a41-0192e102d7d8.png?tr=w-400,cm-pad_resize" alt=""/>
       
             </div>
       <div className='small-img1'>
            <img src = "https://images-static.nykaa.com/uploads/4fff30f2-fd2e-4794-9c9c-a8eb08859831.jpg?tr=w-400,cm-pad_resize" alt=""/>
            
        </div>
        <div className='small-img1'>
        <img src = "https://images-static.nykaa.com/uploads/a1b66e51-deed-484d-a194-60d72c0c3a9e.jpg?tr=w-400,cm-pad_resize" alt=""/>
        
        </div>
        <div className='small-img1'>
        <img src = "https://images-static.nykaa.com/uploads/425d2504-ce5b-435e-b570-419454cc3a8c.jpg?tr=w-400,cm-pad_resize" alt=""/>
        
        
        </div>
        </div>
       
     </div>
{/* //indulge */}

<img src = "https://images-static.nykaa.com/uploads/31178e9a-014b-4565-9eff-7ca36b3aca64.jpg?tr=w-1200,cm-pad_resize" alt = ""/>




    {/* </div> */}
    <img  className = "first-img2" src = "https://images-static.nykaa.com/uploads/7900fb1c-9150-4cc3-815c-b3dea9d7195d.gif?tr=w-1200,cm-pad_resize" alt = ""/>
    <div>
   <img src = {products} className="products" alt = ""/>

   <img src = {product} className="products" alt = ""/>
   <img className = "first-img" src = "https://images-static.nykaa.com/uploads/991ecdd0-0172-44d2-a8a0-1183982f4e1c.gif?tr=w-1200,cm-pad_resize" alt = ""/>
   <img src = "https://images-static.nykaa.com/uploads/20a10139-0cdd-415c-bfce-0ab90b360ded.png?tr=w-1200,cm-pad_resize" className='buy-img' alt = ""/>
   <img src = {Offers} className="products" alt = ""/>
   </div>
{/* influcencer */}
<img className = "influcer-img" src = "https://images-static.nykaa.com/uploads/c2cbc18b-d145-4cd0-b130-d3cc65a6ba34.png?tr=w-1200,cm-pad_resize" alt = ""/>
  <div className='influncer-heading'>
    <div className='sub-influncer'>
        <div>
            <img src = "https://images-static.nykaa.com/uploads/8c3cf9b5-77cb-499e-94d7-3622d0fa9064.jpg?tr=w-300,cm-pad_resize" alt=  ""/>
            <h3>Aanam's Best Beauty Deals Under 799</h3>
        </div>

        <div>     
            <img src = "https://images-static.nykaa.com/uploads/e55eded5-40c9-4692-914e-544d21b862f3.jpg?tr=w-300,cm-pad_resize" alt = ""/>
            <h3>Masoom's Hottest Luxe Kits </h3>

        </div>

        <div>
        <img src = "https://images-static.nykaa.com/uploads/ee1ca8a8-3ad8-4adc-adea-0771f6d6d19b.jpg?tr=w-300,cm-pad_resize" alt = ""/>
        <h3>Malavika's MakeUp Steals Under 1399</h3>

        </div>

        <div>

        <img src = "https://images-static.nykaa.com/uploads/ae612a6f-7d18-413b-b25a-edf4bd3b38e2.jpg?tr=w-300,cm-pad_resize" alt= ""/>
        <h3>Jovita's Skin Faves Under 999</h3>

        </div>
    </div>
    
    </div>
    <img src = {Steals} className="products" alt = ""/>

  {/* <div> */}
    <img className = "products" src = "https://images-static.nykaa.com/uploads/4247e346-1819-4d16-8975-4c3c63ca4b9f.gif?tr=w-1200,cm-pad_resize" alt = ""/>
     <img className = "products" src = "https://images-static.nykaa.com/uploads/1cc3a9e1-2adc-4f27-9094-a31ff1718045.jpg?tr=w-1200,cm-pad_resize" alt = ""/>
  {/* </div> */}
  <img className = "products" src = "https://images-static.nykaa.com/uploads/a1b51cfa-7ac6-4be0-b689-81d4ba3639ca.png?tr=w-1200,cm-pad_resize" alt= ""/>
  <div className='HouseOfNykaa'>
    <div className='sub-House'>
    <div>
     <img src = "https://images-static.nykaa.com/uploads/c048a2a7-afa2-4328-8249-913769847bf8.jpg?tr=w-200,cm-pad_resize" alt= ""/>
     <h3>Up To 90% off</h3>
    </div>
    <div>
        <img src = "https://images-static.nykaa.com/uploads/e55e7873-4f23-45ce-8a32-3d3c334725ac.jpg?tr=w-200,cm-pad_resize" alt =""/>
        <h3>Up To 70% off</h3>
    </div>
    <div>
        <img src = "https://images-static.nykaa.com/uploads/cefaa037-8d8b-4dc1-aacc-6e263f199b2d.jpg?tr=w-200,cm-pad_resize" alt =""/>
     <h3>Up To 80% off</h3>
    </div>
    <div>
        <img src = "https://images-static.nykaa.com/uploads/aecf945c-5f13-440d-9811-175685913b6c.jpg?tr=w-200,cm-pad_resize" alt =""/>
        <h3>Up To 60% Off</h3>
    </div>
  </div>
  </div>

  {/* Fantastic */}
  <img  className = "first-img" src = "https://images-static.nykaa.com/uploads/a5c25774-a20a-4e0c-a52f-e9bf9390adad.png?tr=w-1200,cm-pad_resize" alt = ""/>

 <div className='FantasticOfNykaa'>

    <div className='sub-fantastic'>

    <div>
     <img src = "https://images-static.nykaa.com/uploads/39153727-8f82-4088-bcb4-16a74ead02d6.jpg?tr=w-200,cm-pad_resize" alt= ""/>
     <h3>Up To 90% off</h3>
    </div>
    <div>
        <img src = "https://images-static.nykaa.com/uploads/6f1f49c9-2075-4175-b9bc-ca42888cb0aa.jpg?tr=w-200,cm-pad_resize" alt =""/>
        <h3>Up To 70% off</h3>
    </div>
    <div>
        <img src = "https://images-static.nykaa.com/uploads/052b18fd-e083-4eed-8ace-d4667dcf84cd.jpg?tr=w-200,cm-pad_resize" alt =""/>
     <h3>Up To 80% off</h3>
    </div>
    <div>
        <img src = "https://images-static.nykaa.com/uploads/5280ad00-20ad-4909-994a-5b60235c4766.jpg?tr=w-200,cm-pad_resize" alt =""/>
        <h3>Up To 95% Off</h3>
    </div>
    <div>
        <img src = "https://images-static.nykaa.com/uploads/e1170089-9168-4696-b909-31ee2d2c0ef6.jpg?tr=w-200,cm-pad_resize" alt =""/>
        <h3>Up To 60% Off</h3>
    </div>
    <div>
        <img src = "https://images-static.nykaa.com/uploads/1d1f0ff6-a854-49d9-83da-da29c2c4a714.jpg?tr=w-200,cm-pad_resize" alt =""/>
        <h3>Up To 50% Off</h3>
    </div>
  </div>
  </div>
  
  <img src = "https://images-static.nykaa.com/uploads/6eb33855-69a0-4979-92d8-a94ed8185f9e.png?tr=w-1200,cm-pad_resize" alt = ""/>
   
   <Footer />
    </>
)
}
export { Homepage } 
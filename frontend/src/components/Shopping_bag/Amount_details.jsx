import { TotalPay } from "./Total_pay"

import "./Shopping_bag.css"

function AmountDetails({data}) {
let total = 0
// let details_from_local1 = JSON.parse(localStorage.getItem("card"));
// console.log("data:"+ details_from_local1);

    return (
        <>
        <div>

        {/* {details_from_local1.map( (e) =>  ( */}
           total+= Number(data.price),
            <div className = "payment-details-flex">
                <div className = "payment-heading" > Payment details</div>
                <div className = "flex-payment">
                    <div>Bag Total</div>
                    <div>{data.length}</div>
                </div>
                <div className = "flex-payment">
                    <div className ="bag-discount">Bag Discount</div>
                    <div>0</div>
                </div>
                <div className = "flex-payment">
                    <div>Sub Total</div>
                    <div></div>
                </div>
                <div className = "flex-payment">
                    <div>Shipping Charge</div>
                    <div>Free</div>
                </div>
                <div className = "flex-payment">
                    <div >Grand Total</div>
                    <div>{total}</div>
                </div>
                <div className = "coupon-box">
                    <div>Have a Coupon?</div>
                    <div className = "pink-text"> View Coupons</div>
                </div>
               
            </div>
         {/* ))}  */}

        </div>
{/* 
        <TotalPay grandtotal = {total}/> */}
        </>
    )


}

export {AmountDetails}
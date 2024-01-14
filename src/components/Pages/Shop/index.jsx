import React from "react"
import Adress from "./Address"
import Order from "./order"
import Footer from "../../footer"
import Payment from "./payment"

export default function Shop() {
  return (
    <>
      <h2 className="font-bold my-8 ">Home  <span className="font-normal" >/ Shop / </span><span className="font-normal" >Checkout</span></h2>
      
      
      <div className="flex gap-12">
        <Adress />
        <div>
          {/* <Order />
          <Payment /> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

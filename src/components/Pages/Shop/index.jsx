import React from "react"
import Adress from "./Address"
import Footer from "../../footer"
import Order from "./order"

export default function Shop() {
  return (
    <>
      <h2 className="font-bold my-8 ">Home  <span className="font-normal" >/ Shop / </span><span className="font-normal" >Checkout</span></h2>
      
      
      <div className="flex gap-12">
        <Adress />
      </div>
      <Footer />
    </>
  )
}

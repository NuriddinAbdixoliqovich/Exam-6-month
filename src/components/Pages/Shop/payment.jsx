import React from 'react'

export default function Payment() {
    const paypal = "/src/assets/images/pay-pal.png";
  return (
    <>
    <div className="flex flex-col">
        <fieldset className="ms-16 mb-12">
        <h1 className="font-bold mt-12 mb-5">Payment Method</h1>
        <div className="flex gap-3 border border-[#EAEAEA] focus:border-green-400 p-2 rounded-[4px]">
            <input 
            type="radio" 
            name="paypal"
            id="paypal1" 
            value="paypal" />
            <label htmlFor="paypal1"><img src={paypal} alt="" /></label>
        </div>
        <div className="flex gap-3 border border-[#EAEAEA] focus:border-green-400 p-2 rounded-[4px] my-4">
            <input 
            type="radio" 
            name="paypal" 
            id="transfer2"
            value="transfer"  />
            <label htmlFor="transfer2">Dorect bank transfer</label>
        </div>
        <div className="flex gap-3 border border-[#EAEAEA] focus:border-green-400 p-2 rounded-[4px]">
            <input 
            type="radio" 
            name="paypal"
            id="cash3" 
            value="cash"  />
            <label htmlFor="cash3">Cash on delivery</label>
        </div>

        </fieldset>
        <button type="submit" className="ms-16 py-2 text-white rounded-[5px] bg-[#46A358] " >Place Order</button>
    </div>
    
    </>
  )
}

import React from 'react'


export default function Order() {
    const barberton = "/src/assets/images/barberton_daisy.png";
    const blushing = "/src/assets/images/blushing_bromeliad.png";
    const aluminum = "/src/assets/images/aluminum_plant.png";


  return (
    <div>
        <h1 className="mb-5 text-xl font-bold" >Your Order</h1>
        <div className="flex justify-between border-b-[1px] pb-4">
            <h2>Products</h2>
            <h2>Subtotal</h2>
        </div>
        <div className="flex items-center bg-[#FBFBFB] p-2 mt-2">
            <img src={barberton} alt="" />
            <div className="ms-4" >
                <h2>Barberton Daisy</h2>
                <p className="text-[12px]"><span className="text-gray-400">SKU:</span> 1995751877966</p>
            </div>
            <p className="ms-12 me-6 text-gray-600 text-[14px]">(x 2)</p>
            <h2 className="text-[#46A358] font-bold">$238.00</h2>
        </div>
        <div className="flex items-center bg-[#FBFBFB] p-2 mt-2">
            <img src={blushing} alt="" />
            <div className="ms-4" >
                <h2>Blushing Bromilead</h2>
                <p className="text-[12px]" ><span className="text-gray-400">SKU:</span> 19957518757065</p>
            </div>
            <p className="ms-8 me-6 text-gray-600 text-[14px]">(x 6)</p>
            <h2 className="text-[#46A358] font-bold">$834.00</h2>
        </div>
        <div className="flex items-center bg-[#FBFBFB] p-2 mt-2">
            <img src={aluminum} alt="" />
            <div className="ms-4" >
                <h2>Aluminum Plant</h2>
                <p  className="text-[12px]"><span className="text-gray-400">SKU:</span> 1995751877786</p>
            </div>
            <p className="ms-14 me-6 text-gray-600 text-[14px]">(x 9)</p>
            <h2 className="text-[#46A358] font-bold">$1.611.00</h2>
        </div>
        <h2 className="mt-4 text-right" >Have a coupon code? <span className="text-[#46A358] cursor-pointer" >Click here</span></h2>
        <div className="flex justify-between ps-16 mt-4">
            <h3>Subtotal</h3>
            <h2 className="font-medium">$2,683.00</h2>
        </div>
        <div className="flex justify-between ps-16 mt-4">
            <h3>Coupon Discount</h3>
            <h2 className="font-medium">(-) 00.00</h2>
        </div>
        <div className="flex justify-between ps-16 mt-4">
            <h3>Shiping</h3>
            <h2 className="font-medium">Shiping</h2>
        </div>
        <h3 className="text-right text-[#46A358] border-b-[1px] border-[#46A358] mt-2 pb-4 cursor-pointer">View shipping charge</h3>
        <div className="flex justify-between ps-16 mt-4">
            <h2 className="font-bold text-base">Total</h2>
            <h2 className="font-bold text-[#46A358]">$2,699.00</h2>
        </div>
        
    </div>
  )
}

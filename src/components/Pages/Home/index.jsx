import React from "react"




export default function Home() {
  const greenshop = "/src/assets/images/greenshop.png"
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl mt-8 mb-12" >HOME PAGE</h1>
      <img src={greenshop} alt="" className="w-[500px] h-[500px] rounded-[40px]" />
    </div>
  )
}

import React from "react"



export default function PlantCare() {
  const plantcare = "/src/assets/images/plant-care.jpg"
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl mt-8 mb-12" >PLANT CARE</h1>
      <img src={plantcare} alt="" className="w-[500px] h-[500px] rounded-[40px]" />
    </div>
  )
}

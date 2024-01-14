import React from "react"




export default function Blog() {
  const blog = "/src/assets/images/blog.jpg"
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl mt-8 mb-12" >BLOG</h1>
      <img src={blog} alt="" className="w-[500px] h-[500px] rounded-[40px]" />
    </div>
  )
}

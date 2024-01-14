import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"
import Model from 'react-modal'
import Input from "../UI/Form/Input";
import "./Navbar.css"



export default function Navbar() {
    const [visible, setvisible] = useState(false);



    const navLogo = "/src/assets/images/nav-logo.svg";
    const search = "/src/assets/images/search_icon.svg";
    const basket = "/src/assets/images/basket.svg";
    const loginicon = "/src/assets/images/login_icon.svg"
    const close = "/src/assets/images/X.svg"
    const hidden = "/src/assets/images/hidden.png";
    const google = "/src/assets/images/google.png";
    const facebooklogin = "/src/assets/images/facebook_login.png"


    

  return (
    <>
        <div className="navbar flex justify-between items-center py-5 border-b-2">
            <Link to="/Home">
                <img src={navLogo} alt="" />
            </Link>
            <ul className="flex gap-8">
                <Link to="/Home" >Home</Link>
                <Link to="/Shop" >Shop</Link>
                <Link to="/PlantCare" >Plant Care</Link>
                <Link to="/Blog" >Blog</Link>
            </ul>
            <div className="flex items-center gap-4" >
                <img src={search} alt="" />
                <img src={basket} alt="" />
                <div>
                <button onClick={() => setvisible(true)} className="flex items-center gap-1 px-4 py-2 rounded-[6px] text-white bg-[#46A358]" ><img src={loginicon} alt="" />Login</button>
                <Model isOpen={visible} onRequestClose={()=>setvisible(false)} className="flex justify-center pt-40 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
                    <div className="w-[500px] h-[600px] border-2 border-green-600 bg-white text-center rounded-[10px]">
                        <button onClick={() => setvisible(false)} className="ms-[450px] mt-3"><img src={close} alt="" /></button>
                        <form>
                        <div className="flex justify-center gap-2">
                            <h1 className="text-[#46A358] font-medium text-[20px]">Login</h1>
                            <h1 className="font-medium text-[20px]">|   Register</h1>
                        </div>
                        <h1 className="text-[13px] mt-12 mb-3">Enter your username and password to login.</h1>
                        <Input 
                        type="email"
                        placeholder="Enter your email"
                        className="w-[300px]"
                        />
                        <div className="my-4 password_box">
                            <Input 
                            type="password"
                            placeholder="Enter your password"
                            className="w-[300px]"

                            />
                            <button className="hidden_img"><img src={hidden} alt="" /></button>
                        </div>
                        <h3 className="text-[#46A358] text-right pe-[90px]">Forgot Password?</h3>
                        <button type="submit" className="bg-[#46A358] text-white w-[300px] py-2 rounded-[5px] mt-6 mb-12">Login</button>
                        <p>Or login with</p>
                        <button className="flex justify-center items-center gap-4 border border-gray-300 w-[300px] ms-[100px] my-3 py-2 px-12 rounded-[6px]"><img src={google} alt="" />Login with Google</button>
                        <button className="flex justify-center items-center gap-4 border border-gray-300 ms-[100px] rounded-[6px] py-2 px-[58px]"><img src={facebooklogin} alt="" />Login with Facebook</button>
                        </form>
                        

                    </div>
                </Model>
                </div>
            </div>


            
        </div>
    </>
  )
}

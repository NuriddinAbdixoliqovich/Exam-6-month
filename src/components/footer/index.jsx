import React from 'react'
import Input from '../UI/Form/Input';
import "./footer.css"


export default function Footer() {
    const garden1 = "/src/assets/images/garden1.png";
    const garden2 = "/src/assets/images/garden2.png";
    const plant = "/src/assets/images/plant-renovation.png";
    const watering = "/src/assets/images/watering.png";
    const circleimg = "/src/assets/images/circle.png";
    const footerlogo = "/src/assets/images/nav-logo.svg";
    const location = "/src/assets/images/location.png";
    const emailimg = "/src/assets/images/email.png";
    const phoneimg = "/src/assets/images/phone.png";
    const facebook = "/src/assets/images/facebook.png";
    const instagram = "/src/assets/images/instagram.png";
    const twitter = "/src/assets/images/twitter.png";
    const linkedin = "/src/assets/images/linkedin.png";
    const union = "/src/assets/images/union.png";
    const paypal = "/src/assets/images/pay-pal.png";

  return (
    <footer className="bg-[#FBFBFB] ps-8 mt-52">
        <div className="flex py-6 ">
            <div className="footer_card" >
                <img src={garden1} alt="" className="ms-5" />
                <img src={garden2} alt="" className="ms-5" />
                <img src={circleimg} alt="" className="circleimg"/>
                <h3 className="text-[17px] font-bold mt-4 mb-3" >Garden Care</h3>
                <p className="text-[14px]">We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
            </div>
            <div className="footer_card border-x-[1px] px-6 mx-6">
                <img src={plant} alt=""  className="ms-3 mt-[5px]" />
                <img src={circleimg} alt="" className="circleimg"/>
                <h3 className="text-[17px] font-bold mt-4 mb-3" >Plant Renovation</h3>
                <p className="text-[14px]">We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
            </div>
            <div className="footer_card">
                <img src={watering} alt="" className="mt-[5px]" />
                <img src={circleimg} alt="" className="circleimg"/>  
                <h3 className="text-[17px] font-bold mt-4 mb-3" >Watering Graden</h3>
                <p className="text-[14px]">We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
            </div>
            <div className="ms-6">
                <h1 className="font-bold">Would you like to join newsletters?</h1>
                <div className="flex footer_input my-5">
                    <Input type="text" placeholder="enter your email address..." />
                    <button className="footer-btn bg-[#46A358] px-8 py-2 rounded-e-[3px] text-white" >Join</button>
                </div>
                <p className="text-[14px]">We usually post offers and challenges in newsletter. We’re <br /> your online houseplant destination. We offer a wide range <br /> of houseplants and accessories shipped directly from our <br /> (green)house to yours! </p>
            </div>
        </div>
        <div className="footer_middle_card flex items-center py-6 ps-8" >
            <img src={footerlogo} alt="" />
            <img src={location} alt="" className="ms-20 me-2" />
            <h2>70 West Buckingham Ave. <br /> Farmingdale, NY 11735</h2>
            <img src={emailimg} alt="" className="ms-16 me-2" />
            <h2>contact@greenshop.com</h2>
            <img src={phoneimg} alt="" className="ms-16 me-2" />
            <h2>+88 01911 717 490</h2>
        </div>
        <div className="flex gap-32 py-12 ps-8">
            <div>
            <h1 className="font-bold text-[18px]">My Account</h1>
            <ul className="flex flex-col gap-3 mt-2">
                <li><a href="#">My Account</a></li>
                <li><a href="#">Our stores</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Specials</a></li>
            </ul>
            </div>
            <div>
            <h1 className="font-bold text-[18px]">Help & Guide</h1>
            <ul className="flex flex-col gap-3 mt-2">
                <li><a href="#">Help centre</a></li>
                <li><a href="#">How to buy</a></li>
                <li><a href="#">Shipping $ Delivery</a></li>
                <li><a href="#">Product Policy</a></li>
                <li><a href="#">How to return</a></li>
            </ul>
            </div>
            <div>
            <h1 className="font-bold text-[18px]">Categories</h1>
            <ul className="flex flex-col gap-3 mt-2">
                <li><a href="#">House Plants</a></li>
                <li><a href="#">Potter Plants</a></li>
                <li><a href="#">Seeds</a></li>
                <li><a href="#">Smal Plants</a></li>
                <li><a href="#">Accessories</a></li>
            </ul>
            </div>
            <div>
                <h1 className="font-bold text-[18px]">Socila Media</h1>
                <div className="flex gap-2">
                    <img src={facebook} alt="" className="icon_img py-2 px-3 rounded-[4px]" />
                    <img src={instagram} alt="" className="icon_img py-2 px-2 rounded-[4px]" />
                    <img src={twitter} alt="" className="icon_img py-2 px-2 rounded-[4px]" />
                    <img src={linkedin} alt="" className="icon_img py-2 px-2 rounded-[4px]" />
                    <img src={union} alt="" className="icon_img py-2 px-2 rounded-[4px]" />
                </div>
                <h1 className="font-bold text-[18px] mt-8 mb-4">We accept</h1>
                <img src={paypal} alt="" />
            </div>
        </div>
    </footer>
  )
}

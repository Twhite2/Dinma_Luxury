import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterLists";
import {MdFacebook} from "react-icons/md";
import {AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    return  <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                    <Link href="#">Candles</Link>
                    <Link href="#">Diffusers</Link>
                    <Link href="#">Essential Oils</Link>
                    <Link href="#">Home Decor/Appliances</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Customer Service</h3>
                    <Link href="#">Contact Us</Link>
                    <Link href="#">Delivery policy</Link>
                    <Link href="#">Returns and Exchangess</Link>
                    <Link href="#">FAQS</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-base font-bold mb-2">About Us</h3>
                <p className="mb-2">
                Welcome to Dinma Luxury, your haven for sensory indulgence in the heart of Lagos.
                 Immerse yourself in the opulence of our carefully curated collection,
                  featuring exquisite diffusers, enchanting candles, and premium essential oils. At Dinma Luxury,
                   we transcend the ordinary, transforming your space into a sanctuary of luxury and tranquility.
                    Each product is meticulously crafted to elevate your senses and create an ambiance of refined elegance.
                     Step into our world, where the essence of sophistication meets the power of aroma,
                 and let Dinma Luxury redefine the way you experience luxury living.
                </p>
                <p>&copy; {new Date().getFullYear()} Dinma Luxury. All Rights Reserved.</p>
                </div>
                <FooterList>
                <h3 className="text-base font-bold mb-2">Follow Us</h3>
                <div className="flex gap-2">
                <Link href="https://web.facebook.com/dlgiftstores" target="_blank">
                   <MdFacebook size={24}/>
                </Link>
                {/* <Link href="https://web.facebook.com/dlgiftstores" target="_blank">
                   <AiFillTwitterCircle size={24}/>
                </Link> */}
                <Link href="https://www.instagram.com/dl_scentss/" target="_blank">
                   <AiFillInstagram size={24}/>
                </Link>
                {/* <Link href="https://web.facebook.com/dlgiftstores" target="_blank">
                   <MdFacebook size={24}/>
                </Link> */}
                </div>
                </FooterList>
            </div>
        </Container>
    </footer>;
};
 
export default Footer;
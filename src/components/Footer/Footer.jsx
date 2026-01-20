import React, { useState } from 'react'
import { FaFacebook, FaMedkit, FaTwitter, FaUserShield, FaYoutube } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5';
import { MdBrandingWatermark, MdContactPage, MdCookie, MdDesignServices, MdEmail, MdFindInPage, MdPrivacyTip, MdRoundaboutRight, MdWhatsapp } from 'react-icons/md';
import { FcAdvertising } from "react-icons/fc";
import { SiCoinmarketcap } from "react-icons/si";
import { Link, NavLink } from 'react-router';
import axios from "axios";

function Footer() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async () => {
        if (!email) {
            alert("Please enter your email");
            return;
        }

        try {
            setLoading(true);
            await axios.post(
                "https://news-website-server-three.vercel.app/api/news/api/newsletter/subscribe",
                { email }
            );
            setSuccess(true);
            setEmail("");
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            if (err.response?.status === 409) {
                alert("Already subscribed");
            } else {
                alert("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='mt-5  bg-gray-100'>
            <footer className="footer sm:footer-horizontal  bg-gray-100 text-gray-900 p-10 max-w-6xl mx-auto">

                {/* Services */}
                <nav>
                    <h6 className="footer-title font-bold text-black">Services</h6>
                    <Link to='/branding' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><MdBrandingWatermark /><span>Branding</span></Link>
                    <Link to='/design' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><MdDesignServices /><span>Design</span></Link>
                    <Link to='/marketing' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><SiCoinmarketcap /><span>Marketing</span></Link>
                    <Link to='/advertisement' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><FcAdvertising /><span>Advertisement</span></Link>
                </nav>
                {/* Company */}
                <nav>
                    <h6 className="footer-title font-bold text-black">Company</h6>
                    <Link to='/about' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><MdRoundaboutRight /><span>About</span></Link>
                    <Link to='/contact' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><MdContactPage /><span>Contact</span></Link>
                    <Link to='/jobs' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><MdFindInPage /><span>Jobs</span></Link>
                    <Link to='/pressKit' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><FaMedkit /><span>Press kit</span></Link>
                </nav>
                {/* Legal */}
                <nav>
                    <h6 className="footer-title font-bold text-black">Legal</h6>
                    <Link to='/termsOfUse' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><FaUserShield /><span>Terms of use</span></Link>
                    <Link to='/privacy' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><MdPrivacyTip /><span>Privacy policy</span></Link><Link to='/cookiePolicy' className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800"><MdCookie /><span>Cookie policy</span></Link>
                </nav>
                {/* Support */}
                <nav>
                    <h6 className="footer-title font-bold text-black">Support</h6>
                    <span className="link link-hover flex items-center gap-2 hover:text-blue-800">
                        <IoLocationSharp size={18} />
                        <p>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
                    </span>
                    <a className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800" href="mailto:worldnews@support.com"><MdEmail size={16} />worldnews@support.com</a>
                    <a className="link link-hover flex justify-center items-center gap-2 hover:text-blue-800" href="tel:+01749535688"><MdWhatsapp size={16} />+8801749535688</a>
                </nav>
                {/* Newsletter Section */}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubscribe();
                }}>
                    <h6 className="footer-title font-bold text-black">
                        Newsletter
                    </h6>

                    <fieldset className="w-80">
                        <label className="text-sm font-medium text-gray-700">
                            Enter your email address
                        </label>

                        <div className="join mt-1 w-full">
                            <input
                                type="email"
                                placeholder="username@email.com"
                                className="input input-bordered join-item bg-gray-200 w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary join-item disabled:opacity-80">
                                {loading ? "Subscribing..." : "Subscribe"}
                            </button>
                        </div>
                        {/* Success Message */}
                        {success && (
                            <p className="text-green-600 mt-2 text-sm">
                                ✅ Thank you for subscribing!
                            </p>
                        )}
                    </fieldset>
                </form>
            </footer>
            {/* End Footer */}
            <footer className="bg-gray-100 text-gray-800 border-gray-200 border-t-2 px-6 py-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4 px-10">

                    {/* Left */}
                    <p className="text-center text-gray-500 md:text-left">
                        <NavLink to='/'><img src="/images/news.png" alt="" className='w-20 hover:scale-105 duration-300 m-auto md:m-0' /></NavLink>
                        Develop by <a href="https://www.linkedin.com/in/nur637788/" target='_blank' className='text-blue-700 font-medium hover:font-bold hover:text-blue-800'>Abdun Nur</a>
                    </p>

                    {/* Right */}
                    <div className='flex flex-col items-center gap-y-1'>
                        <div className="flex gap-4 text-2xl">
                            <a href="http://x.com" target='_blank'><FaTwitter className='text-blue-500 hover:scale-120 duration-300 cursor-pointer' /></a>
                            <a href="http://youtube.com" target='_blank'><FaYoutube className='text-pink-700 hover:scale-120 duration-300 cursor-pointer' /></a>
                            <a href="http://facebook.com" target='_blank'><FaFacebook className='text-blue-600 hover:scale-120 duration-300 cursor-pointer' /></a>
                        </div>
                        <p className="text-center md:text-left text-sm text-gray-500">
                            © {new Date().getFullYear()} WORLD NEWS Ltd.</p>
                    </div>
                </div>
            </footer>


        </div >
    )
}

export default Footer

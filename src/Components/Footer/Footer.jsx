import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]  p-10  text-white">
      <footer className="footer sm:footer-horizontal w-full md:w-[75%] mx-auto">
        <aside>
          <h1 className="text-4xl font-bold">DigiTools</h1>
          <p>
            Premium digital tools for creators,
            <br />
            professionals, and businesses. Work smarter
            <br />
            with our suite of powerful tools.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title ">Social Links</h6>
          <div className="flex gap-4">
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
          </div>
        </nav>
      </footer>
        <div className="divider before:bg-white/20 after:bg-white/20 w-full md:w-[75%] mx-auto"></div>

        <div className=" text-gray-400 w-full md:w-[75%] flex flex-col md:flex-row gap-2 justify-between mx-auto">
            <div className="">© 2026 Digitools. All rights reserved.</div>
            <div className="flex gap-6">
                <p className="">Privacy Policy</p>
                <p className="">Terms of Service</p>
                <p className="">Cookies</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;

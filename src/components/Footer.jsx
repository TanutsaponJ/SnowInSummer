import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt=""
                width={200}
                className="mx-auto"
              />
            </Link>
            <p className="my-8 text-Black/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-center gap-6 justify-center">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Necklaces
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Hoodies
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Jewelry Box
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                T-shirt
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Jacket
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Our Producers
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Sitemap
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black ">
        <p className="text-black text-center items-center py-3">
          Tanutsapon Jinaongkan ©{currentYear} Coral, Inc.
        </p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <Link to="https://github.com/TanutsaponJ">
            {" "}
            <FaGithub className="text-black" />
          </Link>
          <Link to="https://www.facebook.com/nutt.carick/">
            {" "}
            <FaFacebookF className="text-black" />
          </Link>
          <Link to="https://www.instagram.com/nut_tanutsapon/">
            {" "}
            <FaInstagram className="text-black" />
          </Link>
          <Link to="https://www.linkedin.com/in/tanutsapon/">
            {" "}
            <FaLinkedinIn className="text-black" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

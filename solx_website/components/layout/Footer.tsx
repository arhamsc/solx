import { footerLinks } from "@constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-t border-gray-100 bg-light_green-100">
      {/* Logo and Links */}
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        {/* Logo */}
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/images/logos/solx_logo_text.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="font-montserrat text-base text-gray-700">
            SolX 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-1 w-full md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-6 text-base">
              <h3 className="font-bold font-montserrat text-orange">
                {link.title}
              </h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="font-light text-gray-700">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Copy Right */}
      <div className="flex justify-between items-center mt-10 flex-wrap border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 SolX. All Rights Reserved.</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="" className="text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import Image from "next/image";

import "./layout.css";
import WalletConnectButton from "./WalletConnectButton";
import SolXPopOver from "./SolXPopOver";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 bg-cream">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
        <li className="flex-center gap-8">
          <div>
            <Link href={"/"} className="flex-center">
              <Image
                src="/images/logos/solx_logo_text.png"
                alt="SolX Logo"
                width={118}
                height={20}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="flex-center font-roboto text-xl text-green">
            <Link href={"/aboutus"}>
              <p className="navbar__element-right-border">About</p>
            </Link>
            {/* <p className="navbar__element-right-border before:pl-3">
              How it works?
            </p> */}
            <SolXPopOver />
            <Link href="/contactus">
              <p className="navbar__element-right-border before:pl-3">
                Contact Us
              </p>
            </Link>
          </div>
        </li>
        <li>
          <WalletConnectButton />
        </li>
      </nav>
    </header>
  );
};

export default Navbar;

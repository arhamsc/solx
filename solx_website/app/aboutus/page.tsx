import { CustomButton } from "@components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsPage = () => {
  return (
    <main className="overflow-hidden  ">
      <section className="xl:h-screen flex-center">
        <div className="flex justify-between items-center max-w-[1440px] padding-x relative  mx-auto">
          <div className="w-1/2 flex flex-col gap-12">
            <h1 className="text-6xl font-bold font-montserrat">About Us</h1>
            <p className="text-lg font-roboto leading-8 font-light">
              SolX is a Indian-based company that developed a blockchain-based
              platform for solar energy trading. The platform allows solar
              energy producers to sell their excess energy to consumers
              directly, bypassing the traditional energy grid. This can help to
              reduce energy costs and emissions, and it can also help to
              increase the adoption of solar energy.
            </p>
          </div>
          <div className="w-fit z-10">
            <Image
              src="/images/about_us_image.png"
              width={1000}
              height={800}
              className="object-contain"
              alt="about us image"
            />
          </div>
        </div>
      </section>
      <section className="xl:h-screen xl:w-full flex-center bg-light_green-100">
        <div className="max-w-[1440px] padding-x relative  mx-auto">
          <h1 className="text-4xl font-bold font-montserrat text-center mb-12">
            Why do we use Blockchain ?
          </h1>
          <div className="font-light font-roboto w-full text-xl flex flex-col gap-8">
            <DescriptionRow
              p1="
              Blockchain facilitates self-executing contracts by electronically
              storing and validating transactions on a digital ledger."
              p2="
              It is considered a secure, safe, and efficient form of storing
              transaction data."
            />
            <DescriptionRow
              p1="
              Decentralized Renewable Energy (DRE) sector, blockchain can be a game-changer as it enables the scaling of innovations and increases energy access to the millions of people still living without access to reliable power."
              p2="
              Using blockchain systems for decentralized energy generation and peer-to-peer transactions can enable local solar power generators to sell power to other consumers with no or poor access to grid-based electricity with intermittent power supply and outages."
            />
            <DescriptionRow
              p1="Blockchain-based energy can be traded through web applications enabling micropayments made by the consumer, thereby creating greater and easier access to energy."
              p2="Blockchain will pave way for more decentralized systems."
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full xl:h-[40rem] flex-center">
          <div className="bg-gradient-linear w-full py-10 flex-center">
            <figure className="max-w-[1440px] padding-x text-center">
              <blockquote className="text-xl w-fit font-montserrat">
                <q>
                  Solar energy and blockchain are two of the most powerful
                  technologies of our time. When combined, they have the
                  potential to create a more sustainable and equitable energy
                  future.
                </q>
              </blockquote>
              <br />
              <figcaption className="font-roboto italic"> - Chris Cook, CEO of SunContract</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;

const DescriptionRow = ({ p1, p2 }: { p1: string; p2: string }) => {
  return (
    <div className="flex gap-8 flex-col">
      <p className="self-start w-1/2">{p1}</p>
      <p className="self-end w-1/2">{p2}</p>
    </div>
  );
};

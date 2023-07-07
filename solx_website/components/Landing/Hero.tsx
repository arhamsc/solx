import Image from "next/image";
const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find, Purchase energy at ease</h1>
        <p className="hero__subtitle">
          Discover a seamless and decentralized platform where renewable energy
          meets cutting-edge blockchain technology.
        </p>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/images/hero.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

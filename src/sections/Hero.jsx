import styles from '../style';
import { discount, robot, taxiHero } from '../assets';

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY} mt-3`}>
      {/* Right Section (Images) */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 md:hidden relative animate-fadeIn`}
      >
        {/* Robot image */}
        <img
          src={robot}
          alt="billing"
          className="relative z-[0] w-full h-auto sm:w-full sm:h-full xs:w-[80%] xs:h-[80%] object-contain transition-transform duration-500 hover:scale-105"
        />

        {/* TaxiHero image overlay */}
        <img
          src={taxiHero}
          alt="taxi image"
          className="absolute z-[5] top-0 left-0 w-[70%] h-[70%] sm:w-[90%] sm:h-[90%] object-contain transition-opacity duration-500 hover:opacity-80"
        />

        {/* Gradient Effects */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      {/* Left Section (Text Content) */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-slideInLeft`}
      >
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-white leading-tight sm:text-[72px] xs:text-[60px] text-[40px]">
            The Next <br className="sm:block hidden" />{' '}
            <span className="text-gray-400">Generation</span>{' '}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold text-white text-gradient leading-tight sm:text-[68px] xs:text-[56px] text-[36px] w-full text-nowrap">
          Driver Application
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}>
        There's an ride for everyone

        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} hidden md:my-0 my-10 relative md:block animate-slideInRight`}
      >
        {/* Robot image */}
        <img
          src={robot}
          alt="billing"
          className="w-full h-full relative z-[0] transition-transform duration-500 hover:scale-105"
        />

        {/* TaxiHero image overlay */}
        <img
          src={taxiHero}
          alt="taxi image"
          className="absolute w-[90%] h-[90%] z-[5] top-0 left-0 object-contain transition-opacity duration-500 hover:opacity-80"
        />

        {/* Gradient Effects */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;

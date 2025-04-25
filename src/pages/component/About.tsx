import HeroImg from '../../../public/turflo1.png';
import heroImage from '../../../public/turflo2.png';
import Phone from '../../../public/phone.png';
import PlayStore from '../../../src/assets/icons/Playstore.png';
import AppStore from '../../../src/assets/icons/App store.png';

interface AboutProps {
  id?: string;
}

const About = ({ id }: AboutProps) => {
  return (
    <section id={id}>
      <div className="relative w-full flex flex-col items-center md:flex-row md:items-center xl:flex-row xl:justify-center mt-[54px] md:py-[58px] xl:mt-[53px] overflow-hidden pt-[24px]">
        <div className="absolute inset-0 bg-[#000] opacity-50 z-10" />
        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 md:hidden"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />

        {/* Tablet and Up Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 hidden md:block"
          style={{
            backgroundImage: `url(${HeroImg})`,
          }}
        />

        <div className="container px-auto flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:items-center xl:flex-nowrap xl:justify-center xl:items-center xl:max-w-7xl z-20 md:pr-[100px] lg:pr-[150px]">
          <div className="text-[#FFFFFF] mt-[54px] md:mt-[50px] xl:mt-0 text-center mx-auto md:text-right md:mr-[66px] md:flex-1 xl:mr-[75px]">
            <h1 className="text-[48px] font-gothic mb-[22px] lg:mb-[16px] xl:pt-[48px] leading-[110%] uppercase
                  md:text-[75px]
                  lg:text-[86px]
                  xl:text-[106px]">
              <span className="block md:hidden">
                NO SQUAD? NO SWEAT.<br />
                WE'LL FIND YOU ONE.
              </span>
              <span className="hidden md:block">
                NO SQUAD?<br />
                NO SWEAT.<br />
                WE'LL FIND<br />
                YOU ONE
              </span>
            </h1>
            <p className="text-[14px] font-quicksand leading-[22px] mx-auto md:mx-0
              md:text-[16px]
              lg:text-[22px]
              xl:text-[18px]">
              <span className="block md:hidden xl:block pb-[30px]">
                Hosting a match or just vibin' for a quick <br />
                game? Turflo's the plug. No calls. No flaky DMs.<br />
                Just show up and play.
              </span>

              <span className="hidden md:block xl:hidden lg:leading-7">
                Hosting a match or just vibin' for a quick <br />
                game? Turflo's the plug. No calls. <br />
                No flaky DMs.<br />
                Just show up and play.
              </span>
            </p>
          </div>

          <div className="relative z-20 md:flex-shrink-0 md:mt-[50px]">
            <img
              src={Phone}
              alt="Phone"
              className="
                sm:w-[194px] sm:h-[375px]
                md:w-[206px] md:h-[400px] 
                lg:w-[233px] lg:h-[480px] 
                xl:w-[277px] xl:h-[535px]"
            />
          </div>

          <div className="flex flex-row justify-center md:justify-end xl:justify-start mx-auto pt-[20px] pb-[30px] md:w-full md:mt-8 md:pb-8 xl:w-auto xl:flex-shrink-0 xl:ml-[36px] xl:mt-[52px] xl:pt-0 xl:pb-0">
            <div className="flex flex-row gap-3 md:gap-4 xl:flex-col xl:gap-6">
              {/* App Store Button */}
              <a
                href="#"
                className="bg-white h-[50px] md:h-[60px] lg:h-[60px] xl:h-[75px] flex items-center gap-2 rounded-full border-2 border-[#0295B0] px-[8px] py-[6px] md:px-[12px] md:gap-3"
              >
                <div className="flex-shrink-0">
                  <img
                    src={AppStore}
                    alt="App Store"
                    className="w-[22px] h-[22px] md:w-[30px] md:h-[30px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px]"
                  />
                </div>
                <div className="pr-[10px] md:pr-[16px]">
                  <p className="whitespace-nowrap text-[9px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-quicksand">
                    Download Now from
                  </p>
                  <p className="text-[14px] md:text-[14px] lg:text-[20px] xl:text-[24px] text-[#1E293B] font-bold pl-1 md:pl-2 font-spartan">
                    APP STORE
                  </p>
                </div>
              </a>

              {/* Play Store Button */}
              <a
                href="#"
                className="bg-white h-[50px] md:h-[60px] lg:h-[60px] xl:h-[75px] flex items-center gap-2 rounded-full border-2 border-[#0295B0] px-[8px] py-[10px] md:px-[12px] md:gap-3"
              >
                <div className="flex-shrink-0">
                  <img
                    src={PlayStore}
                    alt="Play Store"
                    className="w-[22px] h-[22px] md:w-[30px] md:h-[30px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px]"
                  />
                </div>
                <div className="pr-[10px] md:pr-[16px]">
                  <p className="whitespace-nowrap text-[9px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-quicksand">
                    Download Now from
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[20px] xl:text-[24px] text-[#1E293B] font-spartan font-bold pl-1 md:pl-2">
                    PLAY STORE
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import HeroImg from '../../../public/turflo1.png';
import Phone from '../../../public/phone.png';
import PlayStore from '../../../src/assets/icons/Playstore.png';
import AppStore from '../../../src/assets/icons/App store.png';

interface AboutProps {
  id?: string;
}

const About = ({ id }: AboutProps) => {
  return (
    <section id={id}>
      <div className="relative w-full min-h-screen flex flex-col items-center md:flex-row md:items-center xl:flex-row xl:justify-center mt-[54px] md:mt-[72px] xl:mt-[53px] overflow-hidden">
        <div className="absolute inset-0 bg-[#000] opacity-50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${HeroImg})` }}
        />

        <div className="container mx-auto flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:items-center xl:flex-nowrap xl:justify-center xl:items-center xl:max-w-[1024px] z-20 px-4">
          <div className="text-[#FFFFFF] mt-[54px] md:mt-0 xl:mt-0 text-center mx-auto md:text-right md:mr-[66px] md:flex-1 xl:mr-[75px]">
            <h1 className="text-[54px] font-gothic mb-[22px] leading-[110%] uppercase
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

            <p className="text-[14px] font-quicksand leading-[26px] mx-auto md:mx-0
                  md:text-[16px]
                  lg:text-[22px]
                  xl:text-[18px]">
              Hosting a match or just vibin' for a quick <br/>
              game? Turflo's the plug. No calls. No flaky DMs.<br/>
              Just show up and play.
            </p>
          </div>

          <div className="relative z-20 md:flex-shrink-0">
            <img src={Phone} alt="Phone" className="w-[277px] h-[535px]" />
          </div>

          <div className="flex flex-row gap-4 justify-center mx-auto pt-[20px] md:w-full md:justify-center md:mt-8 md:pb-8 xl:w-auto xl:flex-shrink-0 xl:ml-[36px] xl:mt-[52px] xl:pt-0 xl:pb-0">
            <div className="flex flex-row gap-4 justify-center xl:flex-col xl:gap-6">
              <a href="#" className="bg-white h-[75px] flex items-center gap-3 rounded-full border-2 border-[#0295B0] px-[26px] py-[12px]">
                <div className="flex-shrink-0">
                  <img src={AppStore} alt="App Store" className="w-[40px] h-[40px]" />
                </div>
                <div className='pr-[16px]'>
                  <p className="text-[14px] font-quicksand">Download Now from</p>
                  <p className="text-[24px] text-[#1E293B] font-bold pl-2 font-spartan">APP STORE</p>
                </div>
              </a>

              <a href="#" className="bg-white h-[75px] flex items-center gap-3 rounded-full border-2 border-[#0295B0] px-[26px] py-[12px]">
                <div className="flex-shrink-0">
                  <img src={PlayStore} alt="Play Store" className="w-[40px] h-[40px]" />
                </div>
                <div className='pr-[16px]'>
                  <p className="text-[14px] font-quicksand">Download Now from</p>
                  <p className="text-[24px] text-[#1E293B] font-bold pl-2 font-spartan">PLAY STORE</p>
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
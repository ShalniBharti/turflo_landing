import { Games, Player, Communities } from '../../components/icons/index';

const Feature = () => {
  return (
    <div className="bg-[#1C1C1C] text-[#FFFFFF] py-[70px] md:py-[110px] lg:py-[90px]">
      <div className="container mx-auto text-center">
        <h2 className=" px-2 text-[28px] font-spartan md:text-[30px] lg:text-[32px] xl:text-[36px] font-bold leading-[120%] pb-[15px] lg:pb-[45px]">
          We help you build your own sports community.
        </h2>
        <p className="px-2 text-[14px] font-quicksand md:text-[16px] lg:text-[16px] font-normal leading-[175%] max-w-2xl mx-auto">
          Turflo helps you find <span className="text-[#FF7018] font-semibold">people</span> to
          play your favorite sports with - anytime, anywhere. Whether you're
          just starting out or play like a pro, there's always a{' '}
          <span className="text-[#FF7018] font-semibold">match</span> waiting for you.
        </p>

        <div className="flex flex-wrap justify-center items-center pr-4 gap-[20px] md:gap-[50px] lg:gap-[100px] xl:gap-[150px] pt-[78px] md:pt-[118px] lg:pt-[108px]">

          <div className="flex flex-col items-center text-center">
            <div className="w-[60px] h-[60px] md:w-[78px] md:h-[78px] lg:w-[90px] lg:h-[90px]">
              <Games />
            </div>
            <div className="text-[54px] pl-4 font-gothic md:text-[70px] lg:text-[80px] xl:text-[90px] mt-[12px] md:mt-[16px] lg:mt-[20px] xl:mt-[22px]">
              1K+
            </div>
            <div className="text-[15px] md:text-[21px] lg:text-[21px] font-semibold font-spartan">
              Game Hosted
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-[60px] h-[60px] md:w-[78px] md:h-[78px] lg:w-[90px] lg:h-[90px]">
              <Player />
            </div>
            <div className="text-[54px] pl-4 font-gothic md:text-[70px] lg:text-[80px] xl:text-[90px]  mt-[12px] md:mt-[16px] lg:mt-[20px] xl:mt-[22px]">
              5K+
            </div>
            <div className="text-[15px] md:text-[21px] lg:text-[21px] font-semibold font-spartan">Players</div>
          </div>


          <div className="flex flex-col items-center text-center">
            <div className="w-[60px] h-[60px] md:w-[78px] md:h-[78px] lg:w-[90px] lg:h-[90px]">
              <Communities />
            </div>
            <div className="text-[54px] pl-4 font-gothic md:text-[70px] lg:text-[80px] xl:text-[90px] mt-[12px] md:mt-[16px] lg:mt-[20px] xl:mt-[22px]">
              20+
            </div>
            <div className="text-[15px] md:text-[21px] lg:text-[21px] font-semibold font-spartan">Communities</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Feature;
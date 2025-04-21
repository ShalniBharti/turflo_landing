import Turfloweb1 from '../../../public/Turflo Web1.png';
import Turfloweb2 from '../../../public/Turflo Web2.png';
import Turfloweb3 from '../../../public/Turflo Web3.png';
import Vector from '../../assets/icons/Vector.png';
import Game from '../../assets/icons/Game.png';
import Group from '../../assets/icons/Group1 (2).png';

const Detail = () => {
    return (
        <div className="relative flex flex-col w-full">
            <div className="sm:hidden bg-[#FF7018] p-[20px] w-full">
                <h2 className="font-normal font-gothic text-center text-[60px] text-white leading-[100%]">
                    HOW DOES IT WORK?
                </h2>
                <p className="font-mediun font-quicksand text-center text-[14px] text-white leading-[140%] p-[10px]">
                    Getting you off the couch and taking you out for an adventure. Find <span className="font-semibold text-[#1E293B]">matches</span> happening right now near you.
                </p>
            </div>

            <div className="hidden sm:block absolute top-[87px] left-1/2 transform -translate-x-1/2 -translate-y-0 text-center z-10 w-full px-4">
                <h2 className="font-normal font-gothic text-center text-[55px] md:text-[76px] lg:text-[86px] xl:text-[106px] text-white leading-[100%] mb-[26px] md:mb-[26px] lg:mb-[3px]">
                    HOW DOES IT WORK?
                </h2>
                <p className="font-normal font-quicksand text-center text-[14px] md:text-[16px] xl:text-[20px] text-white mx-auto">
                    Getting you off the couch and taking you out for an adventure. Find <span className="font-semibold text-[#FF7018]">matches</span> happening right now near you.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:mt-0">


                {/* Card 1 */}
                <div className="relative w-full sm:w-1/3">
                    <div className="h-[373px] sm:h-[678px] md:h-[772px] relative">
                        <img
                            src={Turfloweb1}
                            alt="Turflo Web 1"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-[#000] opacity-50 z-0" />
                    </div>

                    <div className="absolute top-[50%] xl:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
                        <div className="bg-[#FF7018] rounded-full w-[90px] h-[90px] flex items-center justify-center sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]">
                            <img src={Vector} className="w-[76px] h-[76px]" alt="Group Icon" />
                        </div>
                        <p className="font-bold font-spartan text-2xl text-white text-center">Join a Game</p>
                    </div>

                    {/* Footer - Hidden on small screens, shown on larger */}
                    <div className="absolute bottom-0 left-0 w-full h-[67px] bg-[#FF7018] items-center justify-center hidden sm:flex">
                        <p className="font-normal font-gothic text-[36px] lg:text-[40px] xl:text-[45px] text-center text-[#1E293B]">PLAY EASY</p>
                    </div>
                </div>




                {/* Card 2 */}

                <div className="relative w-full sm:w-1/3">
                    <div className="h-[373px] sm:h-[678px] md:h-[772px] relative">
                        <img
                            src={Turfloweb2}
                            alt="Turflo Web 1"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-[#000] opacity-50 z-0" />
                    </div>

                    <div className="absolute top-[50%] xl:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
                        <div className="bg-[#FF7018] rounded-full w-[90px] h-[90px] flex items-center justify-center sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]">
                            <img src={Game} className="w-[76px] h-[76px]" alt="Group Icon" />
                        </div>
                        <p className="font-bold font-spartan text-2xl text-white text-center">Host a Game</p>
                    </div>

                    {/* Footer - Hidden on small screens, shown on larger */}
                    <div className="absolute bottom-0 left-0 w-full h-[67px] bg-[#FF7018] items-center justify-center hidden sm:flex">
                        <p className="font-normal font-gothic text-[36px] lg:text-[40px] xl:text-[45px] text-center text-[#1E293B]">PLAY OFTEN</p>
                    </div>
                </div>



                {/* Card 3 */}

                <div className="relative w-full sm:w-1/3">
                    <div className="h-[373px] sm:h-[678px] md:h-[772px] relative">
                        <img
                            src={Turfloweb3}
                            alt="Turflo Web 1"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-[#000] opacity-50 z-0" />
                    </div>

                    <div className="absolute top-[50%] xl:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
                        <div className="bg-[#FF7018] rounded-full w-[90px] h-[90px] flex items-center justify-center sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]">
                            <img src={Group} className="w-[76px] h-[76px]" alt="Group Icon" />
                        </div>
                        <p className="font-bold font-spartan text-2xl text-white text-center">Host a Tournament</p>
                    </div>

                    {/* Footer - Hidden on small screens, shown on larger */}
                    <div className="absolute bottom-0 left-0 w-full h-[67px] bg-[#FF7018] items-center justify-center hidden sm:flex">
                        <p className="font-normal font-gothic text-[36px] lg:text-[40px] xl:text-[45px] text-center text-[#1E293B]">PLAY WITH TURFLO!</p>
                    </div>
                </div>

            </div>

            {/* Mobile Footers */}
            <div className="sm:hidden bg-[#FF7018] h-[67px] flex items-center justify-center">
                <p className="font-normal font-gothic text-[36px] text-center text-white">PLAY EASY!</p>
            </div>
            <div className="sm:hidden bg-[#FF7018] h-[67px] flex items-center justify-center">
                <p className="font-normal font-gothic text-[36px] text-center text-white">PLAY OFTEN!</p>
            </div>
            <div className="sm:hidden bg-[#FF7018] h-[67px] flex items-center justify-center">
                <p className="font-normal font-gothic text-[36px] text-center text-[#1E293B]">PLAY WITH TURFLO!</p>
            </div>
        </div>
    );
};

export default Detail;
import Star from '../icons/star';

interface ProfileCardProps {
    name: string;
    age: number;
    sport: string;
    description: string;
    rating: string;
}

function FeedbackSection({ name, age, sport, description, rating }: ProfileCardProps) {
    return (
        <div className="border font-metropolis border-[#BCBCBC] rounded-[20px] py-[13px] px-[17px] w-[316px] h-[156px]">
            <div className="flex justify-between items-center mb-[11.28px]">
                <h2 className="text-[#FFF] text-[18px] font-semibold sm:text-[20.95px] lg:text-[22.44px] xl:text-[22px]">
                    {name}
                </h2>
                <div className="flex items-center">
                    <Star className='mr-1.5' />
                    <span className="text-yellow-500 text-sm">{rating}</span>
                </div>
            </div>
            <p className="text-[#FFF] text-[16px] mb-[12px]">{`M • ${age} • ${sport}`}</p>
            <p className="text-white opacity-70 text-[12px] sm:text-[10.47px]  md:text-[9.28px] lg:text-[11.22px] leading-[15px] overflow-hidden">
                {description}
            </p>
        </div>
    );
}

export default FeedbackSection;
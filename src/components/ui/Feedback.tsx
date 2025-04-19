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
        <div className="border font-metropolis border-[#BCBCBC] rounded-[15px] py-[10px] px-[13px] h-[166px] w-[316px]">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-[#FFF] text-[19px] font-semibold">{name}</h2>
                <div className="flex items-center">
                    <Star className='mr-1.5' />
                    <span className="text-yellow-500 text-sm">{rating}</span>
                </div>
            </div>
            <p className="text-[#FFF] text-[12px] mb-2">{`M • ${age} • ${sport}`}</p>
            <p className="text-white opacity-70 text-[10px] leading-[12px] overflow-hidden">
                {description}
            </p>
        </div>
    );
}

export default FeedbackSection;
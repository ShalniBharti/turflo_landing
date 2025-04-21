import FeedbackSection from "../../components/ui/Feedback";
import FeedbackData from '../../../src/data/feedback.json';
import '../../styles/global.css'

const Feedback = () => {
  const firstRowItems = FeedbackData.slice(0, 5);
  const secondRowItems = FeedbackData.slice(5, 10);

  return (
    <div className="bg-[#1C1C1C] pb-[86px] md:pb-[100px] lg:pb-[107px] px-6 overflow-hidden">
      <div className="pt-[79px] md:pt-[109px] lg:pt-[109px] text-center">
        <h1 className="text-white font-spartan font-bold text-[28px] md:text-[32px] lg:text-[36px] pb-[86px] md:pb-[110px] lg:pb-[125px]">
          Real Moments, Real Players.
        </h1>
      </div>

      <div className="w-full space-y-8">

        {/* First Scrolling Row (left to right) */}
        <div className="scroll-row scroll-row-1">
          <div className="scroll-content">
            {firstRowItems.concat(firstRowItems).map((feedback, index) => (
              <div key={`feedback-1-${index}`} className="feedback-item ml-[30px]">
                <FeedbackSection
                  name={feedback.name}
                  age={feedback.age}
                  sport={feedback.sport}
                  description={feedback.description}
                  rating={feedback.rating}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Scrolling Row (right to left) */}
        <div className="scroll-row scroll-row-2">
          <div className="scroll-content">
            {[...secondRowItems].reverse().concat([...secondRowItems].reverse()).map((feedback, index) => (
              <div key={`feedback-2-${index}`} className="feedback-item ml-[30px]">
                <FeedbackSection
                  name={feedback.name}
                  age={feedback.age}
                  sport={feedback.sport}
                  description={feedback.description}
                  rating={feedback.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

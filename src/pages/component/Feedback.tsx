import { useEffect, useState, useRef } from 'react';
import FeedbackSection from "../../components/ui/Feedback";
import FeedbackData from '../../../src/data/feedback.json';

const Feedback = () => {
  const [position, setPosition] = useState(0);
  const [isHovered, ] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const itemWidth = 316;
  const gap = 24;
  const totalItems = 5;
  const containerRef = useRef<HTMLDivElement>(null);

  const firstRowItems = Array(5).fill(FeedbackData.slice(0, 5)).flat();
  const secondRowItems = Array(5).fill(FeedbackData.slice(5, 10)).flat();
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const nextPosition = prevPosition + 1;
        if (nextPosition >= totalItems) {
          return 0;
        }
        return nextPosition;
      });
      
      // Toggle between rows
      setActiveRow(prev => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (position === 0) {
      const firstRow = document.querySelector('.first-row') as HTMLElement;
      const secondRow = document.querySelector('.second-row') as HTMLElement;

      if (firstRow && secondRow) {
        firstRow.style.transition = 'none';
        secondRow.style.transition = 'none';

        setTimeout(() => {
          firstRow.style.transition = 'transform 1000ms linear';
          secondRow.style.transition = 'transform 1000ms linear';
        }, 50);
      }
    }
  }, [position]);

  const leftTransform = `translateX(-${position * (itemWidth + gap)}px)`;

  return (
    <div className="bg-[#1C1C1C] pb-[86px] md:pb-[100px] lg:pb-[107px] px-6 overflow-hidden">
      <div className="pt-[79px] md:pt-[109px] lg:pt-[109px] text-center">
        <h1 className="text-white font-spartan font-bold text-[28px] md:text-[32px] lg:text-[36px] pb-[86px] md:pb-[110px] lg:pb-[125px]">
          Real Moments, Real Players.
        </h1>
      </div>

      <div 
        ref={containerRef} 
        className="w-full overflow-hidden"
      >
        {/* First row */}
        <div className="overflow-hidden mb-6">
          <div
            className="flex gap-x-6 transition-transform duration-1000 ease-linear first-row"
            style={{
              transform: activeRow === 0 ? leftTransform : 'translateX(0)',
              width: `${totalItems * 3 * (itemWidth + gap) - gap}px`
            }}
          >
            {firstRowItems.map((feedback, index) => (
              <div key={`feedback-1-${index}`} style={{ width: `${itemWidth}px`, flexShrink: 0 }}>
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

        {/* Second row */}
        <div className="overflow-hidden">
          <div
            className="flex gap-x-6 transition-transform duration-1000 ease-linear second-row"
            style={{
              transform: activeRow === 1 ? leftTransform : 'translateX(0)',
              width: `${totalItems * 3 * (itemWidth + gap) - gap}px`
            }}
          >
            {secondRowItems.map((feedback, index) => (
              <div key={`feedback-2-${index}`} style={{ width: `${itemWidth}px`, flexShrink: 0 }}>
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
import Background from '../../../public/turflo2.png';
import FrequentlyQuestion from "../../components/ui/Question";

interface QuestionProps {
  id?: string;
}

const FAQSection = ({ id }: QuestionProps) => {
  const faqData = [
    {
      question: "What is Turflo and how does it work?",
      answer: "Turflo is a platform that helps you find and book sports venues near you, connect with like-minded players, and participate in sports challenges. Simply sign up, choose a venue, and start playing!",
    },
    {
      question: "When will the app be available for download?",
      answer: "The app is currently under development. Stay tuned to our website and social media channels for updates on the release date!",
    },
    {
      question: "Which cities will the app be available in?",
      answer: "We are initially launching in select major cities. Please check our website for the current list of supported locations. We plan to expand to more cities soon!",
    },
    {
      question: "How do I book a sports venue?",
      answer: "You can easily book a sports venue by browsing the available options on our platform, selecting your preferred date and time, and completing the booking process online.",
    },
    {
      question: "Can I find people to play with on the app?",
      answer: "Yes! Turflo allows you to connect with other players in your area who share your interests. You can join existing games or create your own and invite others to join.",
    },
  ];
  return (
    <section id={id}>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${Background})` }}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
        <div className="relative fo z-10 text-white pb-[50px] md:pb-[79px] lg:pb-[79px]">
          <h2 className="text-center font-spartan pt-[57px] pb-[66px] md:pt-[67px] md:pb-[61px] lg:pt-[77px] lg:pb-[77px] text-[28px] md:text-[30px] lg:[32px] xl:text-[36px] font-bold text-[#FFFFFF]">
            Frequently Asked Questions
          </h2>
          {faqData.map((faq, index) => (
            <FrequentlyQuestion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
import Logo from '../../../public/turflo.png';
import Facebook from '../../assets/icons/Facebook.png';
import Linkdin from '../../assets/icons/Linkdin.png';
import Youtube from '../../assets/icons/Youtube.png';
import Instagram from '../../assets/icons/Instagram.png';
import { HeaderArrow } from '../../components/icons';
import { RightArrow } from '../../components/icons';
import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('ABOUT');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string, buttonName: string) => {
    setActiveButton(buttonName);
    setIsMenuOpen(false);

    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Add this useEffect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Get positions of all sections
      const aboutSection = document.getElementById('about');
      const faqSection = document.getElementById('faq');
      const contactSection = document.getElementById('contact');

      if (!aboutSection || !faqSection || !contactSection) return;

      // Get current scroll position
      const scrollPosition = window.scrollY + 100; // Adding offset to account for header height

      // Get the top positions of each section
      const aboutTop = aboutSection.offsetTop;
      const faqTop = faqSection.offsetTop;
      const contactTop = contactSection.offsetTop;

      // Determine which section is currently in view
      if (scrollPosition >= contactTop) {
        setActiveButton('CONTACT');
      } else if (scrollPosition >= faqTop) {
        setActiveButton('FAQS');
      } else if (scrollPosition >= aboutTop) {
        setActiveButton('ABOUT');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Call once to set initial state based on page load position
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 w-full border-b-[3px] border-b-[#0295B0] bg-[#FF7018] h-[5.625rem] flex items-center justify-between font-spartan z-50">
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('about', 'ABOUT')}>
          <img
            src={Logo}
            alt="Turflo Logo"
            className="h-[60px] sm:h-[70px] md:h-[70px] lg:h-[70px] xl:h-[80px] w-auto md:ml-[3.125rem] ml-[1.875rem] lg:ml-[5.625rem]"
          />
        </div>

        <nav className="hidden sm:flex items-center font-spartan">
          <button
            className={`${activeButton === 'ABOUT'
              ? 'bg-[#0295B0] text-white'
              : 'text-[#1E293B]'
              } font-bold h-[45px] px-[18px] py-[10px] md:px-[30px] md:py-[10px] text-18px xl:text-[18px] md:text-[16px] rounded-full focus:outline-none cursor-pointer`}
            onClick={() => scrollToSection('about', 'ABOUT')}
          >
            ABOUT
          </button>
          <button
            className={`${activeButton === 'FAQS'
              ? 'bg-[#0295B0] text-white'
              : 'text-[#1E293B]'
              } font-bold h-[45px] px-[18px] py-[10px] md:px-[30px] md:py-[10px] text-18px xl:text-[18px] md:text-[16px] rounded-full focus:outline-none cursor-pointer`}
            onClick={() => scrollToSection('faq', 'FAQS')}
          >
            FAQ'S
          </button>
          <button
            className={`${activeButton === 'CONTACT'
              ? 'bg-[#0295B0] text-white'
              : 'text-[#1E293B]'
              } font-bold h-[45px] px-[18px] py-[10px] md:px-[30px] md:py-[10px] text-18px xl:text-[18px] md:text-[16px] rounded-full focus:outline-none cursor-pointer`}
            onClick={() => scrollToSection('contact', 'CONTACT')}
          >
            CONTACT US
          </button>
        </nav>

        <div className="hidden sm:flex items-center gap-2.5 md:mr-[3.125rem] mr-[1.875rem] lg:mr-[5.625rem]">
          <a href="https://www.youtube.com/channel/UCBLVZJzBf4laK-zyWr_twHw" target="_blank" rel="noopener noreferrer">
            <img src={Youtube} alt="Twitter" className="h-[24px] w-[24px] xl:h-[30px] xl:w-[30px]" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Instagram" className="h-[24px] w-[24px] xl:h-[30px] xl:w-[30px]" />
          </a>
          <a href="https://www.instagram.com/turflooooo?igsh=MTI3ZDJoYnd1OHJ1ag==" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" className="h-[24px] w-[24px] xl:h-[30px] xl:w-[30px]" />
          </a>
          <a href="https://www.linkedin.com/company/turflo/" target="_blank" rel="noopener noreferrer">
            <img src={Linkdin} alt="LinkedIn" className="h-[24px] w-[24px] xl:h-[30px] xl:w-[30px]" />
          </a>
        </div>

        <div
          className="sm:hidden flex items-center md:mr-[3.125rem] mr-[1.875rem] lg:mr-[5.625rem] cursor-pointer"
          onClick={toggleMenu}
        >
          <HeaderArrow className="h-6 w-6 text-white" />
        </div>
      </header>

      {isMenuOpen && (
        <div className="sm:hidden fixed top-[5.625rem] left-0 right-0 w-full bg-[#FF7018] z-40">
          <div className="flex flex-col items-center">
            <button
              className="w-full border-b border-white text-left h-[54px] px-[30px] py-[15px] text-white font-semibold focus:outline-none flex justify-between items-center transition-colors duration-300 hover:bg-[#E66115]"
              onClick={() => scrollToSection('about', 'ABOUT')}
            >
              <span className='text-[22px] font-spartan'>ABOUT</span>
              <RightArrow className="h-4 w-4" />
            </button>

            <button
              className="w-full border-b border-white text-left h-[54px] px-[30px] py-[15px] text-white font-semibold focus:outline-none flex justify-between items-center transition-colors duration-300 hover:bg-[#E66115]"
              onClick={() => scrollToSection('faq', 'FAQS')}
            >
              <span className='text-[22px] font-spartan'>FAQ'S</span>
              <RightArrow className="h-4 w-4" />
            </button>

            <button
              className="w-full border-b border-white text-left h-[54px] px-[30px] py-[15px] text-white font-semibold focus:outline-none flex justify-between items-center transition-colors duration-300 hover:bg-[#E66115]"
              onClick={() => scrollToSection('contact', 'CONTACT')}
            >
              <span className='text-[22px] font-spartan'>CONTACT US</span>
              <RightArrow className="h-4 w-4" />
            </button>
            <div className="flex items-center justify-center gap-[14px] mt-[31px] mb-[32px]">
              <a href="https://www.youtube.com/channel/UCBLVZJzBf4laK-zyWr_twHw" target="_blank" rel="noopener noreferrer">
                <img src={Youtube} alt="Twitter" className="h-[24px] w-[24px]" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" className="h-[24px] w-[24px]" />
              </a>
              <a href="https://www.instagram.com/turflooooo?igsh=MTI3ZDJoYnd1OHJ1ag==" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" className="h-[24px] w-[24px]" />
              </a>
              <a href="https://www.linkedin.com/company/turflo/" target="_blank" rel="noopener noreferrer">
                <img src={Linkdin} alt="LinkedIn" className="h-[24px] w-[24px]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
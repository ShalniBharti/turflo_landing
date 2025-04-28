import Facebook from '../../assets/icons/Facebook-B.png';
import Instagram from '../../assets/icons/Instagram-B.png';
import Linkdin from '../../assets/icons/Linkdin-B.png';
import Youtube from '../../assets/icons/Youtube1.png';
import Logo from '../../../public/turflo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ContactProps {
  id?: string;
}

const Contact = ({ id }: ContactProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    // Phone validation (only if provided)
    if (formData.phone && (formData.phone.startsWith('0') || formData.phone.length !== 10)) {
      newErrors.phone = 'Phone must be 10 digits and not start with 0';
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Make API call to Google Sheets
        const response = await fetch(
          "https://v1.nocodeapi.com/shalnibharti/google_sheets/iWEoSYTFPFFmERRO?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [formData.name, formData.email, formData.phone, formData.message, new Date().toLocaleString()]
            ]),
          }
        );
        
        await response.json();
        
        // Form is valid, show success and reset
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
  
        // Redirect after 2 seconds
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/');
        }, 2000);
      } catch (err) {
        console.log(err);
        // You might want to add error handling here
        // For example: setError("Failed to submit form. Please try again.");
      }
    }
  }

  return (
    <section id={id}>
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md mx-4">
            <h3 className="text-xl font-bold mb-4 text-center font-quicksand">Thank you!</h3>
            <p className="text-center font-spartan">Thanks for contacting us. We will get back to you soon.</p>
          </div>
        </div>
      )}
      <div className="bg-[#18181B] font-spartan text-white border-b border-[#FFFFFF]">

        <div className="flex justify-center items-center pt-[28px]">
          <img
            src={Logo}
            alt="Turflo Logo"
            className="h-[92px] w-[176px] lg:h-[100px] lg:w-[191px]"
          />
        </div>

        <footer className="pt-[28px] px-6">
          <div className="container mx-auto">
            {/* Mobile Layout (below 640px) */}
            <div className="w-full max-w-[400px] mx-auto lg:hidden">
              <h6 className="text-[32px] font-spartan text-center text-[#FF7018] font-semibold mb-4">Contact Us</h6>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`border ${errors.name ? 'border-red-500' : 'border-[#9CA3AF]'} rounded-[10px] py-[12px] px-[27px] w-full text-[#9CA3AF] focus:outline-none focus:border-white`}
                    placeholder="Full Name (Required)"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`border ${errors.email ? 'border-red-500' : 'border-[#9CA3AF]'} rounded-[10px] py-[12px] px-[27px] w-full text-[#9CA3AF] focus:outline-none focus:border-white`}
                    placeholder="Email Address (Required)"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`border ${errors.phone ? 'border-red-500' : 'border-[#9CA3AF]'} rounded-[10px] py-[12px] px-[27px] w-full text-[#9CA3AF] focus:outline-none focus:border-white`}
                    placeholder="Phone Number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`border ${errors.message ? 'border-red-500' : 'border-[#9CA3AF]'} rounded-[10px] py-[15px] px-[27px] w-full h-[93px] text-[#9CA3AF] focus:outline-none focus:border-white`}
                    placeholder="Message / Inquiry Details (Required)"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#FF7018] text-[#FFFFFF] text-[18px] font-medium py-[8px] px-[20px] rounded-[10px] hover:bg-[#e06a00] focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Mobile Footer Links (below 640px) */}
            <div className="flex flex-row sm:hidden pt-[60px] w-full">
              <div className="w-[calc(50%-6%)] px-[4%]">
                <h6 className="text-[20px] font-bold pb-[30px]">Quick Link</h6>
                <ul className="text-[16px] text-left">
                  <li className="mb-[29px]"><a href="#" className="hover:text-white">Home</a></li>
                  <li className="mb-[29px]"><a href="#" className="hover:text-white">About Us</a></li>
                  <li className="mb-[29px]"><a href="#" className="hover:text-white">FAQ's</a></li>
                  <li className="mb-[60px]"><a href="#" className="hover:text-white">Contact Us</a></li>
                </ul>
              </div>
              <div className="w-[calc(50%-6%)] px-[4%]">
                <h6 className="text-[20px] font-bold pb-[30px]">Other Link</h6>
                <ul className="text-[16px] text-left">
                  <li className="mb-[29px]"><a href="#" className="hover:text-white">T&C</a></li>
                  <li className="mb-[29px]"><a href="#" className="hover:text-white">Privacy Policy</a></li>
                  <li className="mb-[29px]"><a href="#" className="hover:text-white">Testimonials</a></li>
                </ul>
              </div>
            </div>

            {/* Desktop Layout (1024px and above) */}

            {/* Mobile Footer Bottom (below 640px) */}
            <div className="px-[4%] pb-[43px] sm:hidden">
              <h6 className="text-[16px] font-semibold pb-[19px] leading-6">Follow Us :</h6>
              <div className="flex items-center space-x-4">
                <a href="https://www.youtube.com/channel/UCBLVZJzBf4laK-zyWr_twHw" target="_blank" rel="noopener noreferrer">
                  <img src={Youtube} alt="Twitter" className="h-[32px] w-[32px]" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> {/* Added Facebook link */}
                  <img src={Facebook} alt="Facebook" className="h-[32px] w-[32px]" />
                </a>
                <a href="https://www.instagram.com/turflooooo?igsh=MTI3ZDJoYnd1OHJ1ag==" target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} alt="Instagram" className="h-[32px] w-[32px]" />
                </a>
                <a href="https://www.linkedin.com/company/turflo/" target="_blank" rel="noopener noreferrer">
                  <img src={Linkdin} alt="Linkdin" className="h-[32px] w-[32px]" />
                </a>
              </div>
              <h6 className="text-[16px] font-semibold text-[#FFFFFF] mt-[40px]">Mail :</h6>
              <p className="text-[16px] font-semibold text-[#FFFFFF] mt-[13px]">support@turflo.in, info@turflo.in</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};


export default Contact;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOkClick = () => {
    navigate('/landingPage');
  };

  return (
    <div className="fixed inset-0 bg-[#1C1C1C] flex items-center justify-center px-[10%]">
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-center text-gray-800">Terms and Conditions</h1>
        </div>

        <div className="overflow-y-auto p-4 flex-1 scrollbar-hide">
          {loading ? (
            <div className="space-y-3">
              <div className="skeleton-line w-3/4 h-6 rounded"></div>
              <div className="skeleton-line w-full h-4 rounded"></div>
              <div className="skeleton-line w-5/6 h-4 rounded"></div>
              <div className="skeleton-line w-4/6 h-4 rounded"></div>
              <div className="skeleton-line w-5/6 h-4 rounded"></div>
              <div className="skeleton-line w-2/3 h-4 rounded"></div>
              <div className="skeleton-line w-full h-4 rounded"></div>
              <div className="skeleton-line w-1/2 h-4 rounded"></div>
              <div className="skeleton-line w-full h-6 rounded"></div>
              <div className="skeleton-line w-3/4 h-4 rounded"></div>
              <div className="skeleton-line w-full h-4 rounded"></div>
            </div>
          ) : (
            <div className="text-gray-700 text-sm px-[10px]">
              <div className="mb-4 pb-2 border-b border-gray-200">
                <h2 className="text-lg font-semibold mb-2">Terms & Conditions (T&C) – Turflo</h2>
                <p className="mb-1">Effective Date: 01/05/2025</p>
                <p className="mb-1">Welcome to Turflo!</p>
                <p className="mb-1">These Terms and Conditions ("Terms") govern your use of our platform, including the website, mobile application, and any services we offer (collectively, the "Services"). By accessing or using Turflo, you agree to be bound by these Terms.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">1. Acceptance of Terms</h3>
                <p className="mb-1">By using Turflo, you confirm that you are at least 18 years old or have legal guardian consent and that you are legally capable of entering into a binding contract.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">2. Use of Services</h3>
                <p className="mb-1">You agree to use Turflo only for lawful purposes. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">3. Booking and Payments</h3>
                <p className="mb-1">Turflo connects users with venues for sports and recreational bookings.</p>
                <p className="mb-1">Payments are processed securely through third-party payment gateways.</p>
                <p className="mb-1">Turflo is not liable for any disputes between users and venue operators but will assist in dispute resolution to the best of our ability.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">4. Cancellations and Refunds</h3>
                <p className="mb-1">Each venue sets its own cancellation and refund policy. Please review the venue's terms before booking. Turflo may assist with processing eligible refunds but is not responsible for refund amounts or delays.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">5. User Conduct</h3>
                <p className="mb-1">You agree not to:</p>
                <ul className="list-disc ml-4 mb-1">
                  <li>Use Turflo for any fraudulent activities.</li>
                  <li>Post false, defamatory, or inappropriate content.</li>
                  <li>Attempt to hack, disrupt, or misuse our systems.</li>
                </ul>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">6. Intellectual Property</h3>
                <p className="mb-1">All content on Turflo — including logos, designs, text, graphics, and software — is owned by Turflo or its licensors and is protected by intellectual property laws.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">7. Limitation of Liability</h3>
                <p className="mb-1">Turflo is provided on an "as-is" basis. We do not guarantee uninterrupted or error-free service.</p>
                <p className="mb-1">We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of Turflo.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">8. Modification of Terms</h3>
                <p className="mb-1">We may update these Terms from time to time. Continued use of Turflo after changes constitutes acceptance of the updated Terms.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">9. Governing Law</h3>
                <p className="mb-1">These Terms shall be governed by and construed in accordance with the laws of India.</p>
              </div>

              <div className="pb-2">
                <h3 className="font-semibold mb-1">10. Contact Us</h3>
                <p className="mb-1">For any questions regarding these Terms, please contact us at:</p>
                <p className="mb-1">📧 support@turflo.com</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-2 flex justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200"
            type="button"
            onClick={handleOkClick}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
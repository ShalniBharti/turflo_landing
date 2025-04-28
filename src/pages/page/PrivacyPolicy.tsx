import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '../../components/ui/skeleton';

const PrivacyPolicy = () => {
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
          <h1 className="text-xl font-bold text-center text-gray-800">Privacy Policy</h1>
        </div>

        <div className="overflow-y-auto p-4 flex-1 scrollbar-hide">
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-6 w-3/4 rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-5/6 rounded" />
              <Skeleton className="h-4 w-4/6 rounded" />
              <Skeleton className="h-4 w-5/6 rounded" />
              <Skeleton className="h-4 w-2/3 rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-1/2 rounded" />
              <Skeleton className="h-6 w-full rounded" />
              <Skeleton className="h-4 w-3/4 rounded" />
              <Skeleton className="h-4 w-full rounded" />
            </div>
          ) : (
            <div className="text-gray-700 text-sm px-[10px]">
              <div className="mb-4 pb-2 border-b border-gray-200">
                <h2 className="text-lg font-semibold mb-2">Privacy Policy – Turflo</h2>
                <p className="mb-1">Effective Date: [Insert Date]</p>
                <p className="mb-1">Your privacy is important to us. This Privacy Policy explains how Turflo collects, uses, and protects your personal information.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">1. Information We Collect</h3>
                <p className="mb-1">We may collect:</p>
                <ul className="list-disc ml-4 mb-1">
                  <li>Personal Information: Name, email address, phone number, payment information.</li>
                  <li>Booking Information: Venues booked, timeslots selected, transaction details.</li>
                  <li>Device Information: IP address, device type, browser information, location (if permitted).</li>
                  <li>Usage Data: Pages visited, features used, interaction times.</li>
                </ul>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">2. How We Use Your Information</h3>
                <p className="mb-1">We use your information to:</p>
                <ul className="list-disc ml-4 mb-1">
                  <li>Provide and improve our Services.</li>
                  <li>Process bookings and payments.</li>
                  <li>Send booking confirmations, updates, and support messages.</li>
                  <li>Analyze usage for product improvement.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">3. Sharing of Information</h3>
                <p className="mb-1">We may share information with:</p>
                <ul className="list-disc ml-4 mb-1">
                  <li>Venue partners (for your booking fulfillment).</li>
                  <li>Payment processors (for transactions).</li>
                  <li>Service providers (for analytics, communication, or hosting).</li>
                  <li>Authorities (if required by law).</li>
                </ul>
                <p className="mt-1">We never sell your personal information.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">4. Cookies and Tracking</h3>
                <p className="mb-1">We use cookies and similar tracking technologies to enhance your experience, analyze traffic, and customize content.</p>
                <p className="mb-1">You can modify cookie settings in your browser.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">5. Data Security</h3>
                <p className="mb-1">We implement security measures to protect your information but cannot guarantee absolute security due to the nature of online transmissions.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">6. Your Rights</h3>
                <p className="mb-1">You have the right to:</p>
                <ul className="list-disc ml-4 mb-1">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction or deletion of your data.</li>
                  <li>Withdraw consent for marketing communications at any time.</li>
                </ul>
                <p className="mt-1">For requests, email us at 📧 support@turflo.com.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">7. Data Retention</h3>
                <p className="mb-1">We retain your data for as long as necessary to provide the Services and comply with legal obligations.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">8. Children’s Privacy</h3>
                <p className="mb-1">Turflo is not intended for individuals under 13. We do not knowingly collect information from minors without parental consent.</p>
              </div>

              <div className="mb-4 pb-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1">9. Updates to This Privacy Policy</h3>
                <p className="mb-1">We may revise this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.</p>
              </div>

              <div className="pb-2">
                <h3 className="font-semibold mb-1">10. Contact Us</h3>
                <p className="mb-1">For any questions regarding this Privacy Policy, please contact:</p>
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

export default PrivacyPolicy;
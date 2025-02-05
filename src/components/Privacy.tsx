
const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl text-[0.8rem] md:text-base mx-auto p-6">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-lg md:text-xl md:text-2xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: February 5, 2025</p>
        </div>

        {/* Introduction */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to Apertacura. Your privacy is important to us, and we are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>
        </section>

        {/* Information Collection */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="text-gray-700">We may collect the following types of information:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Personal Information: Name, email address, phone number</li>
            <li>Usage Data: Information about how you interact with our Website</li>
            <li>Cookies and Tracking Technologies</li>
          </ul>
        </section>

        {/* Information Usage */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p className="text-gray-700">We use the information we collect to:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Provide and improve our Website and services</li>
            <li>Respond to inquiries and customer service requests</li>
            <li>Analyze usage trends to enhance user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">4. Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate security measures to protect your personal data. 
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">5. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
              contact@apertacura.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
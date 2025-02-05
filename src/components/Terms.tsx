
const TermsOfService = () => {
  return (
    <div className="max-w-3xl text-[0.8rem] md:text-base mx-auto p-6">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-600">Last Updated: February 5, 2025</p>
        </div>

        {/* Acceptance */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing or using the Apertacura website ("Website"), you agree to comply with these 
            Terms of Service ("Terms"). If you do not agree, please do not use our Website.
          </p>
        </section>

        {/* Use of Website */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">2. Use of the Website</h2>
          <p className="text-gray-700">
            You must be at least 18 years old to use our services. You agree not to misuse our 
            Website or violate any laws while using it. We reserve the right to modify or discontinue 
            any part of the Website without notice.
          </p>
        </section>

        {/* User Content */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">3. User Content</h2>
          <p className="text-gray-700">
            Any content you submit to the Website must not be unlawful, harmful, or infringing on 
            others' rights. We reserve the right to remove any content that violates these Terms.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">4. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on the Website, including text, images, and logos, is owned by Apertacura 
            or licensed to us. You may not reproduce, distribute, or use our content without permission.
          </p>
        </section>

        {/* Disclaimer */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">5. Disclaimer of Warranties</h2>
          <p className="text-gray-700">
            The Website is provided "as is" without any warranties, express or implied. We do not 
            guarantee that the Website will be error-free, secure, or continuously available.
          </p>
        </section>

        {/* Liability */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p className="text-gray-700">
            Apertacura will not be liable for any damages arising from your use of the Website, 
            including indirect, incidental, or consequential damages.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-3">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact us at:{' '}
            <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
              contact@apertacura.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
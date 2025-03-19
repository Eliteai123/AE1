import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
          Privacy Policy
        </h1>

        <div className="text-white/80 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
            <p>
              Automate Elite collects information that you provide directly to us, including:
              - Personal information (name, email, contact details)
              - Business information
              - Usage data and analytics
              - Technical data (IP address, browser type, device information)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
            <p>
              Automate Elite uses collected information to:
              - Provide and maintain our services
              - Improve and personalize user experience
              - Communicate with you about our services
              - Ensure platform security and prevent fraud
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
            <p>
              Automate Elite implements industry-standard security measures to protect your data:
              - Encryption of sensitive information
              - Regular security audits
              - Access controls and authentication
              - Secure data storage and transmission
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
            <p>
              We may share your information with:
              - Service providers and business partners
              - Legal authorities when required by law
              - Third parties with your explicit consent
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p>
              You have the right to:
              - Access your personal data
              - Request data correction or deletion
              - Opt-out of marketing communications
              - Data portability
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p>
              For privacy-related inquiries, contact us at:
              privacy@automate-elite.com
            </p>
          </section>

          <p className="text-sm text-white/60 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
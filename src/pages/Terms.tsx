import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
          Terms of Service
        </h1>

        <div className="text-white/80 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using Automate Elite's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p>
              Automate Elite provides AI automation services, including but not limited to:
              - AI-powered workflow automation
              - Data analysis and processing
              - Custom AI solutions
              - API access and integration
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>
              Users must:
              - Provide accurate information
              - Maintain account security
              - Comply with all applicable laws
              - Use services responsibly
              - Respect intellectual property rights
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of Automate Elite services are owned by Automate Elite and protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p>
              Automate Elite shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
            <p>
              Automate Elite reserves the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>
              Automate Elite reserves the right to modify these terms at any time. Users will be notified of any changes through our website or email.
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

export default Terms;
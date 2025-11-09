export default function Privacy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information you provide when creating an account (name, email, educational details)',
        'Usage data including learning progress, quiz scores, and platform interactions',
        'Technical information such as device type, browser, IP address, and cookies',
        'Content you create or upload to the platform'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our educational services',
        'To personalize your learning experience using AI',
        'To communicate with you about your account and updates',
        'To analyze usage patterns and optimize platform performance',
        'To ensure security and prevent fraud'
      ]
    },
    {
      title: 'Data Sharing and Disclosure',
      content: [
        'We do not sell your personal information to third parties',
        'Teachers can access student progress data within their courses',
        'We may share data with service providers who assist in platform operations',
        'We comply with legal requirements and protect rights when necessary',
        'Anonymous, aggregated data may be used for research and analytics'
      ]
    },
    {
      title: 'Your Rights and Choices',
      content: [
        'Access and download your personal data at any time',
        'Request correction of inaccurate information',
        'Delete your account and associated data',
        'Opt-out of promotional communications',
        'Control cookie preferences through browser settings'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We use industry-standard encryption to protect your data',
        'Regular security audits and vulnerability assessments',
        'Secure data centers with physical and digital access controls',
        'Staff training on data protection and privacy practices',
        'Incident response procedures for data breaches'
      ]
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'We comply with COPPA and similar regulations for users under 13',
        'Parental consent required for children under 13',
        'Limited data collection for minor users',
        'Special protections for student educational records'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">Last updated: November 7, 2025</p>
        </div>

        <div className="bg-dark-secondary border border-gray-800 rounded-lg p-8 mb-8">
          <p className="text-gray-300 leading-relaxed">
            At Sahayak-AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully to understand our practices regarding your personal data.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-dark-secondary border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-accent">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-dark-secondary border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us About Privacy</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-2 text-gray-300">
            <p>Email: privacy@sahayak-ai.com</p>
            <p>Address: 123 Education Street, Learning City, ED 12345</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>By using Sahayak-AI, you agree to this Privacy Policy and our Terms of Service.</p>
        </div>
      </div>
    </div>
  );
}

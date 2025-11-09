export default function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Sahayak-AI, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.'
    },
    {
      title: 'User Accounts',
      content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate information during registration and keep it updated. You must be at least 13 years old to create an account, or have parental consent if younger.'
    },
    {
      title: 'Acceptable Use',
      content: 'You agree not to misuse the platform, including: attempting to gain unauthorized access, interfering with platform operations, uploading malicious content, harassing other users, violating intellectual property rights, or using the platform for any illegal purposes. We reserve the right to suspend or terminate accounts that violate these terms.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content on Sahayak-AI, including text, graphics, logos, software, and course materials, is owned by or licensed to us and protected by copyright and trademark laws. You retain ownership of content you create, but grant us a license to use it for platform operations. You may not copy, distribute, or create derivative works without permission.'
    },
    {
      title: 'Student and Teacher Responsibilities',
      content: 'Students agree to engage honestly with learning materials and assessments. Teachers agree to create appropriate educational content and respect student privacy. Both parties agree to maintain a respectful learning environment and follow academic integrity standards.'
    },
    {
      title: 'Subscriptions and Payments',
      content: 'Some features require paid subscriptions. Billing is automatic and recurring unless cancelled. Refunds are provided according to our refund policy. We reserve the right to change pricing with notice. Failure to pay may result in service suspension.'
    },
    {
      title: 'Content and Data',
      content: 'You retain rights to your content but grant us permission to process it for platform functionality. We use AI to analyze learning patterns and provide personalized recommendations. We may remove content that violates our policies. Data retention policies are outlined in our Privacy Policy.'
    },
    {
      title: 'Disclaimers and Limitations',
      content: 'The platform is provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or error-free operation. We are not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount paid by you in the past 12 months.'
    },
    {
      title: 'Termination',
      content: 'We may terminate or suspend your account immediately for violations of these terms or for any other reason. Upon termination, your right to use the platform ceases. You may close your account at any time through account settings.'
    },
    {
      title: 'Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. Changes will be effective upon posting. Continued use of the platform after changes constitutes acceptance of the new terms. We will notify users of significant changes via email or platform notification.'
    },
    {
      title: 'Governing Law',
      content: 'These terms are governed by the laws of the jurisdiction where Sahayak-AI operates. Disputes will be resolved through binding arbitration, except where prohibited by law. You agree to resolve disputes individually, not as part of a class action.'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-gray-400 text-lg">Last updated: November 7, 2025</p>
        </div>

        <div className="bg-dark-secondary border border-gray-800 rounded-lg p-8 mb-8">
          <p className="text-gray-300 leading-relaxed">
            Welcome to Sahayak-AI. These Terms of Service govern your access to and use of our platform. By using Sahayak-AI, you agree to comply with these terms and all applicable laws and regulations.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-dark-secondary border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-accent">{section.title}</h2>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-dark-secondary border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            For questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2 text-gray-300">
            <p>Email: legal@sahayak-ai.com</p>
            <p>Address: 123 Education Street, Learning City, ED 12345</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>By using Sahayak-AI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
        </div>
      </div>
    </div>
  );
}

export default function Security() {
  const measures = [
    {
      icon: '🔐',
      title: 'Data Encryption',
      description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards.'
    },
    {
      icon: '🛡️',
      title: 'Secure Authentication',
      description: 'Multi-factor authentication, password hashing with bcrypt, and secure session management.'
    },
    {
      icon: '🔍',
      title: 'Regular Audits',
      description: 'Quarterly security audits, penetration testing, and vulnerability assessments by third-party experts.'
    },
    {
      icon: '🏢',
      title: 'Data Centers',
      description: 'Enterprise-grade data centers with 24/7 monitoring, redundancy, and physical security controls.'
    },
    {
      icon: '👥',
      title: 'Access Controls',
      description: 'Role-based access control, principle of least privilege, and regular access reviews.'
    },
    {
      icon: '📝',
      title: 'Compliance',
      description: 'GDPR, COPPA, FERPA compliant with regular compliance audits and certifications.'
    }
  ];

  const practices = [
    {
      title: 'Incident Response',
      items: [
        '24/7 security monitoring and alerting',
        'Dedicated incident response team',
        'Documented response procedures',
        'User notification within 72 hours of breach discovery'
      ]
    },
    {
      title: 'Data Protection',
      items: [
        'Regular automated backups',
        'Data isolation between users and organizations',
        'Secure data deletion procedures',
        'Data residency options for enterprise clients'
      ]
    },
    {
      title: 'Employee Security',
      items: [
        'Background checks for all employees',
        'Regular security training and awareness programs',
        'Confidentiality agreements',
        'Limited access to production systems'
      ]
    },
    {
      title: 'Application Security',
      items: [
        'Secure development lifecycle practices',
        'Code review and static analysis',
        'Dependency vulnerability scanning',
        'Regular security patches and updates'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Security <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Overview</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            At Sahayak-AI, security is our top priority. We implement comprehensive measures to protect your data and maintain the integrity of our platform.
          </p>
        </div>

        <div className="bg-gradient-to-r from-accent/10 to-accent-light/10 border border-accent/30 rounded-lg p-8 mb-16">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🔒</div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Our Commitment to Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We understand that you trust us with sensitive educational data. Our security program is designed to protect your information through multiple layers of defense, continuous monitoring, and adherence to industry best practices. We invest heavily in security infrastructure and regularly update our practices to address emerging threats.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Security Measures</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {measures.map((measure, index) => (
              <div
                key={index}
                className="bg-dark-secondary border border-gray-800 rounded-lg p-6 hover:border-accent transition-all hover:scale-105"
              >
                <div className="text-5xl mb-4">{measure.icon}</div>
                <h3 className="text-xl font-bold mb-3">{measure.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Security Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <div
                key={index}
                className="bg-dark-secondary border border-gray-800 rounded-lg p-8"
              >
                <h3 className="text-xl font-bold mb-4 text-accent">{practice.title}</h3>
                <ul className="space-y-3">
                  {practice.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-secondary border border-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Reporting Security Issues</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            If you discover a security vulnerability, please report it to us immediately. We take all security reports seriously and will investigate promptly.
          </p>
          <div className="bg-dark-tertiary border border-gray-700 rounded-lg p-6">
            <div className="space-y-3 text-gray-300">
              <p><strong>Email:</strong> security@sahayak-ai.com</p>
              <p><strong>PGP Key:</strong> Available upon request</p>
              <p className="text-sm text-gray-500 mt-4">
                Please do not publicly disclose security issues until we have had a chance to address them. We aim to respond to security reports within 24 hours and provide regular updates on our progress.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-dark-secondary border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📜</div>
            <h3 className="font-bold mb-2">Certifications</h3>
            <p className="text-gray-400 text-sm">SOC 2 Type II, ISO 27001</p>
          </div>
          <div className="bg-dark-secondary border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-bold mb-2">Uptime</h3>
            <p className="text-gray-400 text-sm">99.9% SLA with redundancy</p>
          </div>
          <div className="bg-dark-secondary border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold mb-2">Response Time</h3>
            <p className="text-gray-400 text-sm">24-hour incident response</p>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Last updated: November 7, 2025 | Questions? Contact security@sahayak-ai.com</p>
        </div>
      </div>
    </div>
  );
}

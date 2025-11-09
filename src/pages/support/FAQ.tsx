import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is Sahayak-AI?',
          a: 'Sahayak-AI is an adaptive learning platform that uses artificial intelligence to provide personalized education experiences for students and powerful tools for teachers.'
        },
        {
          q: 'How much does it cost?',
          a: 'We offer flexible pricing plans for individuals and institutions. Students can access basic features for free, while premium features and teacher accounts are available through subscription plans.'
        },
        {
          q: 'Is my data secure?',
          a: 'Yes, we use enterprise-grade security measures to protect your data. All information is encrypted and we comply with international data protection regulations.'
        }
      ]
    },
    {
      category: 'For Students',
      questions: [
        {
          q: 'How do I track my progress?',
          a: 'Your dashboard provides comprehensive analytics including completed lessons, quiz scores, learning streaks, and personalized recommendations based on your performance.'
        },
        {
          q: 'Can I access materials offline?',
          a: 'Yes, premium users can download learning materials for offline access through our mobile app.'
        },
        {
          q: 'How does the AI personalization work?',
          a: 'Our AI analyzes your learning patterns, strengths, and areas for improvement to create customized study paths and recommend relevant content.'
        }
      ]
    },
    {
      category: 'For Teachers',
      questions: [
        {
          q: 'How do I create a course?',
          a: 'Use our intuitive course builder to upload materials, create assessments, and organize content. You can also import existing materials and templates.'
        },
        {
          q: 'Can I track student performance?',
          a: 'Yes, you get detailed analytics on individual and class performance, engagement metrics, and areas where students need additional support.'
        },
        {
          q: 'Is there a limit to the number of students?',
          a: 'This depends on your subscription plan. Basic plans support up to 50 students, while enterprise plans offer unlimited student accounts.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'What devices are supported?',
          a: 'Sahayak-AI works on all modern web browsers, iOS, and Android devices. We recommend Chrome, Firefox, Safari, or Edge for the best experience.'
        },
        {
          q: 'I forgot my password. What should I do?',
          a: 'Click the "Forgot Password" link on the login page and follow the instructions to reset your password via email.'
        },
        {
          q: 'How do I delete my account?',
          a: 'You can delete your account from Settings > Account > Delete Account. Note that this action is permanent and cannot be undone.'
        }
      ]
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div className="min-h-screen bg-dark-primary">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg">Find quick answers to common questions</p>
        </div>

        <div className="space-y-8">
          {faqs.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h2 className="text-2xl font-bold mb-4 text-accent">{section.category}</h2>
              <div className="space-y-3">
                {section.questions.map((faq) => {
                  const currentIndex = questionIndex++;
                  return (
                    <div
                      key={currentIndex}
                      className="bg-dark-secondary border border-gray-800 rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
                    >
                      <button
                        onClick={() => toggleQuestion(currentIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                      >
                        <span className="font-semibold pr-4">{faq.q}</span>
                        <span className="text-accent text-xl flex-shrink-0">
                          {openIndex === currentIndex ? '−' : '+'}
                        </span>
                      </button>
                      {openIndex === currentIndex && (
                        <div className="px-6 pb-4 text-gray-400 leading-relaxed animate-fadeInUp">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-dark-secondary border border-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-6">Can't find what you're looking for? We're here to help.</p>
          <button className="px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-dark-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

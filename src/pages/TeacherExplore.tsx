import { motion } from 'framer-motion';
import { useState } from 'react';

interface TeacherExploreProps {
  onBack: () => void;
  onGetStarted: () => void;
}

export default function TeacherExplore({ onBack, onGetStarted }: TeacherExploreProps) {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  const features = [
    {
      icon: '📝',
      title: 'Content Generator',
      description: 'Create localized stories and educational content powered by AI.',
      demoVideo: 'Generate engaging lesson content in seconds',
      capabilities: [
        'Auto-generate worksheets and assignments',
        'Create quiz questions based on topics',
        'Generate practice problems with solutions',
        'Customize difficulty levels'
      ],
      stats: { created: '0', unit: 'created' }
    },
    {
      icon: '📸',
      title: 'Material Differentiator',
      description: 'Transform textbook pages into multi-level worksheets.',
      demoVideo: 'Convert any textbook page into adaptive materials',
      capabilities: [
        'Scan and digitize textbook content',
        'Generate multiple difficulty levels',
        'Create differentiated worksheets',
        'Export in various formats'
      ],
      stats: { created: '12', unit: 'worksheets' }
    },
    {
      icon: '❓',
      title: 'Knowledge Base',
      description: 'Get instant explanations for student questions.',
      demoVideo: 'Answer student queries with AI assistance',
      capabilities: [
        'Instant answers to student questions',
        'Multiple explanation approaches',
        'Visual aids and examples',
        'Context-aware responses'
      ],
      stats: { created: '48', unit: 'questions answered' }
    },
    {
      icon: '🎨',
      title: 'Visual Aid Generator',
      description: 'Create blackboard-ready drawings and charts.',
      demoVideo: 'Generate educational visuals instantly',
      capabilities: [
        'Create diagrams and flowcharts',
        'Generate mathematical graphs',
        'Design concept maps',
        'Export for presentations'
      ],
      stats: { created: '15', unit: 'diagrams' }
    },
    {
      icon: '📅',
      title: 'Lesson Planner',
      description: 'Generate structured weekly lesson plans.',
      demoVideo: 'Plan your entire week in minutes',
      capabilities: [
        'Auto-generate lesson structures',
        'Align with curriculum standards',
        'Track learning objectives',
        'Schedule activities and assessments'
      ],
      stats: { created: '0', unit: 'planned' }
    },
    {
      icon: '🎮',
      title: 'Game Generator',
      description: 'Create engaging educational games.',
      demoVideo: 'Gamify learning with interactive content',
      capabilities: [
        'Build quiz-based games',
        'Create interactive challenges',
        'Customize game mechanics',
        'Track student engagement'
      ],
      stats: { created: '6', unit: 'games' }
    },
    {
      icon: '🎤',
      title: 'Audio Reading Assessment',
      description: 'Evaluate student reading skills using speech-to-text.',
      demoVideo: 'Assess reading proficiency automatically',
      capabilities: [
        'Record student reading sessions',
        'Analyze pronunciation and fluency',
        'Provide detailed feedback',
        'Track improvement over time'
      ],
      stats: { created: '12', unit: 'assessments' }
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track class and individual student performance.',
      demoVideo: 'Monitor progress with detailed insights',
      capabilities: [
        'Real-time performance metrics',
        'Identify struggling students',
        'Track engagement levels',
        'Generate progress reports'
      ],
      stats: { created: 'Live', unit: 'data' }
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors z-50 hover:scale-110"
      >
        ← Back
      </button>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Teacher Tools</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Discover powerful AI-driven tools designed to save time, enhance teaching effectiveness, and track student progress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-dark-secondary border border-gray-800 rounded-xl p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, borderColor: "#00d4aa" }}
            >
              <div className="absolute top-4 right-4">
                <span className="text-xs text-gray-500 bg-dark-tertiary px-2 py-1 rounded">
                  {feature.stats.created} {feature.stats.unit}
                </span>
              </div>

              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{feature.description}</p>

              <div className="bg-dark-tertiary border border-gray-700 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-300">Demo Preview</span>
                </div>
                <p className="text-xs text-gray-400 italic">{feature.demoVideo}</p>
              </div>

              {activeDemo === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-gray-700"
                >
                  <h4 className="text-sm font-bold mb-3 text-accent">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-accent mt-1">✓</span>
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <button
                onClick={() => setActiveDemo(activeDemo === index ? null : index)}
                className="w-full mt-4 px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-lg font-semibold hover:bg-accent hover:text-dark-primary transition-all"
              >
                {activeDemo === index ? 'Hide Details' : 'Watch Demo'} →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-accent/10 to-accent-light/10 border border-accent/30 rounded-xl p-8 md:p-12 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Teaching?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join over 2,000 educators who are saving hours every week with AI-powered teaching tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-dark-primary rounded-lg font-bold text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 212, 170, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
            <motion.button
              onClick={onBack}
              className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-bold text-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#00d4aa", color: "#0a0a0f" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-dark-secondary border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-2xl font-bold text-accent mb-1">10+ hrs</div>
            <div className="text-gray-400 text-sm">Saved per week</div>
          </div>
          <div className="bg-dark-secondary border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">📈</div>
            <div className="text-2xl font-bold text-accent mb-1">2K+</div>
            <div className="text-gray-400 text-sm">Active Teachers</div>
          </div>
          <div className="bg-dark-secondary border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-accent mb-1">4.8/5</div>
            <div className="text-gray-400 text-sm">Teacher Rating</div>
          </div>
          <div className="bg-dark-secondary border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-accent mb-1">95%</div>
            <div className="text-gray-400 text-sm">Would Recommend</div>
          </div>
        </div>
      </div>
    </div>
  );
}

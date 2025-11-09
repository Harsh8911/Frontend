import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    { icon: '🤖', title: 'AI-Powered Learning', description: 'Personalized paths adapting to each student\'s pace.' },
    { icon: '📈', title: 'Real-Time Analytics', description: 'Comprehensive insights into performance and patterns.' },
    { icon: '💡', title: 'Smart Recommendations', description: 'Intelligent content based on learning goals.' },
    { icon: '🎯', title: 'Adaptive Assessments', description: 'Dynamic quizzes adjusting to performance.' },
    { icon: '👥', title: 'Collaborative Tools', description: 'Interactive discussion boards and activities.' },
    { icon: '🔒', title: 'Secure & Private', description: 'Enterprise-grade security and protection.' }
  ];

  return (
    <section className="py-20 bg-dark-primary" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Provide</span>
          </h2>
          <p className="text-gray-400 text-lg">Tools to enhance teaching and student outcomes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-dark-secondary border border-gray-800 rounded-lg p-8 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                borderColor: "#00d4aa",
                boxShadow: "0 10px 30px rgba(0, 212, 170, 0.1)"
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

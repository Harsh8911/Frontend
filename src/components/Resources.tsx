import { motion } from 'framer-motion';

export default function Resources() {
  const resources = [
    { category: 'Learning Materials', icon: '📚', items: ['Video Tutorials', 'Interactive Guides', 'Practice Exercises', 'Study Notes'] },
    { category: 'Teaching Tools', icon: '🛠️', items: ['Lesson Templates', 'Assessment Builder', 'Grade Calculator', 'Schedule Planner'] },
    { category: 'Support', icon: '💬', items: ['Help Center', 'Live Chat', 'Community Forum', 'Webinars'] }
  ];

  return (
    <section className="py-20 bg-dark-secondary" id="resources">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need for your educational journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-dark-tertiary border border-gray-800 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                borderColor: "#00d4aa",
                boxShadow: "0 10px 30px rgba(0, 212, 170, 0.1)"
              }}
            >
              <div className="text-5xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-bold mb-4">{resource.category}</h3>
              <ul className="space-y-2 mb-6 text-gray-400">
                {resource.items.map((item, idx) => (
                  <li key={idx} className="text-sm">{item}</li>
                ))}
              </ul>
              <motion.button
                className="px-6 py-2 border border-accent text-accent rounded-lg font-semibold"
                whileHover={{ backgroundColor: "#00d4aa", color: "#0a0a0f", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Explore
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-dark-secondary" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Sahayak-AI</span>
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Sahayak-AI is an innovative adaptive learning platform that bridges the gap between traditional education and modern technology. Our mission is to empower educators with intelligent tools while providing students with personalized learning experiences.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Built on cutting-edge AI, we analyze learning patterns, identify knowledge gaps, and create customized pathways ensuring every student reaches their full potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div
                className="bg-dark-tertiary border border-gray-800 rounded-lg p-6 text-center"
                whileHover={{ borderColor: "#00d4aa", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-2">50K+</div>
                <div className="text-sm text-gray-400">Active Students</div>
              </motion.div>
              <motion.div
                className="bg-dark-tertiary border border-gray-800 rounded-lg p-6 text-center"
                whileHover={{ borderColor: "#00d4aa", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-2">2K+</div>
                <div className="text-sm text-gray-400">Educators</div>
              </motion.div>
              <motion.div
                className="bg-dark-tertiary border border-gray-800 rounded-lg p-6 text-center"
                whileHover={{ borderColor: "#00d4aa", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Glow Effects */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Card 1 - Top Left */}
            <motion.div
              className="absolute top-8 left-4 bg-dark-tertiary/90 backdrop-blur-sm border border-gray-700 rounded-xl p-5 shadow-2xl"
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              animate={{ y: [-8, 8, -8] }}
              whileHover={{ scale: 1.05, borderColor: "#00d4aa" }}
              style={{ transition: "none" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div>
                  <div className="text-lg font-bold">Smart Learning</div>
                  <div className="text-xs text-gray-400">AI-Powered</div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Middle Right */}
            <motion.div
              className="absolute top-32 right-8 bg-dark-tertiary/90 backdrop-blur-sm border border-gray-700 rounded-xl p-5 shadow-2xl"
              initial={{ opacity: 0, x: 30, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              animate={{ y: [8, -8, 8] }}
              whileHover={{ scale: 1.05, borderColor: "#00d4aa" }}
              style={{ transition: "none" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center text-2xl">
                  📊
                </div>
                <div>
                  <div className="text-lg font-bold">Analytics</div>
                  <div className="text-xs text-gray-400">Real-time</div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Bottom Center */}
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-dark-tertiary/90 backdrop-blur-sm border border-gray-700 rounded-xl p-5 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              animate={{ y: [-8, 8, -8] }}
              whileHover={{ scale: 1.05, borderColor: "#00d4aa" }}
              style={{ transition: "none" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div>
                  <div className="text-lg font-bold">Progress</div>
                  <div className="text-xs text-gray-400">Accelerated</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
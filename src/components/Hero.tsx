import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';

interface HeroProps {
  onExploreStudent: () => void;
  onExploreTeacher: () => void;
  onGetStarted: () => void;
}

export default function Hero({ onExploreStudent, onExploreTeacher, onGetStarted }: HeroProps) {
  const [showExploreModal, setShowExploreModal] = useState(false);

  // lock body scroll when modal is open
  useEffect(() => {
    if (showExploreModal) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [showExploreModal]);
  return (
    <section className="min-h-screen bg-dark-primary flex items-center justify-center py-20 px-6 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-accent/15 via-transparent to-transparent opacity-40 pointer-events-none"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Transform</span> the learning
          <br />
          experience with AI
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Empowering teachers with intelligent tools and students with personalized learning paths to achieve academic excellence together.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.button
              onClick={() => setShowExploreModal((s) => !s)}
              className="px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-dark-primary rounded-lg font-semibold w-full sm:w-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 212, 170, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-expanded={showExploreModal}
              aria-haspopup="dialog"
            >
              Explore
            </motion.button>
            {showExploreModal && (
              <>
                {/* overlay */}
                <motion.div
                  className="fixed inset-0 bg-black/60 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowExploreModal(false)}
                />

                {/* modal dialog */}
                <motion.div
                  className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="pointer-events-auto max-w-md w-full bg-dark-secondary border border-gray-800 rounded-2xl shadow-2xl p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Explore Sahayak-AI</h3>
                        <p className="text-gray-400 text-sm">Choose a view to preview features for students or teachers.</p>
                      </div>
                      <button
                        aria-label="Close"
                        onClick={() => setShowExploreModal(false)}
                        className="text-gray-400 hover:text-white rounded-full p-2"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        onClick={() => {
                          setShowExploreModal(false);
                          onExploreStudent();
                        }}
                        className="flex flex-col items-start gap-2 p-4 bg-gradient-to-br from-blue-700 to-cyan-600 rounded-lg text-white shadow-md hover:scale-[1.02] transition-transform"
                      >
                        <div className="text-3xl">🎓</div>
                        <div className="font-semibold">Student Explore</div>
                        <div className="text-xs text-blue-100/80">Personalized roadmaps, AI tutor, adaptive tests.</div>
                      </button>

                      <button
                        onClick={() => {
                          setShowExploreModal(false);
                          onExploreTeacher();
                        }}
                        className="flex flex-col items-start gap-2 p-4 bg-gradient-to-br from-purple-700 to-pink-600 rounded-lg text-white shadow-md hover:scale-[1.02] transition-transform"
                      >
                        <div className="text-3xl">🧑‍🏫</div>
                        <div className="font-semibold">Teacher Explore</div>
                        <div className="text-xs text-pink-100/80">Lesson planning, content generator, analytics.</div>
                      </button>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => {
                          setShowExploreModal(false);
                          onGetStarted();
                        }}
                        className="px-4 py-2 bg-accent/90 text-dark-primary font-semibold rounded-lg hover:brightness-105"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>

          <motion.button
            onClick={onGetStarted}
            className="px-8 py-3 border-2 border-gray-700 text-white rounded-lg font-semibold w-full sm:w-auto"
            whileHover={{ scale: 1.05, backgroundColor: "#13131a", borderColor: "#00d4aa" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

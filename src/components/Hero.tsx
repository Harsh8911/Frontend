import { motion } from 'framer-motion';

interface HeroProps {
  onStudentClick: () => void;
  onTeacherClick: () => void;
}

export default function Hero({ onStudentClick, onTeacherClick }: HeroProps) {
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.button
            onClick={onStudentClick}
            className="px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-dark-primary rounded-lg font-semibold w-full sm:w-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 212, 170, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Explore
          </motion.button>
          <motion.button
            onClick={onTeacherClick}
            className="px-8 py-3 border-2 border-gray-700 text-white rounded-lg font-semibold w-full sm:w-auto"
            whileHover={{ scale: 1.05, backgroundColor: "#13131a", borderColor: "#00d4aa" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

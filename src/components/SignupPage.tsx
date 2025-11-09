import { useState } from 'react';
import { motion } from 'framer-motion';
import StudentSignup from './StudentSignup';
import TeacherSignup from './TeacherSignup';

interface SignupPageProps {
  onBack: () => void;
  onLogin: () => void;
}

export default function SignupPage({ onBack, onLogin }: SignupPageProps) {
  const [view, setView] = useState<'selection' | 'student' | 'teacher'>('selection');
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | null>(null);

  if (view === 'student') {
    return <StudentSignup onBack={() => setView('selection')} onLogin={onLogin} />;
  }

  if (view === 'teacher') {
    return <TeacherSignup onBack={() => setView('selection')} onLogin={onLogin} />;
  }

  return (
    <motion.div
      className="min-h-screen bg-dark-primary flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors z-50 hover:scale-110"
      >
        ← Back
      </button>

      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <div className="flex items-center gap-2 justify-center mb-4">
            <img src="/Sahayak%20AI%20logo.png" alt="Sahayak AI" className="h-10 w-auto" />
          </div>
          <h1 className="text-4xl font-bold mb-3">How do you want to use Sahayak-AI?</h1>
          <p className="text-gray-400">We'll personalize your setup experience accordingly.</p>
        </div>

        <div className="space-y-4 mb-8">
          <motion.div
            onClick={() => {
              setSelectedRole('teacher');
              setView('teacher');
            }}
            className={`p-6 border-2 rounded-lg cursor-pointer flex items-start gap-4 ${
              selectedRole === 'teacher'
                ? 'border-accent bg-accent/10'
                : 'border-gray-700 bg-dark-secondary'
            }`}
            whileHover={{ scale: 1.02, borderColor: selectedRole === 'teacher' ? '#00d4aa' : '#00d4aa80' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl">🎓</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">I'm here to teach and guide</h3>
              <p className="text-gray-400">Create courses and track student progress</p>
            </div>
            <span className="px-3 py-1 bg-gradient-to-r from-accent to-accent-light text-dark-primary text-xs font-bold rounded-full">Free trial</span>
          </motion.div>

          <motion.div
            onClick={() => {
              setSelectedRole('student');
              setView('student');
            }}
            className={`p-6 border-2 rounded-lg cursor-pointer flex items-start gap-4 ${
              selectedRole === 'student'
                ? 'border-accent bg-accent/10'
                : 'border-gray-700 bg-dark-secondary'
            }`}
            whileHover={{ scale: 1.02, borderColor: selectedRole === 'student' ? '#00d4aa' : '#00d4aa80' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl">📖</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">I'm here to learn and grow</h3>
              <p className="text-gray-400">Access personalized learning and practice</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <p className="text-gray-400">Already have an account? <button onClick={onLogin} className="text-accent hover:text-accent-light transition-colors font-semibold">Login here</button></p>
        </div>
      </motion.div>
    </motion.div>
  );
}

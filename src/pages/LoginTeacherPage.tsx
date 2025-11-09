import { motion } from 'framer-motion';
import TeacherLogin from '../components/TeacherLogin';

interface Props {
  onBack: () => void;
  onLogin?: (email: string, password: string) => void;
}

export default function LoginTeacherPage({ onBack, onLogin }: Props) {
  return (
    <motion.div
      className="min-h-screen bg-dark-primary flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors z-50 hover:scale-110 font-medium"
      >
        ← Back
      </button>

      <div className="flex-1 flex items-center justify-center p-8 md:p-12">
        <motion.div
          className="max-w-md w-full bg-dark-secondary p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Teacher Login</h2>
          <p className="text-gray-400 mb-6">Sign in with your work email to access teacher tools.</p>

          <TeacherLogin onSubmit={(email, password) => onLogin?.(email, password)} />
        </motion.div>
      </div>
    </motion.div>
  );
}

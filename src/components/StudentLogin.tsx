import React, { useState } from 'react';

interface Props {
  onSubmit?: (email: string, password: string) => void;
  loading?: boolean;
}

export default function StudentLogin({ onSubmit, loading }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email) return setError('Please enter your email.');
    // simple email check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Please enter a valid email.');
    if (!password) return setError('Please enter your password.');
    onSubmit?.(email, password);
  };

  return (
    <form className="space-y-5 mb-8" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-dark-input text-white placeholder-gray-400 focus:outline-none"
          placeholder="student@school.edu"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-dark-input text-white placeholder-gray-400 focus:outline-none"
          placeholder="********"
          required
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-4 bg-gradient-to-r from-accent to-accent-light text-dark-primary rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-accent/30 transition-all disabled:opacity-60"
      >
        {loading ? 'Logging in...' : 'Student Login'}
      </button>
    </form>
  );
}

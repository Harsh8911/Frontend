export default function Community() {
  const features = [
    {
      icon: '💬',
      title: 'Discussion Forums',
      description: 'Connect with other learners and educators to share insights and ask questions.'
    },
    {
      icon: '🎓',
      title: 'Study Groups',
      description: 'Join or create study groups with peers working on similar topics.'
    },
    {
      icon: '🏆',
      title: 'Leaderboards',
      description: 'Compete with fellow students and celebrate achievements together.'
    },
    {
      icon: '📚',
      title: 'Resource Sharing',
      description: 'Share and discover helpful study materials, notes, and tips.'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Active Members' },
    { value: '10K+', label: 'Daily Discussions' },
    { value: '5K+', label: 'Study Groups' },
    { value: '95%', label: 'Satisfaction Rate' }
  ];

  const recentTopics = [
    { title: 'Best practices for mastering calculus', author: 'Sarah K.', replies: 24, time: '2 hours ago' },
    { title: 'How to prepare for SAT Math', author: 'John D.', replies: 18, time: '5 hours ago' },
    { title: 'Tips for effective online learning', author: 'Maria L.', replies: 32, time: '1 day ago' },
    { title: 'Study group for Physics Chapter 5', author: 'Alex P.', replies: 15, time: '1 day ago' },
    { title: 'Recommended resources for chemistry', author: 'Emma R.', replies: 21, time: '2 days ago' }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Community</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Connect, collaborate, and grow together with thousands of learners worldwide
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-dark-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all">
            Join Now
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-secondary border border-gray-800 rounded-lg p-6 text-center hover:border-accent transition-colors"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark-secondary border border-gray-800 rounded-lg p-8 hover:border-accent transition-all hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-dark-secondary border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Recent Discussions</h2>
          <div className="space-y-4">
            {recentTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-dark-tertiary border border-gray-700 rounded-lg p-5 hover:border-accent transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg flex-1">{topic.title}</h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{topic.time}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>By {topic.author}</span>
                  <span className="text-accent">{topic.replies} replies</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 px-4 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-dark-primary transition-all">
            View All Discussions
          </button>
        </div>

        <div className="mt-16 bg-gradient-to-r from-accent/10 to-accent-light/10 border border-accent/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join our vibrant community of learners and educators. Share knowledge, get help, and make learning a collaborative experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-dark-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all">
              Create Account
            </button>
            <button className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-dark-primary transition-all">
              Explore as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

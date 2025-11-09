import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'For Students',
      items: ['Personalized learning paths', 'Interactive practice sessions', 'Progress tracking dashboard', 'Instant feedback', 'Study recommendations', '24/7 AI support']
    },
    {
      title: 'For Teachers',
      items: ['Course creation tools', 'Performance analytics', 'Automated grading', 'Resource library', 'Engagement tools', 'Parent portal']
    }
  ];

  return (
    <section className="py-20 bg-dark-primary" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">Comprehensive solutions for educators and learners</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-dark-secondary border border-gray-800 rounded-lg p-8"
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
              <h3 className="text-2xl font-bold text-accent mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <span className="text-accent font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Excellence', value: '5+' },
    { label: 'Projects Delivered', value: '100+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Team Members', value: '25+' }
  ];

  const values = [
    { icon: Target, title: 'Our Mission', desc: 'To empower businesses with innovative technology solutions that drive growth and efficiency.' },
    { icon: Eye, title: 'Our Vision', desc: 'To be a global leader in IT services, known for excellence, innovation, and customer satisfaction.' },
    { icon: Award, title: 'Our Values', desc: 'Integrity, Innovation, Excellence, and Customer-Centricity guide everything we do.' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building the future through innovative technology solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
              Abhivorn Technologies Pvt Ltd is a forward-thinking software and IT services company delivering cutting-edge digital solutions.
              We specialize in Web, Mobile, Cloud, and AI technologies, helping businesses transform their operations and achieve their goals.
              Our team of expert developers, designers, and consultants work collaboratively to deliver solutions that exceed expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Driven by passion, guided by expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Leadership Team', role: 'Directors & Executives', icon: Users }
            ].map((team, index) => {
              const Icon = team.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{team.name}</h3>
                  <p className="text-teal-600 font-medium">{team.role}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

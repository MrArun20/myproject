import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Smartphone, Cloud, Bot, Zap, LineChart } from 'lucide-react';

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      short: 'Custom software solutions tailored to your business needs',
      full: 'We build robust, scalable, and secure software applications using the latest technologies. From enterprise systems to custom applications, our team delivers solutions that drive business growth and operational efficiency.',
      features: ['Custom Applications', 'Enterprise Systems', 'Legacy Modernization', 'API Development']
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile App Solutions',
      short: 'Responsive and intuitive applications for all platforms',
      full: 'Create stunning web and mobile experiences that engage users and drive results. Our cross-platform solutions ensure your application works seamlessly across all devices while maintaining native performance.',
      features: ['Progressive Web Apps', 'iOS & Android Apps', 'Cross-platform Development', 'UI/UX Design']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Services',
      short: 'Scalable infrastructure and seamless deployment pipelines',
      full: 'Leverage the power of cloud computing with our comprehensive DevOps services. We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency and cost-effectiveness.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'CI/CD Pipelines', 'Container Orchestration']
    },
    {
      icon: Bot,
      title: 'AI & Automation',
      short: 'Intelligent systems that transform business operations',
      full: 'Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and make data-driven decisions. Our AI solutions help you stay ahead in the competitive landscape.',
      features: ['Machine Learning Models', 'Process Automation', 'Chatbots & Virtual Assistants', 'Predictive Analytics']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      short: 'End-to-end solutions for modern enterprises',
      full: 'Transform your business with our comprehensive digital transformation services. We help organizations reimagine their processes, culture, and customer experiences through innovative technology solutions.',
      features: ['Business Process Optimization', 'Digital Strategy', 'Technology Roadmap', 'Change Management']
    },
    {
      icon: LineChart,
      title: 'IT Consulting',
      short: 'Expert guidance for your technology journey',
      full: 'Get strategic insights and expert advice to make informed technology decisions. Our consultants work closely with you to understand your challenges and develop solutions that align with your business objectives.',
      features: ['Technology Assessment', 'Architecture Design', 'Performance Optimization', 'Security Audits']
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedCard === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                    isExpanded ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`ml-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{isExpanded ? service.full : service.short}</p>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <button className="mt-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                          Learn More
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're here to discuss your unique requirements and create a tailored solution
            </p>
            <a
              href="/contact"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

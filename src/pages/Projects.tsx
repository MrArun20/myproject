import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web', 'Mobile', 'Cloud', 'AI'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web',
      description: 'A comprehensive online marketplace with advanced inventory management and payment integration',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile',
      description: 'Patient management and telemedicine application for healthcare providers',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Firebase', 'WebRTC']
    },
    {
      title: 'Cloud Infrastructure Migration',
      category: 'Cloud',
      description: 'Complete cloud migration and optimization for enterprise client',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['AWS', 'Kubernetes', 'Terraform']
    },
    {
      title: 'AI-Powered Chatbot',
      category: 'AI',
      description: 'Intelligent customer service chatbot with natural language processing',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'TensorFlow', 'NLP']
    },
    {
      title: 'Financial Dashboard',
      category: 'Web',
      description: 'Real-time analytics dashboard for financial data visualization',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'D3.js', 'PostgreSQL']
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile',
      description: 'Cross-platform fitness and wellness tracking application',
      image: 'https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'Firebase', 'HealthKit']
    },
    {
      title: 'DevOps Automation Suite',
      category: 'Cloud',
      description: 'Automated CI/CD pipeline and infrastructure management system',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Jenkins', 'Docker', 'Ansible']
    },
    {
      title: 'Predictive Analytics Platform',
      category: 'AI',
      description: 'Machine learning platform for business intelligence and forecasting',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Scikit-learn', 'React']
    },
    {
      title: 'CRM Solution',
      category: 'Web',
      description: 'Customer relationship management system with advanced automation',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Express', 'MySQL']
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our expertise through successful client partnerships
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Filter className="w-5 h-5 text-gray-600" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

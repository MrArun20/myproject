import { motion } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, MapPin, Clock, X } from 'lucide-react';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null
  });

  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      location: 'Kukatpally, Hyderabad',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for an experienced Full Stack Developer to join our team. You will work on cutting-edge web applications using modern frameworks.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/Azure)',
        'Good understanding of database design and optimization',
        'Excellent problem-solving skills'
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable code',
        'Mentor junior developers'
      ]
    },
    {
      title: 'Mobile App Developer',
      location: 'Kukatpally, Hyderabad',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our mobile development team to build innovative iOS and Android applications that impact millions of users.',
      requirements: [
        'Experience with React Native or Flutter',
        'Strong understanding of mobile UI/UX principles',
        'Experience with RESTful APIs and mobile databases',
        'Published apps on App Store or Play Store'
      ],
      responsibilities: [
        'Develop cross-platform mobile applications',
        'Optimize app performance',
        'Implement new features and improvements',
        'Ensure code quality through testing'
      ]
    },
    {
      title: 'DevOps Engineer',
      location: 'Kukatpally, Hyderabad',
      type: 'Full-time',
      experience: '4+ years',
      description: 'We need a skilled DevOps Engineer to help us automate and streamline our operations and processes.',
      requirements: [
        'Experience with CI/CD pipelines',
        'Strong knowledge of Docker and Kubernetes',
        'Experience with cloud infrastructure (AWS/Azure)',
        'Scripting skills in Python or Bash'
      ],
      responsibilities: [
        'Build and maintain CI/CD pipelines',
        'Manage cloud infrastructure',
        'Implement monitoring and logging solutions',
        'Automate deployment processes'
      ]
    },
    {
      title: 'UI/UX Designer',
      location: 'Kukatpally, Hyderabad',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and intuitive user experiences for our web and mobile applications.',
      requirements: [
        'Strong portfolio of design projects',
        'Proficiency in Figma, Adobe XD, or Sketch',
        'Understanding of user-centered design principles',
        'Experience with prototyping and wireframing'
      ],
      responsibilities: [
        'Create user flows and wireframes',
        'Design high-fidelity mockups',
        'Conduct user research and testing',
        'Collaborate with developers'
      ]
    },
    {
      title: 'Data Scientist',
      location: 'Kukatpally, Hyderabad',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our AI team to build machine learning models and derive insights from complex datasets.',
      requirements: [
        'Strong knowledge of Python and ML libraries',
        'Experience with data analysis and visualization',
        'Understanding of statistical methods',
        'Experience with ML frameworks (TensorFlow/PyTorch)'
      ],
      responsibilities: [
        'Develop and deploy ML models',
        'Analyze large datasets',
        'Create data visualizations',
        'Collaborate with engineering teams'
      ]
    },
    {
      title: 'Cloud Architect',
      location: 'Kukatpally, Hyderabad',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement cloud solutions for enterprise clients.',
      requirements: [
        'Expert knowledge of AWS/Azure/GCP',
        'Experience with microservices architecture',
        'Strong understanding of security best practices',
        'Cloud certifications preferred'
      ],
      responsibilities: [
        'Design cloud architecture solutions',
        'Lead cloud migration projects',
        'Ensure security and compliance',
        'Optimize cloud costs'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setShowModal(false);
    setFormData({ name: '', email: '', phone: '', resume: null });
    alert('Application submitted successfully! We will contact you soon.');
  };

  const openModal = (index: number) => {
    setSelectedJob(index);
    setShowModal(true);
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build your career with innovative projects and a collaborative team
            </p>
          </motion.div>
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
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Discover exciting opportunities to grow with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-teal-500" />
                    {job.experience}
                  </div>
                </div>

                <button
                  onClick={() => openModal(index)}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {showModal && selectedJob !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    {jobs[selectedJob].title}
                  </h2>
                  <p className="text-gray-600">{jobs[selectedJob].location}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {jobs[selectedJob].requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Responsibilities</h3>
                <ul className="space-y-2">
                  {jobs[selectedJob].responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Resume (PDF)
                  </label>
                  <input
                    type="file"
                    required
                    accept=".pdf"
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

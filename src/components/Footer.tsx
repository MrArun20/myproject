import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
// import logo from '/assets/MainLogo-Edited.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" aria-label="Abhivorn Technologies">
            <img
              src="/assets/MainLogo-Edited.png"
              alt="Abhivorn Technologies"
              className="h-auto w-32 mb-4"
            />
            </a>
            <p className="text-gray-400 mb-6">
              Empowering innovation through cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              <a
                href="https://x.com/abhivorntech"
                target='_blank'
                className="w-10 h-10 bg-white/10 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/abhivorn-technologies/"
                target='_blank'
                className="w-10 h-10 bg-white/10 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/abhivorn_technologies/"
                target='_blank'
                className="w-10 h-10 bg-white/10 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Software Development</li>
              <li>Web & Mobile Apps</li>
              <li>Cloud & DevOps</li>
              <li>AI & Automation</li>
              <li>Digital Transformation</li>
              <li>IT Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-teal-400" />
                <a href="https://www.google.com/maps/place/Matrix+IT+Hub/@17.486354,78.396174,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93f4c4c4c4c4:0x4c4c4c4c4c4c4c4!8m2!3d17.486354!4d78.396174!16s%2Fg%2F11c1t1t1t1" target='_blank'>Matrix IT Hub, Near Temple Bus Stop, KPHB Phase 2, Kukatpally<br />Hyderabad, Telangana, India, 500072</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-teal-400" />
                <a href="mailto:info@abhivorn.com">info@abhivorn.com</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-teal-400" />
                <a href="tel:+919966629766">+91 99666 29766</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Abhivorn Technologies Pvt Ltd. All Rights Reserved.
              </p>
              {/* <p className="text-gray-500 text-sm mt-1">
                CIN: [Company Identification Number]
              </p> */}
            </div>
            <div className="text-teal-400 font-semibold text-center md:text-right">
              <p className="text-lg">Innovate. Transform. Lead.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

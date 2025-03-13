import { Facebook, Twitter, Instagram, Linkedin, MessageSquare, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="text-2xl font-heading font-bold flex items-center mb-6">
              <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.5 21l-.5-1c-.6-1.5-1.6-2.8-2.8-3.8-2.2-1.8-3.4-4.5-3.2-7.3.3-4.5 4.1-8.1 8.6-8.1 4.6 0 8.3 3.6 8.6 8.1.2 2.8-1 5.5-3.2 7.3-1.2 1-2.2 2.3-2.8 3.8l-.5 1h-4.2z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              LingoLeap
            </Link>
            <p className="text-gray-400 mb-6">
              AI-powered language learning platform that makes mastering a new language fun, effective, and personalized.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Languages</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Spanish</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">French</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Japanese</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mandarin</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">View All Languages</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MessageSquare className="text-gray-400 mt-1 mr-3" size={16} />
                <span className="text-gray-400">support@lingoleap.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-gray-400 mt-1 mr-3" size={16} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-gray-400 mt-1 mr-3" size={16} />
                <span className="text-gray-400">123 Language Lane, San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LingoLeap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

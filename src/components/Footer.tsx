import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-navy-900 text-gray-200">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/passport-logo-white.png" 
                alt="Passport Seva" 
                className="h-10 w-auto mr-3" 
              />
              <div>
                <h2 className="font-bold text-white text-lg leading-tight">Passport Seva</h2>
                <p className="text-xs text-gray-300">Ministry of External Affairs</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              The official portal for passport services in India, providing citizens with a seamless experience for all passport-related needs.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-800 hover:bg-navy-700 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-800 hover:bg-navy-700 p-2 rounded-full transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-800 hover:bg-navy-700 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-800 hover:bg-navy-700 p-2 rounded-full transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Passport Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/apply/new" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Apply for New Passport
                </Link>
              </li>
              <li>
                <Link to="/apply/renew" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Renew Passport
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Track Application Status
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Document Requirements
                </Link>
              </li>
              <li>
                <Link to="/fees" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Fee Calculator
                </Link>
              </li>
              <li>
                <Link to="/offices" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Passport Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white text-sm transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Guidelines & Policies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Downloadable Forms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Video Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  News & Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Visa Information
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="block text-gray-400">Helpline</span>
                <a href="tel:1800258258" className="text-white hover:underline">1800-258-1800</a>
              </li>
              <li className="text-sm">
                <span className="block text-gray-400">Email</span>
                <a href="mailto:support@passportindia.gov.in" className="text-white hover:underline">support@passportindia.gov.in</a>
              </li>
              <li className="text-sm">
                <span className="block text-gray-400">Address</span>
                <p className="text-gray-300">
                  CPV Division, Ministry of External Affairs, Patiala House Annexe, Tilak Marg, New Delhi - 110001
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-navy-700">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-sm text-gray-400">
              © {new Date().getFullYear()} Passport Seva, Government of India. All Rights Reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-xs">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <Button
        className="fixed bottom-6 right-6 bg-navy-700 hover:bg-navy-800 rounded-full shadow-lg p-3 h-auto w-auto"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;

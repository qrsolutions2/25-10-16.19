import React from 'react';
import { QrCode } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { smoothScroll } from '../utils/smoothScroll';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAssetSafetyPage = location.pathname === '/asset-safety';

  const headerClass = "fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90";
  const linkClass = "text-white hover:text-blue-400 transition-colors duration-300";
  const buttonClass = "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300";

  const scrollToForm = () => {
    const formSection = document.querySelector('#contact-form-section');
    if (formSection) {
      const headerOffset = 80;
      const elementPosition = formSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <QrCode className="h-8 w-8 text-blue-400 mr-2" />
            <Link to="/" className="text-xl font-bold text-white">QRSolutions</Link>
          </div>
          <nav>
            <ul className="flex items-center space-x-4">
              {!isHomePage ? (
                <li>
                  <Link to="/" className={linkClass}>Other Solutions</Link>
                </li>
              ) : (
                <>
                  <li><a href="#sectors" onClick={smoothScroll} className={linkClass}>Sectors</a></li>
                  <li><a href="#dashboard" onClick={smoothScroll} className={linkClass}>Dashboard</a></li>
                  <li><a href="#extras" onClick={smoothScroll} className={linkClass}>Extras</a></li>
                  <li><a href="#faq" onClick={smoothScroll} className={linkClass}>FAQ</a></li>
                </>
              )}
              {!isAssetSafetyPage && (
                <li><Link to="/pricing" className={linkClass}>Pricing</Link></li>
              )}
              {isAssetSafetyPage ? (
                <li>
                  <button onClick={scrollToForm} className={buttonClass}>
                    Get in Touch
                  </button>
                </li>
              ) : (
                <li className="flex flex-col items-end space-y-2">
                  <div className="flex space-x-2">
                    <Link to="/pricing" className={buttonClass}>
                      Sign Up
                    </Link>
                    <button className={buttonClass}>
                      Login
                    </button>
                  </div>
                  <Link 
                    to="/asset-safety" 
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Asset & Safety Management →
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
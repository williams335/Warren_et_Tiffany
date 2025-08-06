import React from 'react';
import { Menu, X, Home, Heart, Info, Calendar, Building, Music, CheckSquare, HelpCircle, ThumbsUp } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  onNavClick, 
  isMenuOpen, 
  toggleMenu 
}) => {
  const navItems = [
    { id: 'accueil', label: 'Accueil', icon: <Home className="h-4 w-4" /> },
    { id: 'notre-histoire', label: 'Notre Histoire', icon: <Heart className="h-4 w-4" /> },
    { id: 'infos-pratiques', label: 'Infos Pratiques', icon: <Info className="h-4 w-4" /> },
    { id: 'programme', label: 'Programme', icon: <Calendar className="h-4 w-4" /> },
    { id: 'hebergements', label: 'Hébergements', icon: <Building className="h-4 w-4" /> },
    { id: 'playlist', label: 'Playlist', icon: <Music className="h-4 w-4" /> },
    { id: 'confirmation', label: 'Confirmation', icon: <CheckSquare className="h-4 w-4" /> },
    { id: 'faq', label: 'FAQ', icon: <HelpCircle className="h-4 w-4" /> },
    { id: 'remerciements', label: 'Remerciements', icon: <ThumbsUp className="h-4 w-4" /> }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <button 
              onClick={() => onNavClick('accueil')}
              className="flex items-center space-x-2"
            >
              <span className="font-heading text-2xl text-sage-800">T&W</span>
            </button>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-sage-700 hover:text-sage-900 hover:bg-sage-100 focus:outline-none"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`${
                  activeSection === item.id
                    ? 'nav-link nav-link-active'
                    : 'nav-link nav-link-inactive'
                } flex items-center space-x-1`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-full left-0 w-full bg-white shadow-lg`}
      >
        <div className="pt-2 pb-4 px-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`${
                activeSection === item.id
                  ? 'block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-sage-100 text-sage-800'
                  : 'block w-full text-left px-3 py-2 rounded-md text-base font-medium text-sage-700 hover:bg-sage-50 hover:text-sage-800'
              } flex items-center space-x-2`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
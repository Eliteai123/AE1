import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu as MenuIcon, X, Home, FileText, User, ExternalLink } from 'lucide-react';
import { MenuContainer, MenuItem } from './ui/fluid-menu';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full px-3 xs:px-4 py-3 xs:py-4 z-50 flex justify-between items-center bg-white/5 backdrop-blur-lg">
      <Link to="/" className="text-black text-lg xs:text-xl font-bold">
        Automate Elite
      </Link>
      <div className="flex items-center gap-4">
        <MenuContainer>
          <MenuItem 
            icon={
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                  <MenuIcon size={24} strokeWidth={1.5} className="text-black" />
                </div>
                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                  <X size={24} strokeWidth={1.5} className="text-black" />
                </div>
              </div>
            } 
          />
          <MenuItem 
            icon={<Home size={24} strokeWidth={1.5} className="text-black" />} 
            onClick={() => navigate('/')}
            isActive={location.pathname === '/'}
          />
          <MenuItem 
            icon={<FileText size={24} strokeWidth={1.5} className="text-black" />} 
            onClick={() => navigate('/services')}
            isActive={location.pathname === '/services'}
          />
          <MenuItem 
            icon={<User size={24} strokeWidth={1.5} className="text-black" />} 
            onClick={() => navigate('/about')}
            isActive={location.pathname === '/about'}
          />
        </MenuContainer>
      </div>
    </nav>
  );
};

export default Navbar;
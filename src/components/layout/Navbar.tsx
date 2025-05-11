
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, GraduationCap, Bell, FileText, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-uho text-uho-text-light sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
            <GraduationCap size={28} />
            <span className="font-bold text-lg md:text-xl">CS UHO 2024</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-uho-text-light hover:bg-uho-light"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks isMobile={false} />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-uho-light px-4 pb-4 animate-fade-in">
          <NavLinks isMobile={true} onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  isMobile: boolean;
  onClick?: () => void;
}

const NavLinks = ({ isMobile, onClick }: NavLinksProps) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Students", path: "/students" },
    { name: "Schedule", path: "/schedule" },
    { name: "Articles", path: "/articles", icon: FileText },
    { name: "Announcements", path: "/announcements", icon: Bell },
    { name: "Admin", path: "/admin", icon: LayoutDashboard }
  ];

  return (
    <div className={`flex ${isMobile ? 'flex-col space-y-3' : 'items-center space-x-6'}`}>
      {links.map((link) => (
        <Link 
          key={link.path} 
          to={link.path} 
          className={`
            font-medium transition-colors hover:text-white flex items-center
            ${isMobile ? 'py-2' : ''}
          `}
          onClick={onClick}
        >
          {link.icon && <link.icon className="mr-2 h-4 w-4" />}
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;

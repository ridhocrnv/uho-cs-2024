
import { Link } from 'react-router-dom';
import { GraduationCap, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-uho text-uho-text-light pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap size={24} />
              <span className="font-bold text-xl">TECH CREW</span>
            </div>
            <p className="max-w-xs text-gray-300">
              Pusat informasi dan dokumentasi untuk mahasiswa Ilmu Komputer, Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Halu Oleo.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/students" className="hover:text-white transition-colors">Mahasiswa</Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-white transition-colors">Jadwal Kuliah</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:ridhoahmadirawan281@gmail.com" className="hover:text-white transition-colors">ridhoahmadirawan281@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Github size={18} />
                <a href="https://github.com/ridhocrnv/uho-cs-2024" target="_blank" className="hover:text-white transition-colors">
                  github.com/ridhocrnv
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-uho-light mt-8 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Computer Science Batch 2024, UHO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

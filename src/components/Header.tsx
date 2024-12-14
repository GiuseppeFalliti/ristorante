//import delle icone da lucide
import  Beer from 'lucide-react/dist/esm/icons/beer';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import { useState } from 'react'; //per gestire lo stato di un dispositivo mobile

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //hook di React per gestire lo stato di un dispositivo mobile o desktop.
  return (
    <header className="bg-emerald-950 text-white fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Beer className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold text-emerald-400">MAG MELL IRISH PUB</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#menu" className="hover:text-emerald-400 transition-colors">Menu</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">Chi siamo</a>
            <a href="#reservation" className="hover:text-emerald-400 transition-colors">Prenota un tavolo</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contatti</a>
          </div>


          
          <button  //gestione del menu mobile
            className="md:hidden" //hidden per dispositivi desktop
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>


        
        {isMenuOpen && ( //gestione del menu mobile viene mostrato solo quando è aperto su dispositivi mobile quindi isMenuOpen e true
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#home" className="block hover:text-emerald-400 transition-colors">Home</a>
            <a href="#menu" className="block hover:text-emerald-400 transition-colors">Menu</a>
            <a href="#about" className="block hover:text-emerald-400 transition-colors">Chi siamo</a>
            <a href="#reservation" className="block hover:text-emerald-400 transition-colors">Prenota un tavolo</a>
            <a href="#contact" className="block hover:text-emerald-400 transition-colors">Contatti</a>
          </div>
        )}
      </nav>
    </header>
  );
}
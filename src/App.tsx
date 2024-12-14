import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import ReservationForm from './components/Reservation/ReservationForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Menu />
        <ReservationForm />
        <About />
        <Contact />
      </main>
      <footer className="bg-emerald-950 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Mag Mell Irish Pub. tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
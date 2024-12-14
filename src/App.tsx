import Header from './components/Header'; //componente Header con tutti i link alle sezioni
import Hero from './components/Hero'; // componente Hero con la sezione di presentazione
import Menu from './components/Menu'; //componente Menu con la sezione del menu
import About from './components/About';//componente About con la sezione della storia
import Contact from './components/Contact'; //componente Contact con la sezione del contatto
import ReservationForm from './components/Reservation/ReservationForm'; //componente ReservationForm con la sezione della prenotazione

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
          <p>&copy; {new Date().getFullYear() /*Ottieni l'anno corrente*/} Mag Mell Irish Pub.Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
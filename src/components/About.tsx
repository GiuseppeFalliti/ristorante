//import delle icone da lucide
export default function About() {
  return (
    <section id="about" className="py-20 bg-emerald-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">La nostra storia</h2>
            <p className="text-lg mb-6">
            Il Mag Mell, nella mitologia irlandese, è un paradiso eterno privo di malattia e morte,
             dove regnano giovinezza e felicità. Governato da Tethra o Manannan mac Lir, 
             è descritto come un isola nell Ovest o un regno subacqueo.
            </p>
            <p className="text-lg mb-8">
            Nel mito di Oisín e Niamh, Oisín visita il Mag Mell, 
            ma al ritorno in Irlanda scopre che sono trascorsi 100 anni e invecchia
             allistante toccando il suolo. Con il cristianesimo, il Mag Mell divenne un "paradiso terrestre" 
             raggiungibile via mare, ispirando racconti di monaci irlandesi come San Brendano, che alcuni 
             credono abbia raggiunto l'America.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://www.magmell.it/images/il-pub/818128AB05704C67877076835ED9F989/Sala2_g2i2.jpg"
              alt="interno"
              className="rounded-lg w-full h-64 object-cover"
            />
             <img  src="https://www.magmell.it/images/il-pub/818128AB05704C67877076835ED9F989/Facce%20da%20birra_g2i0.jpg" alt="chi siamo" className="rounded-lg w-full h-64 object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}
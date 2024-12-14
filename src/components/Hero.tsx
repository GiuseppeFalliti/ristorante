export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mag Mell Irish Pub</h1>
          <p className="text-xl md:text-2xl mb-8">Vivi l'autentica ospitalità irlandese nel cuore della città</p>
          <div className="space-x-4">
            <a 
              href="#menu" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Menu
            </a>
            <a 
              href="#reservation" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Prenota un tavolo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
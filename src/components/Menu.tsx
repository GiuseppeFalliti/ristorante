const menuItems = {
  starters: [
    { name: "Irish Potato Soup", price: "€8", description: "Creamy potato and leek soup served with soda bread" },
    { name: "Smoked Salmon", price: "€12", description: "Irish smoked salmon with brown bread and capers" },
  ],
  mains: [
    { name: "Fish & Chips", price: "€16", description: "Beer-battered cod with hand-cut chips and mushy peas" },
    { name: "Shepherd's Pie", price: "€15", description: "Traditional lamb shepherd's pie with root vegetables" },
    { name: "Irish Stew", price: "€17", description: "Slow-cooked lamb stew with vegetables and potatoes" },
  ],
  drinks: [
    { name: "Guinness", price: "€6", description: "The classic Irish dry stout" },
    { name: "Jameson", price: "€7", description: "Triple-distilled Irish whiskey" },
    { name: "Irish Coffee", price: "€8", description: "Hot coffee with Irish whiskey and whipped cream" },
  ]
};

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Menu</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-800">Piatti Principali</h3>
            {menuItems.starters.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">{item.name}</h4>
                  <span className="text-emerald-600 font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-800">Birre alla Spina</h3>
            {menuItems.mains.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">{item.name}</h4>
                  <span className="text-emerald-600 font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-800">Birre a Bottiglia/Bibite</h3>
            {menuItems.drinks.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">{item.name}</h4>
                  <span className="text-emerald-600 font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
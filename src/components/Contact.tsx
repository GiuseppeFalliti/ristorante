//import delle icone da lucide
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Phone from 'lucide-react/dist/esm/icons/phone';
import Mail from 'lucide-react/dist/esm/icons/mail';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Contatti</h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div id="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5652.565926493905!2d8.596634376072345!3d44.89723917107034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47877683db8a58e1%3A0x6b8ffeba4c296188!2sMag+Mell+Irish+Pub!5e0!3m2!1sit!2sit!4v1733211834431!5m2!1sit!2sit"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-emerald-900">Dove Trovarci</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Indirizzo</p>
                    <p className="text-gray-600">Corso Carlo Marx 116</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telefono</p>
                    <p className="text-gray-600">+39 0131 531693</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600"><a href="mailto:info@magmell.it?subject=Info">info@magmell.it</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-emerald-900">Orario d'apertura</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Lunedi - Giovedi:</span> 19:00 - 01:00</p>
                <p><span className="font-medium">Venerdi - Sabato:</span> 19:00 - 02:00</p>
                <p><span className="font-medium">Martedi - Mercoledi:</span>Chiuso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
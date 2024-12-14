import React, { useState } from 'react';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Users from 'lucide-react/dist/esm/icons/users';
import {  generataOrario } from '../utils/timeUtilis';
import TimeSlotGrid from './timeSlotGrid';

export default function ReservationForm() {
  // Stato per la data e l'orario selezionati
  const [selectData, setselectData] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState('1');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gestire la presentazione del modulo
    console.log({ selectData, selectedTime, guests });
  };

  return (
    <section id="reservation" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-emerald-900">Prenota un tavolo</h2>
        <p className="text-center text-gray-600 mb-12">Seleziona data e ora per la tua prenotazione</p>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* persone Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-emerald-600" />
                  Numero di persone
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Persona' : 'Persone'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Data Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
                  Data
                </label>
                <input
                  type="date"
                  value={selectData}
                  onChange={(e) => setselectData(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              {/* Ora Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                  Ora
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option value="">Seleziona l'ora</option>
                  { generataOrario().map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <TimeSlotGrid onTimeSelect={setSelectedTime} selectedTime={selectedTime} />

            <div className="text-center">
              <button
                type="submit"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center"
              >
                Prenota Ora
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
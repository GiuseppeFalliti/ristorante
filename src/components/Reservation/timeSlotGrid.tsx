import React from 'react';
import { generateTimeSlots } from '../utils/timeUtilis';
interface TimeSlotGridProps {
  onTimeSelect: (time: string) => void;
  selectedTime: string;
}

export default function TimeSlotGrid({ onTimeSelect, selectedTime }: TimeSlotGridProps) {
  const timeSlots = generateTimeSlots();

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {timeSlots.map((time) => (
        <button
          key={time}
          type="button"
          onClick={() => onTimeSelect(time)}
          className={`py-2 px-4 rounded-lg text-center transition-colors ${
            selectedTime === time
              ? 'bg-emerald-600 text-white'
              : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
          }`}
        >
          {time}
        </button>
      ))}
    </div>
  );
}
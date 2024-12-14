export function generataOrario(): string[] {
    const timeSlots: string[] = [];
    const startHour = 19; // 7 PM
    const endHour = 2; // 2 AM
  
    // Aggiungere orari per prima della mezzanotte
    for (let hour = startHour; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        timeSlots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
      }
    }
  
    // Aggiungere orari per dopo la mezzanotte
    for (let hour = 0; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        timeSlots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
      }
    }
  
    return timeSlots;
  }
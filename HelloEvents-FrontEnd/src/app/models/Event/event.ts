export interface Event {

  id?: number;
  title: string;
  description: string;
  date: string; // ISO date string: '2025-06-10'
  location: string;
  category: string;
  availableSeats: number;

}


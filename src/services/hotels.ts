import hotelsData from "@/lib/data/hotels.json";

export interface Hotel {
  id: string;
  name: string;
  city: string;
  area: string;
  rating: number;
  description: string;
  address: string;
  reviewRating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  roomTypes: string[];
  price: string;
}

export const getHotelsByCity = async (city: string): Promise<Hotel[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  if (!city) return hotelsData as Hotel[];
  
  return (hotelsData as Hotel[]).filter(
    (h) => h.city.toLowerCase().includes(city.toLowerCase()) || 
           h.area?.toLowerCase().includes(city.toLowerCase())
  );
};

export const getHotelById = async (id: string): Promise<Hotel | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return (hotelsData as Hotel[]).find((h) => String(h.id).trim() === String(id).trim());
};

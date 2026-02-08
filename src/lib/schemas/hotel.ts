import { z } from "zod";

export const FlightSearchSchema = z.object({
  from: z.string().min(1, "Origin is required"),
  to: z.string().min(1, "Destination is required"),
  departureDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  returnDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)").optional(),
  travellers: z.object({
    adults: z.number().min(1).max(9),
    children: z.number().min(0).max(9),
    infants: z.number().min(0).max(9),
  }),
  travelClass: z.enum(["Economy", "Premium Economy", "Business", "First Class"]),
});

export const HotelSearchSchema = z.object({
  city: z.string().min(1, "City is required"),
  checkIn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  checkOut: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  rooms: z.array(z.object({
    adults: z.number().min(1).max(4),
    children: z.number().min(0).max(3),
  })).min(1),
});

export const HotelRoomSelectionSchema = z.object({
  hotelId: z.string(),
  roomId: z.string(),
  ratePlanId: z.string(),
});

export const HotelBookingReviewSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Invalid phone number (10 digits)"),
  panCard: z.string().optional(),
});

export type FlightSearch = z.infer<typeof FlightSearchSchema>;
export type HotelSearch = z.infer<typeof HotelSearchSchema>;
export type HotelRoomSelection = z.infer<typeof HotelRoomSelectionSchema>;
export type HotelBookingReview = z.infer<typeof HotelBookingReviewSchema>;

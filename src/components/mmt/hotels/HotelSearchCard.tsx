"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HotelSearchSchema, type HotelSearch } from "@/lib/schemas/hotel";
import { useEffect } from "react";

type HotelSearchCardProps = Partial<HotelSearch>;

export function HotelSearchCard(props: HotelSearchCardProps = {}) {
  const router = useRouter();

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<HotelSearch>({
    resolver: zodResolver(HotelSearchSchema),
    defaultValues: {
      city: props.city ?? "Goa",
      checkIn: props.checkIn ?? new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0,10),
      checkOut: props.checkOut ?? new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().slice(0,10),
      rooms: props.rooms ?? [{ adults: 2, children: 0 }],
    }
  });

  const rooms = watch("rooms");
  const roomsList = rooms ?? [{ adults: 2, children: 0 }];

  // Reset form when external props change (Tambo may update props)
  useEffect(() => {
    const resetValues: Partial<HotelSearch> = {};
    if (typeof props.city !== 'undefined') resetValues.city = props.city as string;
    if (typeof props.checkIn !== 'undefined') resetValues.checkIn = props.checkIn as string;
    if (typeof props.checkOut !== 'undefined') resetValues.checkOut = props.checkOut as string;
    if (typeof props.rooms !== 'undefined') resetValues.rooms = props.rooms as { adults: number; children: number }[];

    if (Object.keys(resetValues).length > 0) {
      reset(resetValues, { keepDefaultValues: true });
    }
  }, [props.city, props.checkIn, props.checkOut, props.rooms, reset]);

  const onSubmit = (data: HotelSearch) => {
    try {
      const params = new URLSearchParams();
      params.set('city', data.city ?? 'Goa');
      params.set('checkIn', data.checkIn ?? new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0,10));
      params.set('checkOut', data.checkOut ?? new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().slice(0,10));
      params.set('rooms', JSON.stringify(data.rooms ?? [{ adults: 2, children: 0 }]));
      router.push(`/hotels/results?${params.toString()}`);
    } catch (err) {
      console.error('Failed to submit hotel search', err, data);
    }
  };

  const cityOptions = ["Goa", "Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata"];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-2xl p-10 min-h-[250px] border border-gray-200 relative">
      <div className="grid grid-cols-4 border border-gray-200 rounded-lg overflow-hidden">
        {/* CITY */}
        <div className="p-4 border-r hover:bg-blue-50 cursor-pointer transition-colors group relative">
          <p className="text-gray-500 text-xs font-bold mb-1 uppercase tracking-wider">City, Property Name Or Location</p>
          <select {...register("city")} className="text-3xl font-black text-gray-800 bg-transparent outline-none w-full appearance-none pr-8">
            {cityOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <p className="text-xs text-gray-500 font-medium font-bold">India</p>
          {errors.city && <p className="text-red-500 text-[10px] absolute bottom-1">{errors.city.message}</p>}
        </div>

        {/* CHECK-IN */}
        <div className="p-4 border-r hover:bg-blue-50 cursor-pointer transition-colors group relative">
          <p className="text-gray-500 text-xs font-bold mb-1 uppercase tracking-wider">Check-in</p>
          <input 
            type="date"
            {...register("checkIn")}
            className="text-2xl font-black text-gray-800 bg-transparent outline-none w-full"
          />
          <p className="text-xs text-gray-500 font-medium italic">Selected Date</p>
          {errors.checkIn && <p className="text-red-500 text-[10px] absolute bottom-1">{errors.checkIn.message}</p>}
        </div>

        {/* CHECK-OUT */}
        <div className="p-4 border-r hover:bg-blue-50 cursor-pointer transition-colors group relative">
          <p className="text-gray-500 text-xs font-bold mb-1 uppercase tracking-wider">Check-out</p>
          <input 
            type="date"
            {...register("checkOut")}
            className="text-2xl font-black text-gray-800 bg-transparent outline-none w-full"
          />
          <p className="text-xs text-gray-500 font-medium italic">Selected Date</p>
          {errors.checkOut && <p className="text-red-500 text-[10px] absolute bottom-1">{errors.checkOut.message}</p>}
        </div>

        {/* ROOMS */}
        <div className="p-4 hover:bg-blue-50 cursor-pointer transition-colors group border-r lg:border-r-0">
          <p className="text-gray-500 text-xs font-bold mb-1 uppercase tracking-wider">Rooms & Guests</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-black text-gray-800">
              {roomsList.reduce((acc: number, r) => acc + (r.adults ?? 0) + (r.children ?? 0), 0)}
            </p>
            <span className="text-sm font-bold text-gray-800">Adults+Children</span>
          </div>
          <p className="text-xs text-gray-500 font-medium font-bold">{roomsList.length} Room(s)</p>
        </div>
      </div>

      <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 z-20">
        <button 
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-24 py-4 rounded-full font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all text-shadow"
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}

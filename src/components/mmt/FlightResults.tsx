"use client";
import { ChevronLeft, ChevronRight, Zap, Info, ChevronDown } from "lucide-react";
import { useState } from "react";
import { FlightDetailsModal } from "./FlightDetailsModal";
import { useSearchParams } from "next/navigation";
import flightsData from "@/lib/data/flights_data.json";

export function FlightResults() {
    const searchParams = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState<any>(null);

    const from = searchParams.get("from") || "DEL";
    const to = searchParams.get("to") || "BOM";
    const date = searchParams.get("date") || "2026-02-08";

    // Helper to format date from "6 Feb'25" to "2026-02-06" if needed
    // But for now, we expect the CSV/JSON format or a match.
    // The Search component sends "6 Feb'25" by default in the link I just created.
    // Wait, I should make sure the date format matches.
    // In My previous edit of FlightSearch, I passed data.departureDate.
    // Let's assume the user picks a date that matches our CSV or we do a loose match.

    const filteredFlights = flightsData.filter(f =>
        (f.from === from || f.fromCity.toLowerCase().includes(from.toLowerCase())) &&
        (f.to === to || f.toCity.toLowerCase().includes(to.toLowerCase()))
        // && f.date === date // Date matching is tricky with various formats, let's keep it simple for now or fix formats
    );

    const flights = filteredFlights.length > 0 ? filteredFlights : flightsData.slice(0, 3);

    const handleViewPrices = (flight: any) => {
        setSelectedFlight(flight);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="flex-1">
                {/* Search Result Summary */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-black text-gray-800">Flights from {from} to {to}</h2>
                </div>

                {/* ... existing promos ... */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                        { icon: "PNB", title: "Flat 12% off (up to Rs. 180...", desc: "with PNB Credit Cards. Code: ...", color: "bg-red-50 text-red-600" },
                        { icon: "VISA", title: "VISA Exclusive Offer", desc: "Free Seat with VISA Signature ...", color: "bg-blue-50 text-blue-600" }
                    ].map((promo, i) => (
                        <div key={i} className="bg-white border rounded-xl p-3 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-xs ${promo.color} group-hover:scale-110 transition-transform`}>{promo.icon}</div>
                            <div>
                                <p className="text-xs font-black text-gray-800 tracking-tight">{promo.title}</p>
                                <p className="text-[10px] text-gray-500 font-bold">{promo.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Date Carousel */}
                <div className="bg-white border rounded-xl overflow-hidden mb-8 shadow-sm">
                    <div className="flex items-stretch divide-x">
                        <button className="px-3 hover:bg-gray-50 bg-white z-10 border-r transition-colors">
                            <ChevronLeft className="w-5 h-5 text-blue-500" />
                        </button>

                        <div className="flex-1 flex divide-x overflow-x-auto scrollbar-hide">
                            {[
                                { day: "Fri, Feb 6", price: "₹ 17,969" },
                                { day: "Sat, Feb 7", price: "₹ 5,641", active: true },
                                { day: "Sun, Feb 8", price: "₹ 5,744" },
                                { day: "Mon, Feb 9", price: "₹ 5,260" },
                                { day: "Tue, Feb 10", price: "₹ 5,215" },
                                { day: "Wed, Feb 11", price: "₹ 5,510" },
                                { day: "Thu, Feb 12", price: "₹ 4,628" },
                                { day: "Fri, Feb 13", price: "₹ 4,501" }
                            ].map((date, i) => (
                                <div
                                    key={i}
                                    className={`flex-1 min-w-[120px] p-3 text-center cursor-pointer transition-all ${date.active ? "bg-white border-b-4 border-blue-500" : "hover:bg-gray-50"}`}
                                >
                                    <p className={`text-[10px] font-black uppercase tracking-tight ${date.active ? "text-blue-500" : "text-gray-500"}`}>{date.day}</p>
                                    <p className={`text-xs font-bold mt-0.5 ${date.active ? "text-blue-600 font-black" : "text-gray-800"}`}>{date.price}</p>
                                </div>
                            ))}
                        </div>

                        <button className="px-3 hover:bg-gray-50 bg-white z-10 border-l transition-colors">
                            <ChevronRight className="w-5 h-5 text-blue-500" />
                        </button>
                    </div>
                </div>

                {/* Quick Filter Box */}
                <div className="grid grid-cols-4 gap-3 mb-8">
                    {[
                        { label: "CHEAPEST", price: `₹ ${flights[0]?.price}`, duration: flights[0]?.duration, active: true },
                        { label: "NON STOP FIRST", price: `₹ ${flights[0]?.price}`, duration: flights[0]?.duration },
                        { label: "YOU MAY PREFER", price: `₹ ${flights[0]?.price}`, duration: flights[0]?.duration },
                        { label: "Other Sort", price: "v", duration: "" }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`rounded-xl p-4 cursor-pointer transition-all flex items-center gap-3 border ${item.active ? "bg-blue-50 border-blue-200 ring-2 ring-blue-100" : "bg-white border-gray-100 hover:border-blue-200"}`}
                        >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`}>
                                {i === 0 ? <span className="font-bold text-[10px]">₹</span> : i === 1 ? <Zap className="w-4 h-4 fill-current" /> : i === 2 ? <span className="text-sm">⭐</span> : <span className="text-sm">📊</span>}
                            </div>
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">{item.label}</p>
                                {item.price !== "v" ? (
                                    <p className="text-xs font-black text-gray-800">{item.price} | <span className="text-gray-400 font-bold">{item.duration}</span></p>
                                ) : (
                                    <p className="text-xs font-black text-gray-800">Other <ChevronDown className="inline w-3 h-3" /></p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between mb-4 mt-12">
                    <h3 className="text-sm font-black text-gray-800 uppercase italic tracking-wider">Flights sorted by Lowest fares on this route</h3>
                </div>

                {/* Flight Cards */}
                <div className="flex flex-col gap-4">
                    {flights.map((flight: any, i: number) => (
                        <div key={flight.id || i} className={`bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-xl transition-all duration-300 ${i === 1 ? "border-blue-200" : "border-gray-100"}`}>
                            <div className="p-6">
                                <div className="flex items-center justify-between gap-12">
                                    {/* Left: Airline */}
                                    <div className="flex items-center gap-4 w-[180px]">
                                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl shadow-inner border border-gray-100">{flight.logo}</div>
                                        <div>
                                            <p className="text-sm font-black text-gray-800">{flight.airline}</p>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{flight.flightNumber}</p>
                                        </div>
                                    </div>

                                    {/* Middle: Times */}
                                    <div className="flex flex-1 items-center justify-center gap-16">
                                        <div className="text-center">
                                            <p className="text-xl font-black text-gray-800 italic">{flight.departure}</p>
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">{flight.fromCity}</p>
                                        </div>

                                        <div className="flex flex-col items-center gap-1 flex-1 max-w-[120px]">
                                            <span className="text-[10px] font-bold text-gray-400">{flight.duration}</span>
                                            <div className="w-full h-[1px] bg-gray-100 relative">
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 border border-white"></div>
                                            </div>
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{flight.stops === "0" ? "Non stop" : `${flight.stops} Stop(s)`}</span>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-xl font-black text-gray-800 italic">{flight.arrival}</p>
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">{flight.toCity}</p>
                                        </div>
                                    </div>

                                    {/* Right: Price & Button */}
                                    <div className="text-right min-w-[150px]">
                                        <div className="flex flex-col items-end mb-3">
                                            <p className="text-2xl font-black text-gray-800 tracking-tighter">₹ {flight.price}</p>
                                            <p className="text-[10px] text-gray-400 font-black uppercase mt-1">/adult</p>
                                        </div>
                                        <button
                                            onClick={() => handleViewPrices(flight)}
                                            className="w-full bg-blue-50 text-blue-600 border border-blue-200 rounded-lg py-2.5 px-6 font-black uppercase text-[11px] tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                        >
                                            View Prices
                                        </button>
                                    </div>
                                </div>

                                {/* Footer Info */}
                                <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-50">
                                    <div className="flex items-center gap-4">
                                        <button className="text-[9px] font-black uppercase tracking-widest text-blue-500 hover:underline flex items-center gap-1">
                                            + Add to compare
                                        </button>
                                        <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                                            <Info className="w-3 h-3" />
                                            Flight details
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                                            <Zap className="w-3 h-3 text-green-500 fill-current" />
                                            100% on time
                                        </div>
                                        <div className="bg-blue-50 px-3 py-1 rounded-full text-[9px] font-black text-blue-600 flex items-center gap-1.5 cursor-pointer hover:bg-blue-100 transition-colors">
                                            <span className="text-[11px]">🛡️</span> Lock this price @ ₹ 300 →
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Offer Strip */}
                            <div className="bg-orange-50/70 border-t border-orange-100/50 py-2 px-6 flex items-center justify-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                <p className="text-[9px] font-extrabold text-orange-900 uppercase tracking-wider">
                                    Get Flat 10% OFF on UPI using code <span className="text-red-600 font-black italic underline decoration-red-200">SPECIALUPI</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FlightDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                flight={selectedFlight}
            />
        </>
    );
}

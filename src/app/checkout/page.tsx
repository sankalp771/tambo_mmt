"use client";

import { TamboProvider } from "@tambo-ai/react";
import { components, tools } from "@/lib/tambo";
import { MessageSquare, X, ChevronDown, ChevronRight, Info, Plus, Tag, Check, Minus, Users } from "lucide-react";
import { useState } from "react";
import {
    MessageInput,
    MessageInputSubmitButton,
    MessageInputTextarea,
    MessageInputToolbar
} from "@/components/tambo/message-input";
import { ScrollableMessageContainer } from "@/components/tambo/scrollable-message-container";
import {
    ThreadContent,
    ThreadContentMessages
} from "@/components/tambo/thread-content";

export default function CheckoutPage() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <TamboProvider
            apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
            components={components}
            tools={tools}
            tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
        >
            <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
                {/* Nav Header */}
                <nav className="bg-white px-8 py-3 flex items-center justify-between border-b sticky top-0 z-[70]">
                    <div className="flex items-center gap-1.5 cursor-pointer">
                        <div className="bg-white p-1 rounded-sm shadow-sm border border-gray-100">
                            <div className="w-5 h-5 bg-[#e01e26] rounded-sm flex items-center justify-center text-[10px] font-black text-white italic">my</div>
                        </div>
                        <div className="text-gray-900 text-xl font-black italic tracking-tighter">make <span className="text-blue-500">my</span> trip</div>
                    </div>

                    <div className="flex items-center gap-8">
                        {['Flights', 'Hotels', 'Trains', 'Buses', 'Cabs', 'Visa', 'Insurance'].map((item, i) => (
                            <div key={item} className={`flex flex-col items-center gap-1 cursor-pointer group`}>
                                <span className="text-xl group-hover:scale-110 transition-transform">{['✈️', '🏨', '🚆', '🚌', '🚕', '📄', '🛡️'][i]}</span>
                                <span className={`text-[10px] font-black uppercase tracking-widest ${i === 0 ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-400 group-hover:text-blue-400"}`}>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-green-50 px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-100 cursor-pointer">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white font-black">MY</div>
                            <div className="text-[10px] font-black text-green-800 uppercase leading-none">Login or <br />Create Account</div>
                        </div>
                    </div>
                </nav>

                {/* Global Banner / Header */}
                <div className="bg-[#051322] py-4 px-8">
                    <div className="max-w-[1240px] mx-auto flex items-center justify-between">
                        <h1 className="text-white text-xl font-black italic uppercase tracking-wider">Complete your booking</h1>
                        <div className="flex gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <span className="text-white border-b-2 border-white pb-1">Trip Summary</span>
                            <span>Travel Insurance</span>
                            <span>Traveller Details</span>
                            <span>Seats & Meals</span>
                            <span>Add-ons</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-[1240px] mx-auto px-4 py-8 flex gap-6">
                    {/* Left Section */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Flight Info Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-xl font-black italic uppercase">New Delhi → Mumbai</h2>
                                        <span className="bg-green-50 text-green-700 text-[10px] font-black px-2 py-0.5 rounded uppercase border border-green-100">Cancellation Fees Apply</span>
                                    </div>
                                    <button className="text-[10px] font-black text-blue-500 uppercase hover:underline">View Fare Rules</button>
                                </div>

                                <div className="flex items-center gap-3 mb-8">
                                    <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border border-orange-100">Saturday, Feb 7</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase">Non Stop • 2h 20m</span>
                                </div>

                                <div className="flex items-start gap-12">
                                    <div className="flex flex-col items-center gap-2 w-24">
                                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl shadow-inner uppercase">Akasa</div>
                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest text-center">Akasa Air <br />QP 1128</p>
                                        <span className="text-[8px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 font-black">Boeing 737</span>
                                    </div>

                                    <div className="flex-1 flex items-start gap-8">
                                        <div className="flex flex-col items-center">
                                            <span className="text-xl font-black italic">16:00</span>
                                            <div className="w-2 h-2 rounded-full border-2 border-gray-300 mt-2 bg-white"></div>
                                            <div className="w-[1px] h-20 bg-gray-100 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_4px,#e2e8f0_4px,#e2e8f0_8px)]"></div>
                                            <div className="w-2 h-2 rounded-full border-2 border-gray-300 bg-white"></div>
                                            <span className="text-xl font-black italic mt-2">18:20</span>
                                        </div>

                                        <div className="flex flex-col gap-10 pt-0.5">
                                            <div>
                                                <p className="text-sm font-black italic">New Delhi</p>
                                                <p className="text-[10px] text-gray-400 font-bold">Indira Gandhi International Airport, Terminal T1</p>
                                                <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest">2h 20m</p>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-sm font-black italic">Mumbai</p>
                                                <p className="text-[10px] text-gray-400 font-bold">Chhatrapati Shivaji International Airport, Terminal T1</p>
                                            </div>
                                        </div>

                                        <div className="ml-auto text-right">
                                            <div className="bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 mb-4 flex items-center gap-2">
                                                <span className="text-blue-600">🛡️</span>
                                                <span className="text-[10px] font-black text-blue-800 uppercase">Economy &gt; SAVER</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t flex items-center gap-8">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm">🧳</span>
                                        <p className="text-[10px] font-black uppercase text-gray-600">Cabin Baggage: <span className="text-gray-900 font-black">7 Kgs (1 piece only) / Adult</span></p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm">🧳</span>
                                        <p className="text-[10px] font-black uppercase text-gray-600">Check-In Baggage: <span className="text-gray-900 font-black">15 Kgs (1 piece only) / Adult</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50/50 p-4 border-t border-blue-100/50 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">🥤</span>
                                    <p className="text-[10px] font-bold text-[#0057ff] uppercase italic tracking-widest">Got excess baggage? Don't stress, buy extra check-in baggage allowance for DEL-BOM at fab rates!</p>
                                </div>
                                <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-b-2 border-blue-200">Add Baggage</button>
                            </div>
                        </div>

                        {/* Policy Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-black uppercase tracking-wider italic">Cancellation & Date Change Policy</h3>
                                <button className="text-[10px] font-black text-blue-500 uppercase hover:underline">View Policy</button>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-black text-xs border border-orange-100">QP</div>
                                <span className="text-xs font-black uppercase">DEL-BOM</span>
                            </div>

                            <div className="relative pt-6 pb-12">
                                <div className="flex justify-between text-[10px] font-black uppercase text-gray-400 mb-8">
                                    <span className="text-left">Cancellation Penalty :</span>
                                    <span className="font-black text-gray-900">₹ 5,349</span>
                                    <span className="font-black text-gray-900 ml-auto">₹ 6,273</span>
                                </div>

                                {/* The multi-color bar */}
                                <div className="h-2 w-full flex rounded-full overflow-hidden mb-2">
                                    <div className="bg-green-500 flex-1"></div>
                                    <div className="bg-yellow-500 flex-1"></div>
                                    <div className="bg-orange-500 flex-1"></div>
                                </div>

                                <div className="flex justify-between items-start text-[10px] font-black uppercase text-gray-400 mt-4 leading-none relative">
                                    <div className="text-left w-24">
                                        <span className="block mb-1 text-gray-900">Now</span>
                                        <div className="w-[1px] h-4 bg-gray-200 mx-auto"></div>
                                    </div>
                                    <div className="text-center w-24 absolute left-1/2 -translate-x-1/2">
                                        <span className="block mb-1 text-gray-900">7 Feb</span>
                                        <span className="text-gray-400 text-[8px]">14:00</span>
                                        <div className="w-[1px] h-4 bg-gray-200 mx-auto"></div>
                                    </div>
                                    <div className="text-right w-24">
                                        <span className="block mb-1 text-gray-900">7 Feb</span>
                                        <span className="text-gray-400 text-[8px]">16:00</span>
                                        <div className="w-[1px] h-4 bg-gray-200 mx-auto mr-0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fare Upgrade Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-sm font-black uppercase tracking-wider italic mb-8">Get more benefits by upgrading your fare</h3>

                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "Your Selection", price: "6,500", selected: true, benefits: [
                                            { label: "Flight delay protection benefit not included", icon: "minus", active: false },
                                            { label: "Seats Chargeable", icon: "minus", active: false },
                                            { label: "Priority Check-in not included", icon: "minus", active: false },
                                            { label: "Cabin bag 7 Kgs + Check-in 15 Kgs", icon: "check", active: true },
                                        ]
                                    },
                                    {
                                        title: "MMT Regular", price: "7,252", promo: "MMT TRAVEL COUPON APPLICABLE", benefits: [
                                            { label: "Flight Delay Protection included", icon: "check", active: true },
                                            { label: "Seats worth ₹ 473 included", icon: "check", active: true },
                                            { label: "Priority Check-in not included", icon: "minus", active: false },
                                            { label: "Cabin bag 7 Kgs + Check-in 15 Kgs", icon: "check", active: true },
                                        ]
                                    },
                                    {
                                        title: "MMT Premium", price: "8,552", promo: "MMT TRAVEL COUPON APPLICABLE", benefits: [
                                            { label: "Flight Delay Protection included", icon: "check", active: true },
                                            { label: "Seats worth ₹ 473 included", icon: "check", active: true },
                                            { label: "Priority Check-in worth ₹ 1,300 included", icon: "check", active: true },
                                            { label: "Cabin bag 7 Kgs + Check-in 15 Kgs", icon: "check", active: true },
                                        ]
                                    }
                                ].map((card, i) => (
                                    <div key={i} className={`border-2 rounded-xl flex flex-col p-5 transition-all ${card.selected ? "border-blue-400 bg-blue-50/10" : "border-gray-50 hover:bg-gray-50/50"}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${card.selected ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                                                {card.selected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-800">{card.title}</p>
                                                <p className="text-lg font-black italic">₹ {card.price}</p>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex flex-col gap-4 mb-6">
                                            {card.benefits.map((b, bi) => (
                                                <div key={bi} className="flex items-start gap-2">
                                                    {b.icon === "check" ? (
                                                        <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    ) : (
                                                        <Minus className="w-3.5 h-3.5 text-orange-400 mt-0.5 flex-shrink-0" />
                                                    )}
                                                    <span className={`text-[10px] font-bold leading-tight ${b.active ? "text-gray-900" : "text-gray-400"}`}>{b.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {card.promo && (
                                            <div className="mt-auto bg-green-50 border border-green-100 rounded p-1.5 flex items-center gap-2">
                                                <Tag className="w-3 h-3 text-green-600" />
                                                <span className="text-[8px] font-black text-green-700 tracking-tighter">{card.promo}</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 bg-red-50 border border-red-100 rounded-lg p-3 flex items-center gap-3">
                                <div className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-white text-[10px]">✓</div>
                                <p className="text-[10px] font-bold text-red-900 opacity-80">Just a click for a better trip. Upgrade now!</p>
                            </div>
                        </div>

                        {/* Free Date Change Add-on */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-sm font-black uppercase tracking-wider italic mb-6">Unsure of your travel plans? Get full flexibility with our special add-ons</h3>
                            <div className="bg-blue-50/30 border border-blue-100 rounded-xl p-6 flex items-center justify-between group cursor-pointer hover:bg-blue-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white group-hover:border-blue-500">
                                        <div className="w-3 h-3 rounded-full bg-transparent"></div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black italic">Free Date Change</p>
                                        <p className="text-[10px] text-blue-600 font-bold mt-1">
                                            Save up to <span className="font-black">₹ 3349</span> on date change charges up to 2 hours before departure. You just pay the fare difference! <span className="underline cursor-pointer">View T&C</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-lg font-black italic">₹ 99</span>
                                </div>
                            </div>
                        </div>

                        {/* Flyer Exclusive Deal - Hotels */}
                        <div className="bg-[#fff9f0] border border-orange-100 rounded-2xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 bg-[#e01e26] text-white text-[9px] font-black italic px-3 py-1.5 rounded-br-xl uppercase tracking-widest flex items-center gap-1.5">
                                <div className="w-3 h-3 bg-white rounded-sm flex items-center justify-center text-[7px] text-[#e01e26] font-black">my</div>
                                Flyer Exclusive Deal
                            </div>
                            <h3 className="text-sm font-black uppercase tracking-wider italic mt-4 mb-6">Book a Flight & unlock these offers</h3>

                            <div className="flex gap-4">
                                <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4">
                                    <p className="text-[10px] font-black text-blue-500 uppercase flex items-center gap-2 mb-4">
                                        <Check className="w-3 h-3" /> Exclusive rates on Select Properties in Mumbai
                                    </p>
                                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                        {[
                                            { name: "Bloom Hub WEH A...", price: "7,121", old: "8,990", rating: "4.5" },
                                            { name: "Bloom Hotel - BKC...", price: "12,040", old: "15,280", rating: "4.8" },
                                            { name: "The Empresa Hotel", price: "17,078", old: "22,471", rating: "4.2" }
                                        ].map((hotel, i) => (
                                            <div key={i} className="min-w-[140px] flex flex-col gap-2 group cursor-pointer">
                                                <div className="w-full h-20 bg-gray-100 rounded-lg overflow-hidden relative">
                                                    <div className="absolute top-1 left-1 bg-black/60 text-white text-[8px] px-1 rounded flex items-center gap-0.5">⭐ {hotel.rating}</div>
                                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-110 transition-transform"></div>
                                                </div>
                                                <p className="text-[9px] font-black truncate">{hotel.name}</p>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-black">₹ {hotel.price}</span>
                                                    <span className="text-[9px] text-gray-400 line-through font-bold">₹ {hotel.old}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-24 bg-white border-2 border-dashed border-orange-200 rounded-xl flex flex-col items-center justify-center text-center p-3 relative">
                                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#fff9f0] rounded-full flex items-center justify-center text-orange-400 font-bold">+</div>
                                    <p className="text-[10px] font-black italic text-gray-500 uppercase leading-snug">Extra 12% off using code <br /><span className="text-blue-600 font-black">BOOKSTAYS</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Important Information */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-8">
                            <h3 className="text-lg font-black uppercase tracking-tighter italic">Important Information</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0">🛡️</div>
                                    <div>
                                        <p className="text-[11px] font-black uppercase mb-2">Check travel guidelines and baggage information below:</p>
                                        <ul className="text-[10px] font-bold text-gray-500 list-disc ml-4 space-y-1.5">
                                            <li>Carry no more than 1 check-in baggage and 1 hand baggage per passenger. If violated, airline may levy extra charges.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0">🛡️</div>
                                    <div>
                                        <p className="text-[11px] font-black uppercase mb-2">Availability of Boarding Pass:</p>
                                        <ul className="text-[10px] font-bold text-gray-500 list-disc ml-4 space-y-1.5">
                                            <li>Once web check-in is completed, your boarding pass will be available within 6 hours of your flight departure.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0">🛡️</div>
                                    <div>
                                        <p className="text-[11px] font-black uppercase mb-2">Unaccompanied Minors Travelling:</p>
                                        <ul className="text-[10px] font-bold text-gray-500 list-disc ml-4 space-y-1.5">
                                            <li>An unaccompanied minor usually refers to a child traveling without an adult aged 18 or older.</li>
                                            <li>Please check with the airline for their rules and regulations regarding unaccompanied minors, as these can differ between airlines.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trip Secure */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="text-lg font-black italic uppercase tracking-tighter">Trip Secure</h3>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black text-gray-400">digit</span>
                                    <div className="w-8 h-4 bg-blue-100 rounded relative">
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center text-[6px] text-white">^</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-lg font-black italic mb-8">₹ 349<span className="text-[10px] font-black text-gray-400 uppercase italic ml-2">/Traveller (18% GST Included)</span></p>

                                <div className="grid grid-cols-4 gap-4 mb-8">
                                    {[
                                        { label: "24x7 support", desc: "Baggage Assistance", icon: "📞" },
                                        { label: "Flat ₹ 50,000", desc: "Personal Accident", icon: "🏥" },
                                        { label: "Flat ₹ 2,000", desc: "Loss of Checked-In Baggage", icon: "🧳" },
                                    ].map((ben, i) => (
                                        <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 flex gap-3 shadow-sm">
                                            <span className="text-xl mt-1">{ben.icon}</span>
                                            <div>
                                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{ben.label}</p>
                                                <p className="text-[9px] font-black text-gray-800 uppercase italic leading-snug">{ben.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex items-center justify-center flex-col border border-blue-100 rounded-xl bg-blue-50/30 group cursor-pointer">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest group-hover:underline">View All Benefits →</span>
                                    </div>
                                </div>

                                <div className="bg-[#fff9f0] p-4 rounded-xl border border-orange-100 mb-8">
                                    <p className="text-[10px] font-black text-orange-900 italic uppercase">Recommended for your travel within India</p>
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="radio" name="secure" className="w-5 h-5 border-2 border-gray-300 text-blue-600 focus:ring-blue-500" />
                                        <span className="text-sm font-black italic group-hover:text-blue-600">Yes, Secure my trip.</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="radio" name="secure" className="w-5 h-5 border-2 border-gray-300 text-blue-600 focus:ring-blue-500" />
                                        <span className="text-sm font-black italic opacity-50 group-hover:opacity-100">No, I will book without trip secure.</span>
                                    </label>
                                </div>

                                {/* Testimonials */}
                                <div className="grid grid-cols-2 gap-4 mt-8 opacity-40 italic">
                                    {[
                                        { text: "Your willingness to go above and beyond what was expected made a significant difference...", name: "Amit Paul" },
                                        { text: "Wow, the claim settlement was incredibly fast. Thank you so much! Such a smooth experience...", name: "Prateek Keshari" }
                                    ].map((t, i) => (
                                        <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                            <p className="text-[10px] font-bold text-gray-500 leading-relaxed">"{t.text} <span className="text-blue-500">Read More</span>"</p>
                                            <p className="text-[10px] font-black text-gray-900 mt-2">~ {t.name}</p>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-[8px] font-bold text-gray-400 mt-6 uppercase leading-relaxed text-center italic">
                                    Trip Secure is non-refundable. By selecting it, I confirm all travelers are Indian nationals, aged 6 months to 90 years, and accept the <span className="text-blue-500 underline">T&Cs</span>
                                </p>
                            </div>
                        </div>

                        {/* Priority Service Add-on */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                            <div className="flex items-center gap-6">
                                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 text-xl font-black italic border border-orange-100 uppercase">Akasa</div>
                                <div>
                                    <p className="text-lg font-black italic">Akasa Priority @ Just ₹ 1,300</p>
                                    <p className="text-[10px] text-gray-500 font-bold mt-1 italic">Skip queues, get your bags first, and board early with Akasa Priority.</p>
                                    <div className="flex items-center gap-4 mt-3">
                                        <div className="flex gap-1.5 items-center">
                                            <span className="text-xs">💼</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Priority Check-in</span>
                                        </div>
                                        <div className="flex gap-1.5 items-center">
                                            <span className="text-xs">🧳</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Priority Bag Service</span>
                                        </div>
                                        <div className="flex gap-1.5 items-center">
                                            <span className="text-xs">🛫</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Priority Boarding</span>
                                        </div>
                                        <span className="text-[11px] font-black">= ₹ 1,300</span>
                                    </div>
                                </div>
                            </div>
                            <button className="border-2 border-blue-400 text-blue-500 rounded-full px-6 py-2 font-black uppercase text-[10px] tracking-wider hover:bg-blue-50 flex items-center gap-2">
                                <Plus className="w-4 h-4" /> ADD
                            </button>
                        </div>

                        {/* Traveller Details */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b">
                                <h3 className="text-xl font-black italic tracking-tighter uppercase">Traveller Details</h3>
                            </div>

                            <div className="p-6 space-y-8">
                                {/* Login Row */}
                                <div className="bg-blue-50/50 rounded-xl p-4 flex items-center justify-between group cursor-pointer border border-blue-100">
                                    <div className="flex items-center gap-4">
                                        <Users className="w-6 h-6 text-blue-500" />
                                        <p className="text-[11px] font-black uppercase tracking-tight italic">Log in to view your <span className="text-blue-600 font-black">saved traveller list</span>, unlock amazing deals & much more!</p>
                                    </div>
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest group-hover:underline">Login Now</span>
                                </div>

                                {/* Adult Section */}
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                                                <Users className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <p className="text-sm font-black italic uppercase tracking-wider">ADULT (12 yrs+)</p>
                                        </div>
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">0/1 added</span>
                                    </div>

                                    <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-3 mb-6">
                                        <p className="text-[10px] font-black text-orange-900 italic"><span className="font-black">Important:</span> Enter name as mentioned on your passport or Government approved IDs.</p>
                                    </div>

                                    <div className="py-12 flex flex-col items-center justify-center gap-6 border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/20">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm border border-gray-100">🚫</div>
                                        <p className="text-sm font-black uppercase italic tracking-widest text-gray-400">You have not added any adults to the list</p>
                                        <button className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest hover:underline">
                                            <Plus className="w-4 h-4" /> Add New Adult
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Booking Details / Contacts */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b">
                                <h3 className="text-sm font-black uppercase tracking-wider italic">Booking details will be sent to</h3>
                            </div>

                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Country Code</label>
                                        <div className="border rounded-xl p-3 flex justify-between items-center bg-gray-50/50">
                                            <span className="text-sm font-black italic uppercase">India(91)</span>
                                            <ChevronDown className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Mobile No</label>
                                        <input type="text" placeholder="Mobile No" className="w-full border rounded-xl p-3 text-sm font-black italic uppercase focus:outline-none focus:border-blue-400" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 mb-8">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
                                    <input type="text" placeholder="Email" className="w-full border rounded-xl p-3 text-sm font-black italic uppercase focus:outline-none focus:border-blue-400" />
                                </div>

                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center transition-colors group-hover:border-blue-500">
                                        <div className="w-2.5 h-2.5 bg-transparent rounded-sm"></div>
                                    </div>
                                    <span className="text-sm font-black italic uppercase">I have a <span className="font-black italic text-gray-900 underline underline-offset-4 decoration-gray-200 decoration-4">GST number</span> (Optional)</span>
                                </label>
                            </div>
                        </div>

                        {/* State Selection */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
                            <div>
                                <h3 className="text-sm font-black italic tracking-tight uppercase inline-flex items-center gap-2">
                                    Your State <span className="text-[9px] font-bold text-gray-400 normal-case">(Required for GST purpose on your tax invoice. You can edit this anytime later in your profile section.)</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Select the State</label>
                                <div className="border rounded-xl p-4 flex justify-between items-center bg-gray-50/50 w-72">
                                    <span className="text-sm font-black italic uppercase">Maharashtra</span>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>

                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center transition-colors group-hover:border-blue-500">
                                    <div className="w-2.5 h-2.5 bg-transparent rounded-sm"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-400 italic">Confirm and save billing details to your profile</span>
                            </label>
                        </div>

                        {/* Still Unsure / Lock Price */}
                        <div className="bg-blue-50/30 border-2 border-dashed border-blue-200 rounded-2xl p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm border border-blue-100">
                                    <Info className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-black italic">Still unsure about this trip? <span className="text-blue-600 font-black">Lock this price!</span></p>
                                </div>
                            </div>
                            <button className="bg-white border-2 border-blue-500 text-blue-500 rounded-full px-8 py-2.5 font-black uppercase text-[11px] tracking-widest hover:bg-blue-50 transition-colors shadow-sm">
                                Lock Now
                            </button>
                        </div>

                        {/* Final Continue Button & Collapse Sections */}
                        <div className="flex flex-col gap-4">
                            <button className="w-44 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full py-4 px-10 font-black uppercase text-sm tracking-widest shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transition-all">
                                Continue
                            </button>

                            {["Seats & Meals", "Cabs"].map((section) => (
                                <div key={section} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex justify-between items-center cursor-pointer group hover:bg-gray-50 transition-colors">
                                    <h3 className="text-xl font-black italic tracking-tighter uppercase opacity-60 group-hover:opacity-100">{section}</h3>
                                    <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition-colors" />
                                </div>
                            ))}

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex justify-between items-center cursor-pointer group hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-xl font-black italic tracking-tighter uppercase opacity-60 group-hover:opacity-100">Add ons</h3>
                                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic pt-1">Flight Delay Insurance</span>
                                </div>
                                <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-[340px] flex flex-col gap-6">
                        {/* Fare Summary */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                            <div className="p-6">
                                <h3 className="text-xl font-black italic tracking-tighter mb-6">Fare Summary</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-2">
                                            <Plus className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                                            <span className="text-xs font-black text-gray-600 uppercase tracking-widest">Base Fare</span>
                                        </div>
                                        <span className="text-xs font-black tabular-nums">₹ 5,612</span>
                                    </div>
                                    <div className="flex items-center justify-between group cursor-pointer mb-2">
                                        <div className="flex items-center gap-2">
                                            <Plus className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                                            <span className="text-xs font-black text-gray-600 uppercase tracking-widest">Taxes and Surcharges</span>
                                        </div>
                                        <span className="text-xs font-black tabular-nums">₹ 888</span>
                                    </div>
                                    <div className="flex items-center justify-between group cursor-pointer pt-4 border-t border-gray-50 mb-2">
                                        <div className="flex items-center gap-2">
                                            <Plus className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                                            <span className="text-xs font-black text-gray-600 uppercase tracking-widest">Discounts</span>
                                        </div>
                                        <span className="text-xs font-black tabular-nums text-green-600">- ₹ 227</span>
                                    </div>

                                    <div className="flex items-center justify-between py-5 border-t-2 border-dashed border-gray-100 mt-2">
                                        <span className="text-lg font-black italic uppercase tracking-wider">Total Amount</span>
                                        <span className="text-xl font-black italic tabular-nums">₹ 6,273</span>
                                    </div>
                                </div>

                                <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-2">
                                    <p className="text-[10px] font-bold text-gray-600 leading-relaxed italic">The airfare has Increased by ₹ 859. Please review <span className="font-black text-gray-900 border-b border-gray-900">baggage allowance</span>, cancellation policies & other ticket inclusions</p>
                                </div>
                            </div>

                            {/* Coupons Section */}
                            <div className="p-6 bg-gray-50/50 border-t">
                                <h4 className="text-[11px] font-black italic uppercase tracking-widest mb-4">Coupons and Offers</h4>
                                <div className="relative mb-4">
                                    <input
                                        type="text"
                                        placeholder="Enter coupon code"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-blue-400"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-blue-500 uppercase cursor-pointer hover:underline">Apply</span>
                                </div>

                                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                                    <button className="bg-blue-50 border border-blue-200 text-blue-600 rounded-md py-2 text-[10px] font-black uppercase italic shadow-sm">All</button>
                                    <button className="bg-white border text-gray-400 rounded-md py-2 text-[10px] font-black uppercase italic">Bank</button>
                                    <button className="bg-white border text-gray-400 rounded-md py-2 text-[10px] font-black uppercase italic">Add ons</button>
                                </div>

                                <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-1 scrollbar-hide">
                                    <div className="bg-white border-2 border-[#0057ff] rounded-xl p-4 flex flex-col gap-3 shadow-md relative group">
                                        <div className="absolute -left-0.5 top-0 bottom-0 w-1 bg-[#0057ff] rounded-l-xl"></div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-green-100 p-1.5 rounded-md">
                                                    <Tag className="w-3.5 h-3.5 text-green-600" />
                                                </div>
                                                <span className="text-[11px] font-black uppercase tracking-tighter">MMTEXTRA</span>
                                            </div>
                                            <span className="text-[11px] font-black tabular-nums">₹ 227 off</span>
                                        </div>
                                        <p className="text-[9px] font-bold text-blue-600 leading-relaxed">Congratulations! Promo Discount of ₹ 227 applied successfully.</p>
                                        <button className="mt-2 text-right text-[10px] font-black text-[#0057ff] uppercase tracking-wider group-hover:underline">Remove</button>
                                    </div>

                                    {[
                                        { code: "FREEMEAL", desc: "Use this coupon and get a Free Meal on your flight booking!", off: "up to ₹ 500 off" },
                                        { code: "MMTIWOW", desc: "Get up to 700 Instant discount on your IDFC FIRST WOW Black credit card.", off: "₹ 500 off" },
                                        { code: "VISAFREESEAT", desc: "Get ₹ 290 instant discount and a free seat with VISA SIGNATURE Cards", off: "₹ 290 off" }
                                    ].map((coupon, i) => (
                                        <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col gap-3 shadow-sm group hover:border-gray-200">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="bg-gray-50 p-1.5 rounded-md border border-gray-100">
                                                        <Tag className="w-3.5 h-3.5 text-green-600" />
                                                    </div>
                                                    <span className="text-[11px] font-black uppercase tracking-tighter text-gray-800">{coupon.code}</span>
                                                </div>
                                                <span className="text-[10px] font-black tabular-nums text-gray-800">{coupon.off}</span>
                                            </div>
                                            <p className="text-[9px] font-bold text-gray-400 leading-relaxed">{coupon.desc}</p>
                                            <button className="mt-2 text-right text-[10px] font-black text-blue-500 uppercase tracking-widest group-hover:underline">Apply</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Chat Widget */}
                <div className="fixed bottom-8 right-8 z-[100]">
                    {!isChatOpen ? (
                        <button
                            onClick={() => setIsChatOpen(true)}
                            className="group bg-white border border-blue-100 text-blue-600 p-1.5 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white transition-all flex items-center relative overflow-hidden"
                        >
                            <div className="bg-blue-600 text-white p-3 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-colors">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <span className="font-black italic uppercase text-sm mx-4 mr-6">Checkout AI Helper</span>
                        </button>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-[420px] h-[640px] flex flex-col overflow-hidden border border-blue-100 transform animate-in fade-in slide-in-from-bottom-5 duration-300">
                            <div className="bg-gradient-to-r from-[#051322] to-[#1a3a5a] p-5 text-white flex justify-between items-center relative overflow-hidden shadow-lg">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                                            <div className="text-[#008cff] font-black italic text-xl">my</div>
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#051322] rounded-full shadow-sm"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold italic uppercase tracking-wider text-xs">Checkout Assistant</h3>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_green]"></div>
                                            <p className="text-[9px] uppercase font-black text-blue-300 tracking-widest">Always Online</p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsChatOpen(false)}
                                    className="hover:bg-white/10 p-2 rounded-xl transition-all hover:scale-110 active:scale-90 relative z-10"
                                >
                                    <X className="w-5 h-5 text-white/80" />
                                </button>
                            </div>

                            <div className="flex-1 bg-white flex flex-col min-h-0 relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white pointer-events-none"></div>
                                <ScrollableMessageContainer className="flex-1 p-6 relative z-10">
                                    <ThreadContent variant="default">
                                        <div className="mb-6 p-5 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-xs text-white leading-relaxed font-bold shadow-md shadow-blue-100 relative overflow-hidden group">
                                            👋 <b>Ready to finalize your trip?</b> I can help you find the best coupon code or explain the cancellation policy. Just ask!
                                        </div>
                                        <ThreadContentMessages />
                                    </ThreadContent>
                                </ScrollableMessageContainer>
                            </div>

                            <div className="p-4 border-t bg-white relative z-10">
                                <MessageInput variant="bordered">
                                    <MessageInputTextarea
                                        placeholder="Ask about fare summary or coupons..."
                                        className="text-sm min-h-[44px] !bg-gray-50 border-gray-100 focus:border-blue-400 py-3 px-4 rounded-xl"
                                    />
                                    <MessageInputToolbar>
                                        <div className="flex-1"></div>
                                        <MessageInputSubmitButton className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl p-2.5 transition-all shadow-md shadow-blue-200" />
                                    </MessageInputToolbar>
                                </MessageInput>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </TamboProvider>
    );
}

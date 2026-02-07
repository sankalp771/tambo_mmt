"use client";

import { TamboProvider } from "@tambo-ai/react";
import { components, tools } from "@/lib/tambo";
import { MessageSquare, X, ChevronDown, ChevronRight, Info, Plus, Tag, Check, Minus, Users, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
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

export default function SeatsPage() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

    const toggleSeat = (id: string) => {
        if (selectedSeats.includes(id)) {
            setSelectedSeats(selectedSeats.filter(s => s !== id));
        } else {
            setSelectedSeats([...selectedSeats, id]);
        }
    };

    return (
        <TamboProvider
            apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
            components={components}
            tools={tools}
            tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
        >
            <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
                <style jsx global>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #d1d5db;
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #9ca3af;
                    }
                `}</style>

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
                            <span className="text-white border-b-2 border-white pb-1">Seats & Meals</span>
                            <span>Add-ons</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-[1240px] mx-auto px-4 py-8 flex gap-6 items-start">
                    {/* Left Section */}
                    <div className="flex-1 flex flex-col gap-4">
                        {/* Collapsed Summaries */}
                        <Link href="/checkout" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex justify-between items-center group cursor-pointer hover:bg-gray-50 transition-colors">
                            <div>
                                <h3 className="text-sm font-black italic uppercase tracking-wider">Trip Summary</h3>
                                <p className="text-[10px] font-bold text-gray-400 mt-1"><span className="text-gray-900">New Delhi → Mumbai</span> Saturday, Feb 7 • Non Stop • 2h 20m</p>
                            </div>
                            <ChevronDown className="w-5 h-5 text-gray-300 group-hover:text-blue-500" />
                        </Link>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex justify-between items-center group">
                            <div>
                                <h3 className="text-sm font-black italic uppercase tracking-wider">Traveller Details</h3>
                                <p className="text-[10px] font-bold text-gray-400 mt-1">Sankalp Pandey</p>
                            </div>
                            <div className="text-blue-500 cursor-pointer hover:scale-110 transition-transform">✏️</div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex justify-between items-center group">
                            <div>
                                <h3 className="text-sm font-black italic uppercase tracking-wider">Your State</h3>
                                <p className="text-[10px] font-bold text-gray-400 mt-1 italic uppercase">Maharashtra</p>
                            </div>
                            <div className="text-blue-500 cursor-pointer hover:scale-110 transition-transform">✏️</div>
                        </div>

                        {/* Seats Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                            <div className="p-6 border-b flex items-center gap-3">
                                <span className="text-xl">💺</span>
                                <h3 className="text-xl font-black italic uppercase tracking-tighter">Seats</h3>
                            </div>

                            <div className="p-6">
                                <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-center gap-3 mb-8 shadow-sm">
                                    <Tag className="w-4 h-4 text-green-600" />
                                    <p className="text-[10px] font-black text-green-800 italic uppercase">Use code <span className="font-black">FREESEAT</span> to get a free seat (up to 350/passenger)</p>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-8 border-b pb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-black italic uppercase text-gray-800">New Delhi</span>
                                            <ArrowRight className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm font-black italic uppercase text-gray-800">Mumbai</span>
                                        </div>
                                        <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest italic">0 of 1 Seat(s) Selected</span>
                                    </div>

                                    {/* Plane Layout Scrollable Rectangle Container */}
                                    <div className="relative bg-[#d7e9f7] rounded-3xl p-8 border border-blue-100 shadow-inner">
                                        <div className="w-full h-[600px] overflow-y-auto custom-scrollbar bg-[#d7e9f7] rounded-2xl relative flex flex-col items-center">

                                            {/* Plane Nose */}
                                            <div className="w-80 h-40 bg-white rounded-t-[100%] shadow-lg mt-10 flex flex-col items-center justify-center pt-10 flex-shrink-0">
                                                <div className="w-24 h-4 bg-gray-100 rounded-full mb-4"></div>
                                                <div className="flex gap-4 opacity-10">
                                                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                                                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Main Cabin */}
                                            <div className="w-80 bg-white shadow-2xl flex flex-col items-center py-10 relative flex-shrink-0">
                                                {/* Wing Background (Decorative) */}
                                                <div className="absolute top-[300px] -left-[300px] w-[300px] h-[400px] bg-white rounded-l-[100px] -z-10 shadow-lg transform -skew-y-12 border-r-2 border-gray-100"></div>
                                                <div className="absolute top-[300px] -right-[300px] w-[300px] h-[400px] bg-white rounded-r-[100px] -z-10 shadow-lg transform skew-y-12 border-l-2 border-gray-100"></div>

                                                {/* Toilet Icons */}
                                                <div className="flex justify-between w-full px-12 mb-10 opacity-40">
                                                    <div className="flex gap-4">🚽 🍽️</div>
                                                    <div className="flex gap-4">🚽 🍽️</div>
                                                </div>

                                                {/* Exit Row Marker */}
                                                <div className="w-full flex justify-between items-center px-4 mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1 h-8 bg-red-500"></div>
                                                        <p className="text-[10px] font-black text-red-500 uppercase italic">Exit</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-[10px] font-black text-red-500 uppercase italic">Exit</p>
                                                        <div className="w-1 h-8 bg-red-500"></div>
                                                    </div>
                                                </div>

                                                {/* Seat Grid */}
                                                <div className="grid grid-cols-7 gap-x-2 gap-y-3 px-8">
                                                    {['A', 'B', 'C', '', 'D', 'E', 'F'].map((col, i) => (
                                                        <div key={i} className="text-[10px] font-black text-gray-400 text-center mb-4">{col}</div>
                                                    ))}

                                                    {Array.from({ length: 40 }).map((_, row) => (
                                                        <React.Fragment key={row}>
                                                            {[0, 1, 2].map(seat => {
                                                                const id = `${row + 1}${['A', 'B', 'C'][seat]}`;
                                                                const isSelected = selectedSeats.includes(id);
                                                                const isFree = row < 5;
                                                                const isExit = row === 11 || row === 12;

                                                                return (
                                                                    <div
                                                                        key={id}
                                                                        onClick={() => toggleSeat(id)}
                                                                        className={`w-8 h-8 rounded border-2 cursor-pointer transition-all flex items-center justify-center text-[8px] font-black
                                                                            ${isSelected ? "bg-blue-500 border-blue-600 text-white" : "border-gray-200 hover:border-blue-300"}
                                                                            ${isFree && !isSelected ? "bg-emerald-50 border-emerald-200" : ""}
                                                                            ${isExit ? "border-red-200" : ""}
                                                                        `}
                                                                    >
                                                                        {isFree && !isSelected ? "₹0" : isSelected ? <Check className="w-4 h-4" /> : ""}
                                                                    </div>
                                                                );
                                                            })}

                                                            <div className="text-[10px] font-black text-gray-300 flex items-center justify-center">{row + 1}</div>

                                                            {[0, 1, 2].map(seat => {
                                                                const id = `${row + 1}${['D', 'E', 'F'][seat]}`;
                                                                const isSelected = selectedSeats.includes(id);
                                                                const isPremium = row >= 5 && row < 15;
                                                                return (
                                                                    <div
                                                                        key={id}
                                                                        onClick={() => toggleSeat(id)}
                                                                        className={`w-8 h-8 rounded border-2 cursor-pointer transition-all flex items-center justify-center text-[8px] font-black
                                                                            ${isSelected ? "bg-blue-500 border-blue-600 text-white" : "border-gray-200 hover:border-blue-300"}
                                                                            ${isPremium && !isSelected ? "bg-indigo-50 border-indigo-200" : ""}
                                                                        `}
                                                                    >
                                                                        {isPremium && !isSelected ? "₹450" : isSelected ? <Check className="w-4 h-4" /> : ""}
                                                                    </div>
                                                                );
                                                            })}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Legend (Stays fixed relative to scroll container) */}
                                        <div className="absolute bottom-6 left-6 p-5 bg-white shadow-2xl rounded-2xl flex flex-col gap-3 border border-white/50 z-30">
                                            {[
                                                { label: "Free", color: "bg-emerald-400" },
                                                { label: "₹ 300-436", color: "bg-blue-100" },
                                                { label: "₹ 462-1500", color: "bg-indigo-100" },
                                                { label: "Exit Row Seats", color: "bg-white border-2 border-red-500" },
                                                { label: "Non Reclining", color: "bg-white border-2 border-gray-400" },
                                                { label: "Extra Legroom", color: "bg-gray-100 flex items-center justify-center font-black", text: "XL" },
                                            ].map((leg, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded ${leg.color} text-[7px] flex items-center justify-center`}>{leg.text}</div>
                                                    <span className="text-[9px] font-black text-gray-600 uppercase italic tracking-widest">{leg.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination Buttons */}
                        <div className="flex items-center justify-between py-6">
                            <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full py-4 px-16 font-black uppercase text-sm tracking-widest shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all">
                                Continue
                            </button>
                            <button className="text-[11px] font-black text-blue-500 uppercase tracking-widest hover:underline px-8 italic">
                                Skip to cabs
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Unified Sidebar */}
                    <div className="w-[340px] sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto pr-3 custom-scrollbar h-fit">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                            {/* Fare Summary Part */}
                            <div className="p-6">
                                <h3 className="text-xl font-black italic tracking-tighter mb-6">Fare Summary</h3>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { label: "Base Fare", val: "5,216" },
                                        { label: "Taxes and Surcharges", val: "843" },
                                        { label: "Other Services", val: "228" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Plus className="w-3.5 h-3.5 text-gray-300" />
                                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none pt-0.5">{item.label}</span>
                                            </div>
                                            <span className="text-xs font-black tabular-nums">₹ {item.val}</span>
                                        </div>
                                    ))}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mb-2">
                                        <div className="flex items-center gap-2">
                                            <Plus className="w-3.5 h-3.5 text-gray-300" />
                                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none pt-0.5">Discounts</span>
                                        </div>
                                        <span className="text-xs font-black tabular-nums text-green-600">- ₹ 227</span>
                                    </div>

                                    <div className="flex items-center justify-between py-5 border-t-2 border-dashed border-gray-100 mt-2">
                                        <span className="text-lg font-black italic uppercase tracking-wider">Total Amount</span>
                                        <span className="text-xl font-black italic tabular-nums">₹ 6,408</span>
                                    </div>
                                </div>
                            </div>

                            {/* Coupons Part */}
                            <div className="p-6 bg-gray-50/50 border-t">
                                <h4 className="text-[11px] font-black italic uppercase tracking-widest mb-4">Coupons and Offers</h4>
                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        placeholder="Enter coupon code"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-blue-400 shadow-sm"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-blue-500 uppercase cursor-pointer">Apply</span>
                                </div>

                                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                                    {['All', 'Bank', 'Add ons'].map(cat => (
                                        <button key={cat} className={`border rounded-md py-2 text-[10px] font-black uppercase italic transition-all ${cat === 'All' ? 'bg-white border-blue-200 text-blue-600 shadow-sm' : 'bg-transparent text-gray-400 border-gray-100'}`}>{cat}</button>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="bg-white border border-blue-100 rounded-xl p-4 flex flex-col gap-3 shadow-md relative group">
                                        <div className="absolute -left-0.5 top-0 bottom-0 w-1 bg-blue-500 rounded-l-xl"></div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Tag className="w-4 h-4 text-green-500" />
                                                <span className="text-[11px] font-black uppercase tracking-tighter text-[#051322]">MMTEXTRA</span>
                                            </div>
                                            <span className="text-[10px] font-black text-green-600">Applied</span>
                                        </div>
                                        <p className="text-[9px] font-bold text-blue-600 italic">Congratulations! Promo Discount of ₹ 227 applied successfully.</p>
                                    </div>

                                    <div className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col gap-3 shadow-sm opacity-50">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2">
                                                <Tag className="w-4 h-4 text-gray-400" />
                                                <span className="text-[11px] font-black uppercase tracking-tighter text-gray-400">MMTTRAVEL</span>
                                                <div className="w-3 h-3 text-gray-400">🔒</div>
                                            </div>
                                        </div>
                                        <p className="text-[9px] font-bold text-gray-400 leading-relaxed italic">Log in up to 15% OFF for new users only</p>
                                        <button className="mt-1 w-full bg-blue-500 text-white rounded-lg py-2.5 font-black uppercase text-[9px] tracking-wider shadow-md opacity-80 backdrop-blur-sm">Unlock Coupon</button>
                                    </div>
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
                            <span className="font-black italic uppercase text-sm mx-4 mr-6">Seats AI Helper</span>
                        </button>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-[420px] h-[640px] flex flex-col overflow-hidden border border-blue-100 transform animate-in fade-in slide-in-from-bottom-5 duration-300">
                            <div className="bg-gradient-to-r from-[#051322] to-[#1a3a5a] p-5 text-white flex justify-between items-center relative overflow-hidden shadow-lg">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-white/20 text-[#008cff] font-black italic text-xl">my</div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#051322] rounded-full shadow-sm"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold italic uppercase tracking-wider text-xs">Seats Assistant</h3>
                                        <div className="flex items-center gap-1.5 font-black text-[9px] uppercase"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Bot</div>
                                    </div>
                                </div>
                                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-all hover:scale-110 active:scale-90 relative z-10"><X className="w-5 h-5 text-white/80" /></button>
                            </div>
                            <div className="flex-1 bg-white flex flex-col min-h-0 relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white pointer-events-none"></div>
                                <ScrollableMessageContainer className="flex-1 p-6 relative z-10">
                                    <ThreadContent variant="default">
                                        <div className="mb-6 p-5 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-xs text-white leading-relaxed font-bold shadow-md shadow-blue-100 relative overflow-hidden group">👋 <b>Picking a seat?</b> I recommend rows 1-5 for more legroom. I can also help you find a free seat near the window!</div>
                                        <ThreadContentMessages />
                                    </ThreadContent>
                                </ScrollableMessageContainer>
                            </div>
                            <div className="p-4 border-t bg-white relative z-10">
                                <MessageInput variant="bordered">
                                    <MessageInputTextarea placeholder="Suggest a good seat..." className="text-sm min-h-[44px] !bg-gray-50 border-gray-100 focus:border-blue-400 py-3 px-4 rounded-xl" />
                                    <MessageInputToolbar><div className="flex-1"></div><MessageInputSubmitButton className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl p-2.5 transition-all shadow-md shadow-blue-200" /></MessageInputToolbar>
                                </MessageInput>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </TamboProvider>
    );
}

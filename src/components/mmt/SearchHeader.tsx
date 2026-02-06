"use client";

import { ChevronDown, ArrowLeftRight } from "lucide-react";

export function SearchHeader() {
    return (
        <div className="bg-white border-b sticky top-0 z-[60] py-3 shadow-sm">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="flex items-center gap-3">
                    {/* Trip Type */}
                    <div className="flex flex-col border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-50 min-w-[120px]">
                        <span className="text-[10px] text-blue-500 font-bold uppercase flex items-center gap-1">
                            Trip Type <ChevronDown className="w-3 h-3" />
                        </span>
                        <span className="text-sm font-black">One Way</span>
                    </div>

                    {/* From */}
                    <div className="flex flex-col border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-50 flex-1 relative">
                        <span className="text-[10px] text-gray-500 font-bold uppercase">From</span>
                        <span className="text-sm font-black truncate">New Delhi, India</span>
                        <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 bg-white border rounded-full p-1 z-10 shadow-sm border-blue-100">
                            <ArrowLeftRight className="w-3 h-3 text-blue-500" />
                        </div>
                    </div>

                    {/* To */}
                    <div className="flex flex-col border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-50 flex-1 ml-1">
                        <span className="text-[10px] text-gray-500 font-bold uppercase">To</span>
                        <span className="text-sm font-black truncate">Mumbai, India</span>
                    </div>

                    {/* Depart */}
                    <div className="flex flex-col border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-50 min-w-[140px]">
                        <span className="text-[10px] text-gray-500 font-bold uppercase">Depart</span>
                        <span className="text-sm font-black">Sat, 7 Feb 26</span>
                    </div>

                    {/* Return */}
                    <div className="flex flex-col border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-50 min-w-[140px] bg-gray-50">
                        <span className="text-[10px] text-gray-400 font-bold uppercase">Return</span>
                        <span className="text-sm font-bold text-gray-400">Select Return</span>
                    </div>

                    {/* Passenger & Class */}
                    <div className="flex flex-col border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-50 min-w-[180px]">
                        <span className="text-[10px] text-gray-500 font-bold uppercase">Passenger & Class</span>
                        <span className="text-sm font-black truncate">1 Adult, Economy/Pre...</span>
                    </div>

                    {/* Search Button */}
                    <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-md px-8 py-3 font-black uppercase text-sm shadow-lg shadow-blue-200 hover:scale-105 transition-transform ml-2">
                        Search
                    </button>
                </div>

                {/* Fare Types */}
                <div className="flex items-center gap-6 mt-3 overflow-x-auto pb-1 scrollbar-hide">
                    <span className="text-[11px] font-bold text-gray-500 whitespace-nowrap">Fare type:</span>
                    {[
                        { label: "Regular", active: true },
                        { label: "Travelling for work?", tag: "NEW" },
                        { label: "Student" },
                        { label: "Armed Forces" },
                        { label: "Senior Citizen" },
                        { label: "Doctor and Nurses" }
                    ].map((fare, i) => (
                        <div key={i} className="flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${fare.active ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                                {fare.active && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                            </div>
                            <span className={`text-[11px] font-bold ${fare.active ? "text-blue-600" : "text-gray-600"}`}>
                                {fare.label}
                                {fare.tag && <span className="ml-1 text-[8px] bg-purple-100 text-purple-600 px-1 rounded">{fare.tag}</span>}
                            </span>
                        </div>
                    ))}
                    <div className="ml-auto flex items-center gap-2 border rounded p-1 px-2 border-gray-200 cursor-pointer hover:bg-gray-50 whitespace-nowrap">
                        <div className="w-3 h-3 border rounded border-gray-400"></div>
                        <span className="text-[10px] font-bold text-gray-600 uppercase">Add Flight Delay Protection</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

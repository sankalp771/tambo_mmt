"use client";

import { useState } from "react";
import { FlightSearch } from "@/components/mmt/FlightSearch";
import { HotelSearchCard } from "@/components/mmt/hotels/HotelSearchCard";

const tabs = [
  "Flights",
  "Hotels",
  "Homestays",
  "Holiday Packages",
  "Trains",
  "Buses",
  "Cabs",
  "Forex",
];

export function SearchTabs() {
  const [activeTab, setActiveTab] = useState<string>("Hotels");

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center px-6 pt-6">
          <div className="flex gap-8 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer pb-2 font-black text-xs uppercase tracking-tighter ${
                  tab === activeTab
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pb-8 pt-4">
          {activeTab === "Flights" && (
            <div className="search-tabs-flight pb-16">
              <FlightSearch />
            </div>
          )}

          {activeTab === "Hotels" && (
            <div className="search-tabs-hotel">
              <HotelSearchCard />
            </div>
          )}

          {activeTab !== "Flights" && activeTab !== "Hotels" && (
            <div className="py-16 text-center text-gray-500 text-sm font-bold uppercase tracking-widest">
              {activeTab} search coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { SearchHeader } from "@/components/mmt/SearchHeader";
import { FlightFilters } from "@/components/mmt/FlightFilters";
import { FlightResults } from "@/components/mmt/FlightResults";
import { ChevronDown, MessageSquare, X } from "lucide-react";
import { useState } from "react";
import { TamboProvider } from "@tambo-ai/react";
import { components, tools } from "@/lib/tambo";
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

export default function FlightsPage() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <TamboProvider
            apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
            components={components}
            tools={tools}
            tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
        >
            <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
                {/* Main Header (Logo and mini links) */}
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

                {/* Search Header */}
                <SearchHeader />

                {/* Results Body */}
                <div className="bg-[#f2f2f2] pt-8 min-h-screen">
                    <div className="max-w-[1244px] mx-auto px-4 flex gap-6 pb-20">
                        {/* Sidebar */}
                        <div className="w-[300px] flex-shrink-0">
                            <FlightFilters />
                        </div>

                        {/* Main Content */}
                        <FlightResults />
                    </div>
                </div>

                {/* Floating Chat Widget (Re-integrated from Home) */}
                <div className="fixed bottom-8 right-8 z-[100]">
                    {!isChatOpen ? (
                        <button
                            onClick={() => setIsChatOpen(true)}
                            className="group bg-white border border-blue-100 text-blue-600 p-1.5 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white transition-all flex items-center relative overflow-hidden"
                        >
                            <div className="bg-blue-600 text-white p-3 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-colors">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <span className="font-black italic uppercase text-sm mx-4 mr-6">Ask MMT AI</span>
                            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
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
                                        <h3 className="font-extrabold italic uppercase tracking-wider text-xs">MMT Travel AI</h3>
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
                                            👋 <b>MMT Flight Search Results!</b> You can now filter by airline, stops, and price range. How can I help you pick the best flight?
                                            <div className="mt-2 text-[10px] text-blue-100 font-medium italic opacity-70">"Show me only IndiGo flights"</div>
                                        </div>
                                        <ThreadContentMessages />
                                    </ThreadContent>
                                </ScrollableMessageContainer>
                            </div>

                            <div className="p-4 border-t bg-white relative z-10">
                                <MessageInput variant="bordered">
                                    <MessageInputTextarea
                                        placeholder="Ask about these results..."
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

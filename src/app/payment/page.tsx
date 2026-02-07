"use client";

import { TamboProvider } from "@tambo-ai/react";
import { components, tools } from "@/lib/tambo";
import {
    MessageSquare, X, ChevronDown, ChevronRight, Info, Plus, Tag, Check,
    Minus, Users, ArrowRight, Car, MapPin, Calendar, Clock, Star, Zap,
    Fuel, ShieldCheck, ShieldPlus, Heart, Trees, Pencil, Wallet, CreditCard,
    Smartphone, Landmark, History, Gift, Shield
} from "lucide-react";
import React, { useState, useEffect } from "react";
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

export default function PaymentPage() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isQRModalOpen, setIsQRModalOpen] = useState(false);
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

    useEffect(() => {
        if (isQRModalOpen && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isQRModalOpen, timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleConfirmPayment = () => {
        setIsQRModalOpen(false);
        setIsPaymentSuccess(true);
    };

    if (isPaymentSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Check className="w-12 h-12 text-green-600 stroke-[3px]" />
                    </div>
                    <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Payment Successful!</h1>
                    <p className="text-gray-500 font-bold text-sm mb-8">Your flight to Mumbai has been confirmed. Bon Voyage! ✈️</p>
                    <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 italic">
                        <div className="flex justify-between mb-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Booking ID</span>
                            <span className="text-xs font-black">MMT78239410</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Amount Paid</span>
                            <span className="text-xs font-black">₹ 7,133</span>
                        </div>
                    </div>
                    <Link href="/" className="inline-block bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-xs py-4 px-12 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:scale-105 active:scale-95">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <TamboProvider
            apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
            components={components}
            tools={tools}
            tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
        >
            <div className="min-h-screen bg-gray-100 font-sans text-gray-900 overflow-x-hidden">
                {/* Simple Header */}
                <nav className="bg-white px-8 py-3 flex items-center justify-between border-b">
                    <Link href="/" className="flex items-center gap-1.5 cursor-pointer">
                        <div className="bg-white p-1 rounded-sm shadow-sm border border-gray-100">
                            <div className="w-5 h-5 bg-[#e01e26] rounded-sm flex items-center justify-center text-[10px] font-black text-white italic">my</div>
                        </div>
                        <div className="text-gray-900 text-xl font-black italic tracking-tighter">make <span className="text-blue-500">my</span> trip</div>
                    </Link>
                    <div className="flex items-center gap-2 text-emerald-500 font-black italic uppercase text-[10px] tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                        <ShieldCheck className="w-4 h-4" />
                        Safe & Secured
                    </div>
                </nav>

                <main className="max-w-[1240px] mx-auto px-4 py-8 flex gap-6 items-start">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-4">
                        {/* Trip Summary Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <div className="relative group">
                                        <div className="w-6 h-6 border-2 border-white/40 rounded-full animate-ping absolute opacity-20"></div>
                                        <div className="text-lg">✈️</div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="text-lg font-black italic uppercase tracking-wider">New Delhi (DEL) → Mumbai (BOM)</h2>
                                        <button className="text-[10px] font-black text-blue-500 uppercase flex items-center gap-1 hover:underline">VIEW DETAILS <ChevronDown className="w-3 h-3" /></button>
                                    </div>
                                    <div className="flex gap-4 text-[11px] font-bold text-gray-400 italic">
                                        <span>Sat, 7 Feb '26</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full mt-2"></span>
                                        <span className="text-gray-900 font-black">8:00 PM → 10:20 PM</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full mt-2"></span>
                                        <span>(2h 20m)</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full mt-2"></span>
                                        <span>(non-stop)</span>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-4">
                                        <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase bg-gray-50 px-3 py-1 rounded-lg">
                                            <Users className="w-3.5 h-3.5" /> Sankalp Pandey (Primary)
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase bg-gray-50 px-3 py-1 rounded-lg">
                                            📧 sankalp...15@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Login Banner */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex justify-between items-center group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="relative z-10">
                                <h3 className="text-sm font-black italic uppercase tracking-wider">Additional discounts and saved payment options</h3>
                                <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase italic">Login to access saved payments and discounts!</p>
                            </div>
                            <button className="bg-blue-600 text-white font-black uppercase text-[10px] tracking-[0.2em] py-3 px-10 rounded-lg hover:bg-blue-700 transition-all shadow-md relative z-10">
                                LOGIN
                            </button>
                        </div>

                        {/* Flight Delay Protection Banner */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                        <Zap className="w-6 h-6 fill-current" />
                                    </div>
                                    <span className="absolute -top-2 left-0 bg-blue-100 text-blue-700 text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-tighter">Flight Delay Protection</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-[12px] font-black text-gray-800 italic uppercase">Worry Free Travel!</h4>
                                    <p className="text-[10px] font-bold text-gray-400 leading-tight">Get hassle-free compensation of <span className="text-blue-600">₹2000</span> if delayed by 1 hr. <span className="text-blue-500 cursor-pointer">View T&Cs</span></p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <span className="text-[8px] font-black text-gray-400 uppercase italic">per person</span>
                                    <div className="text-sm font-black text-blue-600">Add @ ₹279</div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-300" />
                            </div>
                        </div>

                        {/* Payment Options Header */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 bg-gray-50/50 border-b">
                                <h3 className="text-sm font-black italic uppercase tracking-[0.1em]">Payment Options</h3>
                            </div>

                            <div className="divide-y divide-gray-50">
                                {[
                                    { id: 'upi', icon: <Smartphone className="w-6 h-6 text-emerald-500" />, title: "UPI Options", desc: "Pay Directly From Your Bank Account", active: true },
                                    { id: 'card', icon: <CreditCard className="w-6 h-6 text-blue-500" />, title: "Credit & Debit Cards", desc: "Visa, Mastercard, Amex, Rupay and more" },
                                    { id: 'emi', icon: <History className="w-6 h-6 text-gray-800" />, title: "EMI", desc: "Credit/Debit Card & Cardless EMI available", badge: "NO COST EMI" },
                                    { id: 'net', icon: <Landmark className="w-6 h-6 text-blue-800" />, title: "Net Banking", desc: "40+ Banks Available" },
                                    { id: 'later', icon: <Clock className="w-6 h-6 text-indigo-500" />, title: "Pay Later", desc: "Lazypay, Amazon" },
                                    { id: 'wallet', icon: <Gift className="w-6 h-6 text-gray-800" />, title: "Gift Cards & e-wallets", desc: "MMT Gift cards & Amazon Pay" },
                                ].map((option) => (
                                    <div key={option.id} className="p-6 flex items-center justify-between group cursor-pointer hover:bg-blue-50/30 transition-colors">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                {option.icon}
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-3">
                                                    <h4 className="text-sm font-black tracking-tight">{option.title}</h4>
                                                    {option.badge && <span className="bg-emerald-100 text-emerald-600 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">{option.badge}</span>}
                                                </div>
                                                <p className="text-[10px] font-bold text-gray-400 italic">{option.description || option.desc}</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer Disclaimer */}
                        <div className="flex items-center justify-between py-10 px-4 border-t border-gray-200 mt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest leading-none mb-1">MakeMyTrip is Secured</h4>
                                    <p className="text-[9px] font-bold text-gray-400 italic uppercase">100% RBI Compliant</p>
                                </div>
                            </div>
                            <p className="text-[9px] font-bold text-gray-400 italic max-w-sm text-right leading-relaxed uppercase">
                                By continuing to pay, I understand and agree with the <span className="text-blue-500 hover:underline">Terms of Service</span>, <span className="text-blue-500 hover:underline">Privacy Policy</span> and <span className="text-blue-500 hover:underline">User Agreement</span> of MakeMyTrip.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-[340px] flex flex-col gap-6 sticky top-8">
                        {/* Total Due Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-black italic tracking-tighter">Total Due</h3>
                                    <span className="text-2xl font-black italic text-emerald-600 tabular-nums">₹ 7,133</span>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Fare</span>
                                        <span className="text-xs font-black tabular-nums">₹ 6,374</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Convenience Fee</span>
                                        <span className="text-xs font-black tabular-nums">₹ 410</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Trip Secure</span>
                                        <span className="text-xs font-black tabular-nums">₹ 349</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scan to Pay Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-lg font-black italic uppercase tracking-tighter mb-2">Scan to Pay</h3>
                                <p className="text-[10px] font-bold text-gray-400 italic mb-6">Instant Refund & High Success Rate</p>

                                <div className="relative group cursor-pointer" onClick={() => setIsQRModalOpen(true)}>
                                    <div className="bg-gray-50 rounded-2xl p-4 border-2 border-dashed border-gray-200 aspect-square flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                                        <img src="/api/placeholder/200/200" alt="QR Code" className="w-full grayscale" />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="bg-blue-600 text-white font-black uppercase text-[10px] tracking-[0.2em] py-3 px-8 rounded-lg shadow-xl hover:scale-105 transition-transform">
                                            VIEW QR
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-4 mt-8 grayscale opacity-50">
                                    {['UPI', 'GPay', 'Paytm', 'PhonePe'].map(p => <div key={p} className="text-[8px] font-black uppercase tracking-widest border border-gray-200 px-2 py-1 rounded italic">{p}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* QR Code Modal */}
                {isQRModalOpen && (
                    <div className="fixed inset-0 bg-[#051322]/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl shadow-2xl w-[480px] overflow-hidden animate-in zoom-in-95 duration-200">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-xl font-black italic uppercase tracking-tighter text-[#051322]">Scan QR to Pay</h3>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">QR expiring in:</span>
                                            <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-black flex items-center gap-2 border border-blue-100">
                                                <Clock className="w-3.5 h-3.5" /> {formatTime(timeLeft)}
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsQRModalOpen(false)} className="bg-gray-50 p-2 rounded-xl text-gray-400 hover:text-gray-900 transition-colors">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex items-start gap-10 mb-10">
                                    <div className="flex-1">
                                        <p className="text-xs font-black text-gray-800 uppercase tracking-widest italic mb-6">Scan & approve using your UPI app</p>
                                        <div className="flex flex-wrap gap-4 grayscale">
                                            {['UPI', 'GPay', 'Paytm', 'PhonePe'].map(p => <div key={p} className="text-[8px] font-black uppercase tracking-widest border border-gray-200 px-2 py-1 rounded italic shadow-sm">{p}</div>)}
                                        </div>
                                    </div>
                                    <div className="w-40 aspect-square bg-gray-50 border-2 border-gray-100 rounded-2xl flex items-center justify-center p-2 shadow-inner group cursor-pointer" onClick={handleConfirmPayment}>
                                        <div className="relative">
                                            <img src="/api/placeholder/180/180" alt="QR" className="w-full opacity-80" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100 group-hover:scale-110 transition-transform">
                                                    <Check className="w-8 h-8 text-emerald-500 stroke-[3px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-end justify-between pt-8 border-t border-gray-50">
                                    <div>
                                        <span className="text-[28px] font-black italic text-gray-900 tracking-tighter">₹7,133</span>
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] italic ml-3">due now</span>
                                    </div>
                                    <button onClick={() => setIsQRModalOpen(false)} className="border-2 border-blue-100 text-blue-500 font-black uppercase text-[10px] tracking-[0.2em] px-8 py-3 rounded-xl hover:bg-blue-50 transition-all">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

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
                            <span className="font-black italic uppercase text-sm mx-4 mr-6">Payment Assistant</span>
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
                                        <h3 className="font-extrabold italic uppercase tracking-wider text-xs">Payment Helper</h3>
                                        <div className="flex items-center gap-1.5 font-black text-[9px] uppercase"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Bot</div>
                                    </div>
                                </div>
                                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-all hover:scale-110 active:scale-90 relative z-10"><X className="w-5 h-5 text-white/80" /></button>
                            </div>
                            <div className="flex-1 bg-white flex flex-col min-h-0 relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white pointer-events-none"></div>
                                <ScrollableMessageContainer className="flex-1 p-6 relative z-10">
                                    <ThreadContent variant="default">
                                        <div className="mb-6 p-5 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-xs text-white leading-relaxed font-bold shadow-md shadow-blue-100 relative overflow-hidden group">💳 <b>Transaction secured!</b> Your payment is protected by multi-layer encryption. Need help with UPI or Card EMI?</div>
                                        <ThreadContentMessages />
                                    </ThreadContent>
                                </ScrollableMessageContainer>
                            </div>
                            <div className="p-4 border-t bg-white relative z-10">
                                <MessageInput variant="bordered">
                                    <MessageInputTextarea placeholder="Ask about payment security..." className="text-sm min-h-[44px] !bg-gray-50 border-gray-100 focus:border-blue-400 py-3 px-4 rounded-xl" />
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

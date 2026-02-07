"use client";

import { X } from "lucide-react";

interface ReviewDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function ReviewDetailsModal({ isOpen, onClose, onConfirm }: ReviewDetailsModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

            <div className="bg-white rounded-2xl w-full max-w-[640px] overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200">
                <div className="p-8 border-b flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Review Details</h2>
                        <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider leading-relaxed pr-10">
                            Please ensure that the spelling of your name and other details match with your travel document/govt. ID, as these cannot be changed later. Errors might lead to cancellation penalties.
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors self-start -mt-2">
                        <X className="w-6 h-6 text-gray-300" />
                    </button>
                </div>

                <div className="p-8 pb-12">
                    <div className="border border-blue-100 rounded-xl p-6 bg-white shadow-sm relative overflow-hidden group">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-black uppercase tracking-widest text-[#051322]">ADULT 1</span>
                            </div>

                            <div className="grid grid-cols-2 gap-y-4">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">First & Middle Name</p>
                                    <p className="text-sm font-black italic text-gray-900 uppercase">Sankalp</p>
                                </div>
                                <div className="text-right pr-20">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Last Name</p>
                                    <p className="text-sm font-black italic text-gray-900 uppercase">Pandey</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Gender</p>
                                    <p className="text-sm font-black italic text-gray-900 uppercase">MALE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 pt-0 flex justify-end gap-6 items-center">
                    <button
                        onClick={onClose}
                        className="text-[11px] font-black text-blue-500 uppercase tracking-widest hover:underline"
                    >
                        EDIT
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full px-12 py-3.5 font-black uppercase text-xs tracking-widest shadow-lg shadow-blue-100 hover:scale-105 active:scale-95 transition-all"
                    >
                        CONFIRM
                    </button>
                </div>
            </div>
        </div>
    );
}

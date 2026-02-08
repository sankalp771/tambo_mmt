"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Flights", icon: "✈️", path: "/" },
    { name: "Hotels", icon: "🏨", path: "/hotels" },
    { name: "Trains", icon: "🚆", path: "/trains" },
    { name: "Buses", icon: "🚌", path: "/buses" },
    { name: "Cabs", icon: "🚕", path: "/cabs" },
    { name: "Visa", icon: "📄", path: "/visa" },
    { name: "Insurance", icon: "🛡️", path: "/insurance" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl px-10 py-2 flex items-center justify-center gap-10 w-fit mx-auto border border-gray-100">
      {navItems.map((item) => (
        <Link 
          key={item.name} 
          href={item.path}
          className="flex flex-col items-center gap-1 group relative py-3"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
          <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
            pathname === item.path ? "text-blue-600" : "text-gray-400 group-hover:text-blue-400"
          }`}>
            {item.name}
          </span>
          {pathname === item.path && (
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600 rounded-full shadow-[0_4px_10px_rgba(0,140,255,0.4)]" />
          )}
        </Link>
      ))}
    </div>
  );
}

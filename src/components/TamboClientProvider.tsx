"use client";

import { TamboProvider } from "@tambo-ai/react";
import { components, tools } from "@/lib/tambo";
import React from "react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function TamboClientProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const handleNavigate = (e: Event) => {
            const customEvent = e as CustomEvent;
            if (customEvent.detail?.url) {
                router.push(customEvent.detail.url);
            }
        };

        window.addEventListener('tambo:navigate', handleNavigate);
        return () => window.removeEventListener('tambo:navigate', handleNavigate);
    }, [router]);

    return (
        <TamboProvider
            apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
            components={components}
            tools={tools}
            tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
        >
            {children}
        </TamboProvider>
    );
}

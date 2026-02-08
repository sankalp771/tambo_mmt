"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function NavigationHandler() {
  const router = useRouter();

  useEffect(() => {
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent<{ path: string }>;
      const path = customEvent.detail?.path;
      if (path) {
        console.log("🚀 Tambo Navigation Triggered:", path);
        router.push(path);
      }
    };

    window.addEventListener("tambo:navigate", handleNavigate);
    return () => window.removeEventListener("tambo:navigate", handleNavigate);
  }, [router]);

  return null;
}

"use client";

import { motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { useState } from "react";

export function TopPromotionBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="relative bg-[#6B21A8] text-white overflow-hidden py-2"
            style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/confetti.png')`,
                backgroundBlendMode: 'overlay'
            }}
        >
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

            <div className="container mx-auto px-4 flex items-center justify-center gap-4 relative z-10">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <p className="text-xs md:text-sm font-bold tracking-wide text-center">
                        CELEBRATING <span className="text-yellow-400 font-black">10 YEARS</span> OF MY DOG AND I GROUP — AFRICA'S LARGEST GATHERING OF PETS! 🎊
                    </p>
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Close banner"
                >
                    <X className="w-4 h-4 opacity-70" />
                </button>
            </div>
        </motion.div>
    );
}

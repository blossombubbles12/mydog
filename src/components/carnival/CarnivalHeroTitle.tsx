"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = "dog" | "strike" | "pet";

export function CarnivalHeroTitle() {
    const [stage, setStage] = useState<Stage>("dog");

    useEffect(() => {
        const strikeTimer = setTimeout(() => setStage("strike"), 1500);
        const petTimer = setTimeout(() => setStage("pet"), 2400);
        return () => {
            clearTimeout(strikeTimer);
            clearTimeout(petTimer);
        };
    }, []);

    const struck = stage === "strike";
    const swapped = stage === "pet";

    return (
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-sm uppercase whitespace-nowrap">
            <span>LAGOS&nbsp;</span>
            <span className="relative inline-block text-center">
                {/* Hidden spacer keeps the width stable so CARNIVAL never jumps */}
                <span className="invisible" aria-hidden="true">DOG</span>
                <span className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {!swapped ? (
                            <motion.span
                                key="dog"
                                exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
                                transition={{ duration: 0.4 }}
                                className="relative"
                            >
                                DOG
                                {struck && (
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="absolute left-[-8%] right-[-8%] top-[55%] h-[0.08em] -translate-y-1/2 origin-left -rotate-3 bg-red-500 rounded-full shadow-[0_0_14px_rgba(239,68,68,0.9)]"
                                    />
                                )}
                            </motion.span>
                        ) : (
                            <motion.span
                                key="pet"
                                initial={{ opacity: 0, y: 20, scale: 0.85 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                                className="inline-block text-yellow-300 drop-shadow-[0_0_18px_rgba(253,224,71,0.55)]"
                            >
                                PET
                            </motion.span>
                        )}
                    </AnimatePresence>
                </span>
            </span>
            <span>&nbsp;CARNIVAL</span>
        </h1>
    );
}
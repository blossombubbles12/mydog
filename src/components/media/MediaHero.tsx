"use client";

import { motion } from "framer-motion";

export function MediaHero() {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-secondary/5 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                {/* Abstract background blobs if needed, or keeping it clean */}
            </div>

            <div className="container px-4 text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block mb-4 text-primary font-medium tracking-wide uppercase text-sm"
                >
                    Visual Stories
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
                >
                    Media & Moments
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                    Capturing life, love, and the unbreakable bond of the pack.
                </motion.p>
            </div>
        </section>
    );
}

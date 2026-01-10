"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Happy golden retriever running in a park"
                    fill
                    className="object-cover brightness-[0.85]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-3xl space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md">
                        Africa's Largest <span className="text-primary-foreground">Pet Gathering</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm font-medium">
                        Join Africa's most vibrant community of pet lovers. Discover local events,
                        meet new friends, and make memories that last a lifetime.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link href="/events">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all">
                                Find Events
                            </Button>
                        </Link>
                        <Link href="/community">
                            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full shadow-lg backdrop-blur-sm bg-white/90 text-primary hover:bg-white">
                                Join Community
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

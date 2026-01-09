"use client";

import { motion } from "framer-motion";
import { WorldRecord } from "@/components/WorldRecord";
import { CarnivalTimeline } from "@/components/CarnivalTimeline";
import { CarnivalStats } from "@/components/CarnivalStats";
import { Competitions } from "@/components/Competitions";
import { SafetyInfo } from "@/components/SafetyInfo";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export default function CarnivalPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Carnival Hero */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/carnival.png"
                        alt="Lagos Dog Carnival Crowd"
                        fill
                        className="object-cover brightness-[0.7]"
                        priority
                    />
                </div>

                <div className="container relative z-10 px-4 text-center text-white">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-sm">
                            LAGOS DOG CARNIVAL
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl md:text-2xl font-semibold mb-10">
                            <div className="flex items-center gap-2">
                                <Calendar className="text-yellow-400" />
                                <span>October 1st, 2026</span>
                            </div>
                            <div className="hidden md:block w-2 h-2 bg-white rounded-full" />
                            <div className="flex items-center gap-2">
                                <MapPin className="text-yellow-400" />
                                <span>Eko Atlantic City, Lagos</span>
                            </div>
                        </div>

                        <Link href="/carnival/register">
                            <Button size="lg" className="text-xl px-10 py-6 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 border-none shadow-xl cursor-pointer">
                                Register for World Record
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* World Record Component */}
            <WorldRecord />

            {/* Stats */}
            <CarnivalStats />

            {/* Competitions */}
            <Competitions />

            {/* Timeline Component */}
            <CarnivalTimeline />

            {/* Safety Info */}
            <SafetyInfo />

            {/* CTA Footer */}
            <section className="py-20 bg-background text-center">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold mb-6">Want to be a Vendor or Sponsor?</h2>
                    <Button variant="outline" size="lg">Contact Organizers</Button>
                </div>
            </section>
        </div>
    );
}

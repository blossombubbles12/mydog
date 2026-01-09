"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Calendar, Dog } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "Discover Local Events",
        description: "Find dog-friendly gatherings, festivals, and playdates happening right in your neighborhood.",
    },
    {
        icon: Users,
        title: "Connect with Owners",
        description: "Join a vibrant community of passionate dog lovers. Share tips, stories, and make new best friends.",
    },
    {
        icon: Calendar,
        title: "Never Miss Out",
        description: "Stay updated with personalized event recommendations and reminders for your favorite activities.",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Dog className="w-64 h-64 rotate-12" />
            </div>

            <div className="container px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground"
                    >
                        More Than Just a Walk
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-lg text-muted-foreground"
                    >
                        We help you turn every outing into an adventure. Discover why thousands of dog owners use My Dog & I.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                            className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                        >
                            <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Music, Star } from "lucide-react";
import Image from "next/image";

const history = [
    {
        year: "2019",
        title: "The Beginning",
        description: "The very first Lagos Dog Carnival. 150 dogs and their owners gathered at Freedom Park.",
        icon: Star,
    },
    {
        year: "2020",
        title: "Virtual Paw-ty",
        description: "Kept the spirit alive with Nigeria's first virtual dog show during the lockdown.",
        icon: Calendar,
    },
    {
        year: "2021",
        title: "Back with a Bark",
        description: "Returned to the streets with the 'Colors of Lagos' theme. Over 500 attendees.",
        icon: Users,
    },
    {
        year: "2022",
        title: "Doggy Fashion Week",
        description: "Introduced the famous runway show. Featured on national TV.",
        icon: Star,
    },
    {
        year: "2023",
        title: "Music & Mutts",
        description: "Live bands, food trucks, and the biggest adoption drive yet.",
        icon: Music,
    },
    {
        year: "2024",
        title: "Global Recognition",
        description: "International sponsors joined the pack. Attendance crossed 2,000.",
        icon: Calendar,
    },
    {
        year: "2025",
        title: "The Prelude",
        description: "Setting the stage for the big record. A massive parade through Victoria Island.",
        icon: Users,
    },
];

export function CarnivalTimeline() {
    return (
        <section className="py-24 bg-secondary/20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Journey So Far</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From a small gathering of friends to the biggest dog event in West Africa.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full" />

                    <div className="space-y-12">
                        {history.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center justify-between ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                                    }`}
                            >
                                {/* Empty side for layout balance */}
                                <div className="w-5/12" />

                                {/* Center Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full z-10 flex items-center justify-center shadow-md">
                                    {/* Optional: <div className="w-2 h-2 bg-primary rounded-full" /> */}
                                </div>

                                {/* Content Card */}
                                <div className="w-5/12 p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                                    <span className="text-4xl font-bold text-primary/10 absolute top-4 right-4 pointer-events-none">
                                        {item.year}
                                    </span>
                                    <div className="flex items-center gap-2 mb-2">
                                        <item.icon className="w-5 h-5 text-primary" />
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

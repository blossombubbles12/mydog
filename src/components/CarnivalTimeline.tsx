"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Music, Star } from "lucide-react";
import Image from "next/image";

const history = [
    {
        year: "2019",
        title: "Lagos Dog Carnival 2019",
        description: "The very first Lagos Dog Carnival. 150 dogs and their owners gathered at Freedom Park.",
        icon: Star,
    },
    {
        year: "2020",
        title: "Lagos Dog Carnival 2020",
        description: "Kept the spirit alive with Nigeria's first virtual dog show during the lockdown.",
        icon: Calendar,
    },
    {
        year: "2021",
        title: "Carnival & Soiree 2021",
        description: "Returned with the 'My Dog and I Group Soiree 2021' and the annual carnival.",
        icon: Users,
    },
    {
        year: "2022",
        title: "Lagos Dog Carnival 2022",
        description: "Introduced the famous runway show. Featured on national TV.",
        icon: Star,
    },
    {
        year: "2023",
        title: "Carnival 2023 & ACMS",
        description: "Marched for 'Animal Cruelty Must Stop' (ACMS) awareness along with the carnival.",
        icon: Music,
    },
    {
        year: "2024",
        title: "Carnival 2024 & Playground",
        description: "Launched the 'Doggie Playground' for more interactive fun.",
        icon: Calendar,
    },
    {
        year: "2025",
        title: "Lagos Dog Carnival 2025",
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

                <div className="relative max-w-4xl mx-auto px-4 md:px-0">
                    {/* Vertical Line - Responsive alignment */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full" />

                    <div className="space-y-12">
                        {history.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                    } flex-col md:flex-row`}
                            >
                                {/* Empty side for layout balance on desktop only */}
                                <div className="hidden md:block w-5/12" />

                                {/* Center Node - Responsive alignment */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full z-10 flex items-center justify-center shadow-md">
                                    <item.icon className="w-4 h-4 text-primary" />
                                </div>

                                {/* Content Card - Adjusted width and spacing for mobile */}
                                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                                    <div className="p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all relative overflow-hidden group">
                                        <span className="text-4xl font-bold text-primary/5 absolute top-2 right-2 md:top-4 md:right-4 pointer-events-none group-hover:text-primary/10 transition-colors">
                                            {item.year}
                                        </span>
                                        <div className="flex items-center gap-2 mb-2 relative z-10">
                                            <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm relative z-10">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

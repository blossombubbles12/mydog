"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
    {
        id: 1,
        title: "Puppy Bowl 2025 Highlights",
        duration: "2:30",
        thumbnailColor: "bg-orange-100"
    },
    {
        id: 2,
        title: "Training Tips: Leash Walking",
        duration: "5:15",
        thumbnailColor: "bg-blue-100"
    },
    {
        id: 3,
        title: "Best Dog Parks in NYC",
        duration: "3:45",
        thumbnailColor: "bg-green-100"
    },
    {
        id: 4,
        title: "Dog Chef: Homemade Treats",
        duration: "4:00",
        thumbnailColor: "bg-red-100"
    },
];

export function Media() {
    return (
        <section className="py-24 bg-card">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            My Dog & I <span className="text-primary">TV</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Watch highlights from recent events, training sessions, and community stories.
                        </p>
                    </div>
                    <Button variant="outline">View Channel</Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className={`relative aspect-video rounded-xl overflow-hidden ${video.thumbnailColor} mb-3 shadow-sm group-hover:shadow-md transition-all`}>
                                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <div className="h-12 w-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                                        <Play className="h-6 w-6 text-foreground fill-foreground" />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {video.duration}
                                </div>
                            </div>
                            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                                {video.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

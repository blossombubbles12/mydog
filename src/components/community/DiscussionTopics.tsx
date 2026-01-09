"use client";

import { motion } from "framer-motion";
import { Stethoscope, GraduationCap, HeartHandshake, Bone, Scissors, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const topics = [
    { label: "Health & Nutrition", icon: Stethoscope, color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
    { label: "Training Tips", icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { label: "Adoptions", icon: HeartHandshake, color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-900/20" },
    { label: "Food & Treats", icon: Bone, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { label: "Grooming", icon: Scissors, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
    { label: "Lost & Found", icon: HelpCircle, color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
];

export function DiscussionTopics() {
    return (
        <section className="py-16 container px-4">
            <h2 className="text-2xl font-bold mb-8">Explore Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {topics.map((topic, index) => (
                    <motion.div
                        key={topic.label}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="h-full flex flex-col items-center justify-center p-6 cursor-pointer hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 rounded-full ${topic.bg} flex items-center justify-center mb-3`}>
                                <topic.icon className={`w-6 h-6 ${topic.color}`} />
                            </div>
                            <span className="font-medium text-center text-sm">{topic.label}</span>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

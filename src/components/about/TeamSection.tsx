"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const team = [
    {
        name: "Tobi Adebayo",
        role: "Founder & Lead Pack Leader",
        bio: "A lifelong dog lover and certified trainer. Tobi started the community to give his own husky, Zues, some friends.",
        image: "/event-preview.png",
    },
    {
        name: "Chioma Okeke",
        role: "Head of Events",
        bio: "The creative brain behind the Carnival. Chioma ensures every event is safe, fun, and memorable.",
        image: "/hero.png",
    },
    {
        name: "Ahmed Musa",
        role: "Community Manager",
        bio: "The voice of the brand. Ahmed manages our 50k+ online community and partnerships.",
        image: "/carnival.png",
    },
];

export function TeamSection() {
    return (
        <section className="py-24 bg-secondary/10">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Pack Leaders</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        The passionate humans working behind the scenes to make every bark count.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative aspect-[3/3] overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                <p className="text-primary font-medium mb-4">{member.role}</p>
                                <p className="text-muted-foreground mb-6 line-clamp-3">{member.bio}</p>

                                <div className="flex gap-4">
                                    <button className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></button>
                                    <button className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></button>
                                    <button className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

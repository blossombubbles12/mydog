"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ParadeItem {
    id: number;
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    reversed: boolean;
    silhouette: string;
    accent: string;
    accentText: string;
    badge: string;
}

const PARADE_ITEMS: ParadeItem[] = [
    {
        id: 1,
        eyebrow: "Cute",
        title: "Big or small, they all belong.",
        description:
            "The snugglers, the fluffballs, the tiny troublemakers. Bring your baby — every breed and every size gets a front-row seat at the biggest pet party in Africa.",
        image: "/rabbitimage3.png",
        alt: "Cute rabbit at Lagos Pet Carnival",
        reversed: false,
        silhouette: "bg-[#FBF4E6]",
        accent: "bg-emerald-500",
        accentText: "text-emerald-700",
        badge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    },
    {
        id: 2,
        eyebrow: "Cuddly",
        title: "Fluffy, furry & full of joy.",
        description:
            "From cheeky monkeys to cuddly companions, the friendlier the grip, the louder we cheer. Welcome them all to the runway — they came to celebrate with you.",
        image: "/monkeyimage1.png",
        alt: "Playful monkey at Lagos Pet Carnival",
        reversed: true,
        silhouette: "bg-[#E9F4EC]",
        accent: "bg-emerald-600",
        accentText: "text-emerald-800",
        badge: "bg-emerald-600/10 text-emerald-800 border-emerald-600/20",
    },
    {
        id: 3,
        eyebrow: "Everything in between",
        title: "Every pet is a superstar.",
        description:
            "Scaly, feathered or anything beyond — whether fluffy, furry or feathered, your pet owns the spotlight. Bring your joy. Bring your pet.",
        image: "/snakeimage2.png",
        alt: "Snake at Lagos Pet Carnival",
        reversed: false,
        silhouette: "bg-[#FFF6E5]",
        accent: "bg-orange-500",
        accentText: "text-orange-700",
        badge: "bg-orange-500/10 text-orange-700 border-orange-500/20",
    },
];

function ParadeCard({ item, index }: { item: ParadeItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="p-2 rounded-[2rem] bg-black/[0.04] ring-1 ring-black/5"
        >
            <div className="group relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <div className={`flex flex-col lg:flex-row ${item.reversed ? "lg:flex-row-reverse" : ""}`}>
                    {/* Text column */}
                    <div className={`flex-1 flex flex-col justify-center px-7 py-10 md:px-12 md:py-14 ${item.silhouette}`}>
                        <span
                            className={`inline-flex w-max items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] border ${item.badge}`}
                        >
                            <Sparkles className="w-3 h-3" />
                            {item.eyebrow}
                        </span>
                        <h3 className="mt-5 text-3xl md:text-4xl font-black leading-tight text-[#0B1F3A]">
                            {item.title}
                        </h3>
                        <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed text-[#33466B]">
                            {item.description}
                        </p>
                    </div>

                    {/* Image column */}
                    <div className="relative w-full lg:w-1/2 overflow-hidden rounded-[1.5rem] m-2 md:m-3 lg:ml-0">
                        <div className={`absolute inset-0 ${item.silhouette} opacity-40`} />
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={1200}
                            height={900}
                            className="relative w-full h-72 md:h-96 lg:h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function PetParade() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
                >
                    <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] bg-[#0B1F3A]/5 text-[#0B1F3A]/70">
                        Big or small, they all belong
                    </span>
                    <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#0B1F3A] leading-[1.05]">
                        Every Pet Belongs.
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-[#33466B] leading-relaxed">
                        Cute, cuddly, furry or feathered — bring your pet, we&apos;ll celebrate them all.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:gap-10">
                    {PARADE_ITEMS.map((item, i) => (
                        <ParadeCard key={item.id} item={item} index={i} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-16 md:mt-20 text-center"
                >
                    <Link href="/carnival/register" className="inline-block">
                        <Button className="group h-auto rounded-full bg-[#0B1F3A] px-8 md:px-10 py-6 text-lg md:text-xl font-bold text-white hover:bg-[#16305A] shadow-[0_16px_40px_rgba(11,31,58,0.25)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                            Join the Carnival
                            <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                                <ArrowUpRight className="h-4 w-4" />
                            </span>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
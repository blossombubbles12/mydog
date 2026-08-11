"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What is My Dog and I?",
        answer: "My Dog and I is Nigeria's largest community for dog lovers. We organize events, provide resources, and create a space for pet owners to connect, share experiences, and celebrate the bond with their dogs.",
        category: "general"
    },
    {
        question: "How can I join the community?",
        answer: "You can join for free by clicking the 'Join the Pack' button on our website. As a member, you'll get access to our discussion forums, early bird event notifications, and special community discounts.",
        category: "general"
    },
    {
        question: "Is the Lagos Dog Carnival free to attend?",
        answer: "Admission varies by year, but we always have free entry options for spectators. Dog owners registering for competitions or the World Record attempt may have a small registration fee that goes towards the event's sustainability and charity partners.",
        category: "carnival"
    },
    {
        question: "What are the requirements for my dog to attend events?",
        answer: "Safety is our priority. All dogs must have up-to-date vaccinations (Anti-Rabies, DHLPP). Dogs must be on a leash at all times, and aggressive behavior is not permitted. We always have vets on-site for health checks.",
        category: "safety"
    },
    {
        question: "How do I become a sponsor?",
        answer: "We love partners! You can view our sponsorship packages on the 'Sponsorships' page or reach out to us through the contact form. We offer various levels of brand visibility and activation zones.",
        category: "business"
    },
    {
        question: "Can I bring my dog if it's not well-trained?",
        answer: "We welcome dogs of all training levels, but they must be under your control. We recommend our 'Training Workshop' events if you're looking to improve your dog's social skills before a major carnival.",
        category: "safety"
    }
];

export function FAQSection({ limit }: { limit?: number }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

    return (
        <div className="space-y-4">
            {displayFaqs.map((faq, index) => (
                <div
                    key={index}
                    className="border border-border/50 rounded-2xl overflow-hidden bg-card transition-all hover:border-primary/30 shadow-sm"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-lg"
                    >
                        <span className="flex-1">{faq.question}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-secondary'}`}>
                            {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                    </button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                    <div className="pt-2 border-t border-border/30">
                                        {faq.answer}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

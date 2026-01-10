"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming you have an Input component, if not I'll use standard input
// Standard input fallback if UI component doesn't exist yet, but assuming basic setup.
// Actually, I'll create a simple clean form here to be safe.
import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent! We'll bark back soon.");
        }, 1500);
    };

    return (
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-border/50">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                        <input
                            id="firstName"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="John"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                        <input
                            id="lastName"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer"
                    >
                        <option>General Inquiry</option>
                        <option>Sponsorship</option>
                        <option>Event Participation</option>
                        <option>Press / Media</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                        placeholder="How can we help?"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 text-lg font-bold rounded-xl"
                >
                    {isSubmitting ? "Sending..." : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
                </Button>
            </form>
        </div>
    );
}

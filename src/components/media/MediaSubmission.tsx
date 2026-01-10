"use client";

import { motion } from "framer-motion";
import { Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MediaSubmission() {
    return (
        <section className="py-24 bg-primary/5 border-t border-primary/10">
            <div className="container px-4 text-center max-w-3xl mx-auto">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-border/50 relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Camera className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Dog's Story</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Did you capture a special moment at our last event? Or just a cute photo of your pup?
                            We'd love to feature it in our community gallery!
                        </p>
                        <Button size="lg" className="rounded-full px-8 py-6 text-lg gap-2 shadow-lg hover:shadow-primary/20">
                            <Upload className="w-5 h-5" /> Submit Photos
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

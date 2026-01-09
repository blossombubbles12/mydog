"use client";

import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function ContactInfo() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                    Have questions about the Carnival? Want to partner with us?
                    Or just want to say woof? We'd love to hear from you.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold">Visit Us</h3>
                        <p className="text-muted-foreground">
                            The Dog Park, Freedom Way<br />
                            Lekki Phase 1, Lagos, Nigeria
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold">Email Us</h3>
                        <p className="text-muted-foreground">hello@mydogandi.com.ng</p>
                        <p className="text-muted-foreground">sponsors@mydogandi.com.ng</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold">Call Us</h3>
                        <p className="text-muted-foreground">+234 800 DOG LOVE</p>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video w-full bg-secondary/20 rounded-2xl border border-border/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Lekki,Lagos&zoom=13&size=600x300')] bg-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg z-10 font-medium">
                    Map Integration Coming Soon
                </div>
            </div>
        </div>
    );
}

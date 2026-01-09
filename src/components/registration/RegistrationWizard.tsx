"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Dog, User, ArrowRight, ArrowLeft, PartyPopper, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegistrationWizard() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        ownerName: "",
        email: "",
        phone: "",
        role: "owner",
        dogName: "",
        breed: "",
        energy: "",
        acceptedTerms: false
    });

    const updateData = (newData: any) => setData(prev => ({ ...prev, ...newData }));
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-4">
            <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-border/40 overflow-hidden relative">

                {/* Progress Bar */}
                <div className="h-2 bg-secondary/30 w-full">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-orange-500"
                        initial={{ width: "33%" }}
                        animate={{ width: `${(step / 3) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                <div className="p-8 md:p-12">
                    {step < 3 && (
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-black mb-2">Join the Woof Pack</h1>
                            <p className="text-muted-foreground">Step {step} of 2</p>
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {/* Step 1: Human Info */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -50, opacity: 0 }}
                                className="space-y-6"
                            >
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                        <User className="w-10 h-10" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Tell us about you</h2>
                                    <p className="text-muted-foreground">Who's joining the pack?</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Full Name *</label>
                                        <input
                                            placeholder="John Doe"
                                            className="w-full p-4 rounded-xl border bg-background focus:ring-2 ring-primary/50 outline-none transition-all"
                                            value={data.ownerName}
                                            onChange={(e) => updateData({ ownerName: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Email Address *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                placeholder="john@example.com"
                                                type="email"
                                                className="w-full pl-12 p-4 rounded-xl border bg-background focus:ring-2 ring-primary/50 outline-none transition-all"
                                                value={data.email}
                                                onChange={(e) => updateData({ email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                placeholder="+234..."
                                                type="tel"
                                                className="w-full pl-12 p-4 rounded-xl border bg-background focus:ring-2 ring-primary/50 outline-none transition-all"
                                                value={data.phone}
                                                onChange={(e) => updateData({ phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium mb-2 block">I am a *</label>
                                        <select
                                            className="w-full p-4 rounded-xl border bg-background focus:ring-2 ring-primary/50 outline-none transition-all cursor-pointer"
                                            value={data.role}
                                            onChange={(e) => updateData({ role: e.target.value })}
                                        >
                                            <option value="owner">Dog Owner 🐕</option>
                                            <option value="lover">Dog Lover (No Dog yet) ❤️</option>
                                            <option value="vendor">Vendor / Business 🏪</option>
                                        </select>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Dog Info + Terms */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -50, opacity: 0 }}
                                className="space-y-6"
                            >
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                                        <Dog className="w-10 h-10" />
                                    </div>
                                    <h2 className="text-2xl font-bold">About your furry friend</h2>
                                    <p className="text-muted-foreground">Tell us about your pup (optional)</p>
                                </div>

                                {data.role === 'lover' ? (
                                    <div className="text-center p-8 bg-secondary/20 rounded-xl border-2 border-dashed">
                                        <Dog className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                                        <p className="font-medium">No dog? No problem!</p>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            You're here for the community and cuddles. Skip ahead!
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm font-medium mb-2 block">Dog's Name</label>
                                            <input
                                                placeholder="Max, Bella, Charlie..."
                                                className="w-full p-4 rounded-xl border bg-background focus:ring-2 ring-primary/50 outline-none transition-all"
                                                value={data.dogName}
                                                onChange={(e) => updateData({ dogName: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium mb-2 block">Breed</label>
                                            <input
                                                placeholder="e.g. Golden Retriever, Mixed"
                                                className="w-full p-4 rounded-xl border bg-background focus:ring-2 ring-primary/50 outline-none transition-all"
                                                value={data.breed}
                                                onChange={(e) => updateData({ breed: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium mb-2 block">Energy Level</label>
                                            <select
                                                className="w-full p-4 rounded-xl border bg-background focus:ring-2 ring-primary/50 outline-none transition-all cursor-pointer"
                                                value={data.energy}
                                                onChange={(e) => updateData({ energy: e.target.value })}
                                            >
                                                <option value="">Select energy level</option>
                                                <option value="couch">Couch Potato 🥔</option>
                                                <option value="moderate">Weekend Walker 🚶</option>
                                                <option value="zoomies">Infinite Zoomies ⚡</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {/* Terms Acceptance */}
                                <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-200">
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="terms-join"
                                            checked={data.acceptedTerms}
                                            onChange={(e) => updateData({ acceptedTerms: e.target.checked })}
                                            className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                                        />
                                        <label htmlFor="terms-join" className="text-sm text-muted-foreground">
                                            I agree to the{" "}
                                            <a href="/terms" target="_blank" className="text-primary hover:underline font-medium">
                                                Terms of Service
                                            </a>{" "}
                                            and{" "}
                                            <a href="/privacy" target="_blank" className="text-primary hover:underline font-medium">
                                                Privacy Policy
                                            </a>
                                        </label>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Success */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center space-y-6 py-10"
                            >
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 animate-bounce">
                                    <PartyPopper className="w-12 h-12" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-2">Welcome to the Pack, {data.ownerName}!</h2>
                                    {data.dogName && (
                                        <p className="text-xl text-muted-foreground">
                                            Give {data.dogName} a treat from us! 🦴
                                        </p>
                                    )}
                                </div>
                                <div className="bg-secondary/20 p-6 rounded-xl max-w-md mx-auto">
                                    <p className="text-sm text-muted-foreground mb-4">
                                        We've sent a confirmation email to:
                                    </p>
                                    <p className="font-bold text-lg">{data.email}</p>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Check your inbox for next steps and upcoming events!
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                                    <Link href="/community">
                                        <Button size="lg" className="w-full sm:w-auto px-8">
                                            Explore Community
                                        </Button>
                                    </Link>
                                    <Link href="/events">
                                        <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
                                            View Events
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    {step < 3 && (
                        <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/30">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={prevStep}
                                disabled={step === 1}
                                className={step === 1 ? "invisible" : ""}
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back
                            </Button>
                            <Button
                                type="button"
                                onClick={nextStep}
                                className="px-8 rounded-full font-bold"
                                disabled={step === 2 && !data.acceptedTerms}
                            >
                                {step === 2 ? "Complete Registration" : "Next Step"} <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

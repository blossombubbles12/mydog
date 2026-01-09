"use client";

import { ShieldCheck, Stethoscope, AlertTriangle } from "lucide-react";

export function SafetyInfo() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-3xl p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                            <ShieldCheck className="w-8 h-8 text-orange-600" />
                            Safety First
                        </h2>
                        <p className="text-lg opacity-90">
                            To ensure a successful Guinness World Record attempt and a fun day for everyone, we enforce strict safety protocols.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                    <Stethoscope className="w-5 h-5 text-orange-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Vet Checks Mandatory</h3>
                                <p className="text-muted-foreground">
                                    All dogs must have an up-to-date vaccination card (Anti-Rabies / DHLPP). On-site vets will inspect every dog at entry.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Leash Rules</h3>
                                <p className="text-muted-foreground">
                                    No retractable leashes allowed. All dogs must be on a fixed leash (max 6ft) at all times unless in designated off-leash zones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { AboutHero } from "@/components/about/AboutHero";
import { MissionSection } from "@/components/about/MissionSection";
import { TeamSection } from "@/components/about/TeamSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <AboutHero />
            <MissionSection />
            <TeamSection />

            {/* Values/Story Interlude */}
            <section className="py-24 bg-primary text-primary-foreground text-center">
                <div className="container px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
                        "We believe every dog deserves a day in the sun, and every owner deserves a community that understands."
                    </h2>
                    <Link href="/community">
                        <Button variant="secondary" size="lg" className="rounded-full px-8 text-lg font-bold">
                            Join Our Community <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

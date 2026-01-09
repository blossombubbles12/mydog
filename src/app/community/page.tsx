import { CommunityHero } from "@/components/community/CommunityHero";
import { DiscussionTopics } from "@/components/community/DiscussionTopics";
import { FeaturedMember } from "@/components/community/FeaturedMember";
import { LatestThreads } from "@/components/community/LatestThreads";
import { NewsletterSignup } from "@/components/community/NewsletterSignup";

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <CommunityHero />
            <DiscussionTopics />
            <FeaturedMember />
            <LatestThreads />
            <NewsletterSignup />
        </div>
    );
}

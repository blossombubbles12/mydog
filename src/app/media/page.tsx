import { MediaHero } from "@/components/media/MediaHero";
import { GalleryGrid } from "@/components/media/GalleryGrid";
import { EventAlbums } from "@/components/media/EventAlbums";
import { MediaSubmission } from "@/components/media/MediaSubmission";

export default function MediaPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <MediaHero />
            <GalleryGrid />
            <EventAlbums />
            <MediaSubmission />
        </div>
    );
}

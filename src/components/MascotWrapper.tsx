"use client";

import { Mascot } from "page-mascot";

export function MascotWrapper() {
  return (
    <div className="pointer-events-auto">
      <Mascot
        directions="/mascots/fox-directions.webp"
        reactions="/mascots/fox-reactions.webp"
        size={140}
        label="Interactive page mascot"
      />
    </div>
  );
}

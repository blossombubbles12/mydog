"use client";

import { Mascot } from "page-mascot";

export function MascotWrapper() {
  return (
    <div className="pointer-events-auto">
      <Mascot
        directions="/mascots/fox-directions.png"
        reactions="/mascots/fox-reactions.png"
        size={140}
        label="Interactive page mascot"
      />
    </div>
  );
}

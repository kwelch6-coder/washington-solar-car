import type { Metadata } from "next";
import LabBadge from "@/components/LabBadge";

/**
 * Applies to every route under /lab. Pages below may add a title; robots is
 * inherited from here so a new lab page cannot forget it.
 *
 * This keeps the lab out of search results and out of the sitemap. It is NOT
 * privacy: the route is in the JS bundle and the footer links to it, so anyone
 * reading the source can find it. Fine for design experiments — put nothing
 * sensitive here. Real privacy means a Vercel preview branch or basic auth.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LabBadge />
      {children}
    </>
  );
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.appverse.technology";
  return [
    { url: `${base}/`,            lastModified: new Date() },
    { url: `${base}/apps`,        lastModified: new Date() },
    { url: `${base}/apps/typingo`, lastModified: new Date() },
    { url: `${base}/apps/emoji-ai`, lastModified: new Date() },
    { url: `${base}/about`,       lastModified: new Date() },
    { url: `${base}/pricing`,     lastModified: new Date() },
    { url: `${base}/support`,     lastModified: new Date() },
    { url: `${base}/contact`,     lastModified: new Date() },
    { url: `${base}/en/legal/privacy`, lastModified: new Date() },
    { url: `${base}/en/legal/terms`,   lastModified: new Date() },
    { url: `${base}/en/legal/cookies`, lastModified: new Date() },
  ];
}

export default async function sitemap() {
  const base = "https://www.appverse.technology";
  return [
    { url: `${base}/` },
    { url: `${base}/apps` },
    { url: `${base}/apps/typingo` },
    { url: `${base}/apps/emoji-ai` },
    { url: `${base}/apps/meowwoof-ai` },
    { url: `${base}/contact` },
    { url: `${base}/en/legal/privacy` },
    { url: `${base}/en/legal/terms` },
    { url: `${base}/en/legal/cookies` },
  ];
}

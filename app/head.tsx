import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Links — Taufik Crisnawan Santosa</title>
      <meta name="description" content="Linktree + Next.js + Tailwind CSS" />
      <link rel="icon" href="/favicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Script
        async 
        defer
        data-website-id="b62ef1d8-738a-4f6f-a513-571a13f3c828"
        src="https://umami.taufikcrisnawan.dev/umami.js"/>
    </>
  );
}

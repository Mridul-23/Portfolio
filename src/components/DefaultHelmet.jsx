import React from 'react';
import { Helmet } from 'react-helmet';

const DefaultHelmet = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mridul-narula.vercel.app/#person",
        "name": "Mridul Narula",
        "url": "https://mridul-narula.vercel.app/",
        "sameAs": [
          "https://www.linkedin.com/in/mridul-narula-55338524b",
          "https://github.com/Mridul-23",    // <- ensure this is your real GitHub URL
          "https://twitter.com/mridulnarula_"
        ],
        "jobTitle": "AI Engineer & Full Stack Developer",
        "image": "https://mridul-narula.vercel.app/preview.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://mridul-narula.vercel.app/#website",
        "url": "https://mridul-narula.vercel.app/",
        "name": "Mridul Narula — Portfolio",
        "publisher": { "@id": "https://mridul-narula.vercel.app/#person" }
      }
    ]
  };

  return (
    <Helmet>
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <title>Mridul Narula | AI Engineer & Full Stack Developer</title>
      <meta name="description" content="Portfolio of Mridul Narula, a B.Tech CSE student specializing in Artificial Intelligence, Deep Learning, and Modern Web Development. Explore projects like Ani-verse, ThoughtNet, and more." />
      <meta name="keywords" content="Mridul Narula, AI Engineer, Machine Learning, Full Stack Developer, React, Django, Deep Learning, Portfolio" />
      <meta name="author" content="Mridul Narula" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#020617" />
      <link rel="canonical" href="https://mridul-narula.vercel.app/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Mridul Narula — Portfolio" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content="https://mridul-narula.vercel.app/" />
      <meta property="og:title" content="Mridul Narula | AI Engineer & Full Stack Developer" />
      <meta property="og:description" content="Exploring the intersection of AI, Physics, and Web Engineering. Check out my projects, research, and technical arsenal." />
      <meta property="og:image" content="https://mridul-narula.vercel.app/preview.png" />
      <meta property="og:image:alt" content="Mridul Narula — portfolio preview" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mridulnarula_" />
      <meta name="twitter:creator" content="@mridulnarula_" />
      <meta name="twitter:title" content="Mridul Narula | AI Engineer & Full Stack Developer" />
      <meta name="twitter:description" content="Exploring the intersection of AI, Physics, and Web Engineering. Check out my projects, research, and technical arsenal." />
      <meta name="twitter:image" content="https://mridul-narula.vercel.app/preview.png" />
      <meta name="twitter:image:alt" content="Mridul Narula — portfolio preview" />
    </Helmet>
  );
};

export default DefaultHelmet;

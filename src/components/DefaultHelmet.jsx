import React from 'react';
import { Helmet } from 'react-helmet';

const DefaultHelmet = () => {
  return (
    <Helmet>
      <title>Mridul Narula | Developer Portfolio</title>
      <meta name="description" content="Portfolio of Mridul Narula showcasing React, AI, and full-stack development projects." />
      <meta name="keywords" content="Mridul Narula, React Developer, Full Stack Developer, AI projects, Portfolio" />
      <meta name="author" content="Mridul Narula" />

      {/* Open Graph tags (we’ll cover them properly in the next step) */}
      <meta property="og:title" content="Mridul Narula | Portfolio" />
      <meta property="og:description" content="React & AI-based full stack developer showcasing awesome projects." />
      <meta property="og:url" content="https://mridul-narula.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://mridul-narula.vercel.app/preview.png" />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default DefaultHelmet;

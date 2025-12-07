import React from 'react';
import { Helmet } from 'react-helmet';

const DefaultHelmet = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Mridul Narula | AI Engineer & Full Stack Developer</title>
      <meta name="title" content="Mridul Narula | AI Engineer & Full Stack Developer" />
      <meta name="description" content="Portfolio of Mridul Narula, a B.Tech CSE student specializing in Artificial Intelligence, Deep Learning, and Modern Web Development. Explore projects like Ani-verse, ThoughtNet, and more." />
      <meta name="keywords" content="Mridul Narula, AI Engineer, Machine Learning, Full Stack Developer, React, Django, Deep Learning, Portfolio, Web Development, Computer Science, Chandigarh" />
      <meta name="author" content="Mridul Narula" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#020617" />
      <link rel="canonical" href="https://mridul-narula.vercel.app/" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mridul-narula.vercel.app/" />
      <meta property="og:title" content="Mridul Narula | AI Engineer & Full Stack Developer" />
      <meta property="og:description" content="Exploring the intersection of AI, Physics, and Web Engineering. Check out my projects, research, and technical arsenal." />
      <meta property="og:image" content="https://mridul-narula.vercel.app/preview.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mridul-narula.vercel.app/" />
      <meta property="twitter:title" content="Mridul Narula | AI Engineer & Full Stack Developer" />
      <meta property="twitter:description" content="Exploring the intersection of AI, Physics, and Web Engineering. Check out my projects, research, and technical arsenal." />
      <meta property="twitter:image" content="https://mridul-narula.vercel.app/preview.png" />
      <meta name="twitter:creator" content="@mridulnarula_" /> 
    </Helmet>
  );
};

export default DefaultHelmet;

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
          "https://github.com/Mridul-23",
          "https://twitter.com/mridulnarula_"
        ],
        "jobTitle": "Software Engineer | AI, Cloud & Full Stack",
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
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};

export default DefaultHelmet;

import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  let sameAs = [];
  socialMediaLinks
    .filter(
      (media) =>
        !(media.link?.startsWith("tel") || media.link?.startsWith("mailto"))
    )
    .forEach((media) => {
      sameAs.push(media.link);
    });

  let mail =
    socialMediaLinks
      .find((media) => media.link?.startsWith("mailto"))
      ?.link?.substring("mailto:".length) || "";

  let job =
    experience.sections?.find((section) => section.work)?.experiences?.at(0) ||
    {};

  let credentials = [];
  (certifications?.certifications || []).forEach((certification) => {
    credentials.push({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      url: certification.certificate_link,
      name: certification.title,
      description: certification.subtitle,
    });
  });

  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting?.title || "Developer",
    url: seo?.og?.url || "https://example.com",
    email: mail || "email@example.com",
    telephone: contactPageData?.phoneSection?.subtitle || "",
    sameAs: sameAs,
    jobTitle: job?.title || "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: job?.company || "Unknown Company",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData?.addressSection?.locality || "",
      addressRegion: contactPageData?.addressSection?.region || "",
      addressCountry: contactPageData?.addressSection?.country || "",
      postalCode: contactPageData?.addressSection?.postalCode || "",
      streetAddress: contactPageData?.addressSection?.streetAddress || "",
    },
    hasCredential: credentials,
  };

  return (
    <Helmet>
      <title>{seo?.title || "My Portfolio"}</title>
      <meta
        name="description"
        content={seo?.description || "Welcome to my portfolio"}
      />
      <meta
        property="og:title"
        content={seo?.og?.title || seo?.title || "My Portfolio"}
      />
      <meta property="og:type" content={seo?.og?.type || "website"} />
      <meta property="og:url" content={seo?.og?.url || "https://example.com"} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;

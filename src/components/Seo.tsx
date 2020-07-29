import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

export const Seo = () => {
  const { site } = useStaticQuery(query);

  const { title, description, url } = site.siteMetadata;

  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
      }
    }
  }
`;

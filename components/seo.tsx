import Head from "next/head";

interface Props {
  title: string;
  description: string;
  image: string;
}

const SEO = ({ title, description, image }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Open Graph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://example.com`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@example" />
      <meta name="twitter:creator" content="@example" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;

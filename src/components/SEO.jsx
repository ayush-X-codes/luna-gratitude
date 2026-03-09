import { Helmet } from "react-helmet";

function SEO({ title, description, content }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={content} />
    </Helmet>
  );
}

export default SEO;

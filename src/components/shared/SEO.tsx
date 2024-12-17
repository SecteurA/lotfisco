import { Helmet } from 'react-helmet-async';
import { defaultSEO } from '../../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  metaTags?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

export const SEO = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  metaTags = defaultSEO.metaTags
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {metaTags.map((tag, index) => (
        <meta
          key={index}
          {...(tag.name && { name: tag.name })}
          {...(tag.property && { property: tag.property })}
          content={tag.content}
        />
      ))}

      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};
import { defineQuery } from 'next-sanity';

// Query with expanded asset references
// Usage: client.fetch(pageQuery, { slug: 'home' })
export const pageQuery = defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  slug,
  metadata{
    metaTitle,
    metaDescription,
    keywords,
    ogImage{
      ...,
      asset->
    },
    noIndex
  },
  sections[]{
    _key,
    _type,
    title,
    body[]{
      ...,
      _type == 'image' => {
        ...,
        asset->
      }
    },
    image{
      ...,
      asset->
    },
    layout
  }
}`);

export const allPagesQuery = defineQuery(`*[_type == "page"]{
  _id,
  title,
  slug
}`);

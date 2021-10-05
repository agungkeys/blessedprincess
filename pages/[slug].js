import React from 'react';
import { MainLayout, Title } from '../ui';

function Slug({ props }) {
  const {query} = props;
  console.log("🚀 ~ file: [slug].js ~ line 6 ~ Slug ~ query", query)
  return (
    <MainLayout>
      <Title title={`Slug ${query && query.slug}`} />
    </MainLayout>
  )
}

Slug.getInitialProps = async (ctx) => {
  const { query } = ctx
  console.log("🚀 ~ file: [slug].js ~ line 12 ~ Slug.getInitialProps= ~ ctx", ctx)
  // const storePosts = await getPosts();
  // const storePages = await getPages();
    
  return {
    props: { query }
  }
}

export default Slug;
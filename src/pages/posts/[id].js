import { getGlobalData } from '../../utils/global-data';
import {getPostBySlug, getPosts} from '../../utils/mdx-utils';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';


const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({
  posts,
  post,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`{posts?.title} - {globalData.name}`}
        description={posts?.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {posts?.title}
          </h1>
          {posts?.description && (
            <p className="text-xl mb-4 text-center">{posts?.description}</p>
          )}
        </header>
        <main>
          <article className="text-center mt-10">
            {posts?.body} 
          </article>
          <br/>
          <img className="mt-5 flex-row justify-self-center" src={posts.image_url}></img>
        </main>
      </article>
      <article className="prose dark:prose-dark mt-10">
            {posts.created_at}
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const posts = await getPostBySlug(params.id);
 
  return {
    props: {
      globalData,
      posts
    },
  };
};


import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Portfolio_Item from '../components/Portfolio_Item';
import Head from 'next/head';

export default function Home({ portfolio_items }) {
  return (
    <div>
      <Head>
        <title>Web Developer portfolio - Jukka Isokoski</title>
      </Head>
      <h1>Web Developer portfolio</h1>

      <h2>Portfolio</h2>
      <div>
        {portfolio_items.map((item, index) => (
          <Portfolio_Item item={item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // get files from portfolio_items directory
  const files = fs.readdirSync(path.join('portfolio_items'));

  //create slug and get frontmatter for each portfolio item
  const portfolio_items = files.map((filename) => {
    const slug = filename.replace('.md', '');

    //frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('portfolio_items', filename),
      'utf-8'
    );
    const { data: meta } = matter(markdownWithMeta);

    return {
      slug,
      meta,
    };
  });

  return {
    props: {
      portfolio_items: portfolio_items,
    },
  };
}

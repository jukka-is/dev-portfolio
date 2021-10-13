import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PortfolioItem from '../components/PortfolioItem';
import TechTags from '../components/TechTags';
import Info from '../components/Info';
import Head from 'next/head';

export default function Home({ portfolioItems, techTags }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <title>Web Developer portfolio - Jukka Isokoski</title>
        <meta name="description" content="Welcome to my portfolio! Here you'll find a selection of my freelance client works as well as some of my personal projects." />
        <meta name="keywords" content="Wordpress, WooCommerce, javascript, css, sass, bootstrap, php, node.js, nextjs" />
        <meta name="author" content="Jukka Isokoski" />
      </Head>

      <header className="title">
        <h1 className="main-title">
          <span className="dev">dev.</span>
          <span className="rest">jukkaisokoski.fi</span>
        </h1>
        <div className="subhead">
          <p className="text">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Donec id elit non mi porta gravida at eget metus. Sed
            posuere consectetur est at lobortis.
          </p>
          <ul className="tech-tags">
            <TechTags tags={techTags} />
          </ul>
        </div>
      </header>

      <section className="portfolio client-portfolio">
        <h2 className="heading-2">Freelance client projects</h2>
        <div className="grid">
          {portfolioItems
            .filter((item) => item.meta.category === 'client')
            .map((item, index) => (
              <PortfolioItem key={'client-' + index} item={item} />
            ))}
        </div>
      </section>

      <section className="portfolio personal-portfolio">
        <h2 className="heading-2">Personal projects</h2>
        <div className="grid">
          {portfolioItems
            .filter((item) => item.meta.category === 'personal')
            .map((item, index) => (
              <PortfolioItem key={'personal-' + index} item={item} />
            ))}
        </div>
      </section>

      <section className="info">
        {portfolioItems
          .filter((item) => item.meta.category === 'current')
          .map((item, index) => (
            <Info key={'current-' + index} item={item} />
          ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  // get files from portfolio_items directory
  const files = fs.readdirSync(path.join('portfolio_items'));

  //create slug and get frontmatter for each portfolio item
  const portfolioItems = files.map((filename) => {
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

  const techTags = [];

  portfolioItems.map((item) => {
    const itemsTechs = item.meta.techs.split(', ');

    itemsTechs.forEach((tech) => {
      if (!techTags.includes(tech)) {
        techTags.push(tech);
      }
    });
  });

  console.log(techTags);

  return {
    props: {
      portfolioItems: portfolioItems,
      techTags: techTags,
    },
  };
}

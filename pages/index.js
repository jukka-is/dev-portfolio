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
        <title>Web Developer portfolio - Jukka Isokoski</title>
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

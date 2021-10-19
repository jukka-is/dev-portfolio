import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PortfolioItem from '../components/PortfolioItem';
import TagList from '../components/TagList';
import Info from '../components/Info';
import Modal from '../components/Modal';
import Head from 'next/head';
import Footer from '../components/Footer.js';
import { timingSafeEqual } from 'crypto';

export default function Home({ items, tags, socialLinks }) {
  const [techTags, setTechTags] = useState(tags);
  const [portfolioItems, setPortfolioItems] = useState(items);
  const [modalState, setModalState] = useState({
    item: undefined,
    isActive: false,
  });

  const toggleTag = (toggledTag) => {
    // update changes to title area's tech tags
    const updatedTags = [...techTags];
    techTags.forEach((tag, index) => {
      if (toggledTag.name === tag.name) {
        updatedTags[index] = { ...updatedTags[index], isActive: !tag.isActive };
      }
    });
    setTechTags(updatedTags);

    // update changes to portfolio items' tech tags
    const updatedPortfolioItems = [...portfolioItems];

    portfolioItems.forEach((item, i) => {
      item.techs.forEach((tag, j) => {
        if (toggledTag.name === tag.name) {
          updatedPortfolioItems[i].techs[j] = {
            ...updatedPortfolioItems[i].techs[j],
            isActive: !tag.isActive,
          };
        }
      });
    });

    // update portfolio items' state whether item has active tags or not
    updatedPortfolioItems.forEach((item, i) => {
      let status = false;
      item.techs.forEach((tag) => {
        if (tag.isActive) {
          status = true;
        }
        updatedPortfolioItems[i].hasActiveTags = status;
      });
    });

    setPortfolioItems(updatedPortfolioItems);
  };

  const openModal = (item) => {
    const updatedModalState = { item: item, isActive: true };
    setModalState(updatedModalState);
  };

  const closeModal = () => {
    const closedModalState = { item: undefined, isActive: false };
    setModalState(closedModalState);
  };

  return (
    <>
      <main className="container">
        <Head>
          <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon/favicon-16x16.png"
          />
          <title>Web Developer portfolio - Jukka Isokoski</title>
          <meta
            name="description"
            content="Welcome to my portfolio! Here you'll find a selection of my freelance client works as well as some of my personal projects."
          />
          <meta
            name="keywords"
            content="Wordpress, WooCommerce, javascript, css, scss, bootstrap, php, node.js, nextjs"
          />
          <meta name="author" content="Jukka Isokoski" />
        </Head>

        <Modal modalState={modalState} closeModal={closeModal} />

        <header className="title">
          <h1 className="main-title">
            <span className="dev">dev.</span>
            <span className="rest">jukkaisokoski.fi</span>
          </h1>
          <div className="subhead">
            <p className="text">
              {`I'm a freelance web-developer based in Helsinki, Finland. Welcome
              to my portfolio! Here you will find a selection of my client works
              as well as personal projects featuring keywords:`}
            </p>
            <ul className="tech-tags">
              <TagList tags={techTags} toggleTag={toggleTag} />
            </ul>
          </div>
        </header>

        <section className="portfolio client-portfolio">
          <h2 className="heading-2">Freelance client projects</h2>
          <div className="grid">
            {portfolioItems
              .filter((item) => item.meta.category === 'client')
              .map((item, index) => (
                <PortfolioItem
                  key={'item-' + item.meta.id}
                  item={item}
                  openModal={openModal}
                />
              ))}
          </div>
        </section>

        <section className="portfolio personal-portfolio">
          <h2 className="heading-2">Personal projects</h2>
          <div className="grid">
            {portfolioItems
              .filter((item) => item.meta.category === 'personal')
              .map((item, index) => (
                <PortfolioItem
                  key={'item-' + item.meta.id}
                  item={item}
                  openModal={openModal}
                />
              ))}
          </div>
        </section>

        <section className="info">
          {portfolioItems
            .filter((item) => item.meta.category === 'current')
            .map((item, index) => (
              <Info
                key={'item-' + item.meta.id}
                item={item}
                socialLinks={socialLinks}
              />
            ))}
        </section>
      </main>
      <Footer socialLinks={socialLinks} />
    </>
  );
}

export async function getStaticProps() {
  // get files from portfolio_items directory
  const files = fs.readdirSync(path.join('portfolio_items'));

  //create slug and get frontmatter for each portfolio item
  const items = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const isOpened = false;
    const hasActiveTags = false;

    //frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('portfolio_items', filename),
      'utf-8'
    );
    const { data: meta, content } = matter(markdownWithMeta);

    const techs = meta.techs.split(', ').map((name) => {
      return {
        name: name,
        isActive: false,
      };
    });

    return {
      slug,
      meta,
      content,
      techs,
      isOpened,
      hasActiveTags,
    };
  });

  // sort portfolio items by id
  items.sort((a, b) => a.meta.id - b.meta.id);

  // get tech tags for whole portfolio
  const tags = [];

  // go through all portfolio items and add missing tags only once
  items.map((item) => {
    const itemsTechs = item.meta.techs.split(', ');

    item.techs.forEach((newTech) => {
      if (!tags.find((existingTech) => existingTech.name === newTech.name)) {
        tags.push(newTech);
      }
    });
  });

  const socialLinks = [
    {
      id: 1,
      title: 'Github',
      url: 'https://github.com/aaxxiiss',
      iconClasses: 'ri-github-fill',
    },
    {
      id: 2,
      title: 'Twitter',
      url: 'https://twitter.com/jukkaisokoski',
      iconClasses: 'ri-twitter-fill',
    },
    {
      id: 3,
      title: 'email',
      url: 'mailto:mail@jukkaisokoski.fi',
      iconClasses: 'ri-mail-line',
    },
  ];

  return {
    props: {
      items: items,
      tags: tags,
      socialLinks: socialLinks,
    },
  };
}

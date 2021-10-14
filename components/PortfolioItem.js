import SingleTag from '../components/SingleTag';

export default function PortfolioItem({ item, openModal }) {
  const articleClassNames = item.hasActiveTags ? 'item active-tags' : 'item';

  return (
    <article className={articleClassNames}>
      <div className="content">
        <input
          type="image"
          className="image"
          src={item.meta.cover_image}
          alt={item.meta.title}
          onClick={() => openModal(item)}
          aria-label={'Read more about ' + item.meta.title}
        />

        <p className="description">{item.meta.description}</p>
        <h3 className="heading-3">{item.meta.title}</h3>
        <ul className="tech-tags">
          {item.techs.map((tag, index) => (
            <SingleTag key={item.slug + '-tag-' + index} tag={tag} />
          ))}
        </ul>
        <p className="excerpt">{item.meta.excerpt}</p>
      </div>

      <button
        className="button"
        type="button"
        onClick={() => openModal(item)}
        aria-label={'Read more about ' + item.meta.title}
      >
        <i className="ri-2x ri-add-box-fill" />
      </button>
    </article>
  );
}

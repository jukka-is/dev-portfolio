export default function PortfolioItem({ item }) {
  return (
    <article className="item">

      <div className="content">
        <img className="image" src={item.meta.cover_image} alt={item.meta.title} />
        <p className="description">{item.meta.description}</p>
        <h3 className="heading-3">{item.meta.title}</h3>
        <ul className="tech-tags">
          {item.meta.techs.split(', ').map((tag, index) => (
            <li key={item.slug + '-' + tag} className="tech-tag">{tag}</li>
          ))}
        </ul>
        <p className="excerpt">{item.meta.excerpt}</p>
      </div>

      <div className="button">
        <i className="ri-2x ri-add-box-fill" />
      </div>
    </article>
  );
}

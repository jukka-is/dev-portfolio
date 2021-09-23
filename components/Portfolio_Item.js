export default function Portfolio_Item({ item }) {
  return (
    <div className="card">
      <img src={item.meta.cover_image} alt={item.meta.title} />
      <p className="description">{item.meta.description}</p>
      <h3>{item.meta.title}</h3>
      <p className="techs">{item.meta.techs}</p>
      <p className="excerpt">{item.meta.excerpt}</p>
    </div>
  );
}

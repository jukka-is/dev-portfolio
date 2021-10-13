export default function TechTags({ tags }) {
  return (
    <>
      {tags.map((tag) => (
        <li key={tag} className="tech-tag">
          {tag}
        </li>
      ))}
    </>
  );
}

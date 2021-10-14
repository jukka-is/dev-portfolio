import SingleTag from '../components/SingleTag';

export default function TagList({ tags, toggleTag }) {
  return (
    <>
      {tags.map((tag, index) => (
        <SingleTag
          key={'title-tag-' + index}
          tag={tag}
          type="button"
          toggleTag={toggleTag}
        />
      ))}
    </>
  );
}

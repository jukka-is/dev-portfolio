function SingleTag({ tag, type, toggleTag }) {
  const classNames = tag.isActive ? 'tech-tag active' : 'tech-tag';

  if (type === 'button') {
    return (
      <li>
        <button
          className={classNames}
          type="button"
          onClick={() => toggleTag(tag)}
        >
          {tag.name}
        </button>
      </li>
    );
  } else {
    return <li className={classNames}>{tag.name}</li>;
  }
}

export default SingleTag;

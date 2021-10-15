function metaListItem({ preTitle, data }) {
  return (
    <li>
      <span className="pretitle">{preTitle}</span>
      {preTitle === 'Url' ? (
        <a href={data}>
          <span className="data">{data.replace(/(^\w+:|^)\/\//, '')}</span>
        </a>
      ) : (
        <span className="data">{data}</span>
      )}
    </li>
  );
}

export default metaListItem;

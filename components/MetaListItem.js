function metaListItem({ preTitle, data, iconClasses }) {
  return (
    <li>
      <span className="pretitle">
        <i className={iconClasses}></i>
        {preTitle}
      </span>
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

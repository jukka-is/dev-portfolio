const Button = ({
  buttonType,
  buttonClass,
  buttonUrl,
  buttonTitle,
  onClick,
}) => {
  if (buttonType === 'icon-link') {
    return (
      <a href={buttonUrl} className={buttonType} title={buttonTitle}>
        <i className={buttonClass}></i>
      </a>
    );
  } else if (buttonType === 'icon-button') {
    return (
      <button
        type="button"
        className={buttonType}
        title={buttonTitle}
        onClick={onClick}
      >
        <i className={buttonClass}></i>
      </button>
    );
  } else {
    return <></>;
  }
};

export default Button;

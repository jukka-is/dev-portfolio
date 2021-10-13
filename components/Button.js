const Button = ({ buttonType, buttonClass, buttonUrl, buttonTitle }) => {
  if (buttonType === 'icon-link') {
    return (
      <a href={buttonUrl} className={buttonType} title={buttonTitle}>
        <i className={buttonClass}></i>
      </a>
    );
  } else {
    return <></>;
  }
};

export default Button;

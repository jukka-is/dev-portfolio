import Button from '../components/Button';

const Footer = ({ socialLinks }) => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          ©Jukka Isokoski 2021 | This Website does not utilize tracking cookies.
          You are Welcome!
        </p>
        <div className="icon-links">
          {socialLinks.map((socialLink) => (
            <Button
              key={'footer-link-' + socialLink.id}
              buttonType="icon-link"
              buttonClass={'ri-footer ' + socialLink.iconClasses}
              buttonUrl={socialLink.url}
              buttonTitle={socialLink.title}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

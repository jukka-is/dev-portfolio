import Button from '../components/Button';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          ©Jukka Isokoski 2021 | This Website does not utilize tracking cookies.
          You are Welcome!
        </p>
        <div className="icon-links">
          <Button
            buttonType="icon-link"
            buttonClass="ri-footer ri-github-fill"
            buttonUrl="https://github.com/aaxxiiss"
            buttonTitle="Github"
          />
          <Button
            buttonType="icon-link"
            buttonClass="ri-footer ri-twitter-fill"
            buttonUrl="https://twitter.com/jukkaisokoski"
            buttonTitle="Twitter"
          />
          <Button
            buttonType="icon-link"
            buttonClass="ri-footer ri-mail-line"
            buttonUrl="mailto:mail@jukkaisokoski.fi"
            buttonTitle="email"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

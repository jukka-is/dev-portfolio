import marked from 'marked';
import Button from '../components/Button';
import SingleTag from '../components/SingleTag';

const Info = ({ item, socialLinks }) => {
  return (
    <>
      <div className="two-line-divider" />
      <article className="about">
        <h2>About me</h2>
        <p>
          {`I'm a web developer based in Helsinki, Finland. I have most
          experience in developing applications with WordPress framework. This
          includes designing and developing custom themes for portfolio or
          publication sites, integrating them to external services via APIs and
          building full-scale eCommerce sites with WooCommerce.`}
        </p>
        <p>
          {`Problem-solving and learning something new every day are drivers that
          keep me motivated. For example, recently I have had the opportunity to work on
          projects that require special attention for accessibility. This has had an impact
          on the way I think about web design in any project from now on. Through my
          personal projects, I have found the joy of experimenting and learning new skillsets
          that I can implement in future client works as well.`}
        </p>
        <p>
          {`If you'd like to co-operate in future projects, please don't hesitate
          to contact me:`}
        </p>
        <div className="icon-links">
          {socialLinks.map(socialLink => (
            <Button
              key={'info-link-' + socialLink.id}
              buttonType="icon-link"
              buttonClass={'ri-xl ' + socialLink.iconClasses}
              buttonUrl={socialLink.url}
              buttonTitle={socialLink.title}
            />
          ))}
        </div>
      </article>
      <article className="ps">
        <div className="h2-wrapper">
          <h2>PS.</h2>
        </div>
        <div className="content">
          <div
            className="text"
            dangerouslySetInnerHTML={{
              __html: marked(item.content)
            }}
          ></div>
          <ul className="tech-tags">
            {item.techs.map((tag, index) => (
              <SingleTag key={item.slug + '-tag-' + index} tag={tag} />
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

export default Info;

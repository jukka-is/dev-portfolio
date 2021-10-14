import Button from '../components/Button';
import SingleTag from '../components/SingleTag';

const Info = ({ item }) => {
  return (
    <>
      <div className="two-line-divider" />
      <article className="about">
        <h2>About me</h2>
        <p>
          Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est
          non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
          nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam
          quis risus eget urna mollis ornare vel eu leo.
        </p>
        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui.
          Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus sagittis
          lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est
          non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
          nec elit.
        </p>
        <div className="icon-links">
          <Button
            buttonType="icon-link"
            buttonClass="ri-xl ri-github-fill"
            buttonUrl="https://github.com/aaxxiiss"
            buttonTitle="Github"
          />
          <Button
            buttonType="icon-link"
            buttonClass="ri-xl ri-twitter-fill"
            buttonUrl="https://twitter.com/jukkaisokoski"
            buttonTitle="Twitter"
          />
          <Button
            buttonType="icon-link"
            buttonClass="ri-xl ri-mail-line"
            buttonUrl="mailto:mail@jukkaisokoski.fi"
            buttonTitle="email"
          />
        </div>
      </article>
      <article className="ps">
        <div className="h2-wrapper">
          <h2>PS.</h2>
        </div>
        <div className="content">
          <p>{item.meta.excerpt}</p>
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

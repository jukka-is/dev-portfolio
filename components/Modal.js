import marked from 'marked';
import Button from '../components/Button';
import MetaListItem from '../components/MetaListItem';

function Modal({ modalState, closeModal }) {
  if (modalState.isActive) {
    return (
      <div className="modal active" id="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="close-modal">
            <Button
              buttonType="icon-button"
              buttonClass="close-modal ri-2x ri-checkbox-indeterminate-fill"
              buttonTitle="close modal"
              onClick={closeModal}
            />
          </div>
          <div className="portfolio-item">
            <div className="title-section">
              <p className="description">{modalState.item.meta.description}</p>
              <h2>{modalState.item.meta.title}</h2>

              <ul className="meta">
                {modalState.item.meta.client_name && (
                  <MetaListItem
                    key="meta-client"
                    preTitle="Client"
                    data={modalState.item.meta.client_name}
                  />
                )}
                {modalState.item.meta.techs && (
                  <MetaListItem
                    key="meta-keywords"
                    preTitle="Keywords"
                    data={modalState.item.meta.techs}
                  />
                )}
                {modalState.item.meta.url && (
                  <MetaListItem
                    key="meta-url"
                    preTitle="Url"
                    data={modalState.item.meta.url}
                  />
                )}
              </ul>
            </div>

            <div className="main-content">
              <img
                src={modalState.item.meta.cover_image}
                alt=""
                className="image"
              />

              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: marked(modalState.item.content),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="modal closed" id="modal"></div>;
  }
}

export default Modal;

import Button from '../components/Button';

function Modal({ modalState, closeModal }) {
  if (modalState.isActive) {
    return (
      <div className="modal active" id="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <Button
            buttonType="icon-button"
            buttonClass="ri-2x ri-checkbox-indeterminate-fill"
            buttonTitle="close modal"
            onClick={closeModal}
          />
          <h2>{modalState.item.meta.title}</h2>
        </div>
      </div>
    );
  } else {
    return <div className="modal closed" id="modal"></div>;
  }
}

export default Modal;

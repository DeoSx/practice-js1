window.D = {};

const D = window.D;

function _createModal() {
  const modalOverlay = document.querySelector('.overlay');
  modalOverlay.setAttribute('data-modal', 'close');
  modalOverlay.insertAdjacentHTML('afterbegin', '<div class="dModal"></div>');

  const dModal = modalOverlay.querySelector('.dModal');

  return {
    modalOverlay,
    dModal
  };
}

function _actionsModal(e) {
  const eAttr = e.target.dataset.modal;
  switch (eAttr) {
    case 'close':
      D.modal.destroy();
      break;
    default:
      break;
  }
}

function addListenerToElement(elem, listener) {
  elem.classList.add('active');
  elem.addEventListener('click', listener);
}

D.modal = {
  alert(text = 'ARE YOU DUMB??') {
    const { modalOverlay, dModal } = _createModal();

    dModal.insertAdjacentHTML(
      'afterbegin',
      `<h5>${text}</h5> <button data-modal="close" class="button-danger">YES</button>`
    );

    addListenerToElement(modalOverlay, _actionsModal);
  },
  onSubmit(arrPlaces) {
    const { modalOverlay, dModal } = _createModal();
    const sits = arrPlaces.concat();

    dModal.insertAdjacentHTML(
      'afterbegin',
      `<h6>YOUR SITS. Look</h6> <p>${sits.join(
        ', '
      )}</p> <button data-modal="close" class="button-primary">OK</button>`
    );
    console.log(sits);
    addListenerToElement(modalOverlay, _actionsModal);
  },
  destroy() {
    const modal = document.querySelector('.dModal');
    const modalOverlay = document.querySelector('.overlay');
    modal.remove();
    modalOverlay.classList.remove('active');
    modalOverlay.removeEventListener('click', _actionsModal);
  }
};

export default D.modal;

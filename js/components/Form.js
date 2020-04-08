import modal from '../modules/Modal.js';

const Form = () => {
  const form = document.getElementById('form');

  const submitHandler = e => {
    e.preventDefault();
    const items = form.querySelectorAll('.choosed');
    const itemsValue = [];
    items.forEach(item => {
      itemsValue.push(item.textContent);
    });
    setTimeout(() => {
      if (itemsValue.length < 1) {
        modal.alert('ARE STUPID??? CHOOSE THE PLACE!!! NIGGER!');
      } else {
        modal.onSubmit(itemsValue);
      }
    }, 500);
  };

  form.addEventListener('submit', submitHandler);
};

export { Form };

import modal from '../modules/Modal.js';

function Sits(element) {
  const sits = document.querySelector(element);
  const totalSits = document.querySelector('.place--total');
  let count = 0;

  function render(items) {
    sits.innerHTML = null;
    count = 0;
    totalSits.textContent = count;
    items.forEach(item => {
      sits.innerHTML += `<li class="sit ${item.status}" data-number="${item.number}">${item.number}</li>`;
    });
    listener();
  }

  function listener() {
    const sitItem = [...sits.querySelectorAll('.sit')];
    sitItem.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target.classList.contains('reserved')) {
          return;
        } else if (e.target.classList.contains('choosed')) {
          item.classList.remove('choosed');
          count--;
          totalSits.textContent = count;
        } else {
          item.classList.add('choosed');
          count++;
          totalSits.textContent = count;
          if (count > 5) {
            count--;
            item.classList.remove('choosed');
            modal.alert();
            totalSits.textContent = count;
          }
        }
      });
    });
  }

  return Object.freeze({
    render,
    listener
  });
}

export { Sits };

import { Select } from './modules/Select.js';
import { Sits } from './components/Sits.js';
import { Form } from './components/Form.js';

import {
  dataMovies,
  terminatorSits,
  supermanSits,
  badmanSits
} from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const select = new Select('.select', dataMovies);
  select.init();

  const sits = new Sits('.sits');
  sits.render(terminatorSits);

  Form();

  const targetToWatch = document.querySelector('.select__title');

  const callbackOnChange = mutations => {
    for (let mutation of mutations) {
      if (mutation.type === 'attributes') {
        const movieName = mutation.target.dataset.name;
        switch (movieName) {
          case 'Terminator':
            sits.render(terminatorSits);
            break;
          case 'Superman':
            sits.render(supermanSits);
            break;
          case 'Badman':
            sits.render(badmanSits);
            break;
          default:
            break;
        }
      }
    }
  };
  const observer = new MutationObserver(callbackOnChange);
  observer.observe(targetToWatch, {
    attributes: true
  });
});

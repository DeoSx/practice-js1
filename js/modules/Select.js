class Select {
  constructor(element, items) {
    this.select = document.querySelector(element);
    this.items = items;
  }

  init() {
    this.select.querySelector('.select__title').addEventListener('click', e => {
      this.selectShow();
    });
    this.renderItems();
  }

  renderItems() {
    const ul = this.select.querySelector('.select__items');
    this.items.map(i => {
      ul.insertAdjacentHTML(
        'afterbegin',
        `<li class="select__item" data-value="${i.id}">${i.title}</li>`
      );
    });

    const movies = ul.querySelectorAll('.select__item');
    movies.forEach(movie => {
      movie.addEventListener('click', e => {
        this.changeTitle(e.target.textContent, e.target.dataset.value);
        this.selectHide();
      });
    });
  }

  changeTitle(text, dataValue) {
    const title = this.select.querySelector('.select__title');
    const input = this.select.querySelector('input');
    input.value = dataValue;
    title.textContent = text;
    title.dataset.name = text;
  }

  selectShow() {
    this.select.querySelector('.select__items').classList.add('active');
  }
  selectHide() {
    this.select.querySelector('.select__items').classList.remove('active');
  }
}

export { Select };

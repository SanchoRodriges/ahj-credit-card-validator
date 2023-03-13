import Validator from './validator'
import Systems from './systems'

export default class Form {
  constructor() {
    this.form = document.querySelector('.validate-form');
    this.input = this.form.querySelector('[type="text"]');
    this.paySystems = document.querySelectorAll('.system');
    this.info = document.querySelector('.valid_info');
    
    this.form.addEventListener("submit", this.formSubmit);
  }

  formSubmit = (e) => {
    e.preventDefault();

    if (this.input.value === '') {
      this.info.textContent = 'Введите номер карты';
      return;
    }
    const valid = Validator.check(this.input.value);
    if (!valid) {
      this.info.textContent = 'Некорректный номер карты';
      return;
    }
    this.info.textContent = 'Корректный номер карты';
    this.activeSystem(Systems.check(this.input.value));
  }

  activeSystem(system) {
    let active;

    this.paySystems.forEach(e => {

      if (e.classList.contains('active')) {
        e.classList.remove('active')
      }

      if (e.classList.contains(system)) {
        active = e;
      }

    })

    active.classList.add('active');

  }

}
  
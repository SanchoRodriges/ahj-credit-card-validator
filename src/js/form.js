import Validator from "./validator";
import Systems from "./systems";

export default class Form {
  constructor() {
    this.form = document.querySelector(".validate-form");
    this.input = this.form.querySelector('.card-number');
    this.paySystems = document.querySelectorAll(".system");
    this.info = document.querySelector(".valid_info");
    this.form.addEventListener("submit", this.formSubmit);
  }

  formSubmit = (e) => {
    e.preventDefault();

    if (this.input.value === "") {
      this.info.textContent = "Введите номер карты";
      return;
    }
    const valid = Validator.check(this.input.value);
    if (!valid) {
      this.info.textContent = "Некорректный номер карты";
      return;
    }
    this.info.textContent = "Корректный номер карты";
    const system = Systems.check(this.input.value)
    this.activeSystem(Systems.check(this.input.value));
    console.log(system);
  }

  activeSystem(system) {
    let active;
    
    this.paySystems.forEach((e) => {

      // console.log(e);
      // console.log(e.classList.contains(system));
      if (e.classList.contains("active")) {
        e.classList.remove("active");
      }
      
      if (e.classList.contains(system)) {
        active = e;
      }
    });

    if (active) {
      active.classList.add("active");
    }
    
  }
}

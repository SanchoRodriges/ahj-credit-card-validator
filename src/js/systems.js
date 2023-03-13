export default class PaySystems {
  static check(number) {
    this.systemsFind = {
      mir: /^2/,
      visa: /^4/,
      mastercard: /^52/,
      jcb: /^35/,
      maestro: /^50/,
    };

    for (let key in this.systemsFind) {
      let value = this.systemsFind[key];
      if (value.test(number)) {
        return key;
      }
    }
  }
}

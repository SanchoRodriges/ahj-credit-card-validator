export default class PaySystems {
  static check(number) {
    const systemsFind = {
      mir: [/^22/],
      visa: [/^45/, /^47/],
      mastercard: [/^51/, /^27/, /^54/],
      jcb: [/^35/],
      maestro: [/^50/, /^67/],
    };

    for (let key in systemsFind) {
      let value = systemsFind[key];

      for (let i = 0; i < value.length; i++) {
        if (value[i].test(number)) {
          return key;
        }
      }
    }
  }
}

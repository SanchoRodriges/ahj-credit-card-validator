import Validator from "../validator";

test("Корректный номер карты", () => {
  const check = Validator.check("343273333412160");
  expect(check).toBe(true);
});

test("Некорректный номер карты", () => {
  const check = Validator.check("343273333412161");
  expect(check).toBe(false);
});

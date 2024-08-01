const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require("./app");


test("5 Euros a Dolares es 5.35", () => {
    expect(fromEuroToDollar(5)).toBe(5.35);
});

test("5 Dolares a Yenes es 731.31", () => {
    expect(fromDollarToYen(5)).toBe(731.31);
});

test("5 Yenes japoneses a Libras es 0.03", () => {
    expect(fromYenToPound(5)).toBe(0.03);
});
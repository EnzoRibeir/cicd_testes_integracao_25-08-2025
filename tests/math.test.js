const  math = require('../math');
test ('soma 2 + 3 igual a 5', () => {
    expect(math.add(2,3)).toBe(5);
});

test ('subtrai 3 - 1 igual a 2', () => {
    expect(math.subtract(3,1)).toBe(2);
});

test ('multiplica 2 * 3 igual a 6', () => {
    expect(math.multiply(2,3)).toBe(6);
});

test ('divide 6 / 2 igual a 3', () => {
    expect(math.divide(6,2)).toBe(3);
});

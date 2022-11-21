const { getPercents, getMonth, createAdder } = require('./index')

test('task-2', () => {
    expect(getPercents(30, 200)).toBe(60);
});

test('task-5', () => {
    expect(getMonth(3)).toBe("март");
});

test('task-4', () => {
    const add5 = createAdder(5);
    expect(createAdder(add5(5))).toBe(10);
});



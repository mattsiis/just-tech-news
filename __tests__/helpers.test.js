const {format_date, format_plural} = require('../utils/helper')


test('format_date() returns a date string', () => {
    const date = new Date('2020-03-29 14:52:41');

    expect(format_date(date)).toBe('3/29/2020');
})

test('format_plural() return plural', () => {
    const word_1 = "tiger";
    const word_2 = "lion";

    expect(format_plural(word_1, 2)).toBe('tigers');
    expect(format_plural(word_2, 1)).toBe('lion');
})
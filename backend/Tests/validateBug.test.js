const validateBug = require('../utils/validateBug');

Test('returns false if title is empty', () => {
    expect(validateBug({ title: '' })).toBe(false);
});

Test('returns true if title is provided', () => {
    expect(validateBug({ title: 'Crash on login' })).toBe(true);
});
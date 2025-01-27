const { isPalindrome, isAnagram } = require('./string_operations');

// Тести для функції isPalindrome
test('isPalindrome should return true for a palindrome string', () => {
    expect(isPalindrome('radar')).toBe(true);
});

test('isPalindrome should return true for a palindrome string with spaces and capitalization', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
});

test('isPalindrome should return false for a non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
});

// Тести для функції isAnagram
test('isAnagram should return true for anagram strings', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
});

test('isAnagram should return true for anagram strings with spaces and capitalization', () => {
    expect(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')).toBe(true);
});

test('isAnagram should return false for non-anagram strings', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
});

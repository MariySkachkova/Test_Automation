// Функція, що перевіряє, чи є текст паліндромом
function isPalindrome(text) {
    // Видаляємо всі символи, які не є літерами
    const alphanumeric = text.toLowerCase().replace(/[^a-z]/g, '');
    // Перевертаємо текст
    const reversed = alphanumeric.split('').reverse().join('');
    // Перевіряємо, чи співпадають текст та його перевернута версія
    return alphanumeric === reversed;
}

// Функція, що перевіряє, чи є тексти анаграмами
function isAnagram(text1, text2) {
    // Видаляємо всі символи, які не є літерами та перетворюємо на нижній регістр
    const formattedText1 = text1.toLowerCase().replace(/[^a-z]/g, '');
    const formattedText2 = text2.toLowerCase().replace(/[^a-z]/g, '');
    // Сортуємо літери у кожному тексті
    const sortedText1 = formattedText1.split('').sort().join('');
    const sortedText2 = formattedText2.split('').sort().join('');
    // Перевіряємо, чи однакові відсортовані версії текстів
    return sortedText1 === sortedText2;
}

module.exports = { isPalindrome, isAnagram };

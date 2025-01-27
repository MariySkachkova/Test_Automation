// Функція, яка перевіряє, чи містить масив вказаний об’єкт
function arrayContainsObject(array, object) {
    return array.some(item => JSON.stringify(item) === JSON.stringify(object));
}

// Функція, яка перевіряє, чи містить текстовий фрагмент вказане слово
function textContainsWord(text, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    return regex.test(text);
}

// Функція, яка перевіряє, чи містить об’єкт, який повертає функція, вказане поле
function objectReturnedByFunctionHasField(func, field) {
    const obj = func();
    return Object.prototype.hasOwnProperty.call(obj, field);
}

// Функція, яка приймає масив та зворотній виклик і виконує цей зворотній виклик над елементами масиву
function applyCallbackToArray(array, callback) {
    array.forEach(callback);
}

// Функція, яка приймає текстовий рядок і зворотній виклик, перетворює фразу на масив слів та передає його у зворотній виклик
function phraseToArrayAndApplyCallback(phrase, callback) {
    const words = phrase.split(' ');
    callback(words);
}

// Об’єкт, який містить поле імені та поле прізвища, доданий метод introduce
const person = {
    firstName: 'Firstname',
    lastName: 'Lastname',
    introduce() {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
};

module.exports = {
    arrayContainsObject,
    textContainsWord,
    objectReturnedByFunctionHasField,
    applyCallbackToArray,
    phraseToArrayAndApplyCallback,
    person
};

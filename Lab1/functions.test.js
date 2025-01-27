const {
    arrayContainsObject,
    textContainsWord,
    objectReturnedByFunctionHasField,
    applyCallbackToArray,
    phraseToArrayAndApplyCallback,
    person
} = require('./functions');

test('arrayContainsObject should return true if array contains the specified object', () => {
    const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    const object = { id: 1, name: 'John' };
    expect(arrayContainsObject(array, object)).toBe(true);
});

test('arrayContainsObject should return false if array does not contain the specified object', () => {
    const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    const object = { id: 3, name: 'Alice' };
    expect(arrayContainsObject(array, object)).toBe(false);
});

test('textContainsWord should return true if text contains the specified word', () => {
    const text = 'Hello world, welcome to the universe.';
    const word = 'welcome';
    expect(textContainsWord(text, word)).toBe(true);
});

test('textContainsWord should return false if text does not contain the specified word', () => {
    const text = 'Hello world, welcome to the universe.';
    const word = 'goodbye';
    expect(textContainsWord(text, word)).toBe(false);
});

test('objectReturnedByFunctionHasField should return true if object returned by function has the specified field', () => {
    const func = () => ({ id: 1, name: 'John' });
    const field = 'name';
    expect(objectReturnedByFunctionHasField(func, field)).toBe(true);
});

test('objectReturnedByFunctionHasField should return false if object returned by function does not have the specified field', () => {
    const func = () => ({ id: 1, age: 30 });
    const field = 'name';
    expect(objectReturnedByFunctionHasField(func, field)).toBe(false);
});

test('applyCallbackToArray should call the callback function for each element in the array', () => {
    const array = [1, 2, 3, 4, 5];
    const callback = jest.fn();
    applyCallbackToArray(array, callback);
    expect(callback).toHaveBeenCalledTimes(array.length);
});

test('phraseToArrayAndApplyCallback should call the callback function with an array of words from the phrase', () => {
    const phrase = 'Hello world, welcome to the universe.';
    const callback = jest.fn();
    phraseToArrayAndApplyCallback(phrase, callback);
    expect(callback).toHaveBeenCalledWith(['Hello', 'world,', 'welcome', 'to', 'the', 'universe.']);
});

test('introduce method should be called once', () => {
    const spy = jest.spyOn(console, 'log');
    person.introduce();
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
});

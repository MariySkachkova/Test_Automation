const { function1 } = require('./task1');

test("Checking the result of calling function2 with arguments Name and Lastname", () => {
    const mockFunction2 = jest.fn();
    function1(mockFunction2, "John", "Doe");
    expect(mockFunction2).toHaveBeenCalledWith("John", "Doe");
});
